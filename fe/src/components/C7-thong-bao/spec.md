---
id: C7
title: Thông báo ngắn
status: nháp
version: 0.1
depends: FND
legacy: pwa-update
---

# C7 Thông báo ngắn

Thông báo tạm thời xác nhận thao tác hoặc báo lỗi có thể thử lại.

## Yêu cầu

### C7-01 Vị trí và hiển thị

Hiện ở đáy khung, ngay trên thanh tab (hoặc cách đáy 16 px khi không có thanh tab), rộng tối đa 480 px, nền `--ink`, chữ `--paper`, bo góc 10 px, chữ `--t-body`. Xuất hiện trong 150 ms (FND-11).

### C7-02 Thời gian và hành động

Tự ẩn sau 3 giây; thông báo có nút hành động (ví dụ "Cập nhật", "Thử lại") ở lại 6 giây. Tối đa một thông báo tại một thời điểm; thông báo mới thay thông báo cũ.

### C7-03 Trợ năng

Nội dung được đọc qua `role="status"` (xác nhận) hoặc `role="alert"` (lỗi). Thông báo không lấy focus.

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
