---
id: APP
title: Khung app
status: nháp
version: 0.1
depends: FND, DATA, C5, C6, C7
legacy: L-S0, L-S2 (header), pwa-update
---

# APP Khung app

Khung bao quanh mọi trang: điều hướng, route, thanh trên cùng, bố cục theo khổ màn hình, trạng thái toàn cục và các ràng buộc khi chạy trong iframe.

## Yêu cầu

### APP-01 Bốn khu chính

App có đúng 4 khu chính, theo thứ tự: T1 Học, T2 Luyện tập, T3 Thư viện, T4 Tiến bộ. Dưới 900 px chuyển khu bằng thanh tab dưới đáy (C5). Từ 900 px trở lên dùng thanh điều hướng dọc bên trái rộng 220 px, cùng 4 mục và cùng thứ tự.

### APP-02 Thanh trên cùng

Mọi khu chính có thanh trên cùng cao 56 px gồm: bên trái là tên ngôn ngữ đang học kèm mũi tên xuống (chạm mở sheet Đổi ngôn ngữ, APP-06); bên phải là nút Cài đặt (icon bánh răng, nhãn trợ năng "Cài đặt") mở S8.

Cho tới khi biết vị trí nút đóng của trang chính (câu hỏi mở 1), nút Cài đặt đặt cách mép phải 64 px để chừa vùng 56 x 56 px ở góc trên bên phải.

### APP-03 Màn toàn trang

S1 Chọn ngôn ngữ, S3 Phiên học, S5 Kiểm tra nhanh chiếm toàn bộ khung, ẩn thanh tab và thanh trên cùng. S3 và S5 có nút "Thoát" ở góc trên bên trái.

### APP-04 Bảng route

Route dùng hash (QD-02). Đây là nguồn chân lý cho điều hướng.

| Route | Màn | Ghi chú |
|---|---|---|
| `#/chon-ngon-ngu` | S1 | |
| `#/hoc` | T1 | Route mặc định khi đã chọn ngôn ngữ |
| `#/luyen-tap` | T2 | |
| `#/thu-vien` | T3 | Tham số tùy chọn `?unit=`, `?q=` |
| `#/tien-bo` | T4 | Tham số tùy chọn `?khoang=1|7|30` |
| `#/cai-dat` | S8 | Mở như một khu, có nút quay lại |
| `#/phien-hoc` | S3 | Tham số `?nguon=lo-trinh|on-tap|tu-khoa|cau` và tham số theo nguồn |
| `#/kiem-tra` | S5 | Tham số tùy chọn `?unit=` |

Route không hợp lệ chuyển về `#/hoc` (hoặc `#/chon-ngon-ngu` nếu chưa chọn ngôn ngữ). Nút Back của trình duyệt đi ngược đúng lịch sử route.

### APP-05 Khởi động

Khi mở app: nếu chưa có ngôn ngữ đã lưu thì vào S1; nếu đã có thì vào T1 với ngôn ngữ đó. Trong lúc tải dữ liệu, hiện khung xương (APP-08), không hiện màn trắng quá 300 ms.

### APP-06 Sheet Đổi ngôn ngữ

Sheet (C6) liệt kê các ngôn ngữ như S1 (cùng nội dung dòng, S1-02 và S1-03), đánh dấu ngôn ngữ đang học. Chọn ngôn ngữ khác thì đóng sheet, tải dữ liệu ngôn ngữ đó và về T1. Tiến độ của từng ngôn ngữ giữ riêng.

### APP-07 Bố cục theo khổ màn hình

| Chiều rộng | Bố cục |
|---|---|
| 320 đến 599 px | Một cột, lề 16 px, thanh tab dưới đáy, sheet trượt từ dưới lên |
| 600 đến 899 px | Một cột, lề 24 px, nội dung rộng tối đa 560 px nằm giữa, chữ trong khối vẫn căn trái |
| 900 px trở lên | Thanh điều hướng dọc trái 220 px; T1 và T3 hai cột (nêu trong spec trang); sheet hiển thị thành hộp thoại giữa màn |

Không có thanh cuộn ngang ở bất kỳ khổ nào từ 320 px.

### APP-08 Trạng thái toàn cục

| Trạng thái | Hiển thị |
|---|---|
| Đang tải dữ liệu | Khung xương đúng hình khối sẽ hiện (thẻ câu, danh sách); không dùng vòng xoay giữa màn |
| Lỗi tải dữ liệu | "Không tải được danh sách câu. Kiểm tra kết nối rồi bấm Thử lại." và nút "Thử lại" |
| Ngoại tuyến | Dải mỏng ngay dưới thanh trên cùng: "Đang ngoại tuyến. Tiến độ vẫn được lưu trên máy." Tự ẩn khi có mạng lại |
| Bộ nhớ trình duyệt bị chặn | Dải cảnh báo: "Trình duyệt đang chặn lưu dữ liệu, tiến độ sẽ mất khi đóng app." |

### APP-09 Chạy trong iframe

App chạy đúng khi nằm trong iframe của trang khác và khi mở trực tiếp. Không đọc hay ghi `window.top` / `window.parent`, không dựa vào postMessage, không yêu cầu đăng nhập. Tôn trọng vùng an toàn của màn hình (`env(safe-area-inset-*)`).

### APP-10 Ngoại tuyến và cập nhật

Sau lần mở đầu tiên có mạng, app mở lại được khi ngoại tuyến với ngôn ngữ đã tải. Khi có bản mới, hiện thông báo ngắn (C7) "Có bản cập nhật" với nút "Cập nhật"; chỉ tải lại khi người dùng bấm, và không hiện thông báo này khi đang ở S3 hoặc S5.

### APP-11 Một lớp phủ tại một thời điểm

Tại mỗi thời điểm có tối đa một sheet hoặc hộp thoại mở. Mở sheet mới thì sheet đang mở phải đóng trước.

## Câu hỏi mở

- Kích thước khung iframe ở desktop và vị trí nút đóng của trang chính (ảnh hưởng APP-02, APP-07).

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
