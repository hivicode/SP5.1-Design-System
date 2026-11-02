const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Desktop: 1440 × 900
  console.log('Capturing Desktop: 1440x900...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:8455', { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'desktop.png'),
    fullPage: false
  });

  // 2. Tablet: 768 × 1024
  console.log('Capturing Tablet: 768x1024...');
  await page.setViewport({ width: 768, height: 1024 });
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'tablet.png'),
    fullPage: false
  });

  // 3. Mobile: 390 × 844
  console.log('Capturing Mobile: 390x844...');
  await page.setViewport({ width: 390, height: 844 });
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'mobile.png'),
    fullPage: false
  });

  console.log('All screenshots captured successfully!');
  await browser.close();
})();
