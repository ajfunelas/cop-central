const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ignoredHTTPSErrors: true, headless: false})
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://www.culturekings.com.au/products/jordan-jordan-air-jordan-1-retro-high-og-black-silver-red')
  
  await page.setViewport({ width: 1279, height: 618 })
  
  await page.waitForSelector('.form-horizontal > .product-single__options > .selector-container > .variant-selector > .radio-button:nth-child(13)')
  await page.click('.form-horizontal > .product-single__options > .selector-container > .variant-selector > .radio-button:nth-child(13)')
  
  await page.waitForSelector('.form-horizontal > .add-to-cart-button > .btn > .button-content > .btn__content')
  await page.click('.form-horizontal > .add-to-cart-button > .btn > .button-content > .btn__content')
  
  await page.waitForSelector('#shopify-section-header > #CartDrawer > #CartContainer > .ajaxcart__footer > .btn--primary')
  await page.click('#shopify-section-header > #CartDrawer > #CartContainer > .ajaxcart__footer > .btn--primary')
  
  await navigationPromise
  
  await page.waitForSelector('.fieldset-description #checkout_buyer_accepts_marketing')
  await page.click('.fieldset-description #checkout_buyer_accepts_marketing')
  
  await page.waitForSelector('.section__content #checkout_email')
  await page.click('.section__content #checkout_email')
  
  await page.type('.section__content #checkout_email', 'aj_funelas@yahoo.com')
  
  await page.type('.section__content #checkout_email', 'aj_funelas@yahoo.com')
  
  await page.type('.fieldset-description #checkout_buyer_accepts_marketing', '1')
  
  await page.type('.section__content #checkout_shipping_address_first_name', 'Aj')
  
  await page.waitForSelector('.section__content #checkout_shipping_address_address1')
  await page.click('.section__content #checkout_shipping_address_address1')
  
  await page.waitForSelector('.edit_checkout > .step__sections > .section--shipping-address > .section__content > .fieldset')
  await page.click('.edit_checkout > .step__sections > .section--shipping-address > .section__content > .fieldset')
  
  await page.select('.section__content #checkout_shipping_address_province', 'WA')
  
  await page.waitForSelector('.section__content #checkout_shipping_address_phone')
  await page.click('.section__content #checkout_shipping_address_phone')
  
  await browser.close()
})()