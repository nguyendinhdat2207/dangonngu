---
id: C6
title: Sheet
status: nháp
version: 0.1
depends: FND
---

# C6 Sheet

Lớp phủ dùng cho: Đổi ngôn ngữ (APP-06), Tìm câu theo từ khóa (T2-03), Chi tiết câu (T3-05), Chi tiết ngày (T4-07), Giọng đọc (S8-02), xác nhận thoát phiên (S3-07, S5-08) và xác nhận xóa tiến độ (S8-05).

## Yêu cầu

### C6-01 Dạng hiển thị

Dưới 900 px: trượt từ dưới lên (220 ms), rộng hết màn, cao tối đa 90% khung, bo góc trên 16 px, có tay nắm 36 x 4 px ở giữa mép trên, nền `--surface`, đổ bóng (FND-09); phía sau là lớp nền `--ink` độ mờ 40%. Từ 900 px: hộp thoại giữa màn, rộng tối đa 560 px, bo góc 16 px.

### C6-02 Tiêu đề và đóng

Mỗi sheet có tiêu đề `--t-lg` và nút đóng (icon x, nhãn trợ năng "Đóng") ở góc trên bên phải của sheet. Đóng được bằng: nút đóng, chạm lớp nền phía sau, phím Esc, và vuốt xuống trên tay nắm (dưới 900 px). Sheet xác nhận (thoát phiên, xóa tiến độ) không đóng khi chạm lớp nền, chỉ đóng bằng các nút của nó hoặc Esc.

### C6-03 Focus

Khi mở: focus chuyển vào phần tử đầu tiên có thể thao tác trong sheet; Tab không ra ngoài sheet. Khi đóng: focus trả về phần tử đã mở sheet. Sheet có `role="dialog"`, `aria-modal="true"` và `aria-labelledby` trỏ tới tiêu đề.

### C6-04 Nội dung dài

Nội dung vượt chiều cao thì cuộn bên trong sheet; tiêu đề và nút hành động chính (nếu có) đứng yên. Cuộn trong sheet không làm cuộn trang phía sau.

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
