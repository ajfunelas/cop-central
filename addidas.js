const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ignoreHTTPSErrors: true, headless: false})
  const page = await browser.newPage()
  
  await page.goto('https://www.adidas.com.au/nmd_r1-shoes/FV3645.html')
  
  await page.setViewport({ width: 1918, height: 977 })
  
  await page.waitForSelector('.row > .col-s-8 > .gl-form-item > .gl-custom-dropdown > .gl-custom-dropdown__select')
  await page.click('.row > .col-s-8 > .gl-form-item > .gl-custom-dropdown > .gl-custom-dropdown__select')
  
  await page.waitForSelector('.gl-custom-dropdown__options > .square-list > .gl-menu > .gl-menu__item:nth-child(11) > .gl-menu__element')
  await page.click('.gl-custom-dropdown__options > .square-list > .gl-menu > .gl-menu__item:nth-child(11) > .gl-menu__element')
  
  await page.waitForSelector('.pdpBar > .add_to_bag_form___227O2 > .row > .gl-cta > .gl-cta__text')
  await page.click('.pdpBar > .add_to_bag_form___227O2 > .row > .gl-cta > .gl-cta__text')
  
  await page.waitForSelector('.row > .col-l-12 > .summary___2PcSy > .gl-cta--secondary > .gl-cta__text')
  await page.click('.row > .col-l-12 > .summary___2PcSy > .gl-cta--secondary > .gl-cta__text')
  
//   await browser.close()
})()