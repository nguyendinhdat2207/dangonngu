---
id: T3
title: Thư viện
status: nháp
version: 0.1
route: "#/thu-vien"
depends: APP, FND, DATA, C1, C6
legacy: Danh sách dữ liệu trong L-S2
---

# T3 Thư viện

Toàn bộ câu của ngôn ngữ đang học, để tìm, lọc và xem chi tiết.

## Bố cục

```
┌───────────────────────────┐
│ Tiếng Anh ▾          ⚙    │
│ [ Tìm câu hoặc nghĩa    ] │
│ Unit ▾   Trạng thái ▾     │
│ 4.096 câu                 │
│                           │
│ 0001  I want to...      ○ │  ○ chưa học, ✓ đã nhớ, ↻ cần ôn
│       Tôi muốn...         │
│ 0257  want to know...   ✓ │
│       muốn biết...        │
│ ...                       │
│                           │
│ ‹ Trước   1/128    Sau ›  │
└───────────────────────────┘
```

## Yêu cầu

### T3-01 Danh sách câu

Mỗi trang 32 câu. Mỗi dòng: số `id` 4 chữ số (`--t-sm`, `--muted`, chữ số đều độ rộng), câu gốc (`--t-body`, cắt ở 2 dòng), nghĩa (Literata `--t-sm`, cắt ở 1 dòng), và biểu tượng trạng thái học bên phải (DATA-07): vòng rỗng `--muted` cho Chưa học, dấu tích `--known` cho Đã nhớ, vòng lặp `--review` cho Cần ôn. Các dòng ngăn bằng đường kẻ `--line`. Phía trên danh sách là số câu khớp ("4.096 câu").

### T3-02 Tìm kiếm

Ô tìm ở đầu màn, placeholder "Tìm câu hoặc nghĩa", có nút xóa khi có chữ. Tìm theo DATA-12, cập nhật sau khi ngừng gõ 250 ms. Từ khóa giữ trong route (`?q=`).

### T3-03 Bộ lọc

Hai bộ lọc dạng nút mở danh sách chọn: "Unit" (Tất cả, rồi từng unit "Unit n: title") và "Trạng thái" (Tất cả, Chưa học, Đã nhớ, Cần ôn). Bộ lọc đang dùng hiện tên giá trị thay cho nhãn mặc định. Unit giữ trong route (`?unit=`). Tìm kiếm và bộ lọc kết hợp với nhau.

### T3-04 Phân trang

Dưới danh sách: "Trước", "Trang x/y", "Sau"; "Trước" khóa ở trang đầu, "Sau" khóa ở trang cuối. Đổi từ khóa hoặc bộ lọc thì về trang 1. Chuyển trang thì cuộn về đầu danh sách. Ẩn phân trang khi chỉ có một trang.

### T3-05 Chi tiết câu

Chạm một dòng mở sheet (C6) "Câu [id]": thẻ câu (C1) hiện đầy đủ, dòng "Unit n: title", trạng thái học bằng chữ và lần học gần nhất ("Học lần cuối: 3 ngày trước" hoặc "Chưa học"), nút chính "Học câu này" mở `#/phien-hoc?nguon=cau&id=[id]`.

### T3-06 Không có kết quả

Khi không có câu nào khớp: "Không có câu nào khớp với tìm kiếm và bộ lọc hiện tại." và nút phụ "Xóa tìm kiếm và bộ lọc".

### T3-07 Bố cục máy tính

Từ 900 px: hai cột. Danh sách bên trái (tối đa 480 px); chi tiết câu (nội dung như T3-05) hiển thị ở cột phải thay cho sheet, mặc định là câu đầu của trang.

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
