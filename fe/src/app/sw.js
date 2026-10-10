/* @spec APP-10 */
// Mẫu service worker. Lúc build, vite.config.ts điền mã bản build và danh sách file khung app rồi ghi ra dist/sw.js.
// - Khung app (index.html, JS, CSS, font Lexend và Literata) lưu sẵn theo từng phiên bản.
// - Dữ liệu (*.json): lấy mạng trước, mất mạng thì dùng bản đã lưu.
// - File khác (font Noto, ảnh): dùng bản đã lưu nếu có, không thì tải và lưu lại.
// Bản mới tự kích hoạt, nhưng trang đang mở chỉ tải lại khi người dùng bấm "Cập nhật" (app/updates.ts).
const VERSION = '__BUILD_ID__';
const PRECACHE = __PRECACHE__;
const SHELL = `vitasr2-shell-${VERSION}`;
const RUNTIME = 'vitasr2-runtime';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      // cache: 'reload' để không lấy bản cũ trong bộ nhớ đệm HTTP của trình duyệt.
      .then((c) => c.addAll(PRECACHE.map((u) => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('vitasr2-shell-') && k !== SHELL).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const scopePath = new URL(self.registration.scope).pathname;
const isShell = (url) => url.pathname === scopePath || url.pathname === `${scopePath}index.html`;

const putRuntime = (req, res) => {
  if (res.ok) {
    const copy = res.clone();
    caches.open(RUNTIME).then((c) => c.put(req, copy));
  }
  return res;
};

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate' || isShell(url)) {
    event.respondWith(
      caches
        .open(SHELL)
        .then((c) => c.match('./index.html', { ignoreVary: true }))
        .then((r) => r || fetch(req)),
    );
    return;
  }

  if (url.pathname.endsWith('.json')) {
    event.respondWith(
      fetch(req)
        .then((res) => putRuntime(req, res))
        .catch(() => caches.match(req, { ignoreVary: true }).then((r) => r || Response.error())),
    );
    return;
  }

  // ignoreVary: script module gửi kèm Origin còn bản lưu sẵn thì không; máy chủ có thể trả Vary: Origin.
  event.respondWith(caches.match(req, { ignoreVary: true }).then((r) => r || fetch(req).then((res) => putRuntime(req, res))));
});
