# Acceptance: DATA Dữ liệu và tiến độ

- [ ] DATA-AC01 [auto] DATA-01, DATA-02, DATA-03: Test đọc toàn bộ fixture qua `FixtureSource` và kiểm hợp đồng: mọi item có `id`, trường câu gốc và `vi`; mọi id trong `units[].ids` khớp một item.
- [ ] DATA-AC02 [auto] DATA-02, DATA-05: Cho nguồn trả về item thiếu `vi` hoặc `id` dạng chuỗi chữ: bộ kiểm hợp đồng báo lỗi và app hiện trạng thái lỗi APP-08, không ném lỗi chưa bắt.
- [ ] DATA-AC03 [auto] DATA-03: Unit 5 câu trong fixture tạo phiên 5 câu; id "0001" khớp item `id: 1`.
- [ ] DATA-AC04 [auto] DATA-04: Render thẻ câu với item chỉ có `id`, `hierarchy`, `en`, `vi`: không lỗi, không có khối Cách dùng hay phiên âm trong DOM.
- [ ] DATA-AC05 [claude] DATA-05: Tìm trong mã nguồn: chỉ các file cài đặt `DataSource` gọi `fetch` tới dữ liệu; build với `VITE_DATA_SOURCE=static` và base URL trỏ tới thư mục fixture được phục vụ tĩnh thì app chạy giống `fixture`.
- [ ] DATA-AC06 [auto] DATA-06: Hoàn tất một phiên rồi đọc localStorage: chỉ có khóa bắt đầu bằng `vitasr2.`; dữ liệu đúng cấu trúc mô tả; không khóa `vitasr.` nào của bản cũ bị ghi hay xóa.
- [ ] DATA-AC07 [auto] DATA-06: Giả lập `localStorage.setItem` ném lỗi: app vẫn học được hết một phiên trong phiên làm việc và hiện cảnh báo bộ nhớ.
- [ ] DATA-AC08 [auto] DATA-07: Test đơn vị quy tắc ôn với đồng hồ giả: chuỗi "Tôi nhớ" liên tiếp cho `due` sau 1, 3, 7, 14, 30, 30 ngày; "Cần ôn lại", trả lời sai, dùng gợi ý đều đưa `streak` về 0 và câu thành Cần ôn ngay.
- [ ] DATA-AC09 [auto] DATA-07: Cùng một bộ tiến độ, số "câu cần ôn hôm nay" hiển thị ở T1, T2 và T4 bằng nhau, và bằng số câu có trạng thái Cần ôn ở T3.
- [ ] DATA-AC10 [auto] DATA-08: Với mọi câu trong fixture tiếng Anh: đủ 4 lựa chọn, đúng một lựa chọn là nghĩa đúng, không hai lựa chọn trùng sau chuẩn hóa; gọi hai lần cho cùng câu ra cùng bộ và cùng thứ tự.
- [ ] DATA-AC11 [claude] DATA-09: Đối chiếu nội dung `fe/fixtures/` (kể cả bộ tiến độ mẫu và số liệu tính tay) với danh sách trong DATA-09, ghi từng mục đạt hay không vào bằng chứng.
- [ ] DATA-AC12 [human] DATA-09: Xác nhận bằng văn bản (email hoặc tin nhắn) từ khách cho phép dùng các câu trong fixture, hoặc xác nhận fixture chỉ chứa câu tự viết.
- [ ] DATA-AC13 [auto] DATA-10: Test giao diện ghi lại mọi request trong luồng T1 → S3 → T3 → T4 → S8: chỉ có request tới origin của app và base URL dữ liệu; không có request chứa `/api/` hoặc `get-data`.
- [ ] DATA-AC14 [auto] DATA-11: Với tiến độ trống, câu tiếp theo là câu đầu của unit 1; sau khi qua bước ghi nhớ toàn bộ unit 1, câu tiếp theo là câu đầu của unit 2.
- [ ] DATA-AC15 [auto] DATA-12: Test đơn vị tìm kiếm: "dat phong" khớp "đặt phòng", "BOOK" khớp "book", kết quả theo thứ tự `id` tăng dần.
