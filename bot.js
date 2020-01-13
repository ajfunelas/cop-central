const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.streetwearofficial.com/collections/supreme/products/supreme-box-logo-sticker');
  await page.click("#product-add-to-cart");
  await page.waitFor(20);
  await page.click("#supreme-supreme-box-logo-sticker > div.ajax-success-normal.ajax-success-modal.halo-modal > div > div > div > div.actions > button.btn.btn-go-to-cart");

  await browser.close();
})();