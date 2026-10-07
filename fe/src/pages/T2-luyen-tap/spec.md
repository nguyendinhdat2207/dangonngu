---
id: T2
title: Luyện tập
status: nháp
version: 0.1
route: "#/luyen-tap"
depends: APP, FND, DATA, C3, C6
legacy: L-D6 (lối vào TEST NOW), L-D7
---

# T2 Luyện tập

Gom các cách luyện ngoài lộ trình vào một chỗ.

## Bố cục

```
┌───────────────────────────┐
│ Tiếng Anh ▾          ⚙    │
│ Luyện tập                 │
│                           │
│ Ôn câu cần ôn         12  │
│ Các câu bạn đánh dấu      │
│ cần ôn hoặc trả lời sai.  │
│ ───────────────────────── │
│ Học theo từ khóa          │
│ Tìm câu có chữ như đặt    │
│ phòng, ăn uống, sân bay.  │
│ ───────────────────────── │
│ Kiểm tra nhanh            │
│ Nghe hiểu, nghe theo cụm, │
│ sắp xếp câu.              │
└───────────────────────────┘
```

## Yêu cầu

### T2-01 Danh sách cách luyện

Màn có tiêu đề "Luyện tập" (`--t-lg`) và ba mục xếp dọc, ngăn bằng đường kẻ `--line` (không dùng thẻ): Ôn câu cần ôn, Học theo từ khóa, Kiểm tra nhanh. Mỗi mục có tên (`--t-body` đậm 600), một dòng mô tả (`--t-sm`, `--muted`) và cả mục là một vùng chạm. Màn không có nút chính.

### T2-02 Ôn câu cần ôn

Bên phải tên mục là số câu Cần ôn hôm nay (DATA-07). Chạm mở `#/phien-hoc?nguon=on-tap`. Khi số đó là 0: mục bị khóa và mô tả đổi thành "Không có câu cần ôn hôm nay."

### T2-03 Học theo từ khóa

Chạm mở sheet (C6) "Học theo từ khóa" gồm: ô tìm (placeholder "Ví dụ: đặt phòng, airport"), các chip gợi ý "đặt phòng", "ăn uống", "sân bay", "mua sắm" (chạm chip là điền vào ô tìm), dòng "Tìm thấy N câu", xem trước tối đa 5 câu đầu (câu gốc và nghĩa), và nút chính "Học 8 câu đầu" (mở `#/phien-hoc?nguon=tu-khoa&q=…&nhom=1`). Các nhóm 8 câu tiếp theo mở từ nút "Nhóm tiếp" ở tổng kết phiên (S3-06). Tìm theo DATA-12, cập nhật sau khi ngừng gõ 250 ms.

### T2-04 Kiểm tra nhanh

Chạm mở `#/kiem-tra` với nhóm câu là unit đang học trong lộ trình.

### T2-05 Không có kết quả

Trong sheet T2-03, khi không có câu nào khớp: thay phần xem trước bằng "Không có câu nào chứa "[từ khóa]". Thử từ khác hoặc từ tiếng Anh." và khóa nút "Học 8 câu đầu".

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
