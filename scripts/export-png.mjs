import { chromium } from 'playwright-core';
import { createServer } from 'vite';
import { mkdir } from 'node:fs/promises';

// Export desktop and the responsive 390 CSS-pixel mobile layout at 3x.
const server = await createServer({ base: '/', server: { host: '127.0.0.1', port: 0, open: false } });
let browser;
try {
  await server.listen();
  const address = server.httpServer.address();
  browser = await chromium.launch({
    headless: true,
    ...(process.env.PNG_BROWSER_PATH
      ? { executablePath: process.env.PNG_BROWSER_PATH }
      : { channel: process.env.PNG_BROWSER_CHANNEL || 'msedge' }),
  });
  const page = await browser.newPage({ viewport: { width: 1000, height: 1000 }, deviceScaleFactor: 3 });
  await mkdir('public/downloads', { recursive: true });
  for (const [letter, route] of [['A', 'editorial'], ['B', 'poster'], ['C', 'studio'], ['PM-A', 'planner/editorial'], ['PM-B', 'planner/poster'], ['PM-C', 'planner/studio']]) {
    for (const mobile of [false, true]) {
    const exportWidth = mobile ? 390 : 860;
    await page.setViewportSize({ width: exportWidth, height: 1000 });
    await page.goto(`http://127.0.0.1:${address.port}/#/${route}`);
    await page.locator('main.recruitment').waitFor();
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.querySelectorAll('main img')].map(img => img.decode()));
    });
    // Anchor the artwork to integer coordinates. Centering beside a scrollbar can
    // put it on a half pixel, causing screenshots to include the outside background.
    await page.addStyleTag({ content: `
      .design-nav,.page-end,.skip-link{display:none!important}
      *{animation:none!important;transition:none!important}
      html{scrollbar-width:none}
      body{margin:0!important}
      main.recruitment{width:${exportWidth}px!important;max-width:none!important;margin:0!important}
    ` });
    const main = page.locator('main.recruitment');
    const box = await main.boundingBox();
    const output = `public/downloads/VW-${letter}${mobile ? '-MO' : ''}-3x.png`;
    if (box.x !== 0 || box.y !== 0 || box.width !== exportWidth) {
      throw new Error(`Unexpected export bounds for ${output}: ${JSON.stringify(box)}`);
    }
    const png = await main.screenshot({ path: output, scale: 'device', timeout: 60000 });
    if (png.readUInt32BE(16) !== exportWidth * 3) {
      throw new Error(`Unexpected PNG width for ${output}`);
    }
    {
      await page.screenshot({ path: `public/downloads/VW-${letter}${mobile ? '-MO' : ''}-preview.png`, clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 1080) }, scale: 'css' });
    }
    console.log(`${output}: ${Math.round(box.width * 3)} × ${Math.round(box.height * 3)} px`);
    }
  }
} finally {
  await browser?.close();
  await server.close();
}
