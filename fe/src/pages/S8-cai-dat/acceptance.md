# Acceptance: S8 Cài đặt

- [ ] S8-AC01 [auto] S8-01: Bộ tăng giảm không xuống dưới 1, không vượt 21; đổi thành 7 thì T1 hiện "Tuần này: x/7 phiên"; chạm "Ngôn ngữ đang học" mở sheet Đổi ngôn ngữ.
- [ ] S8-AC02 [auto] S8-02: Với `getVoices` giả có 3 giọng `en-*` và 1 giọng `vi-VN`: sheet liệt kê "Mặc định của thiết bị" và 3 giọng tiếng Anh; đổi "Giọng cho" sang Tiếng Việt thì liệt kê giọng `vi-VN`; chọn giọng và tốc độ 1,25x thì C1 đọc bằng đúng giọng và `rate` 1.25.
- [ ] S8-AC03 [human] S8-02: Trên iPhone, Android và Windows: danh sách giọng hiện đúng các giọng của máy; "Nghe thử" phát đúng giọng đã chạm.
- [ ] S8-AC04 [auto] S8-03: Với fixture tiếng Anh, không có mục "Âm thanh ngoại tuyến" trong DOM.
- [ ] S8-AC05 [auto] S8-04: Chọn "Tối" thì bảng màu tối áp dụng ngay và giữ sau khi tải lại.
- [ ] S8-AC06 [auto] S8-05: Xuất rồi xóa rồi nhập lại file vừa xuất: tiến độ trở lại giống hệt trước khi xóa. Nhập file của ngôn ngữ khác hoặc file JSON bất kỳ: hiện đúng thông báo lỗi và tiến độ không đổi. Nút "Xóa" chỉ mở khi gõ đúng tên ngôn ngữ.
- [ ] S8-AC07 [human] S8-05: Trên iPhone (Safari) và Android (Chrome): "Xuất tiến độ" tải được file về máy và "Nhập tiến độ" chọn được chính file đó.
- [ ] S8-AC08 [auto] S8-06: "Xem lại hướng dẫn" về T1 và hiện bước 1 của S9; dòng phiên bản khớp `version` trong package.json.
- [ ] S8-AC09 [claude] S8-01, S8-02, S8-04, S8-05, S8-06: Ảnh chụp S8 và sheet Giọng đọc ở 375 px và 1280 px, sáng và tối: nhóm rõ ràng, nhãn đúng, không có mục ngoài spec.
- [ ] S8-AC10 [auto] S8-01: Đang học Global English: mục "Ngôn ngữ đang học" hiện "Tiếng Anh" và "Global English"; chạm mở sheet Đổi ngôn ngữ có hai dòng Tiếng Anh.
