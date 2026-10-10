# Rà soát chuỗi giao diện (FND-AC12)

Ngày 10/10/2026, Claude. Danh sách chuỗi người học nhìn hoặc nghe thấy, rút từ `fe/src`: chữ trong JSX (kể cả xuống nhiều dòng), nhãn trợ năng và chuỗi trong mã (bỏ thông báo lỗi chỉ dành cho lập trình viên trong `fe/src/data/contract.ts`, `source.ts`). Phần trong `{...}` hoặc `${...}` được thay bằng số, tên hoặc câu khi chạy. Danh sách rút tự động nên có thể kèm vài dòng là biểu thức; người đọc ở buổi thử FND-AC13 nên dùng thêm app.

Kết quả rà theo FND-12:

- Không còn từ trong cột "Không dùng" (File, dữ liệu, record, Text, original, Bản dịch, translation, Note, ghi chú, Sai, chưa thuộc, Session, lesson, TEST NOW, Test3). Ba chỗ đã sửa trong đợt này: câu cảnh báo bộ nhớ bị chặn (APP-08), nhóm "Dữ liệu" và câu báo lỗi nhập tiến độ ở Cài đặt (S8-05), dòng mô tả "trả lời sai" ở Luyện tập (T2).
- Nút và thông báo cùng luồng dùng cùng động từ: Nhập tiến độ / Đã nhập tiến độ; Xóa tiến độ / Xóa / Đã xóa tiến độ; Dừng phiên? / Dừng, Học tiếp; Dừng kiểm tra? / Dừng, Làm tiếp; Có bản cập nhật / Cập nhật; Không có câu nào khớp... / Xóa tìm kiếm và bộ lọc.
- Mọi thông báo lỗi có hướng xử lý: lỗi tải (Kiểm tra kết nối rồi bấm Thử lại), bộ nhớ bị chặn (Cho phép trang này lưu trên máy...), nhập tiến độ sai tệp (Chọn tệp đã xuất bằng Xuất tiến độ...), chọn sai nghĩa (thử lại), xếp sai (sắp xếp lại các cụm được đánh dấu), thiếu giọng (Mở Cài đặt > Giọng đọc; Thêm giọng trong cài đặt hệ thống...). "Không có câu nào để học trong nhóm này." (S3-01) là thông báo trạng thái, app tự đưa người học về màn trước, nên không tính là lỗi.

## C1-the-cau

- Chạm để hiện câu gốc
- Cách dùng: {item.noteVi}
- Dừng
- Nghe
- Nghe lặp
- Thiết bị chưa có giọng {langName}. Mở

## C2-dai-8-o

- chưa học
- đang học
- đã nhớ
- cần ôn
- Tiến độ nhóm câu: ${learned} trên ${shown.length} đã học
- Câu ${i + 1}, ${LABEL[c]}

## C3-nut

- Cần ôn lại
- Tôi nhớ

## C4-lua-chon

- Đúng
- Chưa đúng, thử lại
- Chưa đúng

## C5-thanh-tab

- Học
- Luyện tập
- Thư viện
- Tiến bộ
- Khu chính
- ${label}, ${count} câu cần ôn

## C6-sheet

- Đóng

## S1-chon-ngon-ngu

- Học {lang.name.charAt(0).toLocaleLowerCase('vi') + lang.name.slice(1)} với bộ nào?
- Có thể đổi bộ sau ở thanh trên cùng hoặc Cài đặt.
- {l.packs.length} bộ
- Bạn muốn học ngôn ngữ nào?
- Có thể đổi sau ở thanh trên cùng.

## S3-phien-hoc

- Nghĩa bắt đầu bằng "${first}…", gồm ${words} từ.
- Không có câu nào để học trong nhóm này.
- Dừng phiên?
- Tiến độ {doneCount}/{N} câu được giữ lại.
- Học tiếp
- Thoát
- Câu {pos + 1}/{N}
- Câu này nghĩa là gì?
- Xem gợi ý
- {last ? 'Xem tổng kết' : 'Câu tiếp'}
- Xem tổng kết
- Câu tiếp
- Nhóm tiếp
- Học tiếp ${nextCount} câu
- Xong phiên
- câu nhớ được không cần gợi ý
- Cần ôn lại:
- Xem tiến bộ
- Xong

## S5-kiem-tra-nhanh

- Nghe và chọn nghĩa
- Nghe theo cụm
- Sắp xếp câu
- Dừng kiểm tra?
- Kết quả các câu đã làm vẫn được lưu.
- Làm tiếp
- Kiểm tra nhanh · Unit {unit.number} {level ? ` · ${level}` : ''}
- {items.length} câu
- 1. Nghe và chọn nghĩa
- Nghe câu rồi chọn nghĩa đúng.
- 2. Nghe theo cụm
- Mở từng cụm của câu để nghe.
- 3. Sắp xếp câu
- Xếp các cụm theo đúng thứ tự.
- Làm cả 3 bước
- Chỉ {STEP_NAME[s].charAt(0).toLocaleLowerCase('vi') + STEP_NAME[s].slice(1)}
- Xong kiểm tra
- Đã kiểm tra {tested} câu.
- Kiểm tra unit tiếp theo
- Câu {pos + 1}/{stepItems.length}
- Bước ${current + 1}/${steps.length}
- Nghe lại
- Thiết bị chưa có giọng đọc, bài này dùng chữ thay cho âm thanh.
- Câu bạn nghe nghĩa là gì?
- Chạm từng cụm để nghe.
- Cụm ${i + 1}, đang che
- {shown ? chunkLabel(c) : `Cụm ${i + 1}`}
- Cụm ${i + 1}
- Chưa đúng, sắp xếp lại các cụm được đánh dấu
- Câu của bạn
- Chạm các cụm bên dưới theo đúng thứ tự.
- ${chunkLabel(chunks[idx])}${wrongAt.has(at) ? ', chưa đúng vị trí' : ''}
- Các cụm

## S8-cai-dat

- Theo thiết bị
- Sáng
- Tối
- Giọng đọc
- Tệp này không phải tiến độ VITASR của ${who}. Chọn tệp đã xuất bằng Xuất tiến độ khi đang học ${who}.
- Nhập tiến độ
- Thay tiến độ {who} hiện tại bằng tệp này?
- Hủy
- Đã nhập tiến độ
- Xóa tiến độ ${language.name}
- Đã xóa tiến độ
- Học tập
- Mục tiêu mỗi tuần
- Giảm mục tiêu
- {settings.weeklyGoal} phiên
- Tăng mục tiêu
- Ngôn ngữ đang học
- Âm thanh
- {chosen ? chosen.name : 'Mặc định của thiết bị'}
- Mặc định của thiết bị
- Giao diện
- Tiến độ
- Xuất tiến độ
- Xóa tiến độ {language.name}
- Trợ giúp
- Xem lại hướng dẫn
- Phiên bản {__APP_VERSION__}
- Gõ "{name}" để xác nhận. Tiến độ đã xóa không lấy lại được.
- Tên ngôn ngữ
- Xóa
- Tiếng Việt
- Giọng cho
- Thiết bị chưa có giọng {name}. Thêm giọng trong cài đặt hệ thống của thiết bị rồi mở lại app.
- Giọng ${name}
- Nghe thử Mặc định của thiết bị
- Nghe thử
- Nghe thử ${v.name}
- Tốc độ đọc

## S9-huong-dan

- Đây là câu bạn sẽ học. Chạm Nghe để nghe phát âm.
- Mỗi phiên có 8 câu, khoảng 5 phút.
- Ôn lại và kiểm tra nằm ở Luyện tập. Kết quả nằm ở Tiến bộ.
- Bước {step + 1}/3
- Bỏ qua
- {!last ? 'Tiếp' : replay ? 'Xong' : 'Bắt đầu học'}
- Tiếp
- Bắt đầu học

## T1-hoc

- = goal ? `Tuần này: đã đạt mục tiêu ${weekCount}/${goal} phiên` : `Tuần này: ${weekCount}/${goal} phiên`}
- Tuần này: đã đạt mục tiêu ${weekCount}/${goal} phiên
- Tuần này: ${weekCount}/${goal} phiên
- {reviewCount} câu cần ôn hôm nay
- Bạn đã học hết {formatCount(total)} câu {language.name.charAt(0).toLocaleLowerCase('vi') + language.name.slice(1)}. Vào Luyện tập để ôn lại.
- Mở Luyện tập
- Câu ${pos + 1}/${n}
- Unit {unit.number} {level ? ` · ${level}` : ''}
- Tiếp tục: ${remaining} câu còn lại
- Học 8 câu
- Học ${n} câu

## T2-luyen-tap

- đặt phòng
- ăn uống
- sân bay
- mua sắm
- Học theo từ khóa
- Ôn câu cần ôn
- 0 ? 'Các câu đến hạn ôn hôm nay, kể cả câu bạn chưa nhớ hoặc làm chưa đúng.' : 'Không có câu cần ôn hôm nay.'}
- Các câu đến hạn ôn hôm nay, kể cả câu bạn chưa nhớ hoặc làm chưa đúng.
- Không có câu cần ôn hôm nay.
- ${due} câu
- Tìm câu có chữ như đặt phòng, ăn uống, sân bay.
- Kiểm tra nhanh
- Nghe hiểu, nghe theo cụm, sắp xếp câu.
- Ví dụ: đặt phòng, airport
- Xóa từ khóa
- Gợi ý
- Không có câu nào chứa "{q}". Thử từ khác hoặc từ tiếng Anh.
- Tìm thấy {formatCount(results.length)} câu
- Học ${count} câu
- Học 8 câu đầu

## T3-thu-vien

- Câu ${pad4(it.id)}
- Học câu này
- Unit
- Unit ${unitObj.number}${unitObj.title ?
- Tất cả
- Unit ${u.number}${u.title ?
- Trạng thái
- Chưa học
- Đã nhớ
- Cần ôn
- Chủ đề
- Trình độ
- Tìm câu hoặc nghĩa
- {formatCount(results.length)} câu
- Không có câu nào khớp với tìm kiếm và bộ lọc hiện tại.
- Xóa tìm kiếm và bộ lọc
- Phân trang
- Trước
- Chi tiết câu
- Câu {pad4(detailItem.id)}
- Tìm chủ đề
- ${formatCount(t.count)} câu
- Unit {u.number} {level ? ` · ${level}` : ''} {u.title ? (
- {state ? `${STATUS_LABEL[st]} · Học lần cuối: ${daysAgoText(state.lastAt, now)}` : 'Chưa học'}
- ${STATUS_LABEL[st]} · Học lần cuối: ${daysAgoText(state.lastAt, now)}

## T4-tien-bo

- Khoảng thời gian
- {r} ngày
- Chưa có phiên nào. Học 8 câu đầu tiên để bắt đầu theo dõi tiến bộ.
- phiên
- câu đã học
- cần ôn hôm nay
- Mục tiêu tuần
- {done}/{goal} phiên
- ${done}/${goal} phiên
- Lịch ôn
- Hôm nay
- {formatCount(schedule.today)} câu
- Ngày mai
- {formatCount(schedule.tomorrow)} câu
- 7 ngày tới
- {formatCount(schedule.next7)} câu
- Các phiên
- Xem thêm
- Số câu đã học mỗi ngày
- ${dayTitle(c.day)}: ${c.count} câu
- Ngày
- Số câu
- Câu đã học ({formatCount(ids.length)})

## app

- Đang ngoại tuyến. Tiến độ vẫn được lưu trên máy.
- Trình duyệt đang chặn lưu tiến độ, tiến độ sẽ mất khi đóng app. Cho phép trang này lưu trên máy trong cài đặt trình duyệt rồi mở lại app.
- Quay lại trang học
- Trang học
- Đang tải
- Đang học
- Không tải được danh sách câu. Kiểm tra kết nối rồi bấm Thử lại.
- Thử lại
- Quay lại
- {language?.name ?? 'Chọn ngôn ngữ'}
- Chọn ngôn ngữ
- Cài đặt
- Có bản cập nhật
- Cập nhật
- Đổi ngôn ngữ hoặc bộ nội dung

## data

- Câu luyện nói theo mẫu câu.
- Lộ trình
- Ôn tập
- Từ khóa
- Một câu
- Kiểm tra
- Chủ Nhật
- Thứ Hai
- Thứ Ba
- Thứ Tư
- Thứ Năm
- Thứ Sáu
- Thứ Bảy
- hôm nay
- hôm qua
- ${n} ngày trước
