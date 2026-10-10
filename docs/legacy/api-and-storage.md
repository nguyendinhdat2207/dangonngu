# API, dữ liệu và lưu trữ: bản cũ

Origin mini app: `https://vitasr-focus-160-pwa.t6dbgc79hk.chatgpt.site`. Đường dẫn dưới đây tương đối với origin này.

## 1. Dữ liệu học (file JSON tĩnh, không cần đăng nhập)

`{source}` là bộ nội dung:

| `{source}` | Tên trên giao diện | Ngôn ngữ | Số câu |
|---|---|---|---|
| `fluency` (mặc định) | English Fluency | 15 ngôn ngữ | 4.096 câu mỗi ngôn ngữ |
| `global` | Global English | Chỉ tiếng Anh (`en-GB`) | 4.608 câu |

Hai bộ có cấu trúc dữ liệu khác nhau, xem mục "Mẫu dữ liệu" bên dưới.

| Method | Đường dẫn | Nội dung |
|---|---|---|
| GET | `/data/{source}/manifest.json?v=…` | `schema`, `version`, `count` (4096), `languages[]`: `id`, `name`, `locale`, `file`, `units`, `sha256`. Fluency có 15 ngôn ngữ: en, de, ja, lo, ko, zh, id, hi, ta, ru, fr, es, th, pt, it |
| GET | `/data/{source}/{lang}.json` | Đầu file: `schemaVersion`, `kind`, `languageId`, `name`, `shortName`, `nativeName`, `locale`, `sourceVersion`, `itemCount`, `coreCount`, `bridgeCount`, `contentSha256`, `sourceSha256`, `items[]` |
| GET | `/data/{source}/units-{lang}.json` | `schemaVersion`, `kind`, `languageId`, `sourceContentSha256`, `itemCount`, `unitCount`, `units[]`: `ids[]`, `title`, `translation` |
| GET | `/data/fluency/source-index.json`, `direction-en-vi.json`, `direction-vi-en.json` | Có trong danh sách cache; chưa thấy chỗ gọi |
| GET | `/data/audio/index.json`, `/data/audio/lo-fluency-4096-v1.json`, file mp3 | Gói âm thanh ngoại tuyến; chỉ có tiếng Lào. Lưu ở Cache API `vitasr-audio-v1-{id}-{revision}` |
| GET | `/assets/vitasr-overview-ava-30s.mp4`, `/assets/vitasr-quick-guide-v5.mp4` | Video hướng dẫn |

### Mẫu dữ liệu tiếng Anh: bộ English Fluency (`/data/fluency/`)

- `en.json`: 4096 câu, `coreCount` 512, `bridgeCount` 512. Mỗi câu chỉ có 4 trường: `id`, `hierarchy` (`core`, `expansion`, `leaf`, `bridge`), `en`, `vi`.
  Ví dụ: `{"id":1,"hierarchy":"core","en":"I want to...","vi":"Tôi muốn..."}`
- Ở mọi file Fluency, câu gốc nằm trong trường `en` dù ngôn ngữ là gì (ví dụ `de.json`: `"en": "Ich möchte ..."`). Mỗi file 4.096 câu: 512 core, 1.024 expansion, 2.048 leaf, 512 bridge. Tiếng Nhật có thêm `reading` và `furigana` (mảng đoạn `[chữ]` hoặc `[chữ, cách đọc]`) cho cả 4.096 câu.
- `units-en.json`: `schemaVersion`, `kind`, `languageId`, `sourceContentSha256`, `itemCount`, `unitCount` (512), `units[]` gồm `number`, `title`, `translation`, `ids` (chuỗi có số 0 ở đầu), mỗi unit 8 câu.
  Ví dụ: unit 1 "I want to..." / "Tôi muốn...", `ids`: 0001, 0257, 0769, 0770, 0258, 0771, 0772, 1793; unit 2 "I'd like to...", `ids`: 0002, 0259, 0773, 0774, 0260, 0775, 0776, 1794. Thứ tự id gợi ý mỗi unit là một cây nhỏ (câu core, các câu mở rộng, câu ví dụ, câu nối), nhưng chưa kiểm hết 512 unit.
- Bộ Fluency tiếng Anh không có `noteVi`, `topic`, `situation`, `reading`, `furigana`, `phrases`.

### Mẫu dữ liệu tiếng Anh: bộ Global English (`/data/global/`)

- `manifest.json`: chỉ có `{"languages":[{"id":"en","name":"Tiếng Anh","locale":"en-GB","file":"en.json","units":"units-en.json"}]}`. Không có `count`, `version`, `sha256` như manifest Fluency.
- `en.json`: `schemaVersion`, `languageId`, `locale` (`en-GB`), `itemCount` (4608), `contentSha256`, `items[]`. Mỗi câu có 8 trường: `id`, `en`, `vi`, `noteVi`, `topic`, `situation`, `hierarchy`, `unitId`.
  Ví dụ: `{"id":1,"en":"Where is room twelve?","vi":"Phòng số mười hai ở đâu?","noteVi":"Where is + địa điểm số ít để hỏi vị trí.","topic":"Trường học","situation":"Bạn mới đến trường và hỏi một bạn học về phòng học tiếng Anh.","hierarchy":"Core","unitId":"A1-01"}`
  - `hierarchy` viết khác bộ Fluency: `Core`, `Expansion 1`, `Expansion 2`, `Leaf 1` đến `Leaf 4`, `Bridge`; mỗi unit có đủ 8 loại.
  - `topic` là nhãn chủ đề tiếng Việt ("Trường học", "Đời sống", "Lịch hẹn", "Dịch vụ", "Đi lại"…); 33 unit đầu có 26 chủ đề. `situation` là một câu mô tả tình huống, dùng chung cho 8 câu của unit. `unitId` mang mã trình độ (`A1-01`…).
- `units-en.json`: `sourceContentSha256`, `units[]`. Mỗi unit: `number`, `title` (tiếng Anh, ví dụ "Find your classroom"), `translation` ("Tìm đúng phòng học"), `ids` là **số** (không phải chuỗi có số 0 ở đầu như Fluency), 8 id liên tiếp.
- Đã kiểm trên bộ dữ liệu khách gửi: 576 unit, id liên tiếp 1 đến 4608. `unitId` từ `A1-01` đến `C2-96`: 6 trình độ, mỗi trình độ 96 unit (768 câu). 177 giá trị `topic`, phân bố lệch: 6 chủ đề có 384 câu, 3 chủ đề có 192 câu, còn lại 8 đến 16 câu. Mọi câu đều có `noteVi`. Câu tiếng Anh dài nhất 138 ký tự.

### File phụ trong bộ Fluency

- `source-index.json`: thông tin 15 ngôn ngữ (`name`, `shortName`, `nativeName`, `locale`, `itemCount`…) và `learningDirections`.
- `direction-vi-en.json` ("Bản Việt–Anh", mặc định cho tiếng Anh) và `direction-en-vi.json` ("English → Vietnamese"): chỉ là siêu dữ liệu chiều học và cấu hình giọng đọc, không chứa câu. Chiều `en-vi` tương ứng chế độ "Tiếng Việt (từ tiếng Anh)" của L-S1.
- `data/audio/index.json`: một gói `lo-fluency-4096-v1` (tiếng Lào, 73 MB, phát trực tuyến); file gói không có trong bộ dữ liệu khách gửi.

## 2. Backend chia sẻ

Cookie cùng origin, JSON, `cache: no-store`. Lỗi 401 thì chuyển tới `/signin-with-chatgpt?return_to=…`.

| Method | Đường dẫn | Body | Ghi chú |
|---|---|---|---|
| GET | `/api/sharing/session` | | Đã gọi thử: `{"configured":true,"signedIn":false,"email":"","isOwner":false}` |
| GET | `/api/sharing/links` | | Liên kết và quyền email hiện có |
| POST | `/api/sharing/links` | `title, source, language, ids, mode, allowData, days` | Tạo liên kết |
| PATCH | `/api/sharing/links/{id}` | `mode, allowData, days, revoked` | Sửa, gia hạn, thu hồi |
| DELETE | `/api/sharing/links/{id}` | | Xóa liên kết |
| POST | `/api/sharing/invite` | `shareId, emails, days` | Mời qua email |
| PATCH | `/api/sharing/grant/{id}` | `days` | Gia hạn quyền một email |
| DELETE | `/api/sharing/grant/{id}` | | Thu hồi quyền một email |
| GET | `/api/sharing/data/{id}` | | Tải dữ liệu được chia sẻ |
| GET | `/api/sharing/open/{share}` | | Người nhận mở link; trả về `url, ids, source, language, title` |
| POST | `/api/sharing/accept` | `token` | Người nhận chấp nhận lời mời |

## 3. Gọi ra ngoài và mã còn sót

| Loại | Đích | Ghi chú |
|---|---|---|
| POST | `/get-data-lesson` (trong `demo/core.js`) | Body `dataId, langId`, header `Authorization: Bearer token`. Kế thừa từ trang chính; origin này không có endpoint và không có token. Khả năng là mã chết |
| Liên kết | `https://ve360-commons.t6dbgc79hk.chatgpt.site/ket-noi/?app=vitasr-focus-160-pwa` | Nút "Khảo sát và Trò chuyện" |
| Service worker | `/sw.js` | Cache `vitasr-demo-1.9.40-ve360`; chỉ cache GET cùng origin trong danh sách cho phép |

## 4. Lưu trữ trên thiết bị

| Khóa localStorage | Nội dung |
|---|---|
| `vitasr.catalog.source.v1`, `vitasr.catalog.language.v1`, `vitasr.catalog.language.global.v1` | Bộ nội dung và ngôn ngữ đã chọn |
| `vitasr.learning.v1:{account}:{lang}:{level}` | `{schema, scope, goal, sessions[], attempts[], events[], feedback[], seen[]}`. Session: `id, started, completed, mode, position, stage, revealed, hint, items`. Attempt: `id, sessionId, itemId, version, at, type, outcome, hinted` |
| `vitasr.study.progress.v1:{account}:{lang}:{level}` | Bản cũ hơn, chỉ đọc: `currentId, sessionIds, seenIds, updatedAt` |
| `vitasr.topic.v1:{account}:{lang}[:shareScope]` | Lựa chọn trong Học theo chủ đề |
| `vitasr.test3.v1:resume:{source}:{lang}`, `vitasr.test3.v1:summary:{source}:{lang}` | Tiến độ và kết quả TEST NOW |
| `vitasr.speech.preferences.v1` | `{schema, byLanguage}`: giọng đọc theo ngôn ngữ |
| `vitasr.audio.downloaded.v1` | `on` / `off` |
| `vitasr.focus.contrast` | Giao diện sáng / tối |
| `vitasr.quick-guide.seen` | Đã xem hướng dẫn (cũng ở sessionStorage và cookie `vitasr_quick_guide_seen`) |

