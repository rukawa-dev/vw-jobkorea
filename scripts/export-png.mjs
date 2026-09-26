import { chromium } from 'playwright-core';
import { createServer } from 'vite';
import { mkdir, writeFile } from 'node:fs/promises';

// Export one 720px artwork at 2x for desktop and mobile.
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
  const page = await browser.newPage({ viewport: { width: 1000, height: 1000 }, deviceScaleFactor: 2 });
  await mkdir('public/downloads', { recursive: true });
  for (const [letter, route] of [['A', 'editorial'], ['B', 'poster'], ['C', 'studio'], ['PM-A', 'planner/editorial'], ['PM-B', 'planner/poster'], ['PM-C', 'planner/studio']]) {
    const exportWidth = 720;
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
    // Keep the published URL stable; the historical 3x suffix is retained at 2x output.
    const output = `public/downloads/VW-${letter}-3x.png`;
    if (box.x !== 0 || box.y !== 0 || box.width !== exportWidth) {
      throw new Error(`Unexpected export bounds for ${output}: ${JSON.stringify(box)}`);
    }
    // Tile long artwork to avoid Chromium's large-screenshot texture limit.
    const height = Math.ceil(box.height);
    const tiles = [];
    for (let y = 0; y < height; y += 2000) {
      const tile = await page.screenshot({ fullPage: true, clip: { x: 0, y, width: exportWidth, height: Math.min(2000, height - y) }, scale: 'device', timeout: 60000 });
      tiles.push({ y: y * 2, data: tile.toString('base64') });
    }
    const compositor = await browser.newPage();
    const data = await compositor.evaluate(async ({ tiles, width, height }) => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      for (const tile of tiles) {
        const img = new Image();
        img.src = 'data:image/png;base64,' + tile.data;
        await img.decode();
        context.drawImage(img, 0, tile.y);
      }
      return canvas.toDataURL('image/png').split(',')[1];
    }, { tiles, width: exportWidth * 2, height: height * 2 });
    await compositor.close();
    const png = Buffer.from(data, 'base64');
    await writeFile(output, png);
    if (png.readUInt32BE(16) !== exportWidth * 2) {
      throw new Error(`Unexpected PNG width for ${output}`);
    }
    {
      await page.screenshot({ path: `public/downloads/VW-${letter}-preview.png`, clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 1080) }, scale: 'css' });
    }
    console.log(`${output}: ${Math.round(box.width * 2)} × ${Math.round(box.height * 2)} px`);
  }
} finally {
  await browser?.close();
  await server.close();
}
