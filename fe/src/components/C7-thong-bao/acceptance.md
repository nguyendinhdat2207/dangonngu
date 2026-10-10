# Acceptance: C7 Thông báo ngắn

- [ ] C7-AC01 [claude] C7-01: Ảnh chụp thông báo ở T1 (có thanh tab) và S3 (không có thanh tab) ở 375 px và 1280 px: vị trí đúng, không che thanh tab, rộng không quá 480 px.
- [x] C7-AC02 [auto] C7-02: Với đồng hồ giả: thông báo thường ẩn sau 3 giây, thông báo có nút ẩn sau 6 giây; gọi hai thông báo liên tiếp thì DOM chỉ có thông báo sau.
  - Bằng chứng: test fe/tests/unit/components.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
- [x] C7-AC03 [auto] C7-03: Thông báo xác nhận có `role="status"`, thông báo lỗi có `role="alert"`; `document.activeElement` không đổi khi thông báo hiện.
  - Bằng chứng: test fe/tests/unit/components.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
