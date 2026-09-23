const { chromium } = require('playwright-core');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({channel:'msedge',headless:true});
 try {
  const context = await browser.newContext({permissions:['clipboard-read','clipboard-write']});
  const page = await context.newPage({viewport:{width:1280,height:1000}});
  await page.goto('http://127.0.0.1:5173/');
  for(const letter of ['A','B','C']) {
   const trigger=page.getByRole('button',{name:`${letter}안 채용공고 HTML 코드`});
   await trigger.click();
   const copy=page.getByRole('button',{name:'HTML 코드 복사'});
   assert(await copy.isDisabled());
   await page.getByLabel('공개 이미지 주소',{exact:true}).fill('http://192.168.0.47:4173/test.png');
   assert(await copy.isDisabled());
   await page.getByLabel('공개 이미지 주소',{exact:true}).fill('javascript:alert(1)');
   assert(await copy.isDisabled());
   await page.getByLabel('공개 이미지 주소',{exact:true}).fill(`https://example.com/${letter}.png?v=2&lang=ko`);
   const code=await page.getByLabel('붙여 넣을 HTML').inputValue();
   assert(code.includes('&amp;lang=ko'));
   const parsed=await page.evaluate(code=>{const doc=new DOMParser().parseFromString(code,'text/html');const img=doc.querySelector('img');return {href:img.parentElement.href,src:img.getAttribute('src'),target:img.parentElement.target}},code);
   assert.equal(parsed.href,'https://www.v-w.co.kr/');
   assert.equal(parsed.src,`https://example.com/${letter}.png?v=2&lang=ko`);
   assert.equal(parsed.target,'_blank');
   await copy.click();
   await page.getByRole('status').filter({hasText:'복사했습니다.'}).waitFor();
   assert.equal((await page.evaluate(()=>navigator.clipboard.readText())).replace(/\r\n/g,'\n'),code);
   await page.keyboard.press('Escape');
   assert(await trigger.evaluate(el=>el===document.activeElement));
  }
  // Simulate insecure LAN HTTP: Clipboard API absent, use selection-based copying.
  await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{value:undefined,configurable:true}));
  await page.getByRole('button',{name:'C안 채용공고 HTML 코드'}).click();
  await page.getByRole('button',{name:'HTML 코드 복사'}).click();
  await page.getByRole('status').filter({hasText:'복사했습니다.'}).waitFor();
  await page.screenshot({path:'artifacts/html-dialog-desktop.png'});
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:'artifacts/html-dialog-mobile.png'});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth===innerWidth));
  await page.getByRole('button',{name:'팝업 닫기'}).click();
  await page.goto('http://127.0.0.1:5173/#/studio');
  await page.getByRole('button',{name:'채용공고 HTML 코드',exact:true}).click();
  await page.getByRole('dialog').waitFor();
  await page.keyboard.press('Escape');
  console.log('A/B/C HTML, public URL validation, escaped attributes, clipboard/fallback, focus restoration, mobile, detail page: PASS');
 } finally {await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});
