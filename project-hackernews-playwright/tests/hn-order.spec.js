import { test, expect } from '@playwright/test';

const HN_URL = 'https://news.ycombinator.com/newest';

/**
 * Converts age labels like "12 minutes ago" into seconds
 * so we can compare and sort them numerically.
 *
 * @param {string} label - e.g., "12 minutes ago"
 * @returns {number} seconds
 */
function ageLabelToSeconds(label) {
  const [numStr, unitRaw] = label.split(/\s+/);  // e.g., ["12", "minutes"]
  const unit = unitRaw.toLowerCase();
  const num = parseInt(numStr, 10);

  const multipliers = {
    minute: 60,
    hour: 3600,
    day: 86400,
    month: 2592000,
    year: 31536000,
  };

  const key = Object.keys(multipliers).find(unitName =>
    unit.startsWith(unitName)
  );

  return key ? num * multipliers[key] : Number.MAX_SAFE_INTEGER;
}

test('articles are listed newest → oldest', async ({ page }) => {
  await page.goto(HN_URL, { waitUntil: 'domcontentloaded' });

  // Grab all the "x minutes ago" labels from article rows
  const labels = await page.$$eval('span.age', spans =>
    spans.map(s => s.innerText.trim())
  );

  const ages = labels.map(ageLabelToSeconds);

  // Newest articles have the *smallest* age in seconds (e.g., "1 minute ago" = 60),
  // so the array should already be sorted in ascending order
  const sorted = [...ages].sort((a, b) => a - b);
  expect(ages).toEqual(sorted);
});