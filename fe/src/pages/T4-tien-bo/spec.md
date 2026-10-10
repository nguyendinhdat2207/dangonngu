---
id: T4
title: Tiến bộ
status: nháp
version: 0.1
route: "#/tien-bo"
depends: APP, FND, DATA, C2, C6
legacy: L-D3
---

# T4 Tiến bộ

Cho người học thấy mình đã học bao nhiêu, còn bao nhiêu câu cần ôn, và có giữ được nhịp học không.

## Bố cục

```
┌───────────────────────────┐
│ Tiếng Anh ▾          ⚙    │
│ Tiến bộ   [1 ngày|7 ngày|30 ngày] │
│                           │
│ 23        184       12    │
│ phiên     câu đã    cần ôn│
│           học       hôm nay│
│                           │
│ Mục tiêu tuần  3/5 phiên  │
│ ▓▓▓▓▓▓░░░░                │
│                           │
│ Số câu đã học mỗi ngày    │
│ ▅  ▃  ▇  ▂  ▆  ·  ▇       │
│ T5 T6 T7 CN T2 T3 T4      │
│                           │
│ Lịch ôn                   │
│ Hôm nay      12 câu       │
│ Ngày mai      8 câu       │
│ 7 ngày tới   31 câu       │
│                           │
│ Các phiên                 │
│ 14:05  Lộ trình  ■■■■■■□■ │
│ ...                       │
└───────────────────────────┘
```

## Yêu cầu

### T4-01 Khoảng thời gian

Bộ chọn ba nút liền nhau "1 ngày", "7 ngày", "30 ngày", mặc định 7 ngày, giữ trong route (`?khoang=`). Khoảng tính theo ngày lịch của máy, kết thúc ở hôm nay.

### T4-02 Ba chỉ số

Ba số liệu cạnh nhau: số phiên hoàn tất trong khoảng; số câu khác nhau đã học trong khoảng (có ít nhất một lượt làm); số câu cần ôn hôm nay (DATA-07, không phụ thuộc khoảng). Nhãn mỗi số nằm dưới số.

### T4-03 Mục tiêu tuần

"Mục tiêu tuần x/y phiên" và thanh tiến độ, tính như T1-03 (luôn 7 ngày gần nhất, không phụ thuộc khoảng). Thanh dùng `--ink`; khi đạt mục tiêu dùng `--known`.

### T4-04 Biểu đồ theo ngày

Với khoảng 7 hoặc 30 ngày: biểu đồ cột số câu đã học mỗi ngày, cột hôm nay màu `--brand`, các cột khác `--ink` độ mờ 60%, ngày không học là một chấm. Trục ngang ghi thứ (7 ngày) hoặc ngày trong tháng mỗi 5 ngày (30 ngày). Với khoảng 1 ngày: không có biểu đồ. Biểu đồ có bảng số liệu tương đương cho trình đọc màn hình. Cột hôm nay dùng `--brand` là ngoại lệ được phép của FND-02. Ở khoảng 30 ngày trên màn hẹp, cột có số liệu vẫn chạm được dù hẹp hơn 44 px (ngoại lệ của FND-14); danh sách "Các phiên" bên dưới là đường thay thế để xem từng ngày.

### T4-05 Lịch ôn

Ba dòng: "Hôm nay", "Ngày mai", "7 ngày tới", mỗi dòng là số câu đến hạn ôn theo DATA-07 (câu đã đến hạn trước hôm nay tính vào "Hôm nay"). "7 ngày tới" là số câu đến hạn từ ngày mai tới hết ngày thứ 7 tính từ hôm nay, nên gồm cả số của dòng "Ngày mai".

### T4-06 Các phiên

Danh sách phiên hoàn tất trong khoảng, mới nhất trước: giờ (và ngày nếu khác hôm nay), nguồn ("Lộ trình", "Ôn tập", "Từ khóa", "Một câu", "Kiểm tra"), dải ô (C2) thể hiện kết quả từng câu. Tối đa 20 phiên, có nút "Xem thêm".

### T4-07 Chi tiết ngày

Chạm một cột của biểu đồ mở sheet (C6) "[Thứ], [ngày]/[tháng]": các phiên của ngày đó (như T4-06) và danh sách câu đã học trong ngày (câu gốc, trạng thái).

### T4-08 Chưa có dữ liệu

Khi chưa có phiên nào: thay toàn bộ nội dung dưới bộ chọn khoảng bằng "Chưa có phiên nào. Học 8 câu đầu tiên để bắt đầu theo dõi tiến bộ." và nút chính "Học 8 câu" (mở `#/phien-hoc?nguon=lo-trinh`). "Chưa có phiên nào" nghĩa là chưa từng hoàn tất phiên nào; khi đã có phiên nhưng khoảng đang chọn không có phiên, màn vẫn hiện các chỉ số (bằng 0) và ẩn mục "Các phiên".

## Câu hỏi mở

Không còn câu hỏi mở.

### Đã trả lời (10/10/2026)

Các câu dưới đây do Claude quyết định ngày 10/10/2026 theo ủy quyền của nhóm, để làm xong bản web; khách muốn khác thì sửa ở đợt sau.

| Câu hỏi | Quyết định | Áp dụng vào |
|---|---|---|
| T4-05: "7 ngày tới" có gồm "Ngày mai" không | Có, giữ như code đang làm | T4-05 |
| T4-04: cột hôm nay dùng `--brand` trái FND-02 | Giữ, ghi là ngoại lệ của FND-02 | T4-04, FND-02 |
| T4-04: cột 30 ngày trên màn 320 px hẹp hơn vùng chạm 44 px | Giữ; danh sách Các phiên là đường thay thế, ghi là ngoại lệ của FND-14 | T4-04, FND-14 |
| T4-08: "chưa có phiên nào" nghĩa là gì | Chưa từng hoàn tất phiên nào, như code đang làm | T4-08 |

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
- 0.2 (10/10/2026): chốt các câu hỏi mở (Claude quyết định theo ủy quyền của nhóm).
