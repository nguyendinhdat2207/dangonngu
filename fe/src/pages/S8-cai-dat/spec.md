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

Mở từ nút Cài đặt trên thanh trên cùng (APP-02). Hiển thị như một khu, có nút quay lại ở đầu màn thay cho tên ngôn ngữ và không có nút Cài đặt ở bên phải; thanh tab vẫn hiện, không mục nào đang chọn.

## Yêu cầu

### S8-01 Học tập

Nhóm "Học tập" gồm: "Mục tiêu mỗi tuần" với bộ tăng giảm từ 1 đến 21 phiên (mặc định 5), lưu ngay khi đổi; "Ngôn ngữ đang học" hiện tên ngôn ngữ (và tên bộ nội dung khi ngôn ngữ có nhiều bộ), chạm mở sheet Đổi ngôn ngữ (APP-06), nơi đổi được cả ngôn ngữ lẫn bộ nội dung.

### S8-02 Giọng đọc

Nhóm "Âm thanh", mục "Giọng đọc" hiện tên giọng đang dùng; chạm mở sheet (C6) "Giọng đọc" gồm:
- Chọn "Giọng cho": ngôn ngữ đang học hoặc Tiếng Việt.
- Danh sách giọng có trên thiết bị khớp ngôn ngữ đó (theo `lang` của giọng), mỗi dòng có nút "Nghe thử" đọc một câu mẫu của ngôn ngữ đó. Mục đầu là "Mặc định của thiết bị".
- "Tốc độ đọc": 0,75x, 1x, 1,25x (mặc định 1x).
- Nút chính "Xong".
Khi không có giọng nào: "Thiết bị chưa có giọng [tên ngôn ngữ]. Thêm giọng trong cài đặt hệ thống của thiết bị rồi mở lại app." Lựa chọn lưu theo từng ngôn ngữ (DATA-06). Bản này chưa có chỗ nào đọc nghĩa tiếng Việt thành tiếng; giọng Tiếng Việt chọn được để dùng khi có tính năng đó.

### S8-03 Âm thanh ngoại tuyến

Mục "Âm thanh ngoại tuyến" chỉ hiển thị khi ngôn ngữ đang học có gói âm thanh dựng sẵn. Bản đầu chưa hỗ trợ tải gói, nên mục này không hiển thị với mọi ngôn ngữ (dữ liệu hiện chỉ có gói tiếng Lào).

### S8-04 Giao diện

Nhóm "Giao diện" gồm ba lựa chọn loại radio: "Theo thiết bị", "Sáng", "Tối" (FND-03). Đổi là áp dụng ngay.

### S8-05 Tiến độ

Nhóm "Tiến độ" gồm:
- "Xuất tiến độ": tải file `vitasr-tien-do-[mã ngôn ngữ]-[yyyy-mm-dd].json` chứa tiến độ của ngôn ngữ đang học và cài đặt.
- "Nhập tiến độ": chọn tệp JSON; kiểm tra đúng cấu trúc DATA-06, đúng ngôn ngữ và đúng bộ nội dung đang học (tiếng Anh có hai bộ dùng chung dải id câu); sheet xác nhận "Thay tiến độ [tên] hiện tại bằng tệp này?" với nút "Hủy" và "Nhập tiến độ"; xong thì thông báo ngắn "Đã nhập tiến độ". Tệp sai: thông báo lỗi "Tệp này không phải tiến độ VITASR của [tên]. Chọn tệp đã xuất bằng Xuất tiến độ khi đang học [tên]." và không thay đổi gì. [tên] là tên ngôn ngữ, kèm tên bộ trong ngoặc khi ngôn ngữ có nhiều bộ, ví dụ "Tiếng Anh (Global English)".
- "Xóa tiến độ [tên ngôn ngữ]": sheet xác nhận có dòng "Gõ "[tên ngôn ngữ]" để xác nhận. Tiến độ đã xóa không lấy lại được.", ô gõ, nút "Hủy" và "Xóa"; "Xóa" chỉ mở khi gõ đúng tên ngôn ngữ (không phân biệt hoa thường nhưng phải đủ dấu); xong thì thông báo ngắn "Đã xóa tiến độ" và về T1.

### S8-06 Trợ giúp

Nhóm "Trợ giúp" gồm "Xem lại hướng dẫn" (mở S9 trên T1) và dòng "Phiên bản [số phiên bản app]" không chạm được.

## Câu hỏi mở

Không còn câu hỏi mở.

### Đã trả lời (10/10/2026)

Các câu dưới đây do Claude quyết định ngày 10/10/2026 theo ủy quyền của nhóm, để làm xong bản web; khách muốn khác thì sửa ở đợt sau.

| Câu hỏi | Quyết định | Áp dụng vào |
|---|---|---|
| S8-04 ghi "Theo thiết bị", FND-03 ghi "Theo hệ thống" | Dùng "Theo thiết bị" ở cả hai chỗ | S8-04, FND-03 |
| S8-05: câu báo lỗi nhập tệp chưa có hướng xử lý, có chữ "File" | Câu mới có hướng xử lý, dùng "tệp"; nhóm đổi tên thành "Tiến độ" | S8-05, FND-12 |
| S8-05: tiếng Anh có hai bộ dùng chung dải id câu | Chỉ nhận tệp đúng cả ngôn ngữ lẫn bộ nội dung đang học | S8-05 |
| S8-05: tên nút trong hai sheet xác nhận | Ghi vào spec đúng như code: "Hủy"/"Nhập tiến độ", "Hủy"/"Xóa" | S8-05 |
| S8-02: có cần nút nghe nghĩa tiếng Việt không | Không ở bản này; giữ lựa chọn giọng Tiếng Việt | S8-02, `docs/new/ui-spec.md` mục 3 |
| S8: thanh trên cùng khi đang ở S8 | Chỉ có nút "Quay lại" bên trái, không có nút Cài đặt | Phần mở đầu S8 |

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
- 0.2 (08/10/2026): hỗ trợ hai bộ nội dung tiếng Anh (English Fluency và Global English).
- 0.3 (10/10/2026): chốt các câu hỏi mở (Claude quyết định theo ủy quyền của nhóm): nhóm "Dữ liệu" đổi tên thành "Tiến độ"; câu báo lỗi nhập tệp có hướng xử lý; ghi tên nút sheet xác nhận; không có nghe nghĩa ở bản này.
