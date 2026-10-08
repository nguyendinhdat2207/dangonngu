# Acceptance: T2 Luyện tập

- [ ] T2-AC01 [claude] T2-01: Ảnh chụp ở 375 px và 1280 px, sáng và tối: ba mục đúng thứ tự, ngăn bằng đường kẻ, không có khung thẻ, không có nút nền `--brand`.
- [ ] T2-AC02 [auto] T2-02: Với 12 câu cần ôn: mục hiện "12", chạm mở `#/phien-hoc?nguon=on-tap`. Với 0 câu: mục bị khóa, mô tả "Không có câu cần ôn hôm nay."
- [ ] T2-AC03 [auto] T2-03: Gõ "dat phong" trong sheet: sau 250 ms hiện số câu khớp theo DATA-12 và tối đa 5 câu xem trước; chạm chip "sân bay" điền "sân bay" vào ô tìm; "Học 8 câu đầu" mở đúng route với `q` và `nhom=1`.
- [ ] T2-AC04 [auto] T2-04: Chạm Kiểm tra nhanh mở `#/kiem-tra` với unit đang học trong lộ trình.
- [ ] T2-AC05 [auto] T2-05: Gõ "xyzxyz": hiện đúng câu thông báo không có kết quả và nút "Học 8 câu đầu" bị khóa.
- [ ] T2-AC06 [claude] T2-03, T2-05: Ảnh chụp sheet Học theo từ khóa ở 375 px với 40 kết quả và với 0 kết quả.
- [ ] T2-AC07 [auto] T2-03: Với fixture Global English, chip là các `topic` xếp theo số câu giảm dần, tối đa 6; với fixture English Fluency, chip là 4 chip cố định.
