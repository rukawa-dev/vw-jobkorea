const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const fs = require('node:fs');
(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  fs.mkdirSync('artifacts', { recursive: true });
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ['', 'editorial', 'poster', 'studio']) {
      await page.goto(`http://127.0.0.1:5173/#/${route}`);
      await page.evaluate(() => document.fonts.ready);
      await page.locator('main').waitFor();
      const result = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        brokenImages: [...document.images].filter(i => !i.complete || !i.naturalWidth).map(i => i.src),
        heading: document.querySelector('h1')?.textContent,
      }));
      if (result.overflow || result.brokenImages.length || !result.heading) errors.push(JSON.stringify({ width, route, ...result }));
      if (width !== 320) await page.screenshot({ path: `artifacts/${route || 'gallery'}-${width}.png`, fullPage: true });
      console.log(width, route || 'gallery', JSON.stringify(result));
    }
  }
  await page.goto('http://127.0.0.1:5173/');
  await page.getByRole('link', { name: 'A안 둘러보기 ↗' }).click();
  await page.waitForURL('**/#/editorial');
  await page.getByRole('link', { name: 'B. 타이포 포스터', exact: true }).click();
  await page.waitForURL('**/#/poster');
  await page.goBack();
  await page.waitForURL('**/#/editorial');
  await page.reload();
  await page.getByRole('heading', { level: 1 }).waitFor();
  await page.getByRole('link', { name: '← 전체 시안', exact: true }).click();
  const download = page.waitForEvent('download');
  await page.getByRole('link', { name: 'A안 고해상도 PNG 다운로드' }).click();
  if (!(await download).suggestedFilename().endsWith('.png')) errors.push('Download failed');
  await browser.close();
  if (errors.length) { console.error(errors); process.exitCode = 1; }
})();




