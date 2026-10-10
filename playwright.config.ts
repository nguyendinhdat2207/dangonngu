import { defineConfig, devices } from '@playwright/test';

// Test giao diện chạy trên bản build (vite preview) với bộ dữ liệu đầy đủ trong fe/public/data.
export default defineConfig({
  testDir: 'fe/tests/e2e',
  outputDir: 'test-results',
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4173/',
    trace: 'retain-on-failure',
    launchOptions: process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : undefined,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } } },
    // WebKit (gần Safari iOS) theo QD-01: bật khi máy chạy test đã cài trình duyệt WebKit của Playwright.
    ...(process.env.PW_WEBKIT ? [{ name: 'webkit', use: { ...devices['Desktop Safari'], viewport: { width: 1280, height: 800 } } }] : []),
  ],
  webServer: {
    command: 'npx vite preview --port 4173 --strictPort',
    url: 'http://localhost:4173/',
    reuseExistingServer: true,
    timeout: 60000,
  },
});
