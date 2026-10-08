# fe

Mã nguồn giao diện: Vite, React 18, TypeScript (QD-01). Điểm vào là `index.html` và `src/main.tsx`. Lệnh chạy và test: xem `README.md` ở gốc repo.

## Quy ước đặt code

- Code của một khu vực đặt trong thư mục của khu vực đó, cạnh `spec.md`. Ví dụ code trang Học nằm trong `src/pages/T1-hoc/`.
- Mỗi file hoặc khối code hiện thực yêu cầu nào thì ghi `// @spec <ID>` ngay phía trên.
- Test đơn vị và test trang đặt trong `tests/unit/` (Vitest), test trên trình duyệt thật đặt trong `tests/e2e/` (Playwright). Mỗi test ghi `// @ac <ID>` tới mục acceptance nó kiểm.
- Thành phần lấy dữ liệu và tiến độ qua `app/state.tsx` (`useApp`); chỉ `data/source.ts` được gọi `fetch` tới dữ liệu (DATA-05).
- Thành phần trong `components/` không đọc dữ liệu trực tiếp; trang lấy dữ liệu qua `data/` rồi truyền xuống.
- Không viết giá trị màu, cỡ chữ, khoảng cách trực tiếp; dùng token trong `foundation/` (FND-01, FND-05, FND-07).

## fixtures/

Dữ liệu mẫu đúng hợp đồng DATA-01 đến DATA-03, nội dung theo DATA-09. Không đưa toàn bộ dữ liệu thật của khách vào đây.
