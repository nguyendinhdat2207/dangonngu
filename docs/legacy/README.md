# Bản cũ: nguồn và mức tin cậy

Thư mục này mô tả mini app "ĐA NGÔN NGỮ" đang chạy, dựng lại bằng cách đọc ngược (không có tài liệu hay mã nguồn từ khách). Đây là tài liệu tham khảo hành vi, không phải yêu cầu cho bản mới.

| File | Nội dung |
|---|---|
| `navigation.md` | Sơ đồ điều hướng cửa sổ của bản cũ |
| `ui-spec.md` | Danh sách màn hình, cửa sổ, điều khiển; cấu trúc trang |
| `api-and-storage.md` | Lời gọi mạng, file dữ liệu, khóa localStorage |

## Đối tượng mô tả

- Trang học chính: `https://language.pomaskhoahocnaobo.com` (ASP.NET Core). Sau đăng nhập, trang `/user-file/{user}` có nút mở danh sách mini app.
- Mini app: `https://vitasr-focus-160-pwa.t6dbgc79hk.chatgpt.site/`, phiên bản 1.9.40 (tên cache service worker `vitasr-demo-1.9.40-ve360`), nạp vào iframe `mamAppIframe` của trang chính.

## Cách lấy thông tin

1. File `fix_fe.zip` do khách gửi: bản Chrome "Save page as" của `/register` và `/user-file/thuhien`. Không phải mã nguồn; iframe mini app trong bản lưu là `about:blank`.
2. Đọc từng file JS, JSON công khai của mini app (danh sách lấy từ `sw.js`), ngày 07/10/2026.
3. Gọi thử `GET /api/sharing/session` để xác nhận backend chia sẻ tồn tại.

Chưa bấm qua giao diện bằng trình duyệt. Những chỗ ghi "cần xác nhận" là cửa sổ có thật trong code nhưng chưa rõ nút mở nằm ở đâu.

## Phát hiện quan trọng

- Trang chính không truyền token hay postMessage vào iframe. Mini app không phụ thuộc đăng nhập của trang chính.
- Mini app gần như chạy hoàn toàn ở trình duyệt: dữ liệu học là JSON tĩnh, tiến độ lưu localStorage, giọng đọc dùng `speechSynthesis`.
- Backend duy nhất là `/api/sharing/*` cho tính năng Chia sẻ, đăng nhập bằng tài khoản ChatGPT (`/signin-with-chatgpt`).
- `demo/index.html` vẫn chứa nguyên markup app gốc (Collocation, Listening Boost, FlashWord, trò chơi, thanh toán). Khi chạy, `demo/feature-removal.js` xóa khoảng 25 modal và vô hiệu khoảng 30 hàm; `user_v1.focus*.js` và các module `/demo/` dời node, dịch chữ, gắn thêm nút.
- Bộ dữ liệu tiếng Anh chỉ có các trường `id`, `hierarchy`, `en`, `vi`. Gói âm thanh ngoại tuyến chỉ có tiếng Lào.
