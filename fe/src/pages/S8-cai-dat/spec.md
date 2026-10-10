---
id: S8
title: Cài đặt
status: nháp
version: 0.1
route: "#/cai-dat"
depends: APP, FND, DATA, C3, C6, C7
legacy: L-D4, L-D8, nút giao diện ở header L-S2
---

# S8 Cài đặt

Mở từ nút Cài đặt trên thanh trên cùng (APP-02). Hiển thị như một khu, có nút quay lại ở đầu màn thay cho tên ngôn ngữ; thanh tab vẫn hiện, không mục nào đang chọn.

## Yêu cầu

### S8-01 Học tập

Nhóm "Học tập" gồm: "Mục tiêu mỗi tuần" với bộ tăng giảm từ 1 đến 21 phiên (mặc định 5), lưu ngay khi đổi; "Ngôn ngữ đang học" hiện tên ngôn ngữ (và tên bộ nội dung khi ngôn ngữ có nhiều bộ), chạm mở sheet Đổi ngôn ngữ (APP-06), nơi đổi được cả ngôn ngữ lẫn bộ nội dung.

### S8-02 Giọng đọc

Nhóm "Âm thanh", mục "Giọng đọc" hiện tên giọng đang dùng; chạm mở sheet (C6) "Giọng đọc" gồm:
- Chọn "Giọng cho": ngôn ngữ đang học hoặc Tiếng Việt.
- Danh sách giọng có trên thiết bị khớp ngôn ngữ đó (theo `lang` của giọng), mỗi dòng có nút "Nghe thử" đọc một câu mẫu của ngôn ngữ đó. Mục đầu là "Mặc định của thiết bị".
- "Tốc độ đọc": 0,75x, 1x, 1,25x (mặc định 1x).
- Nút chính "Xong".
Khi không có giọng nào: "Thiết bị chưa có giọng [tên ngôn ngữ]. Thêm giọng trong cài đặt hệ thống của thiết bị rồi mở lại app." Lựa chọn lưu theo từng ngôn ngữ (DATA-06).

### S8-03 Âm thanh ngoại tuyến

Mục "Âm thanh ngoại tuyến" chỉ hiển thị khi ngôn ngữ đang học có gói âm thanh dựng sẵn. Bản đầu chưa hỗ trợ tải gói, nên mục này không hiển thị với mọi ngôn ngữ (dữ liệu hiện chỉ có gói tiếng Lào).

### S8-04 Giao diện

Nhóm "Giao diện" gồm ba lựa chọn loại radio: "Theo thiết bị", "Sáng", "Tối" (FND-03). Đổi là áp dụng ngay.

### S8-05 Dữ liệu

Nhóm "Dữ liệu" gồm:
- "Xuất tiến độ": tải file `vitasr-tien-do-[mã ngôn ngữ]-[yyyy-mm-dd].json` chứa tiến độ của ngôn ngữ đang học và cài đặt.
- "Nhập tiến độ": chọn file JSON; kiểm tra đúng cấu trúc DATA-06 và đúng ngôn ngữ; sheet xác nhận "Thay tiến độ [tên ngôn ngữ] hiện tại bằng file này?"; xong thì thông báo ngắn "Đã nhập tiến độ". File sai: thông báo lỗi "File không phải tiến độ VITASR hoặc của ngôn ngữ khác." và không thay đổi gì.
- "Xóa tiến độ [tên ngôn ngữ]": sheet xác nhận yêu cầu gõ đúng tên ngôn ngữ (ví dụ "Tiếng Anh") mới mở nút "Xóa"; xong thì thông báo ngắn "Đã xóa tiến độ" và về T1.

### S8-06 Trợ giúp

Nhóm "Trợ giúp" gồm "Xem lại hướng dẫn" (mở S9 trên T1) và dòng "Phiên bản [số phiên bản app]" không chạm được.

## Câu hỏi mở

- S8-04 ghi "Theo thiết bị", FND-03 ghi "Theo hệ thống". Code dùng "Theo thiết bị". Nhóm chọn một tên cho cả hai chỗ.
- S8-05: câu báo lỗi "File không phải tiến độ VITASR hoặc của ngôn ngữ khác." chưa nói cần làm gì, trái với FND-12 (mọi thông báo lỗi có hướng xử lý). Đề xuất thêm: "Chọn file đã xuất từ Cài đặt khi đang học ngôn ngữ này." Chờ nhóm duyệt chữ trước khi đổi.
- S8-05: tiếng Anh có hai bộ nội dung dùng chung dải id câu, nên code chỉ nhận file đúng cả ngôn ngữ lẫn bộ nội dung đang học; file của bộ kia bị báo lỗi như file của ngôn ngữ khác.
- S8-05: spec chưa đặt tên nút trong hai sheet xác nhận. Code dùng "Hủy" và "Nhập tiến độ" (sheet nhập, nội dung là câu hỏi trong spec), "Hủy" và "Xóa" (sheet xóa, kèm dòng: Gõ "[tên ngôn ngữ]" để xác nhận. Tiến độ đã xóa không lấy lại được.). Tên gõ vào được so khớp không phân biệt hoa thường nhưng phải đủ dấu.
- S8-02: giọng Tiếng Việt chọn và lưu được nhưng hiện chưa màn nào đọc nghĩa tiếng Việt thành tiếng. Có cần nút nghe nghĩa ở thẻ câu không?
- S8: spec chưa nói phía phải thanh trên cùng khi đang ở S8. Code chỉ hiện nút "Quay lại" bên trái, bỏ nút Cài đặt (đang ở chính màn này).

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
- 0.2 (08/10/2026): hỗ trợ hai bộ nội dung tiếng Anh (English Fluency và Global English).
