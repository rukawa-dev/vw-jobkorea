import assert from 'node:assert/strict';
import { preview } from 'vite';
import { chromium } from 'playwright-core';

// Run after building with VITE_BASE_PATH=/vw-jobkorea/ and the public Pages URL.
const server = await preview({ base: '/vw-jobkorea/', preview: { host: '127.0.0.1', port: 4188, strictPort: true } });
let browser;
try {
  browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  const failures = [];
  page.on('pageerror', error => failures.push(error.message));
  page.on('response', response => { if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`); });
  for (const route of ['', 'editorial', 'poster', 'studio']) {
    await page.goto(`http://127.0.0.1:4188/vw-jobkorea/#/${route}`);
    await page.locator('main').waitFor();
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(image => image.decode()));
    });
    assert(await page.evaluate(() => [...document.images].every(image => new URL(image.src).pathname.startsWith('/vw-jobkorea/'))));
    await page.reload();
    await page.getByRole('heading', { level: 1 }).waitFor();
  }
  await page.getByRole('button', { name: '채용공고 HTML 코드', exact: true }).click();
  const expected = 'https://rukawa-dev.github.io/vw-jobkorea/downloads/VW-C-3x.png';
  assert.equal(await page.getByLabel('PC 공개 이미지 주소', { exact: true }).inputValue(), expected);
  assert((await page.getByLabel('붙여 넣을 HTML').inputValue()).includes(expected));
  assert.equal((await page.request.get('http://127.0.0.1:4188/vw-jobkorea/downloads/VW-C-3x.png')).status(), 200);
  assert.deepEqual(failures, []);
  console.log('GitHub Pages subpath: all pages, reload, images, fonts and public HTML image URL PASS');
} finally {
  await browser?.close();
  await new Promise(resolve => server.httpServer.close(resolve));
}
