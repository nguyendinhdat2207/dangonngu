/// <reference types="vitest/config" />
// @spec DATA-05, APP-10
// Cấu hình build. Gốc app là fe/, dữ liệu tĩnh nằm ở fe/public/data và được chép nguyên vào bản build.
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')) as { version: string };

const root = fileURLToPath(new URL('./fe', import.meta.url));

/** Ghi dist/sw.js từ mẫu fe/src/app/sw.js, kèm mã bản build và danh sách file khung app (APP-10). */
function serviceWorker(): Plugin {
  return {
    name: 'vitasr-service-worker',
    apply: 'build',
    // Chạy sau plugin HTML của Vite để index.html đã có trong bundle và được tính vào mã bản build.
    enforce: 'post',
    generateBundle(_, bundle) {
      const names = Object.keys(bundle).sort();
      // Khung app: chunk vào (và CSS của nó) cùng font Lexend, Literata phần chữ Latinh và tiếng Việt.
      // Chunk nạp sau (font Noto theo ngôn ngữ) được lưu khi dùng tới.
      const entry = Object.values(bundle).filter((c) => c.type === 'chunk' && c.isEntry);
      const css = entry.flatMap((c) => (c.type === 'chunk' ? [...(c.viteMetadata?.importedCss ?? [])] : []));
      const fonts = names.filter((f) => /\/(lexend|literata)-(latin|vietnamese)-[^/]*\.woff2$/.test(f));
      const shell = [...entry.map((c) => c.fileName), ...css, ...fonts];
      const html = bundle['index.html'];
      const htmlSource = html && html.type === 'asset' ? String(html.source) : '';
      const id = createHash('sha256').update(names.join('\n')).update(htmlSource).digest('hex').slice(0, 12);
      const template = readFileSync(new URL('./fe/src/app/sw.js', import.meta.url), 'utf8');
      const source = template
        .replace("'__BUILD_ID__'", JSON.stringify(`${pkg.version}-${id}`))
        .replace('= __PRECACHE__;', `= ${JSON.stringify(['./index.html', ...shell.map((f) => `./${f}`)])};`);
      this.emitFile({ type: 'asset', fileName: 'sw.js', source });
    },
  };
}

export default defineConfig({
  root,
  envDir: fileURLToPath(new URL('.', import.meta.url)),
  // Đường dẫn tương đối để bản build đặt được ở bất kỳ thư mục nào và nạp được trong iframe (APP-09).
  base: './',
  plugins: [react(), serviceWorker()],
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
