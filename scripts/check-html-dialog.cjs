const { chromium } = require('playwright-core');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({channel:'msedge',headless:true});
 try {
  const context = await browser.newContext({permissions:['clipboard-read','clipboard-write']});
  const page = await context.newPage({viewport:{width:1280,height:900}});
  const image = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="10" height="10" fill="red"/></svg>';
  await page.route('https://rukawa-dev.github.io/**',route=>route.fulfill({contentType:'image/svg+xml',body:image}));
  await page.route('https://example.com/**',route=>route.fulfill({contentType:'image/svg+xml',body:image}));
  await page.goto('http://127.0.0.1:5173/#/designer');
  for(const letter of ['A','B','C']) {
   const trigger=page.getByRole('button',{name:`${letter}안 채용공고 HTML 코드`});
   await trigger.click();
   await page.getByRole('status').filter({hasText:'공고 이미지가 준비되었습니다.'}).waitFor();
   assert(!(await page.getByLabel('공개 이미지 주소',{exact:true}).isVisible()));
   const copy=page.getByRole('button',{name:'HTML 코드 복사'});
   assert(await copy.isEnabled());
   await page.locator('summary').click();
   await page.getByLabel('공개 이미지 주소',{exact:true}).fill('http://192.168.0.47:4173/test.png');
   assert(await copy.isDisabled());
   await page.getByLabel('공개 이미지 주소',{exact:true}).fill('javascript:alert(1)');
   assert(await copy.isDisabled());
   await page.getByLabel('공개 이미지 주소',{exact:true}).fill(`https://example.com/${letter}.png?v=2&lang=ko`);
   await page.getByRole('status').filter({hasText:'공고 이미지가 준비되었습니다.'}).waitFor();
   const code=await page.getByLabel('붙여 넣을 HTML').inputValue();
   assert(code.includes('&amp;lang=ko'));
   assert.equal(await page.getByRole('link',{name:'이미지 보기'}).getAttribute('href'),`https://example.com/${letter}.png?v=2&lang=ko`);
   await copy.click();
   await page.getByRole('status').filter({hasText:'복사했습니다.'}).waitFor();
   assert.equal((await page.evaluate(()=>navigator.clipboard.readText())).replace(/\r\n/g,'\n'),code);
   await page.keyboard.press('Escape');
   assert(await trigger.evaluate(el=>el===document.activeElement));
  }
  await page.getByRole('button',{name:'B안 채용공고 HTML 코드'}).click();
  await page.getByRole('status').filter({hasText:'공고 이미지가 준비되었습니다.'}).waitFor();
  await page.screenshot({path:'artifacts/html-dialog-desktop.png'});
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:'artifacts/html-dialog-mobile.png'});
  const bounds=await page.getByRole('dialog').boundingBox();
  assert(bounds.y>=0 && bounds.y+bounds.height<=844);
  await page.locator('summary').click();
  await page.route('https://example.com/missing.png',route=>route.fulfill({status:404,body:'not found'}));
  await page.getByLabel('공개 이미지 주소',{exact:true}).fill('https://example.com/missing.png');
  await page.getByRole('status').filter({hasText:'이미지를 불러오지 못했습니다.'}).waitFor();
  assert(await page.getByRole('button',{name:'HTML 코드 복사'}).isDisabled());
  await page.unroute('https://example.com/missing.png');
  await page.getByRole('button',{name:'다시 확인'}).click();
  await page.getByRole('status').filter({hasText:'공고 이미지가 준비되었습니다.'}).waitFor();
  await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{value:undefined,configurable:true}));
  await page.getByRole('button',{name:'HTML 코드 복사'}).click();
  await page.getByRole('status').filter({hasText:'복사했습니다.'}).waitFor();
  await page.keyboard.press('Escape');
  console.log('PASS: default ready, collapsed URL, custom link, invalid URL, image failure/retry, clipboard/fallback, focus and mobile fit');
 } finally {await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});

