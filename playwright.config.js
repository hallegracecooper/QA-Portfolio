import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',               // we'll narrow this later
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});
