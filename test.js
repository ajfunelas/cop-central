const puppeteer = require('puppeteer');



(async () => {
    const browser = await puppeteer.launch({
		ignoreHTTPSErrors: true,
        headless: false,
        // executablePath: `C:/Program Files (x86)/Google/Chrome/Application/chrome.exe`
	});
  const page = await browser.newPage()
  
//   const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://www.footlocker.com.au/en/p/adidas-nmd-men-shoes-66735?v=244205473804#!searchCategory=men')
  
  await page.setViewport({ width: 1918, height: 977 })
  
//   await page.waitForSelector('body > .fl-frame-container:nth-child(9)')
  await page.click('body > .fl-frame-container:nth-child(9)')
  
//   await page.waitForSelector('.row > .col-xs-12 > .fl-hide__xs > #fitanalytics_sizecontainer > .fl-accordion-tab--link-item:nth-child(5)')
  await page.click('.row > .col-xs-12 > .fl-hide__xs > #fitanalytics_sizecontainer > .fl-accordion-tab--link-item:nth-child(5)')
  
//   await page.waitForSelector('.fl-hide__xs > #fitanalytics_sizecontainer > .fl-accordion-tab--content:nth-child(6) > .fl-product-size > .fl-product-size--item:nth-child(5)')
  await page.click('.fl-hide__xs > #fitanalytics_sizecontainer > .fl-accordion-tab--content:nth-child(6) > .fl-product-size > .fl-product-size--item:nth-child(5)')
  
//   await page.waitForSelector('.col-xs-12 > .row > .col-xs-12 > .fl-btn > .fl-btn--inner')
  await page.click('.col-xs-12 > .row > .col-xs-12 > .fl-btn > .fl-btn--inner')

//   await page.waitFor(20);
  
//   await page.waitForSelector('.fl-minicart--productlist > .fl-minicart--checkout > .fl-minicart--checkout__checkout > .fl-btn > .fl-btn--inner')
  await page.click('.fl-minicart--productlist > .fl-minicart--checkout > .fl-minicart--checkout__checkout > .fl-btn > .fl-btn--inner')
  
//   await navigationPromise
  
  await page.waitForSelector('.fl-checkout-login--guest-block > .row > .col-sm-10 > .fl-btn > .fl-btn--inner')
  await page.click('.fl-checkout-login--guest-block > .row > .col-sm-10 > .fl-btn > .fl-btn--inner')
  
  await page.waitForSelector('.fl-checkout--content-container--address-block--options-field #fl-input-checkbox-create-account-panel')
  await page.click('.fl-checkout--content-container--address-block--options-field #fl-input-checkbox-create-account-panel')
  
//   await navigationPromise
  
  await browser.close()
})()