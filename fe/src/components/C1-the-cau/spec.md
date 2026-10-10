---
id: C1
title: Thẻ câu
status: nháp
version: 0.1
depends: FND, C2, C3
legacy: thẻ "Câu đang học" trong L-S2, L-D2
---

# C1 Thẻ câu

Thành phần trung tâm của app: hiển thị một câu với nghĩa, câu gốc và nút nghe. Dùng ở T1, S3a, sheet Chi tiết câu (T3).

## Bố cục

```
┌─────────────────────────────────────────┐
│ ■ ■ ■ ▣ □ □ □ □          Câu 4/8        │  dải 8 ô (C2), tùy chọn
│                                         │
│ Tôi muốn đặt một bàn cho hai người.     │  nghĩa (Literata, --t-lg)
│                                         │
│ I'd like to book a table for two.       │  câu gốc (Lexend, FND-06)
│                                         │
│  (◉ Nghe)                (↻ Nghe lặp)   │
└─────────────────────────────────────────┘
```

Nền `--surface`, bo góc 16 px, đệm 24 px (16 px dưới 360 px). Thứ tự đọc: nghĩa trước, câu gốc sau.

## Yêu cầu

### C1-01 Cấu trúc

Thẻ gồm, từ trên xuống: dải 8 ô và nhãn "Câu n/N" (chỉ khi được truyền vào), nghĩa, câu gốc, hàng nút gồm "Nghe" bên trái và "Nghe lặp" bên phải. Nghĩa dùng Literata `--t-lg`; câu gốc dùng font theo FND-04 và cỡ theo FND-06.

### C1-02 Trạng thái che câu gốc

Khi thẻ ở chế độ che: vùng câu gốc là một khối nền `--line` cao bằng một dòng câu, có chữ "Chạm để hiện câu gốc"; nút Nghe và Nghe lặp bị khóa. Chạm vào khối, chạm vào thẻ, hoặc nhấn Space / Enter khi thẻ có focus thì hiện câu gốc (chuyển động 180 ms, FND-11) và phát sự kiện "đã hiện".

### C1-03 Trạng thái hiện đầy đủ

Câu gốc hiện đầy đủ, nút Nghe và Nghe lặp dùng được. Không có cách nào che lại câu gốc trong cùng một lượt hiển thị câu.

### C1-04 Phát âm

"Nghe" đọc câu gốc một lần bằng giọng đã chọn cho ngôn ngữ đó (S8-02) và tốc độ đã chọn. Khi đang đọc, nút đổi thành "Dừng". "Nghe lặp" đọc lặp lại câu cách nhau 1,5 giây cho tới khi bấm "Dừng" hoặc rời khỏi thẻ. Rời thẻ (đổi câu, đổi màn) thì dừng đọc ngay.

### C1-05 Không có giọng đọc

Khi thiết bị không có giọng nào cho ngôn ngữ đích: nút Nghe và Nghe lặp bị khóa, dưới hàng nút hiện "Thiết bị chưa có giọng [tên ngôn ngữ]. Mở Cài đặt > Giọng đọc." Phần "Cài đặt > Giọng đọc" là liên kết mở sheet Giọng đọc (S8-02).

### C1-06 Dòng Cách dùng

Chỉ khi item có `noteVi` (DATA-04): hiện thêm dòng "Cách dùng: …" dưới câu gốc, Literata `--t-sm`, màu `--muted`. Không có `noteVi` thì không có khoảng trống thay thế.

### C1-07 Phiên âm

Chỉ khi item có `furigana`: câu gốc hiển thị bằng thẻ `ruby`. Chỉ khi có `reading` (và không có `furigana`): hiện phiên âm dưới câu gốc, `--t-sm`.

### C1-08 Thuộc tính ngôn ngữ

Phần tử câu gốc có `lang` bằng mã ngôn ngữ đích (ví dụ `en`); phần tử nghĩa có `lang="vi"`.

## Câu hỏi mở

- Liên kết "Cài đặt > Giọng đọc" trong câu báo thiếu giọng (C1-05) nằm trong dòng chữ nên không cao 44 px như FND-14 yêu cầu. Giữ dạng liên kết trong câu (WCAG cho phép ngoại lệ với liên kết trong đoạn văn) hay đổi thành nút riêng?

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
