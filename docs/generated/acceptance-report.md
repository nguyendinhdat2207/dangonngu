# Báo cáo acceptance

File sinh tự động bởi `node scripts/spec.mjs acceptance` lúc 2026-10-08 08:51 UTC. Không sửa tay.

Một khu vực **Đạt** khi mọi mục trong acceptance.md của nó đã được đánh dấu [x].

| Khu vực | Tên | Đã đạt | auto | claude | human | Trạng thái |
|---|---|---|---|---|---|---|
| G | Tổng quan giao diện bản mới | 0/5 | - | 0/1 | 0/4 | Chưa |
| APP | Khung app | 9/17 | 7/10 | 2/5 | 0/2 | Chưa |
| FND | Nền tảng thiết kế | 6/17 | 6/7 | 0/7 | 0/3 | Chưa |
| DATA | Dữ liệu và tiến độ | 14/19 | 13/16 | 1/2 | 0/1 | Chưa |
| C1 | Thẻ câu | 7/8 | 6/6 | 1/1 | 0/1 | Chưa |
| C2 | Dải 8 ô | 3/3 | 2/2 | 1/1 | - | Đạt |
| C3 | Nút | 3/4 | 1/1 | 2/2 | 0/1 | Chưa |
| C4 | Lựa chọn trắc nghiệm | 2/3 | 2/2 | 0/1 | - | Chưa |
| C5 | Thanh tab | 2/4 | 2/2 | 0/2 | - | Chưa |
| C6 | Sheet | 3/5 | 2/2 | 1/2 | 0/1 | Chưa |
| C7 | Thông báo ngắn | 2/3 | 2/2 | 0/1 | - | Chưa |
| S1 | Chọn ngôn ngữ | 7/8 | 5/5 | 2/2 | 0/1 | Chưa |
| S3 | Phiên học | 10/11 | 9/9 | 1/1 | 0/1 | Chưa |
| S5 | Kiểm tra nhanh | 0/10 | 0/7 | 0/2 | 0/1 | Chưa |
| S8 | Cài đặt | 0/10 | 0/7 | 0/1 | 0/2 | Chưa |
| S9 | Hướng dẫn lần đầu | 4/6 | 3/4 | 1/1 | 0/1 | Chưa |
| T1 | Học | 9/10 | 7/7 | 2/2 | 0/1 | Chưa |
| T2 | Luyện tập | 0/7 | 0/5 | 0/2 | - | Chưa |
| T3 | Thư viện | 0/10 | 0/8 | 0/2 | - | Chưa |
| T4 | Tiến bộ | 0/10 | 0/8 | 0/1 | 0/1 | Chưa |

Tổng: 81/170 mục đã đạt.

## Mục còn mở

### G Tổng quan giao diện bản mới

- G-AC01 [human] (G-01): Ít nhất 5/5 người học bắt đầu được phiên học đầu tiên mà không hỏi người hướng dẫn; ghi lại số lần chạm từ lúc chọn ngôn ngữ tới câu đầu tiên của phiên (yêu cầu không quá 2).
- G-AC02 [human] (G-02): Ít nhất 4/5 người học tự tìm được màn Tiến bộ và giải thích đúng "câu cần ôn" bằng lời của họ.
- G-AC03 [human] (G-03): Trong toàn bộ buổi test, không ai bấm nhầm giữa "Tôi nhớ" và "Cần ôn lại" (người học tự nói ra hoặc quan sát thấy bấm rồi muốn sửa).
- G-AC04 [claude] (G-04): Đối chiếu bảng route APP-04 và mã nguồn: chỉ có 4 tab, màn Cài đặt và 3 màn toàn trang; không có chỗ nào mở một sheet hoặc hộp thoại khi đang có sheet hoặc hộp thoại khác mở.
- G-AC05 [human] (G-05): Hai người ngoài nhóm thiết kế xem ảnh chụp 5 màn chính (T1, S3a, T3, T4, S8) và không chỉ ra được dấu hiệu nào trong danh sách FND-13.

### APP Khung app

- APP-AC02 [auto] (APP-01, APP-04): Test điều hướng: bấm lần lượt 4 mục thì hash đổi thành `#/hoc`, `#/luyen-tap`, `#/thu-vien`, `#/tien-bo` và đúng màn hiện ra.
- APP-AC03 [claude] (APP-02): Ảnh chụp T1 đến T4 ở 375 px và 1280 px có tên ngôn ngữ bên trái, nút Cài đặt bên phải.
- APP-AC07 [claude] (APP-05, APP-08): Giả lập mạng chậm (Slow 3G): ảnh chụp trong lúc tải là khung xương đúng hình, không phải màn trắng hay vòng xoay.
- APP-AC09 [claude] (APP-07): Ảnh chụp T1, T3, S3 ở 1440, 1280, 768, 375, 320 px: ở 1440 px vùng nội dung không rộng quá 1120 px, S3 không rộng quá 720 px; không có cuộn ngang, lề đúng 16 / 24 px, khối nội dung ở 768 px rộng tối đa 560 px.
- APP-AC13 [human] (APP-07, APP-09): Mở app trên trình duyệt máy tính (Chrome, Edge, Safari) và trên điện thoại (iPhone, Android), mỗi nơi đi hết luồng chọn ngôn ngữ, học một phiên, xem tiến bộ: hiển thị đủ, không có điều khiển bị che hay tràn.
- APP-AC14 [human] (APP-10): Trên điện thoại thật: mở app có mạng, tắt mạng, đóng và mở lại app: vẫn học được ngôn ngữ đã tải.
- APP-AC15 [auto] (APP-10): Giả lập service worker có bản mới: thông báo "Có bản cập nhật" hiện ở T1 nhưng không hiện khi đang ở S3; trang không tự tải lại.
- APP-AC16 [auto] (APP-11): Mở sheet Chi tiết câu rồi kích hoạt mở sheet Đổi ngôn ngữ: tại mọi thời điểm chỉ có một phần tử sheet/hộp thoại đang mở.

### FND Nền tảng thiết kế

- FND-AC03 [claude] (FND-02): Ảnh chụp mọi màn chính: mỗi màn có tối đa một nút nền `--brand`; câu trả lời sai trong S3 và S5 hiển thị màu `--review`, không đỏ.
- FND-AC05 [claude] (FND-04): Ảnh chụp thẻ câu có nghĩa chứa đủ dấu tiếng Việt khó ("Tôi muốn đặt một bàn cho hai người, được không ạ?") ở `--t-lg`, cùng câu tiếng Nhật, tiếng Nga và tiếng Tamil ở `--t-2xl`: không chồng dấu, không ô vuông thiếu chữ, font đúng vai trò; tab Network cho thấy font Noto JP chỉ tải khi chọn tiếng Nhật.
- FND-AC08 [claude] (FND-07, FND-08, FND-09): Đọc file token và CSS: khoảng cách chỉ dùng giá trị trong FND-07; bo góc đúng vai trò; `box-shadow` chỉ có ở sheet và hộp thoại.
- FND-AC09 [claude] (FND-10): Tìm trong mã nguồn và ảnh chụp: không có emoji, không có ảnh bitmap dùng làm icon, icon cùng một bộ và cùng nét.
- FND-AC11 [human] (FND-11): Trên điện thoại thật, chuyển động hiện câu gốc và mở sheet cho cảm giác phản hồi ngay, không chậm, không giật.
- FND-AC12 [claude] (FND-12): Rà toàn bộ chuỗi giao diện: không còn từ trong cột "Không dùng"; nút và thông báo cùng luồng dùng cùng động từ; mọi thông báo lỗi có hướng xử lý.
- FND-AC13 [human] (FND-12): Một người không trong nhóm đọc toàn bộ chuỗi giao diện và không thấy câu nào khó hiểu hoặc sai giọng.
- FND-AC14 [claude] (FND-13): Rà ảnh chụp mọi màn theo từng gạch đầu dòng của FND-13 và ghi kết quả từng dòng vào bằng chứng.
- FND-AC15 [auto] (FND-14): Chạy axe-core trên mọi route ở 375 px và 1280 px, sáng và tối: không có lỗi mức serious hoặc critical.
- FND-AC16 [claude] (FND-14): Đi hết luồng T1 → S3 → tổng kết → T4 chỉ bằng bàn phím; ảnh chụp viền focus thấy rõ ở mọi điều khiển.
- FND-AC17 [human] (FND-14): Bật VoiceOver (iPhone) và TalkBack (Android): câu tiếng Anh được đọc bằng giọng tiếng Anh, nghĩa đọc bằng giọng tiếng Việt; đi được hết luồng học một phiên.

### DATA Dữ liệu và tiến độ

- DATA-AC09 [auto] (DATA-07): Cùng một bộ tiến độ, số "câu cần ôn hôm nay" hiển thị ở T1, T2 và T4 bằng nhau, và bằng số câu có trạng thái Cần ôn ở T3.
- DATA-AC11 [claude] (DATA-09): Chạy lại `node scripts/make-fixtures.mjs` không làm đổi file nào trong git; đối chiếu nội dung `fe/fixtures/` (kể cả bộ tiến độ mẫu và số liệu tính tay) với danh sách trong DATA-09, ghi từng mục đạt hay không vào bằng chứng.
- DATA-AC12 [human] (DATA-09): Xác nhận bằng văn bản từ khách cho phép dùng bộ dữ liệu trong `fe/public/data/` cho phát triển và demo (nhóm đã ghi nhận đồng ý ngày 08/10/2026; người kiểm lưu lại tin nhắn làm bằng chứng).
- DATA-AC13 [auto] (DATA-10): Test giao diện ghi lại mọi request trong luồng T1 → S3 → T3 → T4 → S8: chỉ có request tới origin của app và base URL dữ liệu; không có request chứa `/api/` hoặc `get-data`.
- DATA-AC18 [auto] (DATA-04): Render thẻ câu, T1 và T3 với fixture Global English: có dòng Cách dùng, tình huống, mã trình độ, bộ lọc Chủ đề; với fixture English Fluency: không có các phần đó và không lỗi.

### C1 Thẻ câu

- C1-AC05 [human] (C1-04): Trên iPhone, Android và Windows: Nghe đọc đúng câu bằng giọng tiếng Anh; Nghe lặp lặp lại và dừng được.

### C3 Nút

- C3-AC03 [human] (C3-03): Trên điện thoại thật, dùng một tay bấm 20 lần xen kẽ hai nút đánh giá: không lần nào bấm nhầm.

### C4 Lựa chọn trắc nghiệm

- C4-AC01 [claude] (C4-01): Ảnh chụp với nghĩa dài trên 120 ký tự ở 320 px: chữ xuống dòng đủ, không bị cắt; số thứ tự chỉ hiện ở 1280 px.

### C5 Thanh tab

- C5-AC01 [claude] (C5-01): Ảnh chụp 375 px trên khung giả lập iPhone có vùng an toàn đáy: thanh cao 64 px cộng vùng an toàn, 4 mục chia đều, nhãn không bị cắt ở 320 px.
- C5-AC02 [claude] (C5-02): Ảnh chụp 1280 px: thanh dọc 220 px bên trái, mục cao 48 px, căn trái.

### C6 Sheet

- C6-AC03 [human] (C6-02): Trên điện thoại thật, vuốt xuống trên tay nắm đóng được sheet, và vuốt lên xuống trong nội dung không vô tình đóng sheet.
- C6-AC05 [claude] (C6-04): Mở sheet Tìm câu theo từ khóa với 40 kết quả ở 375 px: nội dung cuộn trong sheet, tiêu đề đứng yên, trang phía sau không cuộn.

### C7 Thông báo ngắn

- C7-AC01 [claude] (C7-01): Ảnh chụp thông báo ở T1 (có thanh tab) và S3 (không có thanh tab) ở 375 px và 1280 px: vị trí đúng, không che thanh tab, rộng không quá 480 px.

### S1 Chọn ngôn ngữ

- S1-AC06 [human] (S1-01, S1-04): Người học mới (không hướng dẫn) chọn được Tiếng Anh trong lần chạm đầu tiên.

### S3 Phiên học

- S3-AC11 [human] (S3-03, S3-04): Ba người học làm một phiên trên điện thoại thật; không ai thấy bước kiểm tra lặp lại vô nghĩa hay gây khó chịu (hỏi sau phiên). Ghi lại thời gian mỗi phiên.

### S5 Kiểm tra nhanh

- S5-AC01 [auto] (S5-01): Mở `#/kiem-tra` không tham số thì nhóm câu là unit đang học; với `?unit=2` là unit 2. Bốn nút bắt đầu đúng nhãn; mỗi nút chạy đúng bước tương ứng.
- S5-AC02 [auto] (S5-02): Khi làm cả 3 bước, chỉ báo có 3 chấm và trạng thái đổi đúng khi sang bước; khi chỉ làm một bước, chỉ báo có 1 chấm.
- S5-AC03 [auto] (S5-03): Với `speechSynthesis` giả: vào câu gọi `speak` một lần; chữ câu gốc không có trong DOM trước khi chọn đúng. Với không có giọng: chữ câu gốc hiện ngay và có dòng thông báo.
- S5-AC04 [auto] (S5-04): Test đơn vị chia cụm: câu 1, 3, 7, 8 và 12 từ cho 1, 2, 3, 4, 4 cụm; ghép các cụm lại bằng đúng câu gốc. Chạm hết cụm thì nút "Câu tiếp" hiện; câu 1 cụm bị bỏ qua.
- S5-AC05 [auto] (S5-05): Thứ tự xáo khác thứ tự đúng và giống nhau giữa hai lần mở cùng câu; xếp đúng thì nút thành "Câu tiếp"; xếp sai thì đúng các cụm sai vị trí được đánh dấu.
- S5-AC06 [claude] (S5-06): Ảnh chụp bước 2 và bước 3 ở 375 px: chỉ có nghĩa cả câu, không có nghĩa từng cụm.
- S5-AC07 [auto] (S5-07): Làm cả 3 bước với 1 câu sai ở bước 1: kết quả hiện đúng số liệu từng bước; câu sai thành Cần ôn trong tiến độ; ở unit cuối không có nút "Kiểm tra unit tiếp theo".
- S5-AC08 [auto] (S5-08): Thoát giữa bước 2: sheet xác nhận đúng chữ; "Dừng" về màn trước; kết quả các câu đã làm có trong tiến độ; mở lại `#/kiem-tra` bắt đầu từ màn bắt đầu.
- S5-AC09 [claude] (S5-01, S5-03, S5-04, S5-05, S5-07): Ảnh chụp màn bắt đầu, mỗi bước và kết quả ở 320, 375, 1280 px, sáng và tối; các cụm xuống dòng hợp lý với câu dài.
- S5-AC10 [human] (S5-04, S5-05): Ba người học làm cả 3 bước trên điện thoại thật; ghi lại câu nào họ thấy cách chia cụm vô lý. Nhóm quyết định chấp nhận hay đổi quy tắc chia cụm.

### S8 Cài đặt

- S8-AC01 [auto] (S8-01): Bộ tăng giảm không xuống dưới 1, không vượt 21; đổi thành 7 thì T1 hiện "Tuần này: x/7 phiên"; chạm "Ngôn ngữ đang học" mở sheet Đổi ngôn ngữ.
- S8-AC02 [auto] (S8-02): Với `getVoices` giả có 3 giọng `en-*` và 1 giọng `vi-VN`: sheet liệt kê "Mặc định của thiết bị" và 3 giọng tiếng Anh; đổi "Giọng cho" sang Tiếng Việt thì liệt kê giọng `vi-VN`; chọn giọng và tốc độ 1,25x thì C1 đọc bằng đúng giọng và `rate` 1.25.
- S8-AC03 [human] (S8-02): Trên iPhone, Android và Windows: danh sách giọng hiện đúng các giọng của máy; "Nghe thử" phát đúng giọng đã chạm.
- S8-AC04 [auto] (S8-03): Với fixture tiếng Anh, không có mục "Âm thanh ngoại tuyến" trong DOM.
- S8-AC05 [auto] (S8-04): Chọn "Tối" thì bảng màu tối áp dụng ngay và giữ sau khi tải lại.
- S8-AC06 [auto] (S8-05): Xuất rồi xóa rồi nhập lại file vừa xuất: tiến độ trở lại giống hệt trước khi xóa. Nhập file của ngôn ngữ khác hoặc file JSON bất kỳ: hiện đúng thông báo lỗi và tiến độ không đổi. Nút "Xóa" chỉ mở khi gõ đúng tên ngôn ngữ.
- S8-AC07 [human] (S8-05): Trên iPhone (Safari) và Android (Chrome): "Xuất tiến độ" tải được file về máy và "Nhập tiến độ" chọn được chính file đó.
- S8-AC08 [auto] (S8-06): "Xem lại hướng dẫn" về T1 và hiện bước 1 của S9; dòng phiên bản khớp `version` trong package.json.
- S8-AC09 [claude] (S8-01, S8-02, S8-04, S8-05, S8-06): Ảnh chụp S8 và sheet Giọng đọc ở 375 px và 1280 px, sáng và tối: nhóm rõ ràng, nhãn đúng, không có mục ngoài spec.
- S8-AC10 [auto] (S8-01): Đang học Global English: mục "Ngôn ngữ đang học" hiện "Tiếng Anh" và "Global English"; chạm mở sheet Đổi ngôn ngữ có hai dòng Tiếng Anh.

### S9 Hướng dẫn lần đầu

- S9-AC05 [auto] (S9-05): Mở từ S8 "Xem lại hướng dẫn": bắt đầu ở bước 1, bước 3 có nút "Xong" thay cho "Bắt đầu học".
- S9-AC06 [human] (S9-02): Người học mới đọc hết 3 bước trong dưới 20 giây và nói lại được Ôn tập nằm ở đâu.

### T1 Học

- T1-AC09 [human] (T1-02, T1-04): Trên điện thoại thật, người học hiểu được khi nào nên bấm nút chính và khi nào nên chạm dòng câu cần ôn (hỏi lại sau khi họ thao tác).

### T2 Luyện tập

- T2-AC01 [claude] (T2-01): Ảnh chụp ở 375 px và 1280 px, sáng và tối: ba mục đúng thứ tự, ngăn bằng đường kẻ, không có khung thẻ, không có nút nền `--brand`.
- T2-AC02 [auto] (T2-02): Với 12 câu cần ôn: mục hiện "12", chạm mở `#/phien-hoc?nguon=on-tap`. Với 0 câu: mục bị khóa, mô tả "Không có câu cần ôn hôm nay."
- T2-AC03 [auto] (T2-03): Gõ "dat phong" trong sheet: sau 250 ms hiện số câu khớp theo DATA-12 và tối đa 5 câu xem trước; chạm chip "sân bay" điền "sân bay" vào ô tìm; "Học 8 câu đầu" mở đúng route với `q` và `nhom=1`.
- T2-AC04 [auto] (T2-04): Chạm Kiểm tra nhanh mở `#/kiem-tra` với unit đang học trong lộ trình.
- T2-AC05 [auto] (T2-05): Gõ "xyzxyz": hiện đúng câu thông báo không có kết quả và nút "Học 8 câu đầu" bị khóa.
- T2-AC06 [claude] (T2-03, T2-05): Ảnh chụp sheet Học theo từ khóa ở 375 px với 40 kết quả và với 0 kết quả.
- T2-AC07 [auto] (T2-03): Với fixture Global English, chip là các `topic` xếp theo số câu giảm dần, tối đa 6; với fixture English Fluency, chip là 4 chip cố định.

### T3 Thư viện

- T3-AC01 [auto] (T3-01): Trang 1 có tối đa 32 dòng; mỗi dòng có id 4 chữ số, câu gốc, nghĩa và biểu tượng trạng thái đúng với tiến độ fixture cho cả 3 trạng thái.
- T3-AC02 [claude] (T3-01): Ảnh chụp ở 320, 375, 1280 px, sáng và tối, với câu dài: câu gốc cắt ở 2 dòng, nghĩa cắt ở 1 dòng, không tràn ngang; biểu tượng trạng thái phân biệt được khi chuyển ảnh sang thang xám.
- T3-AC03 [auto] (T3-02): Gõ "BOOK" hiện các câu chứa "book"; route có `?q=BOOK`; tải lại trang giữ từ khóa; nút xóa làm trống ô và hiện lại toàn bộ.
- T3-AC04 [auto] (T3-03): Lọc Unit 2 và Trạng thái "Chưa học" chỉ hiện câu thuộc unit 2 chưa học; kết hợp thêm từ khóa thì thu hẹp tiếp; nhãn bộ lọc hiện giá trị đang chọn.
- T3-AC05 [auto] (T3-04): Ở trang 2, đổi bộ lọc thì về trang 1; "Trước" khóa ở trang 1, "Sau" khóa ở trang cuối; chỉ một trang thì không có phân trang.
- T3-AC06 [auto] (T3-05): Chạm dòng id 257: sheet tiêu đề "Câu 0257" có thẻ câu, unit, trạng thái, lần học gần nhất; "Học câu này" mở `#/phien-hoc?nguon=cau&id=257`.
- T3-AC07 [auto] (T3-06): Tìm "xyzxyz": hiện đúng câu thông báo; "Xóa tìm kiếm và bộ lọc" đưa về danh sách đầy đủ.
- T3-AC08 [claude] (T3-07): Ảnh chụp 1280 px: danh sách trái rộng không quá 480 px, chi tiết câu ở cột phải, chạm dòng khác thì cột phải đổi, không mở sheet.
- T3-AC09 [auto] (T3-03): Với fixture Global English có bộ lọc Chủ đề, chọn "Trường học" chỉ còn các câu có `topic` đó; với fixture English Fluency không có bộ lọc Chủ đề.
- T3-AC10 [auto] (T3-03): Với fixture Global English, bộ lọc Trình độ có A1 và B2 (các trình độ có trong dữ liệu); chọn B2 chỉ còn 8 câu của unit B2-89; danh sách Chủ đề có ô tìm và số câu mỗi chủ đề.

### T4 Tiến bộ

- T4-AC01 [auto] (T4-01): Mặc định chọn "7 ngày"; chọn "30 ngày" thì route có `?khoang=30` và số liệu đổi theo; tải lại giữ lựa chọn.
- T4-AC02 [auto] (T4-02): Với fixture tiến độ, ba chỉ số khớp giá trị tính tay ghi trong file fixture cho cả 3 khoảng; số câu cần ôn giống nhau ở 3 khoảng và bằng số ở T1.
- T4-AC03 [auto] (T4-03): Mục tiêu tuần giống T1-03 ở mọi khoảng; khi đạt mục tiêu, thanh dùng màu `--known`.
- T4-AC04 [auto] (T4-04): Khoảng 7 ngày có 7 cột, 30 ngày có 30 cột, 1 ngày không có biểu đồ; có bảng số liệu ẩn cho trình đọc màn hình với đúng giá trị.
- T4-AC05 [claude] (T4-04): Ảnh chụp biểu đồ 7 và 30 ngày ở 320 px và 1280 px, sáng và tối: cột hôm nay màu `--brand`, nhãn trục không chồng nhau, chiều cao cột đúng tỉ lệ.
- T4-AC06 [auto] (T4-05): Ba dòng lịch ôn khớp giá trị tính tay theo DATA-07; câu quá hạn tính vào "Hôm nay".
- T4-AC07 [auto] (T4-06): Danh sách phiên đúng thứ tự mới nhất trước, đúng nhãn nguồn, tối đa 20 dòng rồi có "Xem thêm".
- T4-AC08 [auto] (T4-07): Chạm cột ngày có 2 phiên: sheet tiêu đề đúng thứ và ngày, có 2 phiên và đúng danh sách câu.
- T4-AC09 [auto] (T4-08): Tiến độ trống: chỉ có bộ chọn khoảng, đoạn thông báo đúng mẫu và nút "Học 8 câu".
- T4-AC10 [human] (T4-02, T4-05): Người học xem màn này và giải thích đúng con số "cần ôn hôm nay" và "Lịch ôn" nghĩa là gì (dùng chung buổi test G-AC02).
