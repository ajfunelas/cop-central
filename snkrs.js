const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://www.nike.com/au/launch/t/air-vapormax-plus-on-air-paris/')
  
  await page.setViewport({ width: 1279, height: 618 })
  
  await page.waitForSelector('.ncss-col-sm-12 > .pdp-container > .card-product-component > .ncss-col-sm-12 > .product-info-container')
  await page.click('.ncss-col-sm-12 > .pdp-container > .card-product-component > .ncss-col-sm-12 > .product-info-container')
  
  await page.waitForSelector('.ncss-col-sm-12 > .buying-tools-container > .size-layout > .size:nth-child(7) > .size-grid-dropdown')
  await page.click('.ncss-col-sm-12 > .buying-tools-container > .size-layout > .size:nth-child(7) > .size-grid-dropdown')
  
  await page.waitForSelector('.ncss-col-sm-12 > .ncss-col-sm-12 > .buying-tools-container > .mt2-sm > .ncss-brand')
  await page.click('.ncss-col-sm-12 > .ncss-col-sm-12 > .buying-tools-container > .mt2-sm > .ncss-brand')
  
  await page.waitForSelector('.d-md-t > .d-md-tc > .cart-item-modal-content-container > .ncss-row > .ncss-btn-black')
  await page.click('.d-md-t > .d-md-tc > .cart-item-modal-content-container > .ncss-row > .ncss-btn-black')
  
  await navigationPromise
  
  await browser.close()
})()