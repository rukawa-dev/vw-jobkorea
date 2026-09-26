const { chromium } = require('playwright-core');
const assert = require('node:assert/strict');
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:5173';
(async () => {
  const { exportDesigns } = await import('../src/recruitments.js');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage();
    for (const { storageKey, route, imagePath } of exportDesigns) {
      const key = storageKey.replaceAll('/', '-');
      for (const width of [360, 390, 720]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(`${base}/#/${route}`);
        await page.locator('main.recruitment').waitFor();
        await page.evaluate(() => document.fonts.ready);
        const result = await page.evaluate(() => {
          const main = document.querySelector('main.recruitment');
          const body = main.querySelector('.work-item p,.p-work-grid article>p:last-child');
          return {
            body: parseFloat(getComputedStyle(body).fontSize),
            overflow: [...main.querySelectorAll('*')].filter(e => e.clientWidth > 0 && e.scrollWidth > e.clientWidth + 2 && !e.matches('svg,*:has(svg)')).map(e => e.className),
          };
        });
        assert(result.body >= 15.9, `${key} at ${width}: body too small`);
        assert.deepEqual(result.overflow, [], `${key} at ${width}: overflow`);
      }
      const imagePage = await browser.newPage({ viewport: { width: 360, height: 900 } });
      await imagePage.setContent(`<style>body{margin:0}img{width:360px;display:block}</style><img src="${base}/${imagePath}">`);
      await imagePage.locator('img').evaluate(i => i.decode());
      await imagePage.screenshot({ path: `artifacts/common-${key}-mobile.png`, fullPage: true });
      await imagePage.close();
    }
    console.log('PASS: registered designs at 360/390/720, readable body sizes, no overflow, exported image screenshots');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
