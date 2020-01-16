const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ignoreHTTPSErrors: true, headless: false})
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://www.nike.com/au/launch/?s=in-stock')
  
  await page.setViewport({ width: 1918, height: 977 })
  
  await page.waitForSelector('.pb2-sm:nth-child(4) > .product-card > .ncss-col-sm-12 > .card-link > .image-component')
  await page.click('.pb2-sm:nth-child(4) > .product-card > .ncss-col-sm-12 > .card-link > .image-component')
  
  await page.waitForSelector('.ncss-col-sm-12 > .buying-tools-container > .size-layout > .size:nth-child(5) > .size-grid-dropdown')
  await page.click('.ncss-col-sm-12 > .buying-tools-container > .size-layout > .size:nth-child(5) > .size-grid-dropdown')
  
  await page.waitForSelector('.ncss-col-sm-12 > .ncss-col-sm-12 > .buying-tools-container > .mt2-sm > .ncss-brand')
  await page.click('.ncss-col-sm-12 > .ncss-col-sm-12 > .buying-tools-container > .mt2-sm > .ncss-brand')
  
  await page.waitForSelector('.d-md-t > .d-md-tc > .cart-item-modal-content-container > .ncss-row > .ncss-btn-black')
  await page.click('.d-md-t > .d-md-tc > .cart-item-modal-content-container > .ncss-row > .ncss-btn-black')
  
  await navigationPromise
  
  // await browser.close()
})()