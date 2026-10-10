# Quyết định kỹ thuật

Mỗi quyết định có trạng thái: **Đề xuất** (chờ nhóm chốt), **Đã chốt**, **Bỏ**. Quyết định ở trạng thái Đề xuất chưa được dùng để viết code.

## QD-01 Công nghệ front-end

Trạng thái: Đã chốt (08/10/2026, nhóm đồng ý khi bắt đầu code)

Phiên bản dùng: Vite 6.4, React 18.3, TypeScript 5.6, Vitest 4.1 (jsdom), Testing Library, Playwright 1.49 với axe-core. `.npmrc` bật `legacy-peer-deps` vì npm 10 lỗi khi giải phụ thuộc ngang hàng tùy chọn của jsdom; không ảnh hưởng bản build.

Đề xuất: Vite, React 18, TypeScript. Test đơn vị bằng Vitest, test giao diện bằng Playwright (Chromium và WebKit để có hành vi gần Safari iOS).

Lý do: app tĩnh, mở bằng một URL (trang mới, vẫn chạy được trong iframe), không cần render phía server; Vite cho bản build tĩnh gọn để khách tự host. TypeScript giúp giữ đúng hợp đồng dữ liệu khi khách đổi nguồn dữ liệu. Playwright chụp được ảnh ở nhiều khổ màn hình để làm bằng chứng cho mục acceptance `[claude]`.

Phương án khác: Vue 3 hoặc Svelte đều phù hợp. Chọn theo kỹ năng của người sẽ bảo trì sau bàn giao.

## QD-02 Điều hướng bằng hash

Trạng thái: Đã chốt (08/10/2026)

Dùng route dạng `#/hoc`, `#/thu-vien`. App được host tĩnh và trang học chính mở nó bằng một URL ở trang mới (APP-09, chốt 10/10/2026; app vẫn chạy được trong iframe); route bằng hash không cần cấu hình server và không làm hỏng URL mà trang chính nạp vào. Bảng route nằm ở `fe/src/app/spec.md` (APP-04).

## QD-03 Không phụ thuộc backend

Trạng thái: Đã chốt

Khách không cung cấp mã nguồn và không mở API, nhưng đã gửi bộ dữ liệu đầy đủ (lưu ở `fe/public/data/`). Mọi dữ liệu đọc qua lớp `DataSource` (DATA-05): khi phát triển và demo đọc bộ đầy đủ, khi test đọc fixture. Tính năng Chia sẻ của bản cũ (cần `/api/sharing/*`) bị bỏ.

## QD-04 Bộ icon

Trạng thái: Đã chốt (08/10/2026)

Phosphor Icons, nét Regular. Bản cũ cũng đã tải Phosphor, nên khách quen với hình dạng icon này. Dùng gói `@phosphor-icons/react`.

## QD-05 Font

Trạng thái: Đã chốt (08/10/2026)

Lexend cho giao diện và câu gốc, Literata cho nghĩa tiếng Việt, Noto Sans theo từng hệ chữ khác (FND-04). Tự host font trong bản build để app chạy được ngoại tuyến và không phụ thuộc Google Fonts. Dùng các gói `@fontsource/*`; Lexend và Literata nạp sẵn (phần chữ Latinh và tiếng Việt), Noto nạp khi chọn ngôn ngữ cần (`fe/src/foundation/fonts.ts`).
