---
id: C3
title: Nút
status: nháp
version: 0.1
depends: FND
---

# C3 Nút

## Yêu cầu

### C3-01 Nút chính

Nền `--brand`, chữ `--on-brand`, Lexend 16 px đậm 600, cao 48 px, bo góc 10 px. Dưới 600 px rộng hết khối chứa. Mỗi màn có tối đa một nút chính (FND-02).

### C3-02 Nút phụ

Nền trong suốt, viền 1 px `--line`, chữ `--ink`, cao 48 px. Nút dạng chữ (không viền) dùng cho hành động thứ ba trở đi, chữ `--ink` gạch chân khi hover.

### C3-03 Cặp nút đánh giá

Dùng ở bước ghi nhớ của S3: "Cần ôn lại" bên trái (viền 1,5 px `--review`, chữ `--review`, icon vòng lặp) và "Tôi nhớ" bên phải (nền `--known`, chữ `--surface` ở chế độ sáng và `--paper` ở chế độ tối, icon dấu tích). Hai nút cao 56 px, chia đều chiều rộng, cách nhau 12 px. Khi bị khóa: độ mờ 40%, không nhận chạm.

### C3-04 Trạng thái chung

Mọi nút có trạng thái: thường, hover (chỉ thiết bị có chuột), nhấn (tối hơn 8%), focus bàn phím (FND-14), khóa (độ mờ 40%, `aria-disabled`), đang xử lý (chữ giữ nguyên, thêm chỉ báo nhỏ, không nhận chạm). Vùng chạm tối thiểu 44 x 44 px.

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
