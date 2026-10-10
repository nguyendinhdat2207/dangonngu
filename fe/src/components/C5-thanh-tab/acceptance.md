# Acceptance: C5 Thanh tab

- [ ] C5-AC01 [claude] C5-01: Ảnh chụp 375 px trên khung giả lập iPhone có vùng an toàn đáy: thanh cao 64 px cộng vùng an toàn, 4 mục chia đều, nhãn không bị cắt ở 320 px.
- [ ] C5-AC02 [claude] C5-02: Ảnh chụp 1280 px: thanh dọc 220 px bên trái, mục cao 48 px, căn trái.
- [x] C5-AC03 [auto] C5-03: Ở mỗi route T1 đến T4, đúng một mục có `aria-current="page"` và đó là mục tương ứng.
  - Bằng chứng: test fe/tests/unit/components.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
- [x] C5-AC04 [auto] C5-04: Với 12 câu cần ôn, mục Luyện tập hiện "12" và có nhãn trợ năng "Luyện tập, 12 câu cần ôn"; với 0 câu thì không có nhãn số.
  - Bằng chứng: test fe/tests/unit/components.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
