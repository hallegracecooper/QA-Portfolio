import { test, expect } from '@playwright/test';

const HN_URL = 'https://news.ycombinator.com/newest';

// helper: convert "12 minutes ago" → seconds
function ageLabelToSeconds(label) {
  const [numStr, unit] = label.split(/\s+/);     // ["12", "minutes"]
  const n = Number(numStr);
  if (unit.startsWith('minute')) return n * 60;
  if (unit.startsWith('hour'))   return n * 3600;
  if (unit.startsWith('day'))    return n * 86400;
  if (unit.startsWith('month'))  return n * 2_592_000;
  if (unit.startsWith('year'))   return n * 31_536_000;
  return Number.MAX_SAFE_INTEGER;                // shouldn’t happen
}

test('articles are listed newest → oldest', async ({ page }) => {
  await page.goto(HN_URL, { waitUntil: 'domcontentloaded' });

  // grab the “x minutes ago” text from each story row
  const labels = await page.$$eval('span.age', spans =>
    spans.map(s => s.innerText.trim())
  );

  const ages = labels.map(ageLabelToSeconds);

  // Verify list is already sorted ascending (smallest = newest)
  const sorted = [...ages].sort((a, b) => a - b);
  expect(ages).toEqual(sorted);
});
