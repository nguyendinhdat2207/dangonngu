/// <reference types="vitest/config" />
// @spec DATA-05
// Cấu hình build. Gốc app là fe/, dữ liệu tĩnh nằm ở fe/public/data và được chép nguyên vào bản build.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')) as { version: string };

const root = fileURLToPath(new URL('./fe', import.meta.url));

export default defineConfig({
  root,
  envDir: fileURLToPath(new URL('.', import.meta.url)),
  // Đường dẫn tương đối để bản build đặt được ở bất kỳ thư mục nào và nạp được trong iframe (APP-09).
  base: './',
  plugins: [react()],
  define: { __APP_VERSION__: JSON.stringify(pkg.version) },
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    emptyOutDir: true,
  },
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true },
  test: {
    root: fileURLToPath(new URL('.', import.meta.url)),
    include: ['fe/tests/unit/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['fe/tests/unit/setup.ts'],
    testTimeout: 20000,
  },
});
