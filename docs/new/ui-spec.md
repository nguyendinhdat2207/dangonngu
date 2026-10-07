---
id: G
title: Tổng quan giao diện bản mới
status: nháp
version: 0.1
---

# Spec giao diện bản mới: tổng quan

File này là điểm vào của spec bản mới. Nó chứa mục tiêu sản phẩm (yêu cầu `G-xx`), bối cảnh, phạm vi và chỉ mục tới spec chi tiết của từng khu vực. Yêu cầu chi tiết của mỗi trang, thành phần, khung app, nền tảng thiết kế và dữ liệu nằm trong `spec.md` của thư mục tương ứng dưới `fe/src/`, và chỉ nằm ở đó.

## 1. Bối cảnh

Người học người Việt mở app trên điện thoại, học một nhóm 8 câu tiếng Anh trong 5 đến 10 phút, nghe được câu, tự kiểm tra mình nhớ hay chưa, và thấy được tiến bộ qua các ngày.

- Người học: trình độ tiếng Anh từ mất gốc đến trung cấp, học lẻ tẻ trong ngày. Giao diện bằng tiếng Việt, nội dung học là ngôn ngữ đích (ưu tiên tiếng Anh).
- Thiết bị: chủ yếu điện thoại 360 đến 430 px; một phần dùng máy tính trong lớp học.
- Môi trường chạy: app nạp trong iframe của trang học chính bằng một URL tĩnh, không có backend (xem `fe/src/app/spec.md` và `fe/src/data/spec.md`).

## 2. Mục tiêu

### G-01 Bắt đầu học không cần hướng dẫn

Người học mới bắt đầu được một phiên học 8 câu trong không quá 2 lần chạm sau khi chọn ngôn ngữ, mà không cần đọc hướng dẫn.

### G-02 Hiểu được tiến bộ của mình

Người học tìm được màn Tiến bộ và giải thích đúng "câu cần ôn" nghĩa là gì.

### G-03 Không nhầm thao tác đánh giá

Trong phiên học, người học không bấm nhầm giữa "Tôi nhớ" và "Cần ôn lại".

### G-04 Gọn hơn bản cũ

Toàn bộ chức năng nằm trong 4 khu chính, màn Cài đặt và 3 màn toàn trang; không có hộp thoại mở chồng lên hộp thoại khác (APP-11).

### G-05 Không mang dấu hiệu giao diện do AI dựng mặc định

Người xem đánh giá giao diện là được thiết kế có chủ đích cho app học câu tiếng Việt, không phải mẫu chung. Quy tắc cụ thể ở FND-13.

## 3. Phạm vi

Giữ trong bản đầu: chọn ngôn ngữ, thẻ câu và nghe, phiên học 8 câu, ôn câu cần ôn, kiểm tra nhanh 3 bước, học theo từ khóa, thư viện câu, tiến bộ, cài đặt (giọng đọc, giao diện, mục tiêu, dữ liệu), hướng dẫn lần đầu.

Bỏ khỏi bản đầu: Chia sẻ thư viện và lời mời (cần backend `/api/sharing/*`), Góp ý, Khảo sát và Trò chuyện, Thông tin bản chạy thử.

Ngoài phạm vi: trang học chính, đăng ký, đăng nhập, thanh toán; lấy dữ liệu thật từ khách.

Đối chiếu từng chức năng với bản cũ: `mapping-legacy.md`. Sơ đồ điều hướng: `navigation.md`.

## 4. Chỉ mục spec

| ID | Khu vực | Spec | Phụ thuộc |
|---|---|---|---|
| APP | Khung app: điều hướng, route, bố cục, trạng thái toàn cục | `fe/src/app/spec.md` | FND, DATA, C5, C6, C7 |
| FND | Nền tảng thiết kế: màu, chữ, khoảng cách, icon, chuyển động, giọng văn, trợ năng | `fe/src/foundation/spec.md` | |
| DATA | Hợp đồng dữ liệu, nguồn dữ liệu, lưu tiến độ, fixture | `fe/src/data/spec.md` | |
| C1 | Thẻ câu | `fe/src/components/C1-the-cau/spec.md` | C2, C3 |
| C2 | Dải 8 ô | `fe/src/components/C2-dai-8-o/spec.md` | |
| C3 | Nút | `fe/src/components/C3-nut/spec.md` | |
| C4 | Lựa chọn trắc nghiệm | `fe/src/components/C4-lua-chon/spec.md` | |
| C5 | Thanh tab | `fe/src/components/C5-thanh-tab/spec.md` | |
| C6 | Sheet | `fe/src/components/C6-sheet/spec.md` | |
| C7 | Thông báo ngắn | `fe/src/components/C7-thong-bao/spec.md` | |
| S1 | Chọn ngôn ngữ | `fe/src/pages/S1-chon-ngon-ngu/spec.md` | C3 |
| T1 | Học | `fe/src/pages/T1-hoc/spec.md` | C1, C2, C3 |
| S3 | Phiên học | `fe/src/pages/S3-phien-hoc/spec.md` | C1, C2, C3, C4 |
| T2 | Luyện tập | `fe/src/pages/T2-luyen-tap/spec.md` | C3, C6 |
| S5 | Kiểm tra nhanh | `fe/src/pages/S5-kiem-tra-nhanh/spec.md` | C3, C4 |
| T3 | Thư viện | `fe/src/pages/T3-thu-vien/spec.md` | C1, C6 |
| T4 | Tiến bộ | `fe/src/pages/T4-tien-bo/spec.md` | C2 |
| S8 | Cài đặt | `fe/src/pages/S8-cai-dat/spec.md` | C3, C6, C7 |
| S9 | Hướng dẫn lần đầu | `fe/src/pages/S9-huong-dan/spec.md` | C3 |

## 5. Câu hỏi mở

1. Kích thước thật của khung iframe trên trang chính ở desktop, và vị trí nút đóng của trang chính.
2. Có cần đọc lại tiến độ học cũ (khóa localStorage của bản cũ) không. Nếu app mới chạy ở domain khác thì không đọc được dù code có hỗ trợ.
3. Bản đầu chỉ tiếng Anh hay cả các ngôn ngữ khác.
4. Có giữ Chia sẻ trong các bản sau không; nếu có, backend do bên nào cung cấp.
5. Được phép dùng mẫu dữ liệu nào cho phát triển và demo.
6. Ai duyệt thiết kế, ở những mốc nào.

## 6. Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
