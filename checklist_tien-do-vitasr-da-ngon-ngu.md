# Checklist chức năng VITASR Đa ngôn ngữ

Cập nhật 10/10/2026 · nhánh `Manh_work_10_10` (main `ec1d2f2` cộng spec chốt cách mở app và code APP-12) · repo `nguyendinhdat2207/dangonngu`

File này liệt kê từng chức năng của mini app theo từng màn, kèm mô tả, chi tiết cần lưu ý, câu hỏi còn treo, phản hồi của dev và trạng thái. Nguồn: `spec.md` và `acceptance.md` của 20 khu vực trong repo, `docs/generated/acceptance-report.md`, lịch sử commit và báo cáo tổng hợp ngày 10/10.

## Chú thích

**Trạng thái**

| Trạng thái | Nghĩa |
|---|---|
| Hoàn thành | Đã code, mọi mục nghiệm thu của chức năng đã đạt |
| Chờ thử thật | Đã code, mục tự động và mục kiểm bằng ảnh đã đạt; còn mục `[human]` cần điện thoại thật hoặc người học thật |
| Chờ xác nhận | Đã code theo một cách hợp lý; nhóm chỉ cần đồng ý hoặc ghi cách muốn đổi |
| Cần trao đổi | Nhóm hoặc khách phải chọn phương án; câu trả lời có thể đổi code hoặc phạm vi |
| Đã quyết định | Nhóm hoặc khách đã trả lời; ghi chú ngay trong ô trạng thái nói quyết định ra sao, việc còn phải làm ghi ở cột Phản hồi Dev |
| Đã chốt | Đã có quyết định, không cần làm thêm |
| Chưa làm | Việc chưa bắt đầu |

**Ưu tiên** (spec không ghi mức ưu tiên; mức dưới đây là đề xuất để nhóm sắp việc, sửa lại nếu cần)

| Mức | Dùng cho |
|---|---|
| Cao | Luồng học chính (chọn ngôn ngữ, học, phiên học), dữ liệu, khung app, hoặc câu hỏi có thể đổi phạm vi hay đang chặn nghiệm thu |
| Trung bình | Các màn phụ (Luyện tập, Thư viện, Tiến bộ, Kiểm tra nhanh, Cài đặt) và thành phần dùng chung |
| Thấp | Chi tiết hiển thị, chữ, trường hợp biên |

Cột **Tên chức năng** có ô `[x]` khi chức năng đã hoàn thành. Cột **Phản hồi Dev** ghi đợt code, các mục nghiệm thu đã đạt, mục còn mở và cách code đang làm với các câu hỏi treo.

## Tổng quan tiến độ

Toàn bộ 135 chức năng trong spec đã có code, kể cả APP-12 (nút về trang học chính, thêm ngày 10/10 theo quyết định ở APP-09). 150/173 mục nghiệm thu đạt; 22 mục cần thử trên thiết bị thật, với người học thật hoặc trên trang học chính, 1 mục (FND-AC12) chờ nhóm duyệt chữ. Trên nhánh `Manh_work_10_10`: 152 test đơn vị và 15 test trình duyệt đạt, `spec:check` không lỗi.

| Khu vực | Route | Chức năng | Hoàn thành | Chờ thử thật | Chờ xác nhận | Cần trao đổi | Đã quyết định | Chưa làm | Nghiệm thu đạt |
|---|---|---|---|---|---|---|---|---|---|
| S1 Chọn ngôn ngữ | `#/chon-ngon-ngu` | 7 | 4 | 2 | 0 | 1 | 0 | 0 | 7/8 |
| T1 Học | `#/hoc` | 7 | 4 | 2 | 1 | 0 | 0 | 0 | 9/10 |
| S3 Phiên học | `#/phien-hoc` | 9 | 7 | 2 | 0 | 0 | 0 | 0 | 10/11 |
| T2 Luyện tập | `#/luyen-tap` | 5 | 4 | 0 | 1 | 0 | 0 | 0 | 7/7 |
| S5 Kiểm tra nhanh | `#/kiem-tra` | 8 | 3 | 1 | 4 | 0 | 0 | 0 | 9/10 |
| T3 Thư viện | `#/thu-vien` | 7 | 6 | 0 | 1 | 0 | 0 | 0 | 10/10 |
| T4 Tiến bộ | `#/tien-bo` | 8 | 4 | 1 | 1 | 2 | 0 | 0 | 9/10 |
| S8 Cài đặt | `#/cai-dat` | 6 | 2 | 0 | 1 | 3 | 0 | 0 | 8/10 |
| S9 Hướng dẫn lần đầu | (lớp phủ trên T1) | 5 | 4 | 1 | 0 | 0 | 0 | 0 | 5/6 |
| APP Khung app |  | 12 | 8 | 2 | 1 | 0 | 1 | 0 | 17/20 |
| C1 Thẻ câu |  | 8 | 6 | 1 | 1 | 0 | 0 | 0 | 7/8 |
| C2 Dải 8 ô |  | 3 | 3 | 0 | 0 | 0 | 0 | 0 | 3/3 |
| C3 Nút |  | 4 | 3 | 1 | 0 | 0 | 0 | 0 | 3/4 |
| C4 Lựa chọn trắc nghiệm |  | 3 | 3 | 0 | 0 | 0 | 0 | 0 | 3/3 |
| C5 Thanh tab |  | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 4/4 |
| C6 Sheet |  | 4 | 2 | 1 | 0 | 1 | 0 | 0 | 4/5 |
| C7 Thông báo ngắn |  | 3 | 3 | 0 | 0 | 0 | 0 | 0 | 3/3 |
| FND Nền tảng thiết kế |  | 14 | 10 | 2 | 0 | 2 | 0 | 0 | 13/17 |
| DATA Dữ liệu và tiến độ |  | 13 | 9 | 0 | 1 | 3 | 0 | 0 | 18/19 |
| G Mục tiêu sản phẩm |  | 5 | 1 | 3 | 0 | 1 | 0 | 0 | 1/5 |
| **Tổng** | | **135** | **90** | **19** | **12** | **13** | **1** | **0** | **150/173** |

## Các màn của app

### S1 Chọn ngôn ngữ  `#/chon-ngon-ngu`

Màn toàn trang đầu tiên khi chưa chọn ngôn ngữ. Nghiệm thu: **7/8** mục đạt. Chức năng hoàn thành: 4/7.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [ ] **S1-01** Danh sách và thứ tự | Người học thấy danh sách 15 ngôn ngữ để chọn ngôn ngữ muốn học. | Tiếng Anh luôn đứng đầu, có khung viền riêng; các ngôn ngữ khác xếp theo tên tiếng Việt A đến Z. |  | Code Đợt 1 (`97e85fa`). Đạt: S1-AC01, S1-AC02. Còn mở: S1-AC06 [human]. | Chờ thử thật | Cao |
| 2 | [x] **S1-02** Nội dung mỗi dòng | Mỗi dòng hiện tên tiếng Việt và tên gốc của ngôn ngữ. | Tên gốc lấy từ `source-index.json` (ví dụ 日本語, Русский); thiếu thì dùng `Intl.DisplayNames`, vẫn thiếu thì bỏ dòng tên gốc. |  | Code Đợt 1 (`97e85fa`). Đạt: S1-AC02, S1-AC03. | Hoàn thành | Trung bình |
| 3 | [x] **S1-03** Số câu | Hiện số câu của mỗi ngôn ngữ. | Định dạng kiểu Việt Nam (4.096). Tiếng Anh có 2 bộ nên hiện "2 bộ" và mũi tên thay cho số câu. |  | Code Đợt 1 (`97e85fa`). Đạt: S1-AC02. | Hoàn thành | Thấp |
| 4 | [ ] **S1-04** Chọn | Chạm một dòng là chọn ngay, không cần nút xác nhận. | Lưu ngôn ngữ rồi chuyển sang `#/hoc`. Trong lúc tải, dòng vừa chạm có chỉ báo, các dòng khác bị khóa. |  | Code Đợt 1 (`97e85fa`). Đạt: S1-AC04, S1-AC07. Còn mở: S1-AC06 [human]. | Chờ thử thật | Cao |
| 5 | [x] **S1-05** Chú thích | Dòng chú thích cuối danh sách: có thể đổi ngôn ngữ sau. | Chữ "Có thể đổi sau ở thanh trên cùng." |  | Code Đợt 1 (`97e85fa`). Đạt: S1-AC02. | Hoàn thành | Thấp |
| 6 | [x] **S1-06** Tải và lỗi | Có trạng thái đang tải và lỗi tải. | Khung xương 6 dòng khi tải; lỗi theo APP-08 (có nút Thử lại). |  | Code Đợt 1 (`97e85fa`). Đạt: S1-AC05. | Hoàn thành | Trung bình |
| 7 | [ ] **S1-07** Chọn bộ nội dung | Bước 2 cho tiếng Anh: chọn bộ Global English hoặc English Fluency. | Chỉ hiện với ngôn ngữ nhiều bộ. Thứ tự: Global English trước. Có nút Quay lại về danh sách ngôn ngữ. | Bản cũ có chế độ "Tiếng Việt (từ tiếng Anh)" đảo chiều câu gốc và nghĩa. Khách có cần không? | Code Đợt 1 (`97e85fa`). Đạt: S1-AC07, S1-AC08. Bản đầu chưa có. Nếu khách cần thì thêm một bộ nội dung ảo và đổi thẻ câu. | Cần trao đổi | Cao |

### T1 Học  `#/hoc`

Khu chính mặc định: thẻ câu tiếp theo và nút bắt đầu phiên. Nghiệm thu: **9/10** mục đạt. Chức năng hoàn thành: 4/7.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **T1-01** Thẻ câu tiếp theo | Màn Học hiện thẻ câu tiếp theo trong lộ trình kèm tên unit. | Có "Unit n", mã trình độ (A1...) và tình huống khi là Global English. Dải 8 ô thể hiện trạng thái các câu trong unit. |  | Code Đợt 1 (`97e85fa`). Đạt: T1-AC01, T1-AC02, T1-AC10. | Hoàn thành | Cao |
| 2 | [ ] **T1-02** Nút chính đổi chữ theo ngữ cảnh | Một nút chính đổi chữ theo ngữ cảnh: "Học 8 câu" hoặc "Tiếp tục: N câu còn lại". | Unit dưới 8 câu thì ghi "Học N câu". Có phiên dở thì mở lại đúng câu đang dở. |  | Code Đợt 1 (`97e85fa`). Đạt: T1-AC03. Còn mở: T1-AC09 [human]. | Chờ thử thật | Cao |
| 3 | [ ] **T1-03** Mục tiêu tuần | Dòng mục tiêu tuần "Tuần này: x/y phiên". | x là số phiên hoàn tất trong 7 ngày gần nhất (tính cả hôm nay); y lấy từ Cài đặt. | "Phiên hoàn tất" gồm những loại phiên nào? | Code Đợt 1 (`97e85fa`). Đạt: T1-AC04. Code đếm mọi loại phiên đã xong (lộ trình, ôn tập, từ khóa, một câu, kiểm tra nhanh), không đếm phiên bị dừng. | Chờ xác nhận | Trung bình |
| 4 | [ ] **T1-04** Câu cần ôn | Dòng "N câu cần ôn hôm nay", chạm vào để ôn. | Chỉ hiện khi N > 0; mở `#/phien-hoc?nguon=on-tap`. |  | Code Đợt 1 (`97e85fa`). Đạt: T1-AC05. Còn mở: T1-AC09 [human]. | Chờ thử thật | Cao |
| 5 | [x] **T1-05** Học hết lộ trình | Trạng thái đã học hết lộ trình. | Thay thẻ và nút bằng câu "Bạn đã học hết ... Vào Luyện tập để ôn lại." và nút "Mở Luyện tập". |  | Code Đợt 1 (`97e85fa`). Đạt: T1-AC06. | Hoàn thành | Trung bình |
| 6 | [x] **T1-06** Bố cục máy tính | Bố cục hai cột trên máy tính. | Từ 900 px: cột trái (tối đa 560 px) là thẻ và nút; cột phải là mục tiêu tuần và câu cần ôn. |  | Code Đợt 1 (`97e85fa`). Đạt: T1-AC07. | Hoàn thành | Cao |
| 7 | [x] **T1-07** Không đổi câu trên T1 | T1 chỉ hiện một câu, không vuốt hay bấm để đổi câu. | Muốn xem câu khác thì vào Thư viện (T3). |  | Code Đợt 1 (`97e85fa`). Đạt: T1-AC08. | Hoàn thành | Thấp |

### S3 Phiên học  `#/phien-hoc`

Màn toàn trang học 8 câu: ghi nhớ, kiểm tra, tổng kết. Nghiệm thu: **10/11** mục đạt. Chức năng hoàn thành: 7/9.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **S3-01** Nguồn câu của phiên | Phiên học lấy câu từ 4 nguồn: lộ trình, ôn tập, từ khóa, một câu. | Ôn tập lấy tối đa 8 câu đến hạn sớm nhất. Nhóm rỗng thì không vào phiên, quay lại và báo "Không có câu nào để học trong nhóm này." |  | Code Đợt 1 (`97e85fa`). Đạt: S3-AC01. | Hoàn thành | Cao |
| 2 | [x] **S3-02** Khung phiên | Khung phiên: nút Thoát, "Câu n/N", dải 8 ô cập nhật theo kết quả. | Mỗi câu đi qua bước ghi nhớ (S3a) rồi bước kiểm tra (S3b); xong câu cuối thì sang tổng kết (S3c). |  | Code Đợt 1 (`97e85fa`). Đạt: S3-AC02, S3-AC07. | Hoàn thành | Cao |
| 3 | [ ] **S3-03** Bước ghi nhớ | Bước ghi nhớ: che câu gốc, người học tự nhớ rồi chấm "Tôi nhớ" hoặc "Cần ôn lại". | Cặp nút đánh giá bị khóa cho tới khi hiện câu gốc. Kết quả ghi vào tiến độ và quy tắc ôn. |  | Code Đợt 1 (`97e85fa`). Đạt: S3-AC03, S3-AC07. Còn mở: S3-AC11 [human]. | Chờ thử thật | Cao |
| 4 | [ ] **S3-04** Bước kiểm tra | Bước kiểm tra: chọn nghĩa đúng trong 4 lựa chọn. | Chọn đúng mới hiện nút "Câu tiếp" (câu cuối: "Xem tổng kết"). |  | Code Đợt 1 (`97e85fa`). Đạt: S3-AC04, S3-AC07. Còn mở: S3-AC11 [human]. | Chờ thử thật | Cao |
| 5 | [x] **S3-05** Gợi ý | Nút "Xem gợi ý" ở bước kiểm tra. | Gợi ý chữ đầu và số từ của nghĩa; mỗi câu dùng một lần; câu dùng gợi ý bị tính là Cần ôn. |  | Code Đợt 1 (`97e85fa`). Đạt: S3-AC05. | Hoàn thành | Trung bình |
| 6 | [x] **S3-06** Tổng kết phiên | Màn tổng kết phiên. | Số câu nhớ được không cần gợi ý (x/N), danh sách câu Cần ôn. Nút "Học tiếp N câu" hoặc "Nhóm tiếp" (phiên từ khóa), kèm "Xem tiến bộ" và "Xong". |  | Code Đợt 1 (`97e85fa`). Đạt: S3-AC06, S3-AC07. | Hoàn thành | Cao |
| 7 | [x] **S3-07** Thoát giữa phiên | Thoát giữa phiên phải hỏi xác nhận. | Bấm Thoát, Esc hoặc Back trình duyệt đều mở sheet "Dừng phiên? Tiến độ n/N câu được giữ lại." |  | Code Đợt 1 (`97e85fa`). Đạt: S3-AC08. | Hoàn thành | Cao |
| 8 | [x] **S3-08** Phiên dở | Lưu phiên dở để học tiếp đúng câu, đúng bước. | Mỗi ngôn ngữ tối đa một phiên dở; bắt đầu phiên mới thì phiên dở cũ kết thúc. |  | Code Đợt 1 (`97e85fa`). Đạt: S3-AC09. | Hoàn thành | Cao |
| 9 | [x] **S3-09** Điều khiển | Phím tắt khi học bằng máy tính. | Space hiện câu gốc; 1 = Cần ôn lại, 2 = Tôi nhớ; 1 đến 4 chọn đáp án; Enter là nút chính. Không dùng vuốt. |  | Code Đợt 1 (`97e85fa`). Đạt: S3-AC10. | Hoàn thành | Trung bình |

### T2 Luyện tập  `#/luyen-tap`

Ôn câu cần ôn, học theo từ khóa, mở kiểm tra nhanh. Nghiệm thu: **7/7** mục đạt. Chức năng hoàn thành: 4/5.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **T2-01** Danh sách cách luyện | Màn Luyện tập có 3 cách luyện xếp dọc. | Ôn câu cần ôn, Học theo từ khóa, Kiểm tra nhanh. Ngăn bằng đường kẻ, không dùng thẻ; màn không có nút chính. |  | Code Đợt 2 (`757a784`). Đạt: T2-AC01. | Hoàn thành | Trung bình |
| 2 | [x] **T2-02** Ôn câu cần ôn | Ôn các câu đến hạn hôm nay. | Hiện số câu cần ôn; bằng 0 thì khóa mục và đổi mô tả thành "Không có câu cần ôn hôm nay." |  | Code Đợt 2 (`757a784`). Đạt: T2-AC02. | Hoàn thành | Trung bình |
| 3 | [ ] **T2-03** Học theo từ khóa | Học theo từ khóa: tìm câu theo chủ đề rồi học 8 câu đầu. | Sheet có ô tìm, chip gợi ý (6 chủ đề nhiều câu nhất, hoặc 4 chip cố định), xem trước 5 câu. Cập nhật sau 250 ms ngừng gõ. | (1) Nút có đổi thành "Học N câu" khi tìm thấy dưới 8 câu không? (2) Tìm theo chuỗi con nên "bus" khớp cả "busy"; có muốn khớp theo từ không? | Code Đợt 2 (`757a784`). Đạt: T2-AC03, T2-AC06, T2-AC07. Code giữ nút "Học 8 câu đầu" và tìm theo chuỗi con đúng DATA-12. | Chờ xác nhận | Trung bình |
| 4 | [x] **T2-04** Kiểm tra nhanh | Mở Kiểm tra nhanh với unit đang học. | Mở `#/kiem-tra`. |  | Code Đợt 2 (`757a784`). Đạt: T2-AC04. | Hoàn thành | Trung bình |
| 5 | [x] **T2-05** Không có kết quả | Báo khi không tìm thấy câu nào theo từ khóa. | "Không có câu nào chứa ... Thử từ khác hoặc từ tiếng Anh." và khóa nút học. |  | Code Đợt 2 (`757a784`). Đạt: T2-AC05, T2-AC06. | Hoàn thành | Thấp |

### S5 Kiểm tra nhanh  `#/kiem-tra`

Màn toàn trang kiểm tra một unit qua 3 bước. Nghiệm thu: **9/10** mục đạt. Chức năng hoàn thành: 3/8.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **S5-01** Màn bắt đầu | Màn bắt đầu kiểm tra nhanh một unit. | Nút chính "Làm cả 3 bước" và 3 nút để làm riêng từng bước. |  | Code Đợt 2 (`757a784`). Đạt: S5-AC01, S5-AC09. | Hoàn thành | Trung bình |
| 2 | [x] **S5-02** Chỉ báo bước | Chỉ báo bước đang làm. | Nút Thoát, tên bước, 3 chấm nối nhau (1 chấm khi chỉ làm một bước), "Câu n/N". |  | Code Đợt 2 (`757a784`). Đạt: S5-AC02. | Hoàn thành | Thấp |
| 3 | [ ] **S5-03** Bước 1: Nghe và chọn nghĩa | Bước 1: nghe câu rồi chọn nghĩa. | Tự đọc một lần, có "Nghe lại". Máy không có giọng thì hiện chữ thay âm thanh. | Trong lúc trình duyệt nạp giọng (tối đa 1,5 giây) bước 1 chưa hiện gì; cách này được không? | Code Đợt 2 (`757a784`). Đạt: S5-AC03, S5-AC09. Code chờ tối đa 1,5 giây rồi mới quyết định dùng âm thanh hay chữ. | Chờ xác nhận | Trung bình |
| 4 | [ ] **S5-04** Bước 2: Nghe theo cụm | Bước 2: nghe theo cụm từ. | Câu chia 1 đến 4 cụm theo số từ (Intl.Segmenter). Chạm cụm thì hiện chữ và đọc cụm. Không thu âm, không chấm phát âm. | Bước này chưa có loại lượt riêng nên làm "Chỉ nghe theo cụm" không tính câu nào là đã học; có thêm loại lượt (ví dụ `nghe-cum`) không? | Code Đợt 2 (`757a784`). Đạt: S5-AC04, S5-AC09. Còn mở: S5-AC10 [human]. Hiện T4 đếm phiên này nhưng không đếm câu. | Chờ xác nhận | Trung bình |
| 5 | [ ] **S5-05** Bước 3: Sắp xếp câu | Bước 3: sắp xếp các cụm thành câu đúng. | Xáo tất định theo id câu. Đúng thì viền xanh cả hàng; sai thì đánh dấu cụm sai vị trí và cho sắp lại. |  | Code Đợt 2 (`757a784`). Đạt: S5-AC05, S5-AC09. Còn mở: S5-AC10 [human]. | Chờ thử thật | Trung bình |
| 6 | [x] **S5-06** Nghĩa hiển thị | Chỉ hiện nghĩa cả câu ở bước 2 và 3. | Không ghép nghĩa từng cụm vì cụm tiếng Việt không khớp cụm câu gốc. |  | Code Đợt 2 (`757a784`). Đạt: S5-AC06. | Hoàn thành | Thấp |
| 7 | [ ] **S5-07** Kết quả | Kết quả kiểm tra theo từng bước. | Ví dụ "Nghe và chọn nghĩa: 6/8". Câu sai đầu tiên ở bất kỳ bước nào thành Cần ôn. Nút "Kiểm tra unit tiếp theo". | Bước Nghe theo cụm không có đúng sai, hiển thị kết quả thế nào? | Code Đợt 2 (`757a784`). Đạt: S5-AC07, S5-AC09. Code ghi số câu đã làm xong, ví dụ "Nghe theo cụm: 8/8". | Chờ xác nhận | Trung bình |
| 8 | [ ] **S5-08** Thoát giữa chừng | Thoát giữa chừng phải hỏi xác nhận. | "Dừng kiểm tra? Kết quả các câu đã làm vẫn được lưu." Không lưu bài dở để làm tiếp. | "Về màn trước" là màn nào? | Code Đợt 2 (`757a784`). Đạt: S5-AC08. Code về khu chính đã mở S5, thường là T2. | Chờ xác nhận | Thấp |

### T3 Thư viện  `#/thu-vien`

Tra cứu toàn bộ câu, tìm và lọc, học một câu bất kỳ. Nghiệm thu: **10/10** mục đạt. Chức năng hoàn thành: 6/7.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **T3-01** Danh sách câu | Thư viện liệt kê toàn bộ câu, 32 câu mỗi trang. | Mỗi dòng: id 4 chữ số, câu gốc (2 dòng), nghĩa (1 dòng), biểu tượng trạng thái khác hình dạng: Chưa học, Đã nhớ, Cần ôn. |  | Code Đợt 2 (`757a784`). Đạt: T3-AC01, T3-AC02. | Hoàn thành | Trung bình |
| 2 | [x] **T3-02** Tìm kiếm | Tìm câu hoặc nghĩa. | Cập nhật sau 250 ms ngừng gõ; bỏ dấu khi so khớp; từ khóa giữ trong route (`?q=`). |  | Code Đợt 2 (`757a784`). Đạt: T3-AC03. | Hoàn thành | Trung bình |
| 3 | [ ] **T3-03** Bộ lọc | Lọc theo Unit, Trạng thái, Chủ đề, Trình độ. | Chủ đề có ô tìm (177 chủ đề), chỉ hiện với Global English. Tìm và lọc kết hợp được. | (1) Có cần giữ cả bộ lọc Trạng thái, Chủ đề, Trình độ trong route không? (2) Danh sách chọn của bộ lọc mở bằng sheet được chưa? | Code Đợt 2 (`757a784`). Đạt: T3-AC04, T3-AC09, T3-AC10. Code chỉ giữ Unit và từ khóa trong route; bộ lọc khác mất khi tải lại. Danh sách chọn mở bằng sheet. Bộ lọc Trình độ chỉ liệt kê trình độ có trong dữ liệu. | Chờ xác nhận | Trung bình |
| 4 | [x] **T3-04** Phân trang | Phân trang Trước / Trang x/y / Sau. | Đổi từ khóa hoặc bộ lọc thì về trang 1; chỉ có một trang thì ẩn. |  | Code Đợt 2 (`757a784`). Đạt: T3-AC05. | Hoàn thành | Thấp |
| 5 | [x] **T3-05** Chi tiết câu | Xem chi tiết một câu và học ngay câu đó. | Sheet "Câu [id]": thẻ câu, unit, trạng thái, lần học cuối, nút "Học câu này". |  | Code Đợt 2 (`757a784`). Đạt: T3-AC06. | Hoàn thành | Trung bình |
| 6 | [x] **T3-06** Không có kết quả | Báo khi không có câu nào khớp. | Có nút phụ "Xóa tìm kiếm và bộ lọc". |  | Code Đợt 2 (`757a784`). Đạt: T3-AC07. | Hoàn thành | Thấp |
| 7 | [x] **T3-07** Bố cục máy tính | Bố cục hai cột trên máy tính. | Từ 900 px: danh sách bên trái (tối đa 480 px), chi tiết câu ở cột phải thay cho sheet. |  | Code Đợt 2 (`757a784`). Đạt: T3-AC08. | Hoàn thành | Trung bình |

### T4 Tiến bộ  `#/tien-bo`

Số liệu học tập, biểu đồ, lịch ôn, các phiên. Nghiệm thu: **9/10** mục đạt. Chức năng hoàn thành: 4/8.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **T4-01** Khoảng thời gian | Chọn khoảng thời gian 1, 7 hoặc 30 ngày. | Mặc định 7 ngày, giữ trong route (`?khoang=`); tính theo ngày lịch của máy. |  | Code Đợt 2 (`757a784`). Đạt: T4-AC01. | Hoàn thành | Trung bình |
| 2 | [ ] **T4-02** Ba chỉ số | Ba chỉ số: số phiên, số câu đã học, số câu cần ôn hôm nay. | Câu cần ôn không phụ thuộc khoảng thời gian. |  | Code Đợt 2 (`757a784`). Đạt: T4-AC02. Còn mở: T4-AC10 [human]. | Chờ thử thật | Cao |
| 3 | [x] **T4-03** Mục tiêu tuần | Mục tiêu tuần có thanh tiến độ. | Luôn tính 7 ngày gần nhất; đạt mục tiêu thì thanh đổi sang màu xanh. |  | Code Đợt 2 (`757a784`). Đạt: T4-AC03. | Hoàn thành | Trung bình |
| 4 | [ ] **T4-04** Biểu đồ theo ngày | Biểu đồ cột số câu đã học mỗi ngày. | Có bảng số liệu ẩn cho trình đọc màn hình; khoảng 1 ngày thì không có biểu đồ. | (1) Cột hôm nay tô màu thương hiệu theo T4-04, trái FND-02; giữ làm ngoại lệ hay đổi màu? (2) Khoảng 30 ngày ở 320 px mỗi cột chỉ ~9 px; cần cách khác để mở chi tiết ngày không? | Code Đợt 2 (`757a784`). Đạt: T4-AC04, T4-AC05. Code theo T4-04; ngày không học (một chấm) không chạm được. | Cần trao đổi | Trung bình |
| 5 | [ ] **T4-05** Lịch ôn | Lịch ôn: Hôm nay, Ngày mai, 7 ngày tới. | Câu quá hạn trước hôm nay tính vào "Hôm nay". | "7 ngày tới" gộp cả số của "Ngày mai" hay tách riêng? | Code Đợt 2 (`757a784`). Đạt: T4-AC06. Còn mở: T4-AC10 [human]. Code đang gộp (tiến độ mẫu: Ngày mai 5, 7 ngày tới 19). | Cần trao đổi | Trung bình |
| 6 | [x] **T4-06** Các phiên | Danh sách các phiên đã học. | Mới nhất trước; có giờ, nguồn, dải ô kết quả; 20 phiên mỗi lần, có "Xem thêm". |  | Code Đợt 2 (`757a784`). Đạt: T4-AC07. | Hoàn thành | Thấp |
| 7 | [x] **T4-07** Chi tiết ngày | Chạm một cột để xem chi tiết ngày. | Sheet gồm các phiên và các câu đã học trong ngày. |  | Code Đợt 2 (`757a784`). Đạt: T4-AC08. | Hoàn thành | Thấp |
| 8 | [ ] **T4-08** Chưa có dữ liệu | Trạng thái chưa có dữ liệu. | "Chưa có phiên nào. Học 8 câu đầu tiên..." và nút "Học 8 câu". | "Chưa có phiên nào" hiểu là chưa từng xong phiên nào, đúng không? | Code Đợt 2 (`757a784`). Đạt: T4-AC09. Có phiên nhưng khoảng đang chọn không có thì vẫn hiện chỉ số bằng 0 và ẩn mục Các phiên. | Chờ xác nhận | Thấp |

### S8 Cài đặt  `#/cai-dat`

Mục tiêu tuần, ngôn ngữ, giọng đọc, giao diện, dữ liệu. Nghiệm thu: **8/10** mục đạt. Chức năng hoàn thành: 2/6.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **S8-01** Học tập | Cài đặt học tập: mục tiêu tuần và ngôn ngữ đang học. | Mục tiêu 1 đến 21 phiên (mặc định 5), lưu ngay khi đổi; chạm ngôn ngữ mở sheet Đổi ngôn ngữ. |  | Code Đợt 2 (`757a784`). Đạt: S8-AC01, S8-AC09, S8-AC10. | Hoàn thành | Trung bình |
| 2 | [ ] **S8-02** Giọng đọc | Chọn giọng đọc và tốc độ đọc. | Giọng theo ngôn ngữ đang học hoặc tiếng Việt, có "Nghe thử"; tốc độ 0,75x / 1x / 1,25x. Máy không có giọng thì hướng dẫn thêm giọng. | Giọng tiếng Việt lưu được nhưng chưa màn nào đọc nghĩa thành tiếng. Có cần nút nghe nghĩa ở thẻ câu không? | Code Đợt 2 (`757a784`). Đạt: S8-AC02, S8-AC09. Còn mở: S8-AC03 [human]. Hiện chỉ lưu lựa chọn, chưa dùng. | Cần trao đổi | Trung bình |
| 3 | [x] **S8-03** Âm thanh ngoại tuyến | Âm thanh ngoại tuyến (gói âm thanh dựng sẵn). | Bản đầu chưa hỗ trợ nên mục này ẩn với mọi ngôn ngữ (dữ liệu chỉ có gói tiếng Lào). |  | Code Đợt 2 (`757a784`). Đạt: S8-AC04. | Hoàn thành | Thấp |
| 4 | [ ] **S8-04** Giao diện | Chọn giao diện sáng, tối hoặc theo thiết bị. | Áp dụng ngay khi đổi. | Gọi là "Theo thiết bị" (S8-04) hay "Theo hệ thống" (FND-03)? | Code Đợt 2 (`757a784`). Đạt: S8-AC05, S8-AC09. Code dùng "Theo thiết bị". | Cần trao đổi | Thấp |
| 5 | [ ] **S8-05** Dữ liệu | Xuất, nhập, xóa tiến độ. | Xuất ra file JSON; nhập có sheet xác nhận; xóa phải gõ đúng tên ngôn ngữ (không phân biệt hoa thường, phải đủ dấu). | Câu báo lỗi nhập file chưa nói cần làm gì (trái FND-12). Duyệt câu thêm: "Chọn file đã xuất từ Cài đặt khi đang học ngôn ngữ này." | Code Đợt 2 (`757a784`). Đạt: S8-AC06, S8-AC09. Còn mở: S8-AC07 [human]. Code giữ đúng chữ trong spec, chờ duyệt. Chỉ nhận file đúng cả ngôn ngữ lẫn bộ nội dung vì hai bộ tiếng Anh dùng chung dải id. Nút sheet: Hủy / Nhập tiến độ, Hủy / Xóa. | Cần trao đổi | Cao |
| 6 | [ ] **S8-06** Trợ giúp | Xem lại hướng dẫn và số phiên bản. | "Xem lại hướng dẫn" mở S9 trên T1. | Ở S8 thanh trên cùng chỉ có nút Quay lại, bỏ nút Cài đặt; được không? | Code Đợt 2 (`757a784`). Đạt: S8-AC08, S8-AC09. Code bỏ nút Cài đặt vì đang ở chính màn này. | Chờ xác nhận | Thấp |

### S9 Hướng dẫn lần đầu  (lớp phủ trên T1)

Hướng dẫn 3 bước, chỉ hiện một lần. Nghiệm thu: **5/6** mục đạt. Chức năng hoàn thành: 4/5.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **S9-01** Khi nào hiện | Hướng dẫn hiện một lần sau khi chọn ngôn ngữ lần đầu. | Không hiện khi T1 đang ở trạng thái học hết lộ trình. |  | Code Đợt 1 (`97e85fa`). Đạt: S9-AC01. | Hoàn thành | Trung bình |
| 2 | [ ] **S9-02** Ba bước | 3 bước làm nổi thẻ câu, nút chính, thanh tab. | Mỗi bước có bong bóng chữ ngắn; phần còn lại phủ mờ. |  | Code Đợt 1 (`97e85fa`). Đạt: S9-AC02. Còn mở: S9-AC06 [human]. | Chờ thử thật | Trung bình |
| 3 | [x] **S9-03** Điều khiển | Điều khiển Tiếp / Bỏ qua / Bắt đầu học. | Esc tương đương Bỏ qua; "Bắt đầu học" mở phiên học luôn. |  | Code Đợt 1 (`97e85fa`). Đạt: S9-AC03. | Hoàn thành | Thấp |
| 4 | [x] **S9-04** Không hiện lại | Xong hoặc bỏ qua thì không tự hiện lại. | Kể cả khi đổi ngôn ngữ. |  | Code Đợt 1 (`97e85fa`). Đạt: S9-AC04. | Hoàn thành | Thấp |
| 5 | [x] **S9-05** Xem lại | Xem lại hướng dẫn từ Cài đặt. | Bắt đầu từ bước 1; nút cuối là "Xong". |  | Code Đợt 1 (`97e85fa`). Đạt: S9-AC05. | Hoàn thành | Thấp |

## Khung app và thành phần dùng chung

### APP Khung app

Điều hướng, thanh trên cùng, bố cục, ngoại tuyến, cách trang chính mở app, nút về trang học chính. Nghiệm thu: **17/20** mục đạt. Chức năng hoàn thành: 8/12.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **APP-01** Bốn khu chính | 4 khu chính: Học, Luyện tập, Thư viện, Tiến bộ. | Dưới 900 px dùng thanh tab dưới đáy; từ 900 px dùng thanh dọc bên trái 220 px. |  | Code Đợt 1 (`97e85fa`). Đạt: APP-AC01, APP-AC02. | Hoàn thành | Cao |
| 2 | [x] **APP-02** Thanh trên cùng | Thanh trên cùng: tên ngôn ngữ (chạm để đổi) và nút Cài đặt. | Cao 56 px; tiếng Anh hiện thêm tên bộ ở dòng nhỏ. |  | Code Đợt 1 (`97e85fa`). Đạt: APP-AC03, APP-AC17. | Hoàn thành | Cao |
| 3 | [x] **APP-03** Màn toàn trang | 3 màn toàn trang: Chọn ngôn ngữ, Phiên học, Kiểm tra nhanh. | Ẩn thanh tab và thanh trên cùng; S3, S5 có nút Thoát. |  | Code Đợt 1 (`97e85fa`). Đạt: APP-AC04. | Hoàn thành | Trung bình |
| 4 | [x] **APP-04** Bảng route | Bảng route bằng hash (`#/hoc`, `#/thu-vien`...). | Là nguồn chân lý cho điều hướng; không cần cấu hình server. |  | Code Đợt 1 (`97e85fa`). Đạt: APP-AC02, APP-AC05. | Hoàn thành | Cao |
| 5 | [x] **APP-05** Khởi động | Khởi động: chưa chọn ngôn ngữ thì vào S1, đã chọn thì vào T1. | Có khung xương, không trắng màn quá 300 ms. |  | Code Đợt 1 (`97e85fa`). Đạt: APP-AC06, APP-AC07. | Hoàn thành | Cao |
| 6 | [x] **APP-06** Sheet Đổi ngôn ngữ | Sheet Đổi ngôn ngữ hoặc bộ nội dung. | Tiếng Anh tách 2 dòng theo 2 bộ; dòng đang dùng được đánh dấu. |  | Code Đợt 1 (`97e85fa`). Đạt: APP-AC08, APP-AC17. | Hoàn thành | Trung bình |
| 7 | [ ] **APP-07** Bố cục theo khổ màn hình | Responsive, ưu tiên máy tính 1440 và 1280 px. | Các mốc 320 / 600 / 900 px; không cuộn ngang ở khổ nào. |  | Code Đợt 1 (`97e85fa`). Đạt: APP-AC09. Còn mở: APP-AC13 [human]. | Chờ thử thật | Cao |
| 8 | [x] **APP-08** Trạng thái toàn cục | Trạng thái toàn cục: đang tải, lỗi tải, ngoại tuyến, bộ nhớ bị chặn. | Lỗi có nút Thử lại; không dùng vòng xoay giữa màn. |  | Code Đợt 1 (`97e85fa`). Đạt: APP-AC07, APP-AC10, APP-AC11. | Hoàn thành | Trung bình |
| 9 | [ ] **APP-09** Cách trang chính mở app | Trang học chính mở mini app ở trang mới; app vẫn chạy được khi mở trực tiếp và trong iframe. | Không dùng `window.top`, postMessage, không cần đăng nhập, bỏ qua mọi tham số URL. | ~~Trang chính mở mini app bằng iframe hay tab mới, có truyền tham số gì không?~~ Đã trả lời 10/10/2026. Còn chưa rõ trang chính có gắn tham số URL không; không chặn việc gì. | Code Đợt 1 (`97e85fa`). Đạt: APP-AC12. Còn mở: APP-AC13 [human], APP-AC20 [human]. Spec sửa APP-09 và thêm APP-12 (commit `spec:` 10/10); APP-12 đã code. Không phải sửa code cho phần mở trang mới. | **Đã quyết định** (10/10/2026): mở trang mới (tab mới, chuyển thẳng trang), không nhúng iframe; giữ nút quay lại để về trang học chính, xem APP-12 | Cao |
| 10 | [ ] **APP-10** Ngoại tuyến và cập nhật | Chạy ngoại tuyến và báo khi có bản cập nhật. | Chỉ tải lại khi người dùng bấm "Cập nhật"; không hiện thông báo khi đang ở S3, S5. | Font Noto của chữ không phải Latinh chỉ có khi ngoại tuyến từ lần mở có mạng thứ hai; chấp nhận được không? | Code Đợt 2 (`757a784`). Đạt: APP-AC15. Còn mở: APP-AC14 [human]. Service worker tự kích hoạt bản mới, trang chỉ tải lại khi bấm Cập nhật. | Chờ xác nhận | Trung bình |
| 11 | [x] **APP-11** Một lớp phủ tại một thời điểm | Tại một thời điểm chỉ có một sheet hoặc hộp thoại. | Mở sheet mới thì sheet cũ đóng trước. |  | Code Đợt 1 (`97e85fa`). Đạt: APP-AC16. | Hoàn thành | Trung bình |
| 12 | [ ] **APP-12** Nút về trang học chính | Nút quay lại để người học về trang học chính. | Ngoài cùng bên trái thanh trên cùng của T1 đến T4 và góc trên S1 bước 1; icon mũi tên trái, nhãn "Quay lại trang học", từ 600 px có chữ "Trang học". Là liên kết thường tới `VITE_HOST_URL` (mặc định `https://language.pomaskhoahocnaobo.com/`), không dùng `history.back()`. Không có ở S1 bước 2, S3, S5, S8. | Nút về trang chủ hay về thẳng Trung tâm ứng dụng? Nếu là Trung tâm ứng dụng thì cần đường dẫn chính xác. | Code 10/10 trên nhánh `Manh_work_10_10` (`fe/src/app/HostBack.tsx`, `TopBar.tsx`, `S1ChonNgonNgu.tsx`). Đạt: APP-AC18 (test), APP-AC19 (ảnh và số đo: 44 x 44 px ở 320 và 375 px, 130 x 44 px có chữ từ 600 px); APP-AC03 đã chụp lại. Còn mở: APP-AC20 [human] trên trang học chính thật. | Chờ thử thật | Cao |

### C1 Thẻ câu

Nghiệm thu: **7/8** mục đạt. Chức năng hoàn thành: 6/8.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **C1-01** Cấu trúc | Cấu trúc thẻ câu: dải ô, nghĩa, câu gốc, nút Nghe / Nghe lặp. | Nghĩa dùng Literata; câu gốc theo font và cỡ của FND. |  | Code Đợt 1 (`97e85fa`). Đạt: C1-AC01. | Hoàn thành | Cao |
| 2 | [x] **C1-02** Trạng thái che câu gốc | Trạng thái che câu gốc, chạm để hiện. | Khi che, nút Nghe bị khóa; Space / Enter cũng hiện được. |  | Code Đợt 1 (`97e85fa`). Đạt: C1-AC02. | Hoàn thành | Cao |
| 3 | [x] **C1-03** Trạng thái hiện đầy đủ | Trạng thái hiện đầy đủ. | Đã hiện thì không che lại trong cùng lượt. |  | Code Đợt 1 (`97e85fa`). Đạt: C1-AC03. | Hoàn thành | Cao |
| 4 | [ ] **C1-04** Phát âm | Nghe và Nghe lặp bằng giọng của thiết bị. | Nghe lặp cách nhau 1,5 giây tới khi bấm Dừng; rời thẻ thì dừng đọc. |  | Code Đợt 1 (`97e85fa`). Đạt: C1-AC04. Còn mở: C1-AC05 [human]. | Chờ thử thật | Cao |
| 5 | [ ] **C1-05** Không có giọng đọc | Báo khi thiết bị không có giọng đọc. | Khóa nút Nghe, kèm liên kết "Cài đặt > Giọng đọc". | Liên kết nằm trong dòng chữ nên thấp hơn 44 px; giữ dạng liên kết hay đổi thành nút riêng? | Code Đợt 1 (`97e85fa`). Đạt: C1-AC06. Code giữ liên kết trong câu (WCAG cho phép ngoại lệ). | Chờ xác nhận | Thấp |
| 6 | [x] **C1-06** Dòng Cách dùng | Dòng "Cách dùng" khi câu có `noteVi`. | Không có thì không chừa khoảng trống. |  | Code Đợt 1 (`97e85fa`). Đạt: C1-AC07. | Hoàn thành | Trung bình |
| 7 | [x] **C1-07** Phiên âm | Phiên âm furigana (tiếng Nhật) hoặc `reading`. | Furigana hiện bằng thẻ `ruby`. |  | Code Đợt 1 (`97e85fa`). Đạt: C1-AC07. | Hoàn thành | Trung bình |
| 8 | [x] **C1-08** Thuộc tính ngôn ngữ | Gắn thuộc tính `lang` đúng cho câu gốc và nghĩa. | Để trình đọc màn hình đọc đúng giọng. |  | Code Đợt 1 (`97e85fa`). Đạt: C1-AC08. | Hoàn thành | Trung bình |

### C2 Dải 8 ô

Nghiệm thu: **3/3** mục đạt. Chức năng hoàn thành: 3/3.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **C2-01** Kích thước và số ô | Dải 8 ô: số ô bằng số câu trong nhóm. | Ô 10 x 10 px, cách 4 px. |  | Code Đợt 1 (`97e85fa`). Đạt: C2-AC01. | Hoàn thành | Trung bình |
| 2 | [x] **C2-02** Trạng thái ô | 4 trạng thái ô: Chưa học, Đang học, Đã nhớ, Cần ôn. | Cần ôn có vạch chéo để phân biệt không cần màu. |  | Code Đợt 1 (`97e85fa`). Đạt: C2-AC02. | Hoàn thành | Trung bình |
| 3 | [x] **C2-03** Trợ năng | Nhãn trợ năng cho dải và từng ô. | Ví dụ "Câu 3, đã nhớ"; ô không nhận focus. |  | Code Đợt 1 (`97e85fa`). Đạt: C2-AC03. | Hoàn thành | Thấp |

### C3 Nút

Nghiệm thu: **3/4** mục đạt. Chức năng hoàn thành: 3/4.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **C3-01** Nút chính | Nút chính. | Cao 48 px; mỗi màn tối đa một nút chính. |  | Code Đợt 1 (`97e85fa`). Đạt: C3-AC01. | Hoàn thành | Cao |
| 2 | [x] **C3-02** Nút phụ | Nút phụ và nút dạng chữ. | Viền 1 px; nút chữ cho hành động thứ ba trở đi. |  | Code Đợt 1 (`97e85fa`). Đạt: C3-AC01. | Hoàn thành | Trung bình |
| 3 | [ ] **C3-03** Cặp nút đánh giá | Cặp nút đánh giá "Cần ôn lại" / "Tôi nhớ". | Cao 56 px, chia đều, khác cả màu lẫn icon để không bấm nhầm. |  | Code Đợt 1 (`97e85fa`). Đạt: C3-AC02. Còn mở: C3-AC03 [human]. | Chờ thử thật | Cao |
| 4 | [x] **C3-04** Trạng thái chung | Trạng thái chung của nút. | Hover, nhấn, focus, khóa, đang xử lý; vùng chạm tối thiểu 44 x 44 px. |  | Code Đợt 1 (`97e85fa`). Đạt: C3-AC04. | Hoàn thành | Trung bình |

### C4 Lựa chọn trắc nghiệm

Nghiệm thu: **3/3** mục đạt. Chức năng hoàn thành: 3/3.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **C4-01** Bố cục | Bố cục 4 lựa chọn trắc nghiệm. | Cao tối thiểu 56 px, không cắt chữ; số 1 đến 4 chỉ hiện từ 900 px. |  | Code Đợt 1 (`97e85fa`). Đạt: C4-AC01. | Hoàn thành | Trung bình |
| 2 | [x] **C4-02** Chọn đáp án | Chọn đáp án đúng / sai. | Sai thì khóa riêng lựa chọn đó và cho chọn tiếp. |  | Code Đợt 1 (`97e85fa`). Đạt: C4-AC02. | Hoàn thành | Trung bình |
| 3 | [x] **C4-03** Thông báo kết quả | Đọc kết quả cho trình đọc màn hình. | Qua `aria-live`; luôn có icon kèm màu. |  | Code Đợt 1 (`97e85fa`). Đạt: C4-AC03. | Hoàn thành | Thấp |

### C5 Thanh tab

Nghiệm thu: **4/4** mục đạt. Chức năng hoàn thành: 4/4.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **C5-01** Thanh dưới đáy | Thanh tab dưới đáy (điện thoại). | Cao 64 px cộng vùng an toàn đáy. |  | Code Đợt 1 (`97e85fa`). Đạt: C5-AC01. | Hoàn thành | Trung bình |
| 2 | [x] **C5-02** Thanh dọc | Thanh dọc bên trái (máy tính). | Rộng 220 px, mỗi mục cao 48 px. |  | Code Đợt 1 (`97e85fa`). Đạt: C5-AC02. | Hoàn thành | Trung bình |
| 3 | [x] **C5-03** Mục đang chọn | Đánh dấu mục đang chọn. | Chữ đậm và gạch 2 px; có `aria-current`. |  | Code Đợt 1 (`97e85fa`). Đạt: C5-AC03. | Hoàn thành | Thấp |
| 4 | [x] **C5-04** Mục có số | Mục Luyện tập hiện số câu cần ôn. | Chỉ hiện khi số đó lớn hơn 0. |  | Code Đợt 1 (`97e85fa`). Đạt: C5-AC04. | Hoàn thành | Thấp |

### C6 Sheet

Nghiệm thu: **4/5** mục đạt. Chức năng hoàn thành: 2/4.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [ ] **C6-01** Dạng hiển thị | Sheet trượt từ dưới lên (điện thoại) / hộp thoại giữa màn (máy tính). | Cao tối đa 90%, có tay nắm. | Lớp nền sau sheet ở chế độ tối làm màn sau sáng bạc đi; có dùng token riêng (ví dụ đen độ mờ 50%) không? | Code Đợt 1 (`97e85fa`). Đạt: C6-AC01. Code dùng chung màu chữ chính độ mờ 40% như spec. | Cần trao đổi | Thấp |
| 2 | [ ] **C6-02** Tiêu đề và đóng | Tiêu đề và các cách đóng sheet. | Nút x, chạm nền, Esc, vuốt xuống; sheet xác nhận không đóng khi chạm nền. |  | Code Đợt 1 (`97e85fa`). Đạt: C6-AC02. Còn mở: C6-AC03 [human]. | Chờ thử thật | Trung bình |
| 3 | [x] **C6-03** Focus | Giữ focus trong sheet. | Đóng thì trả focus về nút đã mở. |  | Code Đợt 1 (`97e85fa`). Đạt: C6-AC04. | Hoàn thành | Trung bình |
| 4 | [x] **C6-04** Nội dung dài | Nội dung dài cuộn bên trong sheet. | Tiêu đề và nút chính đứng yên. |  | Code Đợt 1 (`97e85fa`). Đạt: C6-AC05. | Hoàn thành | Thấp |

### C7 Thông báo ngắn

Nghiệm thu: **3/3** mục đạt. Chức năng hoàn thành: 3/3.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **C7-01** Vị trí và hiển thị | Thông báo ngắn ở đáy màn. | Ngay trên thanh tab, rộng tối đa 480 px. |  | Code Đợt 1 (`97e85fa`). Đạt: C7-AC01. | Hoàn thành | Thấp |
| 2 | [x] **C7-02** Thời gian và hành động | Thời gian hiện và nút hành động. | Tự ẩn sau 3 giây; có nút thì 6 giây; mỗi lúc một thông báo. |  | Code Đợt 1 (`97e85fa`). Đạt: C7-AC02. | Hoàn thành | Thấp |
| 3 | [x] **C7-03** Trợ năng | Trợ năng thông báo. | `role=status` hoặc `alert`; không lấy focus. |  | Code Đợt 1 (`97e85fa`). Đạt: C7-AC03. | Hoàn thành | Thấp |

## Nền tảng, dữ liệu và mục tiêu sản phẩm

### FND Nền tảng thiết kế

Màu, chữ, khoảng cách, icon, chuyển động, giọng văn, trợ năng. Nghiệm thu: **13/17** mục đạt. Chức năng hoàn thành: 10/14.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **FND-01** Token màu | Token màu sáng và tối. | Chỉ `tokens.css` được chứa mã màu; màu lấy từ logo (navy, đỏ cam). |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC01, FND-AC02. | Hoàn thành | Cao |
| 2 | [x] **FND-02** Quy tắc dùng màu | Quy tắc dùng màu thương hiệu. | Màu brand chỉ cho một nút chính mỗi màn và ô đang học; tương phản tối thiểu 4.5:1. |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC02, FND-AC03. | Hoàn thành | Cao |
| 3 | [ ] **FND-03** Sáng và tối | Sáng / tối theo hệ thống, ghi đè được trong Cài đặt. | Không nhấp nháy giao diện sai khi mở app. | Tên lựa chọn "Theo hệ thống" hay "Theo thiết bị"? (xem S8-04) | Code Đợt 1 (`97e85fa`). Đạt: FND-AC04. Code dùng "Theo thiết bị". | Cần trao đổi | Thấp |
| 4 | [x] **FND-04** Font | Font Lexend, Literata và Noto theo hệ chữ. | Tự host; Noto chỉ tải khi học ngôn ngữ cần. |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC05. | Hoàn thành | Trung bình |
| 5 | [x] **FND-05** Thang chữ | Thang chữ 6 cỡ. | Từ 13 px tới 39 px. |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC06. | Hoàn thành | Trung bình |
| 6 | [x] **FND-06** Cỡ câu theo độ dài | Cỡ câu theo độ dài. | Dưới 40 ký tự / 40 đến 90 / trên 90; luôn căn trái. |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC07. | Hoàn thành | Trung bình |
| 7 | [x] **FND-07** Khoảng cách và lề | Khoảng cách lưới 4 px. | Lề 16 px dưới 600 px, 24 px từ 600 px. |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC08. | Hoàn thành | Thấp |
| 8 | [x] **FND-08** Bo góc theo vai trò | Bo góc theo vai trò. | Ô nhập 6, nút 10, thẻ và sheet 16 px. |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC08. | Hoàn thành | Thấp |
| 9 | [x] **FND-09** Đổ bóng | Đổ bóng chỉ cho sheet và hộp thoại. | Thẻ câu không có bóng. |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC08. | Hoàn thành | Thấp |
| 10 | [x] **FND-10** Icon | Một bộ icon Phosphor nét Regular. | Không emoji, không ảnh bitmap. |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC09. | Hoàn thành | Thấp |
| 11 | [ ] **FND-11** Chuyển động | Chuyển động chỉ để phản hồi thao tác. | 180 / 150 / 220 ms; tắt hết khi bật giảm chuyển động. |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC10. Còn mở: FND-AC11 [human]. | Chờ thử thật | Trung bình |
| 12 | [ ] **FND-12** Giọng văn và từ ngữ | Giọng văn và từ ngữ thống nhất. | Gọi người học là "bạn"; lỗi phải nói rõ cần làm gì; có bảng từ dùng / không dùng. | FND-AC12 đang chờ nhóm duyệt câu báo lỗi nhập file (xem S8-05). | Code Đợt 1 (`97e85fa`).  Còn mở: FND-AC12 [claude], FND-AC13 [human]. Mọi chuỗi khác đã rà đạt. | Cần trao đổi | Cao |
| 13 | [x] **FND-13** Quy tắc tránh giao diện kiểu AI | Quy tắc tránh giao diện kiểu AI. | Không gradient, kính mờ, emoji, lưới thẻ giống hệt, viết hoa toàn bộ, khẩu hiệu chung chung. |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC14. | Hoàn thành | Cao |
| 14 | [ ] **FND-14** Trợ năng chung | Trợ năng chung. | Dùng hết bằng bàn phím, vùng chạm 44 px, `lang` đúng, phóng chữ 200% không mất nội dung. |  | Code Đợt 1 (`97e85fa`). Đạt: FND-AC15, FND-AC16. Còn mở: FND-AC17 [human]. | Chờ thử thật | Cao |

### DATA Dữ liệu và tiến độ

Đọc dữ liệu tĩnh, lưu tiến độ, quy tắc ôn, tìm kiếm. Nghiệm thu: **18/19** mục đạt. Chức năng hoàn thành: 9/13.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [x] **DATA-01** Manifest | Đọc manifest của từng bộ nội dung. | Thiếu `count`, `version` thì lấy từ file ngôn ngữ. |  | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC01, DATA-AC16, DATA-AC19. | Hoàn thành | Cao |
| 2 | [x] **DATA-02** File ngôn ngữ | Đọc file ngôn ngữ. | Trường câu gốc luôn tên `en` ở mọi file, kể cả tiếng Nhật, tiếng Đức. |  | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC01, DATA-AC02, DATA-AC19. | Hoàn thành | Cao |
| 3 | [x] **DATA-03** File unit | Đọc file unit. | `ids` có thể là chuỗi có số 0 đầu hoặc số; phải chạy đúng khi unit dưới 8 câu. |  | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC01, DATA-AC03, DATA-AC16, DATA-AC19. | Hoàn thành | Cao |
| 4 | [x] **DATA-04** Trường tùy chọn | Trường tùy chọn: `noteVi`, `topic`, `situation`, furigana... | Global English có 177 chủ đề, phân bố lệch. |  | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC04, DATA-AC18. | Hoàn thành | Trung bình |
| 5 | [x] **DATA-05** Nguồn dữ liệu thay được | Nguồn dữ liệu thay được (fixture cho test, file tĩnh cho bản build). | Đổi base URL không phải sửa code. |  | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC02, DATA-AC05. | Hoàn thành | Trung bình |
| 6 | [ ] **DATA-06** Lưu tiến độ | Lưu tiến độ và cài đặt trong localStorage. | Tiền tố khóa `vitasr2.` để không đụng dữ liệu bản cũ. | Code lưu thêm `step`, `abandonedAt`, `params`, trạng thái `da-hoc`, `kiem-tra`; đề nghị ghi vào spec. | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC06, DATA-AC07, DATA-AC17. Đã dùng các trường này cho phiên dở (S3-08). | Chờ xác nhận | Cao |
| 7 | [ ] **DATA-07** Quy tắc câu cần ôn | Quy tắc câu cần ôn. | Ôn sau 1, 3, 7, 14, 30 ngày; sai hoặc dùng gợi ý thì về 0. | (1) Giữ khoảng ôn 1, 3, 7, 14, 30 ngày hay theo quy tắc bản cũ? (2) Trả lời đúng mà không dùng gợi ý thì giữ nguyên lịch ôn, đúng không? | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC08, DATA-AC09. Code dùng 1, 3, 7, 14, 30 ngày và giữ nguyên `streak`, `due` khi đúng ở bước trắc nghiệm. Đổi sau khi ra mắt sẽ lệch lịch ôn đã lưu, nên chốt trước. | Cần trao đổi | Cao |
| 8 | [x] **DATA-08** Đáp án nhiễu | Sinh 3 đáp án nhiễu cho câu trắc nghiệm. | Tất định theo id câu, ưu tiên lấy từ unit khác, không trùng sau chuẩn hóa. |  | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC10. | Hoàn thành | Trung bình |
| 9 | [ ] **DATA-09** Fixture | Bộ dữ liệu test (fixture) và tiến độ mẫu 30 ngày. | Sinh bằng `scripts/make-fixtures.mjs`, không sửa tay; số liệu T4 có bản tính tay để so. | Cần khách xác nhận bằng văn bản việc dùng dữ liệu khi phát triển và demo (DATA-AC12). | Code Đợt 2 (`757a784`). Đạt: DATA-AC11. Còn mở: DATA-AC12 [human]. Nhóm đã ghi nhận đồng ý miệng ngày 08/10. | Cần trao đổi | Cao |
| 10 | [x] **DATA-10** Không gọi mạng ngoài phạm vi | Không gọi mạng ngoài phạm vi. | Không gọi `/api/sharing/*` hay API nào của bản cũ; không gửi dữ liệu người học đi đâu. |  | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC13. | Hoàn thành | Cao |
| 11 | [ ] **DATA-11** Lộ trình học | Lộ trình học theo thứ tự unit. | Câu tiếp theo là câu chưa học đầu tiên của unit đầu tiên còn câu chưa học. | Global English có cho chọn trình độ bắt đầu (A1 đến C2) không? (hỏi khách) | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC14. Lộ trình hiện đi lần lượt từ A1-01. Nếu có thì thêm bước chọn trình độ ở S1. | Cần trao đổi | Cao |
| 12 | [x] **DATA-12** Tìm kiếm | Tìm kiếm bỏ dấu, không phân biệt hoa thường. | "dat phong" khớp "đặt phòng"; khớp theo chuỗi con. |  | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC15. | Hoàn thành | Trung bình |
| 13 | [x] **DATA-13** Bộ nội dung | Hai bộ nội dung: Global English và English Fluency. | Global chỉ có tiếng Anh, 6 trình độ; Fluency có 15 ngôn ngữ. |  | Code Đợt 1 (`97e85fa`). Đạt: DATA-AC16, DATA-AC17. | Hoàn thành | Cao |

### G Mục tiêu sản phẩm

Kiểm bằng buổi thử với người học thật, sau khi các khu vực khác đạt. Nghiệm thu: **1/5** mục đạt. Chức năng hoàn thành: 1/5.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | [ ] **G-01** Giao diện dễ hiểu dễ nhìn để sử dụng | Người mới tự dùng được, không cần hướng dẫn. | Thử với 5 người học: không quá 2 lần chạm từ chọn ngôn ngữ tới câu đầu tiên. |  | Còn mở: G-AC01 [human]. | Chờ thử thật | Cao |
| 2 | [ ] **G-02** Hiểu được tiến bộ của mình | Người học hiểu được tiến bộ của mình. | 4/5 người tự tìm được màn Tiến bộ và giải thích đúng "câu cần ôn". |  | Còn mở: G-AC02 [human]. | Chờ thử thật | Cao |
| 3 | [ ] **G-03** Không nhầm thao tác đánh giá | Không bấm nhầm "Tôi nhớ" và "Cần ôn lại". | Quan sát trong cả buổi thử. |  | Còn mở: G-AC03 [human]. | Chờ thử thật | Cao |
| 4 | [x] **G-04** Gọn hơn bản cũ | Gọn hơn bản cũ. | Chỉ 4 khu chính, Cài đặt và 3 màn toàn trang; không có hộp thoại chồng hộp thoại. |  | Đạt: G-AC04. | Hoàn thành | Trung bình |
| 5 | [ ] **G-05** Không mang dấu hiệu giao diện do AI dựng mặc định | Không mang dấu hiệu giao diện do AI dựng. | Hai người ngoài nhóm xem ảnh 5 màn chính và không chỉ ra được dấu hiệu nào trong FND-13. | Ai duyệt thiết kế, ở những mốc nào? (hỏi khách) | Còn mở: G-AC05 [human]. Quyết định ai đánh dấu G-AC05 và khi nào bàn giao. | Cần trao đổi | Cao |

## Chức năng của bản cũ chưa có trong bản mới

Các mục dưới đây không nằm trong 135 chức năng ở trên. Câu trả lời của khách có thể thêm màn hoặc thêm backend, nên cần hỏi trước Đợt 3.

| STT | Tên chức năng | Mô tả mong muốn | Chi tiết cần lưu ý | Câu hỏi cần trao đổi | Phản hồi Dev | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| 1 | Chia sẻ | Bản cũ có tính năng chia sẻ qua `/api/sharing/*` | Là phần duy nhất của bản cũ cần server; bản mới không có backend (QD-03) | Có giữ tính năng Chia sẻ không; nếu có, backend do bên nào cung cấp? (hỏi khách) | Đã bỏ. Nếu giữ thì thêm khu vực mới và phụ thuộc backend của khách | Cần trao đổi | Cao |
| 2 | Chọn trình độ bắt đầu | Người học Global English chọn bắt đầu từ A1 đến C2 | Lộ trình hiện đi lần lượt từ A1-01 (DATA-11) | Khách có muốn cho chọn trình độ bắt đầu không? | Nếu có thì thêm bước ở S1 và đổi lộ trình | Cần trao đổi | Cao |
| 3 | Chế độ "Tiếng Việt (từ tiếng Anh)" | Đảo chiều câu gốc và nghĩa như bản cũ | Ghi ở câu hỏi mở của S1 | Khách có cần không? | Nếu có thì thêm một bộ nội dung ảo và đổi thẻ câu | Cần trao đổi | Trung bình |
| 4 | Đọc nghĩa tiếng Việt thành tiếng | Nút nghe nghĩa ở thẻ câu | Giọng tiếng Việt đã chọn và lưu được ở S8-02 nhưng chưa màn nào dùng | Có cần nút nghe nghĩa không? | Chưa làm | Cần trao đổi | Thấp |
| 5 | Tải gói âm thanh ngoại tuyến | Dùng âm thanh dựng sẵn thay giọng của máy | Dữ liệu hiện chỉ có gói tiếng Lào; mục S8-03 đang ẩn | Có làm ở bản sau không? | Bản đầu không hỗ trợ | Chờ xác nhận | Thấp |
| 6 | Đọc lại tiến độ của bản cũ | Chuyển tiến độ người học từ bản cũ sang | Nhóm trả lời không cần (08/10) | | Khóa lưu trữ mới có tiền tố `vitasr2.` để không đụng dữ liệu cũ | Đã chốt | Thấp |
| 7 | Mục pháp lý ở bản cũ 1.9.45 | Mục xuất hiện sau khi nhóm ghi lại bản 1.9.40 | Lần đọc ngày 10/10 không thấy lại | Hỏi lại khách mục này có cần không | Chưa đưa vào spec | Cần trao đổi | Thấp |


## Công việc tiếp theo

Bước 1 làm ngay; bước 2 và 3 chạy song song; Đợt 3 chỉ bắt đầu khi bước 2 có câu trả lời; bàn giao khi đủ 173/173 mục. Ngày cụ thể chưa chốt, trừ việc ghim Ubuntu cho CI phải xong trước 19/10.

| STT | Công việc | Mô tả | Chi tiết cần lưu ý | Người làm | Hạn | Trạng thái | Ưu tiên |
|---|---|---|---|---|---|---|---|
| **1** | **Việc nhỏ làm ngay** | | | | | | |
| 1.1 | [ ] Ghim Ubuntu cho CI | Đổi `runs-on` thành `ubuntu-24.04` trong `.github/workflows/ci.yml` | GitHub chuyển `ubuntu-latest` sang Ubuntu 26 từ 19/10; bước cài thư viện cho Chromium có thể hỏng | Người giữ repo | 19/10 | Chưa làm | Cao |
| 1.2 | [ ] Quyết repo công khai hay riêng tư | Repo đang công khai và chứa đủ 12 MB dữ liệu của khách trong `fe/public/data/` | Khách mới đồng ý cho dùng khi phát triển, chưa có văn bản | Nhóm | Sớm nhất có thể | Chưa làm | Cao |
| 1.3 | [ ] Xin khách xác nhận bằng văn bản | Xác nhận cho dùng bộ dữ liệu khi phát triển và demo | Lưu tin nhắn làm bằng chứng cho DATA-AC12 | Người liên hệ khách | | Chưa làm | Cao |
| 1.4 | [ ] Dọn nhánh | Xóa các nhánh đã gộp: `Khung_du_an`, `dinhdat`, `feature/don-repo`, `feature/dot2-cac-man-con-lai` | Mọi người `git checkout main && git pull` trước khi làm tiếp | Người giữ repo | | Chưa làm | Thấp |
| 1.5 | [ ] Gộp nhánh `Manh_work_10_10` | Hai commit: `spec:` chốt cách mở app (APP-09, APP-12) và `feat:` nút về trang học chính; mở PR vào main | CI chạy lại toàn bộ kiểm tra trước khi gộp | Mạnh | | Chưa làm | Cao |
| **2** | **Chốt câu hỏi mở** | | | | | | |
| 2.1 | [ ] Gửi khách 4 câu hỏi | Chia sẻ, chọn trình độ bắt đầu, chế độ đảo chiều, ai duyệt thiết kế. Câu iframe hay tab mới **đã quyết định** 10/10: mở trang mới, có nút về trang học chính | Ưu tiên Chia sẻ và chọn trình độ vì có thể thêm màn mới | Người liên hệ khách | | Chưa làm | Cao |
| 2.2 | [ ] Nhóm chọn phương án cho các mục "Cần trao đổi" | Khoảng ôn, câu báo lỗi nhập file, "Theo thiết bị" hay "Theo hệ thống", "7 ngày tới", màu cột hôm nay, lớp nền sheet tối, cột 30 ngày ở 320 px | Câu báo lỗi nhập file đang chặn FND-AC12 | Nhóm | | Chưa làm | Cao |
| 2.3 | [ ] Nhóm duyệt các mục "Chờ xác nhận" | Đọc cột Phản hồi Dev của các dòng Chờ xác nhận ở trên | Đồng ý thì đưa vào spec; không thì ghi cách muốn đổi | Nhóm | | Chưa làm | Trung bình |
| 2.4 | [ ] Ghi câu trả lời vào spec | Sửa `spec.md` bằng commit tiền tố `spec:` kèm một dòng trong "Lịch sử thay đổi" | Claude không tự sửa nội dung spec | Nhóm | | Chưa làm | Cao |
| **3** | **Thử thật để đóng 22 mục `[human]`** | | | | | | |
| 3.0 | [ ] Đặt bản build lên URL HTTPS | GitHub Pages hoặc máy chủ tĩnh của nhóm | Service worker chỉ chạy trên HTTPS hoặc localhost | Người giữ repo | | Chưa làm | Cao |
| 3.1 | [ ] Thử trên thiết bị thật (9 mục) | C1-AC05, C3-AC03, C6-AC03, APP-AC13, APP-AC14, FND-AC11, FND-AC17, S8-AC03, S8-AC07 | Một iPhone (Safari), một Android (Chrome), một máy Windows (Chrome hoặc Edge); bật VoiceOver và TalkBack cho FND-AC17; kiểm giọng đọc của 15 ngôn ngữ | Nhóm | | Chưa làm | Cao |
| 3.2 | [ ] Thử với người học thật (9 mục) | G-AC01, G-AC02, G-AC03, S1-AC06, S3-AC11, S5-AC10, S9-AC06, T1-AC09, T4-AC10 | 5 người chưa thấy app, xóa dữ liệu trình duyệt trước mỗi người; ghi số lần chạm, chỗ ngập ngừng, câu chia cụm vô lý | Nhóm | | Chưa làm | Cao |
| 3.3 | [ ] Người ngoài nhóm đọc và xem (2 mục) | FND-AC13, G-AC05 | Danh sách chuỗi giao diện; ảnh 5 màn chính trong `docs/evidence/` | Nhóm | | Chưa làm | Trung bình |
| 3.4 | [ ] Khách xác nhận dữ liệu (1 mục) | DATA-AC12 | Dùng tin nhắn ở việc 1.3 | Người liên hệ khách | | Chưa làm | Cao |
| 3.5 | [ ] Thử trên trang học chính thật (1 mục) | APP-AC20: mở Đa ngôn ngữ thấy app ở trang mới; bấm "Quay lại trang học" về đúng trang học, vẫn đăng nhập | Cần một tài khoản đăng nhập được và bản build trên URL thật (việc 3.0) | Nhóm | | Chưa làm | Cao |
| **4** | **Đợt 3: sửa theo câu trả lời và kết quả thử** | | | | | | |
| 4.1 | [ ] Sửa code theo các commit `spec:` | Claude đọc diff, sửa code, bỏ `[x]` của mục bị ảnh hưởng rồi kiểm lại | Gửi zip và lệnh commit như Đợt 2; người trong nhóm tự commit | Claude + người commit | | Chưa làm | Cao |
| 4.2 | [ ] Sửa lỗi tìm thấy khi thử | Lỗi ghi được ở việc 3.1 và 3.2 | | Claude + người commit | | Chưa làm | Cao |
| 4.3 | [ ] Bật test trên WebKit | Gần với Safari iOS, theo QD-01 | CI hiện mới chạy Chromium | Claude | | Chưa làm | Trung bình |
| 4.4 | [ ] Cập nhật `docs/legacy/` | Nếu xác nhận được thay đổi của bản cũ 1.9.45 | | Nhóm | | Chưa làm | Thấp |
| 4.5 | [ ] Sửa dòng bằng chứng | Đổi "chưa commit (đợt 2)" thành `757a784` trong các `acceptance.md` | | Claude | | Chưa làm | Thấp |
| 4.6 | [x] Code nút về trang học chính (APP-12) | Liên kết ở thanh trên cùng T1 đến T4 và S1 bước 1, địa chỉ từ `VITE_HOST_URL` | Xong 10/10 trên nhánh `Manh_work_10_10`: APP-AC18, APP-AC19 đạt, APP-AC03 chụp lại | Claude + Mạnh | | Hoàn thành | Cao |
| **5** | **Bàn giao** | | | | | | |
| 5.1 | [ ] Thống nhất nơi đặt bản build | Và đường dẫn để trang học chính mở mini app mới | | Nhóm + khách | | Chưa làm | Cao |
| 5.2 | [ ] Kiểm trên trang học chính thật | Mở ở trang mới (đã quyết định 10/10): chọn ngôn ngữ, học một phiên, xem tiến bộ, rồi bấm Quay lại trang học | Không nhúng iframe nên tiến độ không bị trình duyệt tách bộ nhớ | Nhóm | | Chưa làm | Cao |
| 5.3 | [ ] Bàn giao | Mã nguồn, bản build, hướng dẫn cập nhật dữ liệu (theo DATA-01 đến DATA-04), báo cáo nghiệm thu 173/173 | | Nhóm | | Chưa làm | Cao |

## Cập nhật file này

Trạng thái trong file lấy từ dấu `[x]` của các `acceptance.md` tại commit `ec1d2f2`. Sau mỗi đợt, chạy `npm run spec:check` để sinh lại `docs/generated/acceptance-report.md` và đối chiếu số liệu ở mục Tổng quan tiến độ.
