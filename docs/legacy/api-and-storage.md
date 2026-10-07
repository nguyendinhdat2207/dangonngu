# API, dữ liệu và lưu trữ: bản cũ

Origin mini app: `https://vitasr-focus-160-pwa.t6dbgc79hk.chatgpt.site`. Đường dẫn dưới đây tương đối với origin này.

## 1. Dữ liệu học (file JSON tĩnh, không cần đăng nhập)

`{source}` là `fluency` (mặc định) hoặc `global`.

| Method | Đường dẫn | Nội dung |
|---|---|---|
| GET | `/data/{source}/manifest.json?v=…` | `schema`, `version`, `count` (4096), `languages[]`: `id`, `name`, `locale`, `file`, `units`, `sha256`. Fluency có 15 ngôn ngữ: en, de, ja, lo, ko, zh, id, hi, ta, ru, fr, es, th, pt, it |
| GET | `/data/{source}/{lang}.json` | Đầu file: `schemaVersion`, `kind`, `languageId`, `name`, `shortName`, `nativeName`, `locale`, `sourceVersion`, `itemCount`, `coreCount`, `bridgeCount`, `contentSha256`, `sourceSha256`, `items[]` |
| GET | `/data/{source}/units-{lang}.json` | `schemaVersion`, `kind`, `languageId`, `sourceContentSha256`, `itemCount`, `unitCount`, `units[]`: `ids[]`, `title`, `translation` |
| GET | `/data/fluency/source-index.json`, `direction-en-vi.json`, `direction-vi-en.json` | Có trong danh sách cache; chưa thấy chỗ gọi |
| GET | `/data/audio/index.json`, `/data/audio/lo-fluency-4096-v1.json`, file mp3 | Gói âm thanh ngoại tuyến; chỉ có tiếng Lào. Lưu ở Cache API `vitasr-audio-v1-{id}-{revision}` |
| GET | `/assets/vitasr-overview-ava-30s.mp4`, `/assets/vitasr-quick-guide-v5.mp4` | Video hướng dẫn |

### Mẫu dữ liệu tiếng Anh

- `en.json`: 4096 câu, `coreCount` 512, `bridgeCount` 512. Mỗi câu chỉ có 4 trường: `id`, `hierarchy` (`core`, `expansion`, `leaf`, `bridge`), `en`, `vi`.
  Ví dụ: `{"id":1,"hierarchy":"core","en":"I want to...","vi":"Tôi muốn..."}`
- `units-en.json`: 512 unit, mỗi unit 8 câu.
  Ví dụ: unit 1 "I want to..." / "Tôi muốn...", `ids`: 0001, 0257, 0769, 0770, 0258, 0771, 0772, 1793; unit 2 "I'd like to...", `ids`: 0002, 0259, 0773, 0774, 0260, 0775, 0776, 1794. Thứ tự id gợi ý mỗi unit là một cây nhỏ (câu core, các câu mở rộng, câu ví dụ, câu nối), nhưng chưa kiểm hết 512 unit.
- Không có `noteVi`, `topic`, `situation`, `reading`, `furigana`, `phrases` trong dữ liệu tiếng Anh.

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

## 5. Multilingual cũ trên trang chính (để đối chiếu)

Nút nổi "Multilingual" trên `/user-file/{user}` của trang chính, khác với mini app.

`POST https://language.pomaskhoahocnaobo.com/get-data-for-multilingual`, header `Authorization: Bearer token`. Trả về `[{topic, chapters:[{chapter, paragraphs:[{paragraph, sentences:[{sentence, phrases:[…]}]}]}]}]`; mỗi phrase có trường theo mã ngôn ngữ (`en`, `vn`, `de`, `ja`…).
