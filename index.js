const { chromium } = require("playwright");

async function sortHackerNewsArticles() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("Navigating to Hacker News...");
  await page.goto("https://news.ycombinator.com/newest");

  // Get article age text like "1 minute ago", "2 hours ago"
  const articles = await page.locator('.subtext > span.age').allTextContents();

  if (articles.length < 100) {
    console.error(`Expected 100 articles, but found only ${articles.length}.`);
    await browser.close();
    return;
  }

  // Convert relative time strings into number of seconds
  const timeInSeconds = articles.map(time => {
    const [value, unit] = time.split(" ");
    const num = parseInt(value);
    if (unit.startsWith("minute")) return num * 60;
    if (unit.startsWith("hour")) return num * 3600;
    if (unit.startsWith("day")) return num * 86400;
    if (unit.startsWith("second")) return num;
    return Number.MAX_SAFE_INTEGER; // fallback
  });

  // Check if list is sorted (newest = smallest number of seconds)
  let isSorted = true;
  for (let i = 0; i < timeInSeconds.length - 1; i++) {
    if (timeInSeconds[i] > timeInSeconds[i + 1]) {
      isSorted = false;
      console.log(`❌ Article at position ${i} is older than the next one.`);
      break;
    }
  }

  if (isSorted) {
    console.log("✅ The articles are sorted from newest to oldest.");
  } else {
    console.log("❌ The articles are NOT sorted from newest to oldest.");
  }

  await browser.close();
}

(async () => {
  await sortHackerNewsArticles();
})();