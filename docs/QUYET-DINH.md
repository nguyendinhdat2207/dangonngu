# Quyết định kỹ thuật

Mỗi quyết định có trạng thái: **Đề xuất** (chờ nhóm chốt), **Đã chốt**, **Bỏ**. Quyết định ở trạng thái Đề xuất chưa được dùng để viết code.

## QD-01 Công nghệ front-end

Trạng thái: Đề xuất

Đề xuất: Vite, React 18, TypeScript. Test đơn vị bằng Vitest, test giao diện bằng Playwright (Chromium và WebKit để có hành vi gần Safari iOS).

Lý do: app tĩnh, chạy trong iframe, không cần render phía server; Vite cho bản build tĩnh gọn để khách tự host. TypeScript giúp giữ đúng hợp đồng dữ liệu khi khách đổi nguồn dữ liệu. Playwright chụp được ảnh ở nhiều khổ màn hình để làm bằng chứng cho mục acceptance `[claude]`.

Phương án khác: Vue 3 hoặc Svelte đều phù hợp. Chọn theo kỹ năng của người sẽ bảo trì sau bàn giao.

## QD-02 Điều hướng bằng hash

Trạng thái: Đề xuất

Dùng route dạng `#/hoc`, `#/thu-vien`. App được host tĩnh và nạp trong iframe bằng một URL; route bằng hash không cần cấu hình server và không làm hỏng URL mà trang chính nạp vào. Bảng route nằm ở `fe/src/app/spec.md` (APP-04).

## QD-03 Không phụ thuộc backend

Trạng thái: Đã chốt

Khách không cung cấp mã nguồn và không mở API, nhưng đã gửi bộ dữ liệu đầy đủ (lưu ở `fe/public/data/`). Mọi dữ liệu đọc qua lớp `DataSource` (DATA-05): khi phát triển và demo đọc bộ đầy đủ, khi test đọc fixture. Tính năng Chia sẻ của bản cũ (cần `/api/sharing/*`) bị bỏ.

## QD-04 Bộ icon

Trạng thái: Đề xuất

Phosphor Icons, nét Regular. Bản cũ cũng đã tải Phosphor, nên khách quen với hình dạng icon này.

## QD-05 Font

Trạng thái: Đề xuất

Lexend cho giao diện và câu gốc, Literata cho nghĩa tiếng Việt, Noto Sans theo từng hệ chữ khác (FND-04). Tự host font trong bản build để app chạy được ngoại tuyến và không phụ thuộc Google Fonts khi nằm trong iframe.
