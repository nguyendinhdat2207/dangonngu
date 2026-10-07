---
id: C5
title: Thanh tab
status: nháp
version: 0.1
depends: FND
---

# C5 Thanh tab

Điều hướng giữa 4 khu chính (APP-01).

## Yêu cầu

### C5-01 Thanh dưới đáy

Dưới 900 px: thanh cố định dưới đáy, cao 64 px cộng vùng an toàn đáy, nền `--surface`, viền trên 1 px `--line`. 4 mục chia đều, mỗi mục có icon 24 px phía trên và nhãn `--t-sm` phía dưới: Học, Luyện tập, Thư viện, Tiến bộ.

### C5-02 Thanh dọc

Từ 900 px: thanh dọc bên trái rộng 220 px, cao hết màn, nền `--paper`, viền phải 1 px `--line`. Mỗi mục là một hàng cao 48 px gồm icon và nhãn `--t-body`, căn trái.

### C5-03 Mục đang chọn

Mục đang chọn: nhãn `--ink` đậm 600 và một gạch 2 px `--ink` (phía trên ở thanh đáy, bên trái ở thanh dọc). Mục khác: `--muted`. Mục đang chọn có `aria-current="page"`.

### C5-04 Mục có số

Mục Luyện tập hiện số câu cần ôn hôm nay (DATA-07) trong một nhãn tròn nhỏ khi số đó lớn hơn 0. Nhãn trợ năng của mục: "Luyện tập, 12 câu cần ôn".

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
