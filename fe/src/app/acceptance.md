# Acceptance: APP Khung app

Khổ kiểm mặc định và quy tắc đánh dấu: `docs/QUY-TRINH.md` mục 5 và 7.

- [ ] APP-AC01 [claude] APP-01: Ảnh chụp ở 375 px có thanh tab dưới đáy với 4 mục đúng thứ tự Học, Luyện tập, Thư viện, Tiến bộ; ở 1280 px có thanh dọc trái rộng 220 px với cùng 4 mục.
- [ ] APP-AC02 [auto] APP-01, APP-04: Test điều hướng: bấm lần lượt 4 mục thì hash đổi thành `#/hoc`, `#/luyen-tap`, `#/thu-vien`, `#/tien-bo` và đúng màn hiện ra.
- [ ] APP-AC03 [claude] APP-02: Ảnh chụp T1 đến T4 ở 375 px và 1280 px có tên ngôn ngữ bên trái, nút Cài đặt bên phải; vùng 56 x 56 px góc trên bên phải không có điều khiển.
- [ ] APP-AC04 [auto] APP-03: Ở `#/phien-hoc`, `#/kiem-tra`, `#/chon-ngon-ngu` không có thanh tab và thanh trên cùng trong DOM hiển thị; S3 và S5 có nút "Thoát".
- [ ] APP-AC05 [auto] APP-04: Mở route không hợp lệ thì chuyển về `#/hoc` (đã chọn ngôn ngữ) hoặc `#/chon-ngon-ngu` (chưa chọn). Nút Back của trình duyệt sau chuỗi T1 → T3 → T4 quay về T3 rồi T1.
- [ ] APP-AC06 [auto] APP-05: Với localStorage trống, app mở vào S1; sau khi chọn ngôn ngữ và tải lại trang, app mở thẳng vào T1.
- [ ] APP-AC07 [claude] APP-05, APP-08: Giả lập mạng chậm (Slow 3G): ảnh chụp trong lúc tải là khung xương đúng hình, không phải màn trắng hay vòng xoay.
- [ ] APP-AC08 [auto] APP-06: Mở sheet Đổi ngôn ngữ, chọn ngôn ngữ khác: sheet đóng, về `#/hoc`, tên ngôn ngữ trên thanh trên cùng đổi; quay lại ngôn ngữ cũ thì tiến độ cũ còn nguyên.
- [ ] APP-AC09 [claude] APP-07: Ảnh chụp T1, T3, S3 ở 320, 375, 768, 1280 px: không có cuộn ngang, lề đúng 16 / 24 px, khối nội dung ở 768 px rộng tối đa 560 px.
- [ ] APP-AC10 [auto] APP-08: Cho DataSource trả lỗi: màn hiện đúng câu "Không tải được danh sách câu. Kiểm tra kết nối rồi bấm Thử lại." và nút "Thử lại"; bấm Thử lại khi nguồn đã ổn thì hiện dữ liệu.
- [ ] APP-AC11 [auto] APP-08: Giả lập `navigator.onLine = false` và sự kiện `offline`: dải ngoại tuyến hiện; sự kiện `online` thì dải ẩn. Giả lập localStorage ném lỗi: dải cảnh báo bộ nhớ hiện.
- [ ] APP-AC12 [claude] APP-09: Nhúng bản build vào một trang thử có iframe 400 x 700 và 1100 x 700: app chạy đủ luồng T1 → S3 → tổng kết; tìm trong mã nguồn không có `window.top`, `window.parent`, `postMessage`.
- [ ] APP-AC13 [human] APP-09: Mở app trong khung mini app thật của trang học chính (khi khách cho phép đổi URL thử) trên iPhone và Android: hiển thị đủ, không bị nút đóng của trang chính che điều khiển.
- [ ] APP-AC14 [human] APP-10: Trên điện thoại thật: mở app có mạng, tắt mạng, đóng và mở lại app: vẫn học được ngôn ngữ đã tải.
- [ ] APP-AC15 [auto] APP-10: Giả lập service worker có bản mới: thông báo "Có bản cập nhật" hiện ở T1 nhưng không hiện khi đang ở S3; trang không tự tải lại.
- [ ] APP-AC16 [auto] APP-11: Mở sheet Chi tiết câu rồi kích hoạt mở sheet Đổi ngôn ngữ: tại mọi thời điểm chỉ có một phần tử sheet/hộp thoại đang mở.
