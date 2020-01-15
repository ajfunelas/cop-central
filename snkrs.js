const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
		ignoreHTTPSErrors: true,
		headless: false
	});
  const page = await browser.newPage();
  
  const navigationPromise = page.waitForNavigation();

  await page.goto('https://www.footlocker.com.au/en/p/puma-rs-x3-men-shoes-90882?v=244205324304#!searchCategory=men');
  
  await page.setViewport({ width: 1279, height: 618 });
  
  await page.waitForSelector('#fitanalytics_sizecontainer > .fl-accordion-tab--content:nth-child(6) > .fl-product-size > .fl-product-size--item:nth-child(5) > span');
  await page.click('#fitanalytics_sizecontainer > .fl-accordion-tab--content:nth-child(6) > .fl-product-size > .fl-product-size--item:nth-child(5) > span');
  
  await page.waitForSelector('.col-xs-12 > .row > .col-xs-12 > .fl-btn > .fl-btn--inner');
  await page.click('.col-xs-12 > .row > .col-xs-12 > .fl-btn > .fl-btn--inner');
  
  await page.waitForSelector('.fl-minicart--productlist > .fl-minicart--checkout > .fl-minicart--checkout__checkout > .fl-btn > .fl-btn--inner');
  await page.click('.fl-minicart--productlist > .fl-minicart--checkout > .fl-minicart--checkout__checkout > .fl-btn > .fl-btn--inner');
  
  // await navigationPromise
  
  await browser.close();
})()