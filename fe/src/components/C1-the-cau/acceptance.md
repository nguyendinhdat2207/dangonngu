# Acceptance: C1 Thẻ câu

- [ ] C1-AC01 [claude] C1-01: Ảnh chụp thẻ có và không có dải 8 ô, ở 320 px và 375 px, sáng và tối: thứ tự khối đúng như bố cục; font nghĩa và câu gốc đúng vai trò.
- [ ] C1-AC02 [auto] C1-02: Ở chế độ che, nút Nghe bị disabled; chạm khối che, rồi lặp lại bằng phím Space và Enter khi thẻ có focus: câu gốc hiện và sự kiện "đã hiện" phát đúng một lần.
- [ ] C1-AC03 [auto] C1-03: Sau khi hiện, không phần tử nào trong thẻ khiến câu gốc bị che lại.
- [ ] C1-AC04 [auto] C1-04: Với `speechSynthesis` giả: bấm Nghe gọi `speak` một lần với `lang`, giọng và `rate` đã chọn; nút thành "Dừng"; gỡ thẻ khỏi màn thì `cancel` được gọi.
- [ ] C1-AC05 [human] C1-04: Trên iPhone, Android và Windows: Nghe đọc đúng câu bằng giọng tiếng Anh; Nghe lặp lặp lại và dừng được.
- [ ] C1-AC06 [auto] C1-05: Với `getVoices` trả về danh sách không có giọng ngôn ngữ đích: nút bị khóa, hiện đúng câu thông báo, liên kết mở sheet Giọng đọc.
- [ ] C1-AC07 [auto] C1-06, C1-07: Item có `noteVi` hiện dòng "Cách dùng: …"; item có `furigana` render `ruby`; item tiếng Anh từ fixture không có cả hai khối trong DOM.
- [ ] C1-AC08 [auto] C1-08: Phần tử câu gốc tiếng Anh có `lang="en"`, tiếng Nhật có `lang="ja"`; phần tử nghĩa có `lang="vi"`.
