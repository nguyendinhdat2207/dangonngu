# fe

Mã nguồn giao diện. Hiện chỉ có spec và acceptance; code được thêm khi QD-01 (công nghệ) được chốt.

## Quy ước đặt code

- Code của một khu vực đặt trong thư mục của khu vực đó, cạnh `spec.md`. Ví dụ code trang Học nằm trong `src/pages/T1-hoc/`.
- Mỗi file hoặc khối code hiện thực yêu cầu nào thì ghi `// @spec <ID>` ngay phía trên.
- Test đặt trong `tests/` (hoặc cạnh code, tùy công cụ test được chọn), mỗi test ghi `// @ac <ID>` tới mục acceptance nó kiểm.
- Thành phần trong `components/` không đọc dữ liệu trực tiếp; trang lấy dữ liệu qua `data/` rồi truyền xuống.
- Không viết giá trị màu, cỡ chữ, khoảng cách trực tiếp; dùng token trong `foundation/` (FND-01, FND-05, FND-07).

## fixtures/

Dữ liệu mẫu đúng hợp đồng DATA-01 đến DATA-03, nội dung theo DATA-09. Không đưa toàn bộ dữ liệu thật của khách vào đây.
