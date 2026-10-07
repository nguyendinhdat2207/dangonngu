---
id: C4
title: Lựa chọn trắc nghiệm
status: nháp
version: 0.1
depends: FND
legacy: bước quiz trong L-D2, T01 trong L-D6
---

# C4 Lựa chọn trắc nghiệm

Danh sách 4 lựa chọn, dùng ở S3b và S5a. Bộ lựa chọn do DATA-08 tạo.

## Yêu cầu

### C4-01 Bố cục

4 lựa chọn xếp dọc, mỗi lựa chọn rộng hết khối, cao tối thiểu 56 px, chữ nghĩa Literata `--t-body`, căn trái, xuống dòng khi dài (không cắt chữ). Mỗi lựa chọn có số thứ tự 1 đến 4 nhỏ ở đầu dòng để gợi ý phím tắt (chỉ hiện từ 900 px).

### C4-02 Chọn đáp án

Chạm một lựa chọn, hoặc nhấn phím 1 đến 4, là chọn. Chọn đúng: lựa chọn đó viền 2 px `--known` kèm icon dấu tích, toàn bộ danh sách khóa lại, phát sự kiện "đúng". Chọn sai: lựa chọn đó viền 2 px `--review` kèm icon dấu x và khóa riêng lựa chọn đó; người học chọn tiếp được; phát sự kiện "sai" ở lần sai đầu tiên.

### C4-03 Thông báo kết quả

Kết quả mỗi lần chọn được đọc cho trình đọc màn hình qua vùng `aria-live="polite"`: "Đúng" hoặc "Chưa đúng, thử lại". Màu không phải tín hiệu duy nhất (luôn có icon).

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
