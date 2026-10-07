# Acceptance: T4 Tiến bộ

Dùng một bộ tiến độ mẫu cố định (fixture tiến độ 30 ngày) và đồng hồ giả cho các mục `[auto]`.

- [ ] T4-AC01 [auto] T4-01: Mặc định chọn "7 ngày"; chọn "30 ngày" thì route có `?khoang=30` và số liệu đổi theo; tải lại giữ lựa chọn.
- [ ] T4-AC02 [auto] T4-02: Với fixture tiến độ, ba chỉ số khớp giá trị tính tay ghi trong file fixture cho cả 3 khoảng; số câu cần ôn giống nhau ở 3 khoảng và bằng số ở T1.
- [ ] T4-AC03 [auto] T4-03: Mục tiêu tuần giống T1-03 ở mọi khoảng; khi đạt mục tiêu, thanh dùng màu `--known`.
- [ ] T4-AC04 [auto] T4-04: Khoảng 7 ngày có 7 cột, 30 ngày có 30 cột, 1 ngày không có biểu đồ; có bảng số liệu ẩn cho trình đọc màn hình với đúng giá trị.
- [ ] T4-AC05 [claude] T4-04: Ảnh chụp biểu đồ 7 và 30 ngày ở 320 px và 1280 px, sáng và tối: cột hôm nay màu `--brand`, nhãn trục không chồng nhau, chiều cao cột đúng tỉ lệ.
- [ ] T4-AC06 [auto] T4-05: Ba dòng lịch ôn khớp giá trị tính tay theo DATA-07; câu quá hạn tính vào "Hôm nay".
- [ ] T4-AC07 [auto] T4-06: Danh sách phiên đúng thứ tự mới nhất trước, đúng nhãn nguồn, tối đa 20 dòng rồi có "Xem thêm".
- [ ] T4-AC08 [auto] T4-07: Chạm cột ngày có 2 phiên: sheet tiêu đề đúng thứ và ngày, có 2 phiên và đúng danh sách câu.
- [ ] T4-AC09 [auto] T4-08: Tiến độ trống: chỉ có bộ chọn khoảng, đoạn thông báo đúng mẫu và nút "Học 8 câu".
- [ ] T4-AC10 [human] T4-02, T4-05: Người học xem màn này và giải thích đúng con số "cần ôn hôm nay" và "Lịch ôn" nghĩa là gì (dùng chung buổi test G-AC02).
