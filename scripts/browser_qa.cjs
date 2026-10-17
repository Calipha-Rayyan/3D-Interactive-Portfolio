const puppeteer = require('puppeteer-core');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCREENSHOTS_DIR = path.resolve('C:/Users/A/.gemini/antigravity/brain/2f4a7cc6-0df9-42fd-a612-fa8e03a91339/screenshots');
const DIST_DIR = path.resolve('dist');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.json': 'application/json',
};

function createStaticServer(port = 4173) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURI(req.url.split('?')[0].split('#')[0]);
      if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
      const filePath = path.join(DIST_DIR, reqPath);

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, {
          'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
          'Access-Control-Allow-Origin': '*'
        });
        fs.createReadStream(filePath).pipe(res);
      } else {
        const indexHtml = path.join(DIST_DIR, 'index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(indexHtml).pipe(res);
      }
    });

    server.listen(port, '127.0.0.1', () => {
      resolve(server);
    });
  });
}

async function runQA() {
  const PORT = 4173;
  const server = await createStaticServer(PORT);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const consoleErrors = [];

  // Helper to open a fresh page at a specific viewport
  async function testViewport(name, width, height, action) {
    const page = await browser.newPage();
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(`[${name}] ${msg.text()}`);
    });
    await page.setViewport({ width, height });
    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle0' });
    if (action) await action(page);
    await page.close();
  }

  // 1. Desktop 1440px
  console.log('Testing 1440px Desktop...');
  await testViewport('desktop-1440', 1440, 900, async (page) => {
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'desktop-1440-hero.png') });

    // Test Navigation: Explore My Work
    await page.click('a[href="#projects"]');
    await new Promise((r) => setTimeout(r, 800));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'desktop-1440-projects-section.png') });

    // Test Navigation: Contact
    await page.click('a.navbar__link[href="#contact"]');
    await new Promise((r) => setTimeout(r, 800));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'desktop-1440-contact-section.png') });

    // Full page screenshot
    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'desktop-1440-fullpage.png'), fullPage: true });
  });

  // 2. Tablet 1024px Landscape
  console.log('Testing 1024px Tablet...');
  await testViewport('tablet-1024', 1024, 768, async (page) => {
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'tablet-1024-hero.png') });
  });

  // 3. Tablet 768px Portrait
  console.log('Testing 768px Portrait...');
  await testViewport('tablet-768', 768, 1024, async (page) => {
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'tablet-768-hero.png') });
    // Open mobile menu
    await page.click('.navbar__toggle');
    await new Promise((r) => setTimeout(r, 300));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'tablet-768-mobile-menu-open.png') });
  });

  // 4. Mobile 375px (iPhone)
  console.log('Testing 375px Mobile...');
  await testViewport('mobile-375', 375, 750, async (page) => {
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-375-hero.png') });
    await page.evaluate(() => document.getElementById('projects')?.scrollIntoView());
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-375-projects.png') });
  });

  // 5. Small Mobile 360px
  console.log('Testing 360px Small Mobile...');
  await testViewport('mobile-360', 360, 740, async (page) => {
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-360-hero.png') });
  });

  console.log('QA Finished! Console errors count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
  }

  await browser.close();
  server.close();
  process.exit(0);
}

runQA().catch((err) => {
  console.error(err);
  process.exit(1);
});
