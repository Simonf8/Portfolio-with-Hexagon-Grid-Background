// This is a simple script to help you take a screenshot of your portfolio
// You'll need to install puppeteer first:
// npm install puppeteer

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  // Create screenshots directory if it doesn't exist
  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });

  const page = await browser.newPage();
  
  // Navigate to your local file
  await page.goto(`file://${path.join(__dirname, 'index.html')}`);
  
  // Wait for animations to load
  await page.waitForTimeout(3000);
  
  // Take screenshot
  await page.screenshot({
    path: path.join(screenshotsDir, 'portfolio-screenshot.png'),
    fullPage: false
  });
  
  console.log('Screenshot saved to screenshots/portfolio-screenshot.png');
  
  // Close browser
  await browser.close();
})();

// To use this script:
// 1. Install Node.js if you don't have it
// 2. Run: npm install puppeteer
// 3. Run: node screenshot.js
// 4. Upload the generated screenshot to imgur or another image hosting service
// 5. Update the README.md with the URL to your screenshot 