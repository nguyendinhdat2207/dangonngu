# Acceptance: C4 Lựa chọn trắc nghiệm

- [ ] C4-AC01 [claude] C4-01: Ảnh chụp với nghĩa dài trên 120 ký tự ở 320 px: chữ xuống dòng đủ, không bị cắt; số thứ tự chỉ hiện ở 1280 px.
- [x] C4-AC02 [auto] C4-02: Chọn sai rồi chọn đúng: sự kiện "sai" phát một lần, sự kiện "đúng" phát một lần; sau khi đúng, mọi lựa chọn bị khóa. Phím 1 đến 4 chọn đúng lựa chọn tương ứng.
  - Bằng chứng: test fe/tests/unit/components.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
- [x] C4-AC03 [auto] C4-03: Vùng `aria-live` nhận chuỗi "Đúng" và "Chưa đúng, thử lại" tương ứng; lựa chọn đúng và sai có icon khác nhau trong DOM.
  - Bằng chứng: test fe/tests/unit/components.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
