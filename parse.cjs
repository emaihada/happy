const fs = require('fs');
const path = require('path');

const htmlContent = fs.readFileSync(path.join(__dirname, 'assets', 'original.html'), 'utf8');

const PAGES = {};
const regex = /"(\d{2})"\s*:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(htmlContent)) !== null) {
  PAGES[match[1]] = match[2];
}

const ch03Base64 = PAGES["03"];
if (ch03Base64) {
  const decoded = Buffer.from(ch03Base64, 'base64').toString('utf8');
  console.log("=== CHAPTER 03 SAMPLE (first 1200 chars) ===");
  console.log(decoded.substring(0, 1200));
} else {
  console.log("Chapter 03 not found in PAGES");
}
