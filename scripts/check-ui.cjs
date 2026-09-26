const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright-core');
const fs = require('node:fs');
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:5173';
(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  fs.mkdirSync('artifacts', { recursive: true });
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ['', 'designer', 'editorial', 'poster', 'planner']) {
      await page.goto(`${base}/#/${route}`);
      await page.evaluate(() => document.fonts.ready);
      await page.locator('main').waitFor();
      await page.evaluate(async () => { await Promise.all([...document.images].map(image => image.decode())); });
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
  await page.goto(`${base}/#/designer`);
  await page.getByRole('link', { name: 'A안 둘러보기 ↗' }).click();
  await page.waitForURL('**/#/recruitments/2026-09-10-designer/editorial');
  await page.getByRole('link', { name: 'B. 타이포 포스터', exact: true }).click();
  await page.waitForURL('**/#/recruitments/2026-09-10-designer/poster');
  await page.goBack();
  await page.waitForURL('**/#/recruitments/2026-09-10-designer/editorial');
  await page.reload();
  await page.getByRole('heading', { level: 1 }).waitFor();
  await page.getByRole('link', { name: '← 전체 시안', exact: true }).click();
  await page.getByRole('button', { name: 'A안 채용공고 HTML 코드' }).click();
  await page.getByRole('dialog').waitFor();
  await page.locator('summary').click();
  await page.getByLabel('공통 공개 이미지 주소', { exact: true }).fill('https://example.com/VW-A.png');
  const html = await page.getByLabel('붙여 넣을 HTML').inputValue();
  if (!html.includes('href="https://www.v-w.co.kr/"') || !html.includes('src="https://example.com/VW-A.png"')) errors.push('HTML export incorrect');
  await page.keyboard.press('Escape');
  if (await page.getByRole('dialog').count()) errors.push('Dialog did not close');
  await browser.close();
  if (errors.length) { console.error(errors); process.exitCode = 1; }
})();





