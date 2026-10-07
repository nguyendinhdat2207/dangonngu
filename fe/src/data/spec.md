---
id: DATA
title: Dữ liệu và tiến độ
status: nháp
version: 0.1
legacy: docs/legacy/api-and-storage.md
---

# DATA Dữ liệu và tiến độ

Hợp đồng dữ liệu mà giao diện cần, cách đọc dữ liệu, cách lưu tiến độ, các quy tắc tính toán dùng chung (lộ trình, câu cần ôn, đáp án nhiễu, tìm kiếm) và fixture.

Khách không cung cấp mã nguồn và không mở API (QD-03). Cấu trúc dưới đây lấy từ file JSON công khai của bản cũ; giao diện chỉ phụ thuộc vào hợp đồng này, không phụ thuộc vị trí file.

## Yêu cầu

### DATA-01 Manifest

Dữ liệu manifest có dạng:

```json
{
  "schema": 1,
  "version": "1.8.0",
  "count": 4096,
  "languages": [
    { "id": "en", "name": "Tiếng Anh", "locale": "en-US", "file": "en.json", "units": "units-en.json", "sha256": "…" }
  ]
}
```

Giao diện dùng `languages[].id`, `name`, `locale`, `file`, `units` và `count`. Thứ tự ngôn ngữ hiển thị do S1-01 quyết định, không theo thứ tự trong file.

### DATA-02 File ngôn ngữ

```json
{
  "languageId": "en",
  "locale": "en-US",
  "itemCount": 4096,
  "items": [ { "id": 1, "hierarchy": "core", "en": "I want to...", "vi": "Tôi muốn..." } ]
}
```

Mỗi item bắt buộc có `id` (số), trường câu gốc mang tên đúng bằng `languageId` (ví dụ `en`, `ja`), và `vi`. `hierarchy` có thể là `core`, `expansion`, `leaf`, `bridge`; giao diện bản đầu không hiển thị trường này.

### DATA-03 File unit

```json
{
  "languageId": "en",
  "unitCount": 512,
  "units": [ { "ids": ["0001", "0257", "0769", "0770", "0258", "0771", "0772", "1793"], "title": "I want to...", "translation": "Tôi muốn..." } ]
}
```

`ids` là chuỗi có số 0 ở đầu; so khớp với `items[].id` theo giá trị số. Một unit có thể có ít hơn 8 câu.

### DATA-04 Trường tùy chọn

Các trường `noteVi`, `reading`, `furigana`, `topic`, `situation`, `phrases` có thể có ở một số ngôn ngữ nhưng **không có** trong dữ liệu tiếng Anh. Giao diện phải chạy đúng khi chúng vắng mặt, và chỉ hiển thị phần liên quan khi có (C1-06, C1-07). Bản đầu không dùng `topic`, `situation`, `phrases`.

### DATA-05 Nguồn dữ liệu thay được

Giao diện chỉ đọc dữ liệu qua một interface `DataSource` gồm ba thao tác: lấy manifest, lấy file ngôn ngữ, lấy file unit. Có hai cài đặt:

- `FixtureSource`: đọc từ `fe/fixtures/`, dùng khi phát triển và kiểm thử.
- `StaticFileSource`: đọc từ một base URL cấu hình được.

Chọn nguồn bằng biến môi trường lúc build (`VITE_DATA_SOURCE=fixture|static`, `VITE_DATA_BASE_URL`). Không thành phần giao diện nào gọi `fetch` trực tiếp tới file dữ liệu. Dữ liệu sai hợp đồng (thiếu trường bắt buộc, sai kiểu) được coi là lỗi tải (APP-08), không làm app trắng màn.

### DATA-06 Lưu tiến độ

Tiến độ và cài đặt lưu localStorage qua một interface `ProgressStore`, với tiền tố khóa `vitasr2.` để không đụng khóa của bản cũ:

- `vitasr2.settings`: ngôn ngữ đang học, giao diện, giọng đọc theo ngôn ngữ, tốc độ đọc, mục tiêu tuần, đã xem hướng dẫn.
- `vitasr2.progress.{lang}`: `{ schema: 1, sessions: [], attempts: [], items: { [id]: { status, streak, due, lastAt } } }`.
  - Session: `id`, `source` (lo-trinh, on-tap, tu-khoa, cau, kiem-tra), `itemIds`, `startedAt`, `completedAt`, `position`.
  - Attempt: `sessionId`, `itemId`, `at`, `kind` (ghi-nho, trac-nghiem, nghe-chon, sap-xep), `outcome` (nho, can-on, dung, sai), `hinted`.

Mọi ghi đều bọc xử lý lỗi; khi localStorage không dùng được, app vẫn chạy với bộ nhớ tạm trong phiên và hiện cảnh báo (APP-08). Đọc lại tiến độ bản cũ: chưa làm (câu hỏi mở).

### DATA-07 Quy tắc câu cần ôn

Mỗi câu có một trong ba trạng thái hiển thị: **Chưa học**, **Đã nhớ**, **Cần ôn**.

- Sau bước ghi nhớ: chọn "Tôi nhớ" thì `streak` tăng 1; chọn "Cần ôn lại" thì `streak` về 0.
- Sau bước trắc nghiệm hoặc kiểm tra: trả lời sai hoặc dùng gợi ý thì `streak` về 0.
- Ngày ôn tiếp (`due`): `streak` 0 thì đến hạn ngay; `streak` 1, 2, 3, 4, từ 5 trở lên thì sau 1, 3, 7, 14, 30 ngày tính từ lần làm cuối.
- Câu **Cần ôn** trong ngày D là câu đã học có `due` không muộn hơn cuối ngày D (giờ máy). Câu đã học còn lại là **Đã nhớ**.

Chỉ có một khái niệm "cần ôn" trong toàn app; T1, T2, T3, T4 cùng dùng quy tắc này.

### DATA-08 Đáp án nhiễu

Câu trắc nghiệm chọn nghĩa có 4 lựa chọn: nghĩa đúng và 3 nghĩa của các câu khác cùng ngôn ngữ. Ba nghĩa nhiễu khác nghĩa đúng và khác nhau sau khi chuẩn hóa (bỏ khoảng trắng thừa, không phân biệt hoa thường, bỏ dấu câu cuối), ưu tiên lấy từ unit khác. Cách chọn là tất định theo `id` câu (cùng câu cho cùng bộ lựa chọn) để kiểm thử được; thứ tự hiển thị 4 lựa chọn cũng tất định theo `id`.

### DATA-09 Fixture

`fe/fixtures/` chứa bộ dữ liệu mẫu đúng hợp đồng DATA-01 đến DATA-03, gồm ít nhất:

- Tiếng Anh: 3 unit đủ 8 câu và 1 unit chỉ 5 câu.
- Một câu tiếng Anh dài trên 120 ký tự; một nghĩa tiếng Việt dài trên 120 ký tự.
- Tiếng Nhật: 1 unit, có ít nhất 2 câu kèm `furigana`.
- Tiếng Thái: 1 unit.
- Manifest liệt kê đủ các ngôn ngữ trên.
- Một bộ tiến độ mẫu 30 ngày cho tiếng Anh (đúng cấu trúc DATA-06), kèm file ghi các số liệu tính tay mà T4 phải hiển thị cho từng khoảng 1, 7, 30 ngày.

Câu trong fixture lấy từ mẫu khách cho phép dùng (câu hỏi mở 5 của G); trước khi có đồng ý, dùng câu tự viết cùng cấu trúc.

### DATA-10 Không gọi mạng ngoài phạm vi

App chỉ gọi mạng tới file của chính nó và base URL dữ liệu (DATA-05). Không gọi `/api/sharing/*`, `/get-data-lesson` hay bất kỳ endpoint nào của bản cũ; không gửi dữ liệu người học đi đâu.

### DATA-11 Lộ trình học

Lộ trình là thứ tự unit trong file unit. Câu tiếp theo trên T1 là câu chưa học đầu tiên của unit đầu tiên còn câu chưa học. Phiên học theo lộ trình lấy toàn bộ câu của unit đó (tối đa 8). Unit hoàn thành khi mọi câu của nó đã qua bước ghi nhớ ít nhất một lần.

### DATA-12 Tìm kiếm

Tìm trên cả câu gốc và nghĩa; không phân biệt hoa thường; bỏ dấu tiếng Việt khi so khớp ("dat phong" khớp "đặt phòng"); khớp theo chuỗi con. Kết quả giữ thứ tự theo `id`.

## Câu hỏi mở

- Khoảng ôn 1, 3, 7, 14, 30 ngày trong DATA-07 là đề xuất. Cần chốt với khách hoặc đối chiếu quy tắc của bản cũ (`demo/learning-ui.js`, `demo/learning-store.js`).
- Có cần đọc tiến độ bản cũ (`vitasr.learning.v1:*`) không.

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
