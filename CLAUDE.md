# Hướng dẫn cho Claude khi làm việc trong repo này

Repo làm lại giao diện mini app VITASR Đa ngôn ngữ. Spec là nguồn chân lý duy nhất. Đọc `docs/QUY-TRINH.md` trước khi làm bất cứ việc gì.

## Quy tắc bắt buộc

1. Không tự sửa `spec.md` hay nội dung yêu cầu trong `acceptance.md`. Thấy spec sai, thiếu hoặc mâu thuẫn: ghi vào mục "Câu hỏi mở" của spec đó (commit riêng, tiền tố `spec-question:`), dừng phần code liên quan và báo cho người.
2. Mọi file hoặc khối code hiện thực một yêu cầu phải có ghi chú `@spec <ID>`. Mọi test tự động phải có `@ac <ID>`.
3. Không thêm chức năng không có trong spec, kể cả khi thấy hữu ích. Đề xuất thì ghi vào "Câu hỏi mở".
4. Sau mỗi lượt sửa code, chạy `npm run spec:check`. Còn lỗi thì chưa xong.
5. Chỉ đánh dấu `[x]` cho mục `[claude]` và `[auto]`, và chỉ khi có bằng chứng (ảnh chụp trong `docs/evidence/`, kết quả test, commit). Không bao giờ đánh dấu mục `[human]`.
6. Khi spec thay đổi: đọc diff, sửa code, bỏ dấu `[x]` của các mục acceptance bị ảnh hưởng, kiểm lại phần của mình.

## Ràng buộc kỹ thuật cần nhớ

- Trang học chính mở app bằng một trang mới (tab mới hoặc chuyển thẳng trang), không nhúng iframe (chốt 10/10/2026). App vẫn phải chạy đúng cả khi mở trực tiếp lẫn khi nằm trong iframe, không cần token hay postMessage từ trang chính, không dùng `window.top` (APP-09). Có nút về trang học chính, địa chỉ lấy từ `VITE_HOST_URL` (APP-12).
- Không có backend. Dữ liệu là file JSON tĩnh (xem `fe/src/data/spec.md`). Tiến độ lưu localStorage. Giọng đọc dùng `speechSynthesis`.
- Tiếng Anh có hai bộ nội dung với cấu trúc khác nhau: English Fluency (chỉ `id`, `hierarchy`, `en`, `vi`) và Global English (thêm `noteVi`, `topic`, `situation`, `unitId`). Các trường tùy chọn có thể vắng mặt tùy bộ; không giả định có hay không có (`docs/legacy/api-and-storage.md`).
- Không gọi `/api/sharing/*` hay bất kỳ endpoint nào của bản cũ.
- Bộ dữ liệu đầy đủ khách cho phép dùng nằm ở `fe/public/data/` (phát triển, demo); test dùng tập con `fe/fixtures/data/`, sinh bằng `node scripts/make-fixtures.mjs`, không sửa tay.
- Trường câu gốc luôn tên `en` ở mọi file ngôn ngữ, kể cả tiếng Đức, Nhật…; ngôn ngữ thật lấy từ `languageId`.
- Giai đoạn đầu ưu tiên web trên máy tính (1440, 1280 px), responsive xuống điện thoại.

## Lệnh kiểm trước khi báo xong

`npm test`, `npm run build`, `npm run test:e2e`, `npm run spec:check`. Ảnh bằng chứng cho mục `[claude]`: `npm run evidence` (ghi vào `docs/evidence/<mã mục>/`), xem lại ảnh rồi mới đánh dấu.

## Tài liệu tham khảo

- Bản cũ: `docs/legacy/` (chỉ tham khảo hành vi, không phải yêu cầu).
- Đối chiếu cũ và mới: `docs/new/mapping-legacy.md`.
- Quyết định kỹ thuật: `docs/QUYET-DINH.md`.
