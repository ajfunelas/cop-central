const puppeteer = require('puppeteer');

// const info = require("./configs")



(async () => {
  const browser = await puppeteer.launch({ignoreHTTPSErrors: true, headless: false})
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()


  try {
    await page.goto('https://www.nike.com/au/launch/t/air-jordan-1-high-black-gym-red/')
  
    await page.setViewport({ width: 1920, height: 1007 })
  
    await page.waitForSelector('.ncss-col-sm-12 > .buying-tools-container > .size-layout > .size:nth-child(5) > .size-grid-dropdown')
    await page.click('.ncss-col-sm-12 > .buying-tools-container > .size-layout > .size:nth-child(5) > .size-grid-dropdown')
  
    await page.waitForSelector('.ncss-col-sm-12 > .ncss-col-sm-12 > .buying-tools-container > .mt2-sm > .ncss-brand')
    await page.click('.ncss-col-sm-12 > .ncss-col-sm-12 > .buying-tools-container > .mt2-sm > .ncss-brand')
  
    await page.waitForSelector('.d-md-t > .d-md-tc > .cart-item-modal-content-container > .ncss-row > .ncss-btn-black')
    await page.click('.d-md-t > .d-md-tc > .cart-item-modal-content-container > .ncss-row > .ncss-btn-black')
  
    await navigationPromise
  } 

  catch(err) {
    console.log("Current error: " + err)
  }
  

  
  // await browser.close()
})()