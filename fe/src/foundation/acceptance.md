# Acceptance: FND Nền tảng thiết kế

- [ ] FND-AC01 [auto] FND-01: Kiểm tra tĩnh: ngoài file token, không file CSS hay thành phần nào chứa mã màu hex, `rgb(`, `hsl(` hoặc `linear-gradient`/`radial-gradient`.
- [ ] FND-AC02 [auto] FND-01, FND-02: Script tính tương phản cho mọi cặp chữ/nền dùng trong token (cả sáng và tối) và báo đạt 4.5:1 (3:1 với chữ từ 24 px).
- [ ] FND-AC03 [claude] FND-02: Ảnh chụp mọi màn chính: mỗi màn có tối đa một nút nền `--brand`; câu trả lời sai trong S3 và S5 hiển thị màu `--review`, không đỏ.
- [ ] FND-AC04 [auto] FND-03: Với hệ thống ở chế độ tối và cài đặt "Theo hệ thống", app dùng bảng màu tối; chọn "Sáng" trong S8 rồi tải lại trang thì app mở bằng bảng màu sáng ngay từ khung hình đầu tiên.
- [ ] FND-AC05 [claude] FND-04: Ảnh chụp thẻ câu có nghĩa chứa đủ dấu tiếng Việt khó ("Tôi muốn đặt một bàn cho hai người, được không ạ?") ở `--t-lg` và câu tiếng Nhật ở `--t-2xl`: không chồng dấu, font đúng vai trò; tab Network cho thấy font Noto JP chỉ tải khi chọn tiếng Nhật.
- [ ] FND-AC06 [auto] FND-05: Kiểm tra tĩnh: mọi `font-size` trong code dùng token `--t-*`.
- [ ] FND-AC07 [auto] FND-06: Test đơn vị hàm chọn cỡ câu: 39 ký tự cho `--t-2xl`, 40 và 90 cho `--t-xl`, 91 cho `--t-lg`.
- [ ] FND-AC08 [claude] FND-07, FND-08, FND-09: Đọc file token và CSS: khoảng cách chỉ dùng giá trị trong FND-07; bo góc đúng vai trò; `box-shadow` chỉ có ở sheet và hộp thoại.
- [ ] FND-AC09 [claude] FND-10: Tìm trong mã nguồn và ảnh chụp: không có emoji, không có ảnh bitmap dùng làm icon, icon cùng một bộ và cùng nét.
- [ ] FND-AC10 [auto] FND-11: Với `prefers-reduced-motion: reduce`, không phần tử nào có `transition-duration` hoặc `animation-duration` lớn hơn 0 khi đổi trạng thái.
- [ ] FND-AC11 [human] FND-11: Trên điện thoại thật, chuyển động hiện câu gốc và mở sheet cho cảm giác phản hồi ngay, không chậm, không giật.
- [ ] FND-AC12 [claude] FND-12: Rà toàn bộ chuỗi giao diện: không còn từ trong cột "Không dùng"; nút và thông báo cùng luồng dùng cùng động từ; mọi thông báo lỗi có hướng xử lý.
- [ ] FND-AC13 [human] FND-12: Một người không trong nhóm đọc toàn bộ chuỗi giao diện và không thấy câu nào khó hiểu hoặc sai giọng.
- [ ] FND-AC14 [claude] FND-13: Rà ảnh chụp mọi màn theo từng gạch đầu dòng của FND-13 và ghi kết quả từng dòng vào bằng chứng.
- [ ] FND-AC15 [auto] FND-14: Chạy axe-core trên mọi route ở 375 px và 1280 px, sáng và tối: không có lỗi mức serious hoặc critical.
- [ ] FND-AC16 [claude] FND-14: Đi hết luồng T1 → S3 → tổng kết → T4 chỉ bằng bàn phím; ảnh chụp viền focus thấy rõ ở mọi điều khiển.
- [ ] FND-AC17 [human] FND-14: Bật VoiceOver (iPhone) và TalkBack (Android): câu tiếng Anh được đọc bằng giọng tiếng Anh, nghĩa đọc bằng giọng tiếng Việt; đi được hết luồng học một phiên.
