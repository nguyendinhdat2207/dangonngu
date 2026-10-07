# Spec giao diện bản cũ (đọc ngược)

Phiên bản mô tả: mini app 1.9.40, đọc ngày 07/10/2026. Nguồn và mức tin cậy: `README.md`.

## 1. Cấu trúc tổng thể

Mini app là một trang duy nhất (`/demo/index.html`) với nhiều hộp thoại chồng lên. Bố cục màn chính do `demo/focus-layout.js` dựng lại từ markup gốc:

1. Header ghim trên cùng (`focus-pinned-header`): logo, chữ "VE360•", phụ đề "Không gian thực hành đa ngôn ngữ", ô tìm kiếm, nút đổi giao diện, nút cuộn.
2. Khối "Tùy chọn học" (`focus-setup-heading`), thu gọn mặc định, nút "Thu gọn tùy chọn học". Bên trong: Ngôn ngữ (`selectedLng`), Bộ nội dung (`selectedLv`, gồm `fluency` và `global`).
3. Cột thẻ câu (`.focus-card-column`). Các module chèn thêm vào đầu cột: nút TEST NOW, cụm nút học (Học 8 câu, Tiến bộ, Của tôi, Góp ý, Khảo sát và Trò chuyện).
4. Thẻ "Câu đang học": `focus-card-state`, nút "Chạm để hiện câu gốc", "Câu trước", "Câu tiếp", "Nghe câu", dừng; gợi ý "Vuốt trái: câu tiếp · Vuốt phải: câu trước".
5. "Danh sách dữ liệu" (`focus-data`), nút "Xem danh sách" / "Thu gọn danh sách"; 32 câu mỗi trang, "Trang trước", "Trang sau", ô chọn từng câu, chọn tất cả; công tắc Hiện câu, Bản dịch, Cách dùng, Nghe lặp.

## 2. Danh sách màn hình và cửa sổ

| Mã | Tên / id | Mở từ | Nội dung và điều khiển |
|---|---|---|---|
| L-S0 | Màn tải `catalog-loading` | Khởi động | Kiểm tra kết nối, nạp module theo thứ tự, phát sự kiện `vitasr:ready` |
| L-S1 | Chọn ngôn ngữ `catalog-language-entry` | Chưa lưu ngôn ngữ | Tiêu đề "Bạn muốn học ngôn ngữ nào?"; 15 ngôn ngữ từ manifest và "Tiếng Việt (từ tiếng Anh)". Chọn xong ghi hash `#source=fluency&lang=<id>` |
| L-S2 | Màn chính | Sau L-S1 | Như mục 1 |
| L-D1 | Chọn nhóm câu `focus-lesson-dialog` | Học 8 câu | Cách chọn: Unit, Situation, Topic, Phrase, Random; chọn nhóm; Bắt đầu học, Xem toàn bộ câu |
| L-D2 | Phiên học "Học có tiến bộ" `learning-dialog` | L-D1, L-D7 | Bước learn: hiện nghĩa trước, "Hiện câu gốc", "Tôi nhớ được" / "Tôi cần ôn". Bước quiz: trắc nghiệm, "Nghe câu", "Xem gợi ý". Rồi "Câu tiếp" hoặc "Hoàn tất phiên" |
| L-D2b | Tổng kết "Đã hoàn tất phiên" | Hoàn tất phiên | Số câu đã luyện, số câu đúng không cần gợi ý; "Xem tiến bộ và lịch ôn", "Quay lại câu đang học" |
| L-D3 | "Tiến bộ của tôi" `learning-dialog` | Tiến bộ | Lọc 1 / 7 / 30 ngày, lưới chỉ số, lịch ôn, kết quả nhớ sau 7 ngày, bảng theo ngày, "Xuất báo cáo CSV" |
| L-D4 | "Của tôi" `learning-dialog` | Của tôi | Mục tiêu 1 đến 21 phiên mỗi 7 ngày, xuất / nhập JSON, "Đặt lại dữ liệu đo lường" |
| L-D5 | "Góp ý của tôi" `learning-dialog` | Góp ý | Loại góp ý, mô tả, "Lưu nháp góp ý", xuất nháp. Không gửi lên server |
| L-D6 | TEST NOW `test3-dialog` | Nút `t3-launch-button` | T01 "Nghe hiểu ý chính" (chọn 1 trong 4), T02 "Diễn đạt theo cụm" (chạm cụm để hiện và nghe), T03 "Sắp xếp đúng nghĩa". Chạy liên tục hoặc ghim riêng T02 / T03 |
| L-D6b | "VÒNG LẶP HOÀN TẤT" | Hết vòng | "Ba bước đã sáng trọn vẹn."; Điểm phiên, Câu đã đo, Phiên hoàn tất |
| L-D7 | Học theo chủ đề `topic-study` | Cần xác nhận | Ô tìm tự do (gợi ý "đặt phòng, ăn uống, airport…"), xem trước 5 câu, "Học toàn bộ kết quả", "Học từng nhóm 8 câu", "Nhóm trước", "Nhóm tiếp" |
| L-D8 | Giọng đọc `vitasr-voice-dialog` | Nút `vitasr-voice-button` | "Giọng dùng cho", "Giọng hiện có trên thiết bị", "Xong"; mục "Âm thanh ngoại tuyến" |
| L-D9 | Hướng dẫn nhanh `vitasr-quick-guide` | Nút `vitasr-guide-button` | 12 bước, video 30 giây và 87 giây |
| L-D10 | Chia sẻ `vitasr-share-dialog`, `sharing-manager` | Cần xác nhận | "Chia sẻ thư viện của tôi": phạm vi, chế độ truy cập, cho tải dữ liệu, số ngày, mời email, thu hồi |
| L-D11 | Chấp nhận lời mời | URL có `?share=` / `?invite=` | "Chấp nhận lời mời học cùng VITASR" |
| L-D12 | Thông tin bản chạy thử `demo-dialog` | `demo-about` | Hộp thông báo cho tính năng chưa nối backend |

## 3. Hành vi đáng chú ý

- Thẻ câu điều hướng bằng vuốt trái/phải hoặc phím mũi tên ngay trên màn chính.
- Đáp án nhiễu trong trắc nghiệm lấy từ nghĩa của các câu cách câu đúng một khoảng cố định trong danh sách (1, 3, 7, 13, 29, 61, 127, 257, 521, 1031).
- Chia cụm ở TEST NOW: nếu câu không có trường `phrases`, app dùng `Intl.Segmenter` chia câu gốc và nghĩa thành 1 đến 4 cụm theo số từ, rồi ghép cặp theo thứ tự. Cụm tiếng Anh và cụm tiếng Việt có thể lệch nghĩa. Không thu âm, không chấm phát âm (`pronunciationScored: false`).
- Chế độ "Tiếng Việt (từ tiếng Anh)": đảo cặp `en` / `vi` trong cùng dữ liệu tiếng Anh.
- Giao diện có hai chủ đề: "Kem · Đỏ vàng" và "Tối · Tương phản cao", lưu ở `vitasr.focus.contrast`.
- Giao diện dùng các lớp `glass-effect`, `glass-input`, `glass-btn`, icon dạng ảnh JPG, emoji trong nhãn, nhiều chữ viết hoa toàn bộ, câu khẩu hiệu "TIN VÀO QUÁ TRÌNH. KIÊN TRÌ MỖI NGÀY…".

## 4. Thành phần bị gỡ khi chạy

`demo/feature-removal.js` gỡ khỏi trang: `game-modal`, `listening-modal`, `speaking-modal`, `multilingual-modal`, `flashword-overlay`, `guidelineModal`, `videoGuideModal`, `modalDocs`, `noteModal`, `analysisModal`, `storyModal`, `practiceModal`, `dataModal`, `collocationModal` và các modal khác; vô hiệu `openPayment`, `rediDoTest`, `rediJoinRooms`, `rediTetris`, `rediSkyshot`, `getReview`, `getQnA`, `getCollocations`, `createText`, `handleGetData` và các hàm khác. Những tính năng này vẫn có trong HTML tĩnh nhưng người dùng không thấy.
