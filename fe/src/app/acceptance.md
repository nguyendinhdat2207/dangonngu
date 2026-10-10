# Acceptance: APP Khung app

Khổ kiểm mặc định và quy tắc đánh dấu: `docs/QUY-TRINH.md` mục 5 và 7.

- [x] APP-AC01 [claude] APP-01: Ảnh chụp ở 375 px có thanh tab dưới đáy với 4 mục đúng thứ tự Học, Luyện tập, Thư viện, Tiến bộ; ở 1280 px có thanh dọc trái rộng 220 px với cùng 4 mục.
  - Bằng chứng: ảnh docs/evidence/APP-AC01/ (375 và 1280, sáng và tối), Claude, 2026-10-08, chưa commit
- [ ] APP-AC02 [auto] APP-01, APP-04: Test điều hướng: bấm lần lượt 4 mục thì hash đổi thành `#/hoc`, `#/luyen-tap`, `#/thu-vien`, `#/tien-bo` và đúng màn hiện ra.
- [ ] APP-AC03 [claude] APP-02: Ảnh chụp T1 đến T4 ở 375 px và 1280 px có tên ngôn ngữ bên trái, nút Cài đặt bên phải.
- [x] APP-AC04 [auto] APP-03: Ở `#/phien-hoc`, `#/kiem-tra`, `#/chon-ngon-ngu` không có thanh tab và thanh trên cùng trong DOM hiển thị; S3 và S5 có nút "Thoát".
  - Bằng chứng: test fe/tests/unit/app.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
- [x] APP-AC05 [auto] APP-04: Mở route không hợp lệ thì chuyển về `#/hoc` (đã chọn ngôn ngữ) hoặc `#/chon-ngon-ngu` (chưa chọn). Nút Back của trình duyệt sau chuỗi T1 → T3 → T4 quay về T3 rồi T1.
  - Bằng chứng: test fe/tests/unit/app.test.tsx, fe/tests/e2e/app.spec.ts pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
- [x] APP-AC06 [auto] APP-05: Với localStorage trống, app mở vào S1; sau khi chọn ngôn ngữ và tải lại trang, app mở thẳng vào T1.
  - Bằng chứng: test fe/tests/unit/app.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
- [ ] APP-AC07 [claude] APP-05, APP-08: Giả lập mạng chậm (Slow 3G): ảnh chụp trong lúc tải là khung xương đúng hình, không phải màn trắng hay vòng xoay.
- [x] APP-AC08 [auto] APP-06: Mở sheet Đổi ngôn ngữ, chọn ngôn ngữ khác: sheet đóng, về `#/hoc`, tên ngôn ngữ trên thanh trên cùng đổi; quay lại ngôn ngữ cũ thì tiến độ cũ còn nguyên.
  - Bằng chứng: test fe/tests/unit/app.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
- [ ] APP-AC09 [claude] APP-07: Ảnh chụp T1, T3, S3 ở 1440, 1280, 768, 375, 320 px: ở 1440 px vùng nội dung không rộng quá 1120 px, S3 không rộng quá 720 px; không có cuộn ngang, lề đúng 16 / 24 px, khối nội dung ở 768 px rộng tối đa 560 px.
- [x] APP-AC10 [auto] APP-08: Cho DataSource trả lỗi: màn hiện đúng câu "Không tải được danh sách câu. Kiểm tra kết nối rồi bấm Thử lại." và nút "Thử lại"; bấm Thử lại khi nguồn đã ổn thì hiện dữ liệu.
  - Bằng chứng: test fe/tests/unit/app.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
- [x] APP-AC11 [auto] APP-08: Giả lập `navigator.onLine = false` và sự kiện `offline`: dải ngoại tuyến hiện; sự kiện `online` thì dải ẩn. Giả lập localStorage ném lỗi: dải cảnh báo bộ nhớ hiện.
  - Bằng chứng: test fe/tests/unit/app.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
- [x] APP-AC12 [claude] APP-09: Nhúng bản build vào một trang thử có iframe 400 x 700 và 1100 x 700: app chạy đủ luồng T1 → S3 → tổng kết; tìm trong mã nguồn không có `window.top`, `window.parent`, `postMessage`.
  - Bằng chứng: ảnh docs/evidence/APP-AC12/ (iframe 400x700 và 1100x700 đi hết T1 → S3 → tổng kết); tìm trong fe/src không có window.top, window.parent, postMessage, Claude, 2026-10-08, chưa commit
- [ ] APP-AC13 [human] APP-07, APP-09: Mở app trên trình duyệt máy tính (Chrome, Edge, Safari) và trên điện thoại (iPhone, Android), mỗi nơi đi hết luồng chọn ngôn ngữ, học một phiên, xem tiến bộ: hiển thị đủ, không có điều khiển bị che hay tràn.
- [ ] APP-AC14 [human] APP-10: Trên điện thoại thật: mở app có mạng, tắt mạng, đóng và mở lại app: vẫn học được ngôn ngữ đã tải.
- [ ] APP-AC15 [auto] APP-10: Giả lập service worker có bản mới: thông báo "Có bản cập nhật" hiện ở T1 nhưng không hiện khi đang ở S3; trang không tự tải lại.
- [ ] APP-AC16 [auto] APP-11: Mở sheet Chi tiết câu rồi kích hoạt mở sheet Đổi ngôn ngữ: tại mọi thời điểm chỉ có một phần tử sheet/hộp thoại đang mở.
- [x] APP-AC17 [auto] APP-02, APP-06: Đang học Global English: thanh trên cùng có "Tiếng Anh" và dòng nhỏ "Global English"; đang học Tiếng Nhật thì không có dòng tên bộ. Sheet Đổi ngôn ngữ có hai dòng cho Tiếng Anh; chọn dòng English Fluency thì về `#/hoc` với dữ liệu Fluency.
  - Bằng chứng: test fe/tests/unit/app.test.tsx pass (npm test, npm run test:e2e), Claude, 2026-10-08, chưa commit
