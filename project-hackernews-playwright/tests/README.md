# Hacker News – Newest Article Sort Test

This project contains a Playwright automated test that verifies the article feed on the [Hacker News "Newest" page](https://news.ycombinator.com/newest) is correctly ordered from **newest to oldest** based on publish time.

---

## 🧪 What this test does

- Launches the Hacker News `/newest` page
- Collects the visible timestamps (e.g., `"2 minutes ago"`, `"1 hour ago"`)
- Converts those relative times into seconds
- Checks that the list is sorted in ascending order (newest = smallest age)

---

## ✅ Why it matters

Ensuring feeds or timelines are correctly sorted is critical in content-based apps. This test shows that I can:

- Write custom selectors with Playwright
- Normalize natural language time strings into numeric values
- Assert sort order logic using array comparisons
- Use custom helper functions to keep logic clean and readable

---

## 🚀 How to run this test

Make sure [Node.js](https://nodejs.org/) and [Playwright](https://playwright.dev/) are installed.

### 1. Install dependencies:

```bash
npm install


### 2. Run Test headlessly:

```bash
npm test


### 3. Run Test in Browser:

```bash
npm run test:ui


### 4. View Last HTLM Report:

```bash
npm run report