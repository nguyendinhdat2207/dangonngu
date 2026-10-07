# Ma trận truy vết spec, code và acceptance

File sinh tự động bởi `node scripts/spec.mjs trace` lúc 2026-10-07 04:50 UTC. Không sửa tay.

Tổng: 132 yêu cầu, 158 mục acceptance, 0 ghi chú @spec/@ac trong code.

Yêu cầu chưa có code gắn @spec: 132/132.

## G Tổng quan giao diện bản mới

Spec: [docs/new/ui-spec.md](../../docs/new/ui-spec.md) · Acceptance: [docs/new/acceptance.md](../../docs/new/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| G-01 | Bắt đầu học không cần hướng dẫn | G-AC01 | - | - |
| G-02 | Hiểu được tiến bộ của mình | G-AC02 | - | - |
| G-03 | Không nhầm thao tác đánh giá | G-AC03 | - | - |
| G-04 | Gọn hơn bản cũ | G-AC04 | - | - |
| G-05 | Không mang dấu hiệu giao diện do AI dựng mặc định | G-AC05 | - | - |

## APP Khung app

Spec: [fe/src/app/spec.md](../../fe/src/app/spec.md) · Acceptance: [fe/src/app/acceptance.md](../../fe/src/app/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| APP-01 | Bốn khu chính | APP-AC01, APP-AC02 | - | - |
| APP-02 | Thanh trên cùng | APP-AC03 | - | - |
| APP-03 | Màn toàn trang | APP-AC04 | - | - |
| APP-04 | Bảng route | APP-AC02, APP-AC05 | - | - |
| APP-05 | Khởi động | APP-AC06, APP-AC07 | - | - |
| APP-06 | Sheet Đổi ngôn ngữ | APP-AC08 | - | - |
| APP-07 | Bố cục theo khổ màn hình | APP-AC09 | - | - |
| APP-08 | Trạng thái toàn cục | APP-AC07, APP-AC10, APP-AC11 | - | - |
| APP-09 | Chạy trong iframe | APP-AC12, APP-AC13 | - | - |
| APP-10 | Ngoại tuyến và cập nhật | APP-AC14, APP-AC15 | - | - |
| APP-11 | Một lớp phủ tại một thời điểm | APP-AC16 | - | - |

## FND Nền tảng thiết kế

Spec: [fe/src/foundation/spec.md](../../fe/src/foundation/spec.md) · Acceptance: [fe/src/foundation/acceptance.md](../../fe/src/foundation/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| FND-01 | Token màu | FND-AC01, FND-AC02 | - | - |
| FND-02 | Quy tắc dùng màu | FND-AC02, FND-AC03 | - | - |
| FND-03 | Sáng và tối | FND-AC04 | - | - |
| FND-04 | Font | FND-AC05 | - | - |
| FND-05 | Thang chữ | FND-AC06 | - | - |
| FND-06 | Cỡ câu theo độ dài | FND-AC07 | - | - |
| FND-07 | Khoảng cách và lề | FND-AC08 | - | - |
| FND-08 | Bo góc theo vai trò | FND-AC08 | - | - |
| FND-09 | Đổ bóng | FND-AC08 | - | - |
| FND-10 | Icon | FND-AC09 | - | - |
| FND-11 | Chuyển động | FND-AC10, FND-AC11 | - | - |
| FND-12 | Giọng văn và từ ngữ | FND-AC12, FND-AC13 | - | - |
| FND-13 | Quy tắc tránh giao diện kiểu AI | FND-AC14 | - | - |
| FND-14 | Trợ năng chung | FND-AC15, FND-AC16, FND-AC17 | - | - |

## DATA Dữ liệu và tiến độ

Spec: [fe/src/data/spec.md](../../fe/src/data/spec.md) · Acceptance: [fe/src/data/acceptance.md](../../fe/src/data/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| DATA-01 | Manifest | DATA-AC01 | - | - |
| DATA-02 | File ngôn ngữ | DATA-AC01, DATA-AC02 | - | - |
| DATA-03 | File unit | DATA-AC01, DATA-AC03 | - | - |
| DATA-04 | Trường tùy chọn | DATA-AC04 | - | - |
| DATA-05 | Nguồn dữ liệu thay được | DATA-AC02, DATA-AC05 | - | - |
| DATA-06 | Lưu tiến độ | DATA-AC06, DATA-AC07 | - | - |
| DATA-07 | Quy tắc câu cần ôn | DATA-AC08, DATA-AC09 | - | - |
| DATA-08 | Đáp án nhiễu | DATA-AC10 | - | - |
| DATA-09 | Fixture | DATA-AC11, DATA-AC12 | - | - |
| DATA-10 | Không gọi mạng ngoài phạm vi | DATA-AC13 | - | - |
| DATA-11 | Lộ trình học | DATA-AC14 | - | - |
| DATA-12 | Tìm kiếm | DATA-AC15 | - | - |

## C1 Thẻ câu

Spec: [fe/src/components/C1-the-cau/spec.md](../../fe/src/components/C1-the-cau/spec.md) · Acceptance: [fe/src/components/C1-the-cau/acceptance.md](../../fe/src/components/C1-the-cau/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| C1-01 | Cấu trúc | C1-AC01 | - | - |
| C1-02 | Trạng thái che câu gốc | C1-AC02 | - | - |
| C1-03 | Trạng thái hiện đầy đủ | C1-AC03 | - | - |
| C1-04 | Phát âm | C1-AC04, C1-AC05 | - | - |
| C1-05 | Không có giọng đọc | C1-AC06 | - | - |
| C1-06 | Dòng Cách dùng | C1-AC07 | - | - |
| C1-07 | Phiên âm | C1-AC07 | - | - |
| C1-08 | Thuộc tính ngôn ngữ | C1-AC08 | - | - |

## C2 Dải 8 ô

Spec: [fe/src/components/C2-dai-8-o/spec.md](../../fe/src/components/C2-dai-8-o/spec.md) · Acceptance: [fe/src/components/C2-dai-8-o/acceptance.md](../../fe/src/components/C2-dai-8-o/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| C2-01 | Kích thước và số ô | C2-AC01 | - | - |
| C2-02 | Trạng thái ô | C2-AC02 | - | - |
| C2-03 | Trợ năng | C2-AC03 | - | - |

## C3 Nút

Spec: [fe/src/components/C3-nut/spec.md](../../fe/src/components/C3-nut/spec.md) · Acceptance: [fe/src/components/C3-nut/acceptance.md](../../fe/src/components/C3-nut/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| C3-01 | Nút chính | C3-AC01 | - | - |
| C3-02 | Nút phụ | C3-AC01 | - | - |
| C3-03 | Cặp nút đánh giá | C3-AC02, C3-AC03 | - | - |
| C3-04 | Trạng thái chung | C3-AC04 | - | - |

## C4 Lựa chọn trắc nghiệm

Spec: [fe/src/components/C4-lua-chon/spec.md](../../fe/src/components/C4-lua-chon/spec.md) · Acceptance: [fe/src/components/C4-lua-chon/acceptance.md](../../fe/src/components/C4-lua-chon/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| C4-01 | Bố cục | C4-AC01 | - | - |
| C4-02 | Chọn đáp án | C4-AC02 | - | - |
| C4-03 | Thông báo kết quả | C4-AC03 | - | - |

## C5 Thanh tab

Spec: [fe/src/components/C5-thanh-tab/spec.md](../../fe/src/components/C5-thanh-tab/spec.md) · Acceptance: [fe/src/components/C5-thanh-tab/acceptance.md](../../fe/src/components/C5-thanh-tab/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| C5-01 | Thanh dưới đáy | C5-AC01 | - | - |
| C5-02 | Thanh dọc | C5-AC02 | - | - |
| C5-03 | Mục đang chọn | C5-AC03 | - | - |
| C5-04 | Mục có số | C5-AC04 | - | - |

## C6 Sheet

Spec: [fe/src/components/C6-sheet/spec.md](../../fe/src/components/C6-sheet/spec.md) · Acceptance: [fe/src/components/C6-sheet/acceptance.md](../../fe/src/components/C6-sheet/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| C6-01 | Dạng hiển thị | C6-AC01 | - | - |
| C6-02 | Tiêu đề và đóng | C6-AC02, C6-AC03 | - | - |
| C6-03 | Focus | C6-AC04 | - | - |
| C6-04 | Nội dung dài | C6-AC05 | - | - |

## C7 Thông báo ngắn

Spec: [fe/src/components/C7-thong-bao/spec.md](../../fe/src/components/C7-thong-bao/spec.md) · Acceptance: [fe/src/components/C7-thong-bao/acceptance.md](../../fe/src/components/C7-thong-bao/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| C7-01 | Vị trí và hiển thị | C7-AC01 | - | - |
| C7-02 | Thời gian và hành động | C7-AC02 | - | - |
| C7-03 | Trợ năng | C7-AC03 | - | - |

## S1 Chọn ngôn ngữ

Spec: [fe/src/pages/S1-chon-ngon-ngu/spec.md](../../fe/src/pages/S1-chon-ngon-ngu/spec.md) · Acceptance: [fe/src/pages/S1-chon-ngon-ngu/acceptance.md](../../fe/src/pages/S1-chon-ngon-ngu/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| S1-01 | Danh sách và thứ tự | S1-AC01, S1-AC02, S1-AC06 | - | - |
| S1-02 | Nội dung mỗi dòng | S1-AC02, S1-AC03 | - | - |
| S1-03 | Số câu | S1-AC02 | - | - |
| S1-04 | Chọn | S1-AC04, S1-AC06 | - | - |
| S1-05 | Chú thích | S1-AC02 | - | - |
| S1-06 | Tải và lỗi | S1-AC05 | - | - |

## S3 Phiên học

Spec: [fe/src/pages/S3-phien-hoc/spec.md](../../fe/src/pages/S3-phien-hoc/spec.md) · Acceptance: [fe/src/pages/S3-phien-hoc/acceptance.md](../../fe/src/pages/S3-phien-hoc/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| S3-01 | Nguồn câu của phiên | S3-AC01 | - | - |
| S3-02 | Khung phiên | S3-AC02, S3-AC07 | - | - |
| S3-03 | Bước ghi nhớ | S3-AC03, S3-AC07, S3-AC11 | - | - |
| S3-04 | Bước kiểm tra | S3-AC04, S3-AC07, S3-AC11 | - | - |
| S3-05 | Gợi ý | S3-AC05 | - | - |
| S3-06 | Tổng kết phiên | S3-AC06, S3-AC07 | - | - |
| S3-07 | Thoát giữa phiên | S3-AC08 | - | - |
| S3-08 | Phiên dở | S3-AC09 | - | - |
| S3-09 | Điều khiển | S3-AC10 | - | - |

## S5 Kiểm tra nhanh

Spec: [fe/src/pages/S5-kiem-tra-nhanh/spec.md](../../fe/src/pages/S5-kiem-tra-nhanh/spec.md) · Acceptance: [fe/src/pages/S5-kiem-tra-nhanh/acceptance.md](../../fe/src/pages/S5-kiem-tra-nhanh/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| S5-01 | Màn bắt đầu | S5-AC01, S5-AC09 | - | - |
| S5-02 | Chỉ báo bước | S5-AC02 | - | - |
| S5-03 | Bước 1: Nghe và chọn nghĩa | S5-AC03, S5-AC09 | - | - |
| S5-04 | Bước 2: Nghe theo cụm | S5-AC04, S5-AC09, S5-AC10 | - | - |
| S5-05 | Bước 3: Sắp xếp câu | S5-AC05, S5-AC09, S5-AC10 | - | - |
| S5-06 | Nghĩa hiển thị | S5-AC06 | - | - |
| S5-07 | Kết quả | S5-AC07, S5-AC09 | - | - |
| S5-08 | Thoát giữa chừng | S5-AC08 | - | - |

## S8 Cài đặt

Spec: [fe/src/pages/S8-cai-dat/spec.md](../../fe/src/pages/S8-cai-dat/spec.md) · Acceptance: [fe/src/pages/S8-cai-dat/acceptance.md](../../fe/src/pages/S8-cai-dat/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| S8-01 | Học tập | S8-AC01, S8-AC09 | - | - |
| S8-02 | Giọng đọc | S8-AC02, S8-AC03, S8-AC09 | - | - |
| S8-03 | Âm thanh ngoại tuyến | S8-AC04 | - | - |
| S8-04 | Giao diện | S8-AC05, S8-AC09 | - | - |
| S8-05 | Dữ liệu | S8-AC06, S8-AC07, S8-AC09 | - | - |
| S8-06 | Trợ giúp | S8-AC08, S8-AC09 | - | - |

## S9 Hướng dẫn lần đầu

Spec: [fe/src/pages/S9-huong-dan/spec.md](../../fe/src/pages/S9-huong-dan/spec.md) · Acceptance: [fe/src/pages/S9-huong-dan/acceptance.md](../../fe/src/pages/S9-huong-dan/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| S9-01 | Khi nào hiện | S9-AC01 | - | - |
| S9-02 | Ba bước | S9-AC02, S9-AC06 | - | - |
| S9-03 | Điều khiển | S9-AC03 | - | - |
| S9-04 | Không hiện lại | S9-AC04 | - | - |
| S9-05 | Xem lại | S9-AC05 | - | - |

## T1 Học

Spec: [fe/src/pages/T1-hoc/spec.md](../../fe/src/pages/T1-hoc/spec.md) · Acceptance: [fe/src/pages/T1-hoc/acceptance.md](../../fe/src/pages/T1-hoc/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| T1-01 | Thẻ câu tiếp theo | T1-AC01, T1-AC02 | - | - |
| T1-02 | Nút chính đổi chữ theo ngữ cảnh | T1-AC03, T1-AC09 | - | - |
| T1-03 | Mục tiêu tuần | T1-AC04 | - | - |
| T1-04 | Câu cần ôn | T1-AC05, T1-AC09 | - | - |
| T1-05 | Học hết lộ trình | T1-AC06 | - | - |
| T1-06 | Bố cục máy tính | T1-AC07 | - | - |
| T1-07 | Không đổi câu trên T1 | T1-AC08 | - | - |

## T2 Luyện tập

Spec: [fe/src/pages/T2-luyen-tap/spec.md](../../fe/src/pages/T2-luyen-tap/spec.md) · Acceptance: [fe/src/pages/T2-luyen-tap/acceptance.md](../../fe/src/pages/T2-luyen-tap/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| T2-01 | Danh sách cách luyện | T2-AC01 | - | - |
| T2-02 | Ôn câu cần ôn | T2-AC02 | - | - |
| T2-03 | Học theo từ khóa | T2-AC03, T2-AC06 | - | - |
| T2-04 | Kiểm tra nhanh | T2-AC04 | - | - |
| T2-05 | Không có kết quả | T2-AC05, T2-AC06 | - | - |

## T3 Thư viện

Spec: [fe/src/pages/T3-thu-vien/spec.md](../../fe/src/pages/T3-thu-vien/spec.md) · Acceptance: [fe/src/pages/T3-thu-vien/acceptance.md](../../fe/src/pages/T3-thu-vien/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| T3-01 | Danh sách câu | T3-AC01, T3-AC02 | - | - |
| T3-02 | Tìm kiếm | T3-AC03 | - | - |
| T3-03 | Bộ lọc | T3-AC04 | - | - |
| T3-04 | Phân trang | T3-AC05 | - | - |
| T3-05 | Chi tiết câu | T3-AC06 | - | - |
| T3-06 | Không có kết quả | T3-AC07 | - | - |
| T3-07 | Bố cục máy tính | T3-AC08 | - | - |

## T4 Tiến bộ

Spec: [fe/src/pages/T4-tien-bo/spec.md](../../fe/src/pages/T4-tien-bo/spec.md) · Acceptance: [fe/src/pages/T4-tien-bo/acceptance.md](../../fe/src/pages/T4-tien-bo/acceptance.md)

| Yêu cầu | Tên | Acceptance | Code (@spec) | Test (@ac) |
|---|---|---|---|---|
| T4-01 | Khoảng thời gian | T4-AC01 | - | - |
| T4-02 | Ba chỉ số | T4-AC02, T4-AC10 | - | - |
| T4-03 | Mục tiêu tuần | T4-AC03 | - | - |
| T4-04 | Biểu đồ theo ngày | T4-AC04, T4-AC05 | - | - |
| T4-05 | Lịch ôn | T4-AC06, T4-AC10 | - | - |
| T4-06 | Các phiên | T4-AC07 | - | - |
| T4-07 | Chi tiết ngày | T4-AC08 | - | - |
| T4-08 | Chưa có dữ liệu | T4-AC09 | - | - |

## Mục [auto] chưa có test gắn @ac (99)

APP-AC02, APP-AC04, APP-AC05, APP-AC06, APP-AC08, APP-AC10, APP-AC11, APP-AC15, APP-AC16, C1-AC02, C1-AC03, C1-AC04, C1-AC06, C1-AC07, C1-AC08, C2-AC01, C2-AC03, C3-AC04, C4-AC02, C4-AC03, C5-AC03, C5-AC04, C6-AC02, C6-AC04, C7-AC02, C7-AC03, DATA-AC01, DATA-AC02, DATA-AC03, DATA-AC04, DATA-AC06, DATA-AC07, DATA-AC08, DATA-AC09, DATA-AC10, DATA-AC13, DATA-AC14, DATA-AC15, FND-AC01, FND-AC02, FND-AC04, FND-AC06, FND-AC07, FND-AC10, FND-AC15, S1-AC01, S1-AC03, S1-AC04, S1-AC05, S3-AC01, S3-AC02, S3-AC03, S3-AC04, S3-AC05, S3-AC06, S3-AC08, S3-AC09, S3-AC10, S5-AC01, S5-AC02, S5-AC03, S5-AC04, S5-AC05, S5-AC07, S5-AC08, S8-AC01, S8-AC02, S8-AC04, S8-AC05, S8-AC06, S8-AC08, S9-AC01, S9-AC03, S9-AC04, S9-AC05, T1-AC01, T1-AC03, T1-AC04, T1-AC05, T1-AC06, T1-AC08, T2-AC02, T2-AC03, T2-AC04, T2-AC05, T3-AC01, T3-AC03, T3-AC04, T3-AC05, T3-AC06, T3-AC07, T4-AC01, T4-AC02, T4-AC03, T4-AC04, T4-AC06, T4-AC07, T4-AC08, T4-AC09
