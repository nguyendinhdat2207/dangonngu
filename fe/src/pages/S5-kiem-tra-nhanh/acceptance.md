# Acceptance: S5 Kiểm tra nhanh

- [ ] S5-AC01 [auto] S5-01: Mở `#/kiem-tra` không tham số thì nhóm câu là unit đang học; với `?unit=2` là unit 2. Bốn nút bắt đầu đúng nhãn; mỗi nút chạy đúng bước tương ứng.
- [ ] S5-AC02 [auto] S5-02: Khi làm cả 3 bước, chỉ báo có 3 chấm và trạng thái đổi đúng khi sang bước; khi chỉ làm một bước, chỉ báo có 1 chấm.
- [ ] S5-AC03 [auto] S5-03: Với `speechSynthesis` giả: vào câu gọi `speak` một lần; chữ câu gốc không có trong DOM trước khi chọn đúng. Với không có giọng: chữ câu gốc hiện ngay và có dòng thông báo.
- [ ] S5-AC04 [auto] S5-04: Test đơn vị chia cụm: câu 1, 3, 7, 8 và 12 từ cho 1, 2, 3, 4, 4 cụm; ghép các cụm lại bằng đúng câu gốc. Chạm hết cụm thì nút "Câu tiếp" hiện; câu 1 cụm bị bỏ qua.
- [ ] S5-AC05 [auto] S5-05: Thứ tự xáo khác thứ tự đúng và giống nhau giữa hai lần mở cùng câu; xếp đúng thì nút thành "Câu tiếp"; xếp sai thì đúng các cụm sai vị trí được đánh dấu.
- [ ] S5-AC06 [claude] S5-06: Ảnh chụp bước 2 và bước 3 ở 375 px: chỉ có nghĩa cả câu, không có nghĩa từng cụm.
- [ ] S5-AC07 [auto] S5-07: Làm cả 3 bước với 1 câu sai ở bước 1: kết quả hiện đúng số liệu từng bước; câu sai thành Cần ôn trong tiến độ; ở unit cuối không có nút "Kiểm tra unit tiếp theo".
- [ ] S5-AC08 [auto] S5-08: Thoát giữa bước 2: sheet xác nhận đúng chữ; "Dừng" về màn trước; kết quả các câu đã làm có trong tiến độ; mở lại `#/kiem-tra` bắt đầu từ màn bắt đầu.
- [ ] S5-AC09 [claude] S5-01, S5-03, S5-04, S5-05, S5-07: Ảnh chụp màn bắt đầu, mỗi bước và kết quả ở 320, 375, 1280 px, sáng và tối; các cụm xuống dòng hợp lý với câu dài.
- [ ] S5-AC10 [human] S5-04, S5-05: Ba người học làm cả 3 bước trên điện thoại thật; ghi lại câu nào họ thấy cách chia cụm vô lý. Nhóm quyết định chấp nhận hay đổi quy tắc chia cụm.
