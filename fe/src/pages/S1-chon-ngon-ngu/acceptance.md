# Acceptance: S1 Chọn ngôn ngữ

- [ ] S1-AC01 [auto] S1-01: Với manifest fixture, dòng đầu là Tiếng Anh; các dòng sau theo thứ tự tên tiếng Việt tăng dần (so sánh `localeCompare` với `vi`).
- [ ] S1-AC02 [claude] S1-01, S1-02, S1-03, S1-05: Ảnh chụp ở 320 px, 375 px, 1280 px, sáng và tối: Tiếng Anh nằm trong khối viền; mỗi dòng có tên Việt, tên gốc, số câu "4.096"; có dòng chú thích cuối.
- [ ] S1-AC03 [auto] S1-02: Tên gốc của `ja-JP` là "日本語", của `en-US` là "English"; khi giả lập không có `Intl.DisplayNames`, dòng tên gốc không render và không lỗi.
- [ ] S1-AC04 [auto] S1-04: Chạm Tiếng Anh: ngôn ngữ được lưu vào `vitasr2.settings`, hash thành `#/hoc`; trong lúc tải, các dòng khác bị khóa.
- [ ] S1-AC05 [auto] S1-06: Manifest đang tải thì có 6 dòng khung xương; manifest lỗi thì hiện trạng thái lỗi APP-08.
- [ ] S1-AC06 [human] S1-01, S1-04: Người học mới (không hướng dẫn) chọn được Tiếng Anh trong lần chạm đầu tiên.
