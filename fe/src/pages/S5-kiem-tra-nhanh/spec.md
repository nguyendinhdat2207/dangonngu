---
id: S5
title: Kiểm tra nhanh
status: nháp
version: 0.1
route: "#/kiem-tra"
depends: APP, FND, DATA, C3, C4, C6
legacy: L-D6, L-D6b
---

# S5 Kiểm tra nhanh

Màn toàn trang (APP-03). Ba dạng bài chạy nối tiếp trên cùng một nhóm câu (một unit). Thay cho TEST NOW (T01, T02, T03) của bản cũ, với tên dễ hiểu.

## Bố cục

```
┌───────────────────────────┐
│ ✕ Thoát   Nghe và chọn nghĩa │
│ ●───○───○   Câu 2/8       │  chỉ báo 3 bước
│                           │
│        (◉ Nghe lại)       │
│                           │
│ 1 Tôi muốn đặt một bàn... │
│ 2 ...                     │
│ 3 ...                     │
│ 4 ...                     │
└───────────────────────────┘
```

## Yêu cầu

### S5-01 Màn bắt đầu

Mở `#/kiem-tra` (nhóm câu là unit trong tham số `unit`, mặc định unit đang học trong lộ trình) hiện: tên unit, số câu, mô tả ngắn ba bước, nút chính "Làm cả 3 bước", và ba nút dạng chữ để chỉ làm một bước: "Chỉ nghe và chọn nghĩa", "Chỉ nghe theo cụm", "Chỉ sắp xếp câu".

### S5-02 Chỉ báo bước

Đầu màn khi đang làm: nút "Thoát", tên bước hiện tại, chỉ báo 3 chấm nối nhau (bước đã xong, đang làm, chưa làm; khi chỉ làm một bước thì chỉ có một chấm) và "Câu n/N".

### S5-03 Bước 1: Nghe và chọn nghĩa

Mỗi câu: tự phát âm câu gốc một lần khi vào câu (không hiện chữ câu gốc), có nút "Nghe lại". Chọn nghĩa trong 4 lựa chọn (C4, DATA-08). Sau khi chọn đúng, hiện chữ câu gốc và nút chính "Câu tiếp". Khi thiết bị không có giọng đọc cho ngôn ngữ đích: hiện chữ câu gốc ngay từ đầu kèm dòng "Thiết bị chưa có giọng đọc, bài này dùng chữ thay cho âm thanh."

### S5-04 Bước 2: Nghe theo cụm

Câu gốc được chia thành cụm bằng `Intl.Segmenter` theo từ: câu có tối đa 1 từ thì 1 cụm; 2 đến 3 từ thì 2 cụm; 4 đến 7 từ thì 3 cụm; từ 8 từ thì 4 cụm; số từ chia đều, phần dư dồn vào các cụm đầu. Các cụm hiện thành hàng nút che chữ theo thứ tự; chạm một cụm thì hiện chữ cụm đó và đọc cụm đó. Hiện hết các cụm thì đọc cả câu và hiện nút chính "Câu tiếp". Không thu âm, không chấm phát âm. Câu chỉ có 1 cụm bị bỏ qua ở bước này.

### S5-05 Bước 3: Sắp xếp câu

Dùng các cụm như S5-04, hiện xáo trộn (xáo tất định theo `id` câu, không trùng thứ tự đúng). Chạm một cụm để đưa xuống hàng đáp án; chạm cụm trong hàng đáp án để trả về. Đủ cụm thì nút chính "Kiểm tra" mở. Đúng: viền `--known` cả hàng, nút thành "Câu tiếp". Sai: cụm sai vị trí viền `--review`, cho sắp lại. Câu chỉ có 1 cụm bị bỏ qua ở bước này.

### S5-06 Nghĩa hiển thị

Ở bước 2 và 3 chỉ hiện nghĩa của cả câu (phía trên khu làm bài), không ghép nghĩa cho từng cụm, vì cách chia cụm theo số từ không bảo đảm cụm tiếng Việt khớp nghĩa cụm câu gốc.

### S5-07 Kết quả

Sau bước cuối: tiêu đề "Xong kiểm tra", với mỗi bước đã làm là số câu đúng ngay lần đầu trên số câu của bước đó (ví dụ "Nghe và chọn nghĩa: 6/8"), và tổng số câu đã kiểm tra. Nút chính "Kiểm tra unit tiếp theo" (ẩn ở unit cuối), nút dạng chữ "Xong" (về `#/luyen-tap`). Kết quả từng câu ghi vào tiến độ (DATA-06), câu sai đầu tiên ở bất kỳ bước nào thành Cần ôn (DATA-07).

### S5-08 Thoát giữa chừng

Như S3-07: sheet xác nhận "Dừng kiểm tra? Kết quả các câu đã làm vẫn được lưu." với nút "Làm tiếp" và "Dừng". Không lưu bài kiểm tra dở để làm tiếp.

## Câu hỏi mở

- S5-07: bước "Nghe theo cụm" không có đúng sai. Code ghi kết quả bước này là số câu đã làm xong trên số câu của bước (ví dụ "Nghe theo cụm: 8/8"). Nhóm xác nhận cách hiển thị.
- DATA-06 chưa có loại lượt cho bước Nghe theo cụm, nên làm "Chỉ nghe theo cụm" tạo một phiên hoàn tất không có lượt nào: T4 đếm phiên này nhưng không đếm câu nào là đã học. Có thêm loại lượt (ví dụ `nghe-cum`) không?
- S5-08 "về màn trước": code về khu chính đã mở S5 (thường là T2, như bảng trong docs/new/navigation.md).
- S5-03: trong lúc trình duyệt còn nạp danh sách giọng (tối đa 1,5 giây), bước 1 chưa hiện nút "Nghe lại" lẫn chữ câu gốc; hết thời gian đó mới quyết định dùng âm thanh hay chữ.

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
