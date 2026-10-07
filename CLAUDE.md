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

- App chạy trong iframe của trang học chính, nạp bằng một URL tĩnh. Không có token, không có postMessage từ trang chính. Không dùng `window.top`.
- Không có backend. Dữ liệu là file JSON tĩnh (xem `fe/src/data/spec.md`). Tiến độ lưu localStorage. Giọng đọc dùng `speechSynthesis`.
- Bộ dữ liệu tiếng Anh chỉ có các trường `id`, `hierarchy`, `en`, `vi`. Không giả định có `noteVi`, `topic`, `situation`, `reading`, `furigana`.
- Không gọi `/api/sharing/*` hay bất kỳ endpoint nào của bản cũ.
- Dữ liệu thật thuộc về khách. Chỉ dùng fixture trong `fe/fixtures/` khi phát triển.

## Tài liệu tham khảo

- Bản cũ: `docs/legacy/` (chỉ tham khảo hành vi, không phải yêu cầu).
- Đối chiếu cũ và mới: `docs/new/mapping-legacy.md`.
- Quyết định kỹ thuật: `docs/QUYET-DINH.md`.
