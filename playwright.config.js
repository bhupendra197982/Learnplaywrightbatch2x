const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  testMatch: '**/*.{js,ts}',
  use: {
    headless: false,
  },
});
