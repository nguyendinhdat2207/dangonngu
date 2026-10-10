# Ánh xạ câu hỏi mở VITASR Đa ngôn ngữ vào spec, code và test

Cập nhật 10/10/2026 · số dòng tính theo commit `ec1d2f2` trên main · đi kèm file `checklist-vitasr-da-ngon-ngu.md`

File này lấy 26 dòng có trạng thái "Cần trao đổi" (14) và "Chờ xác nhận" (12) trong checklist, cộng 7 chức năng bản cũ chưa có. Mỗi mục ghi câu hỏi cần làm rõ, code đang làm gì, vị trí trong spec, code, test, và nếu đổi phương án thì phải sửa những chỗ nào. Bấm vào đường dẫn để mở đúng dòng trên GitHub.

## Cách sửa theo quy trình của repo

Theo [`docs/QUY-TRINH.md`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/QUY-TRINH.md), thứ tự sửa mỗi mục là:

1. Sửa spec trước: ghi câu trả lời vào phần Yêu cầu của `spec.md`, xóa dòng tương ứng trong mục "Câu hỏi mở", thêm một dòng vào "Lịch sử thay đổi". Commit tiền tố `spec:`.
2. Sửa code và test theo cột "Nếu đổi thì sửa".
3. Bỏ dấu `[x]` của các mục nghiệm thu bị ảnh hưởng (cột "Mục nghiệm thu kiểm lại"), chạy lại đủ 4 lệnh `npm test`, `npm run build`, `npm run test:e2e`, `npm run spec:check`, rồi đánh dấu lại.

Nếu nhóm đồng ý với cách code đang làm thì chỉ cần bước 1: chuyển nội dung câu hỏi thành câu khẳng định trong phần Yêu cầu.

## Bảng tra nhanh

| STT | Mã | Trạng thái | Câu hỏi ngắn | Ai trả lời | Ưu tiên |
|---|---|---|---|---|---|
| A1 | G (Chia sẻ) | Cần trao đổi | Có giữ tính năng Chia sẻ không, backend của ai? | Khách | Cao |
| A2 | DATA-11 | Cần trao đổi | Global English có cho chọn trình độ bắt đầu không? | Khách | Cao |
| A3 | S1-07 | Cần trao đổi | Có cần chế độ "Tiếng Việt (từ tiếng Anh)" không? | Khách | Cao |
| A4 | G-05 | Cần trao đổi | Ai duyệt thiết kế, ở mốc nào? | Khách | Cao |
| A5 | APP-09 | Cần trao đổi | Trang chính mở mini app bằng iframe hay tab mới? | Khách | Cao |
| A6 | DATA-09 | Cần trao đổi | Xác nhận bằng văn bản việc dùng dữ liệu | Khách | Cao |
| A7 | (bản cũ 1.9.45) | Cần trao đổi | Mục pháp lý ở bản cũ có cần không? | Khách | Thấp |
| B1 | DATA-07 | Cần trao đổi | Giữ khoảng ôn 1, 3, 7, 14, 30 ngày? Đúng không gợi ý thì giữ nguyên lịch? | Nhóm (có thể hỏi khách) | Cao |
| B2 | S8-05, FND-12 | Cần trao đổi | Duyệt câu báo lỗi nhập file | Nhóm | Cao |
| B3 | S8-04, FND-03 | Cần trao đổi | "Theo thiết bị" hay "Theo hệ thống"? | Nhóm | Thấp |
| B4 | T4-05 | Cần trao đổi | "7 ngày tới" gộp hay tách "Ngày mai"? | Nhóm | Trung bình |
| B5 | T4-04 | Cần trao đổi | Màu cột hôm nay; cột 30 ngày ở 320 px quá hẹp | Nhóm | Trung bình |
| B6 | C6-01 | Cần trao đổi | Lớp nền sau sheet ở chế độ tối | Nhóm | Thấp |
| B7 | S8-02 | Cần trao đổi | Có nút nghe nghĩa tiếng Việt không? | Nhóm | Thấp |
| C1 | T1-03 | Chờ xác nhận | Phiên nào được tính vào mục tiêu tuần? | Nhóm | Trung bình |
| C2 | T2-03 | Chờ xác nhận | Chữ nút "Học 8 câu đầu"; tìm chuỗi con hay theo từ | Nhóm | Trung bình |
| C3 | S5-03 | Chờ xác nhận | Chờ nạp giọng tối đa 1,5 giây | Nhóm | Trung bình |
| C4 | S5-04 | Chờ xác nhận | Thêm loại lượt `nghe-cum`? | Nhóm | Trung bình |
| C5 | S5-07 | Chờ xác nhận | Cách hiện kết quả bước Nghe theo cụm | Nhóm | Trung bình |
| C6 | S5-08 | Chờ xác nhận | Bấm Thoát rồi Dừng ở Kiểm tra nhanh thì về đâu: luôn về Luyện tập, hay về khu chính mở gần nhất (mở thẳng link thì thành màn Học)? | Nhóm | Thấp |
| C7 | T3-03 | Chờ xác nhận | Giữ bộ lọc nào trong route; danh sách chọn mở bằng sheet | Nhóm | Trung bình |
| C8 | T4-08 | Chờ xác nhận | "Chưa có phiên nào" nghĩa là gì? | Nhóm | Thấp |
| C9 | S8-06 | Chờ xác nhận | Bỏ nút Cài đặt trên thanh trên cùng khi ở S8 | Nhóm | Thấp |
| C10 | APP-10 | Chờ xác nhận | Cách cập nhật service worker và font Noto ngoại tuyến | Nhóm | Trung bình |
| C11 | C1-05 | Chờ xác nhận | Liên kết "Cài đặt > Giọng đọc" thấp hơn 44 px | Nhóm | Thấp |
| C12 | DATA-06 | Chờ xác nhận | Ghi các trường lưu thêm vào spec | Nhóm | Cao |
| D1 | (bản cũ) | Cần trao đổi | Đọc nghĩa tiếng Việt thành tiếng (gộp với B7) | Nhóm | Thấp |
| D2 | S8-03 | Chờ xác nhận | Gói âm thanh ngoại tuyến để bản sau? | Nhóm | Thấp |

---

## A. Cần khách trả lời

Các câu này nằm ở mục 5 của [`docs/new/ui-spec.md:76-81`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/new/ui-spec.md#L76-L81) và câu hỏi mở của từng khu vực. Gửi khách một lần, ưu tiên A1 và A2 vì có thể thêm màn.

### A1. Chia sẻ

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Bản sau có giữ tính năng Chia sẻ của bản cũ không? Nếu có, bên nào cung cấp backend `/api/sharing/*`, xác thực thế nào? |
| **Code đang làm** | Không có. App không gọi API nào ngoài file tĩnh của chính nó (DATA-10, QD-03). |
| **Spec** | [`docs/new/ui-spec.md:78`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/new/ui-spec.md#L78) (câu hỏi 1); [`fe/src/data/spec.md:116-118`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/spec.md#L116-L118) (DATA-10 cấm gọi `/api/sharing/*`); [`docs/legacy/api-and-storage.md`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/legacy/api-and-storage.md) (API bản cũ) |
| **Code liên quan** | [`fe/src/data/source.ts`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/source.ts) (nguồn dữ liệu, nơi sẽ thêm lớp gọi API) |
| **Test** | [`fe/tests/e2e/app.spec.ts`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/e2e/app.spec.ts) (test chỉ gọi mạng tới origin của app, sẽ phải nới) |
| **Nếu đổi thì sửa** | Thêm khu vực spec mới (ví dụ S10 Chia sẻ) có `spec.md` và `acceptance.md`; sửa DATA-10 và QD-03; thêm mũi tên vào [`docs/new/navigation.md`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/new/navigation.md). |
| **Mục nghiệm thu kiểm lại** | DATA-AC13, G-AC04 |

### A2. Chọn trình độ bắt đầu (DATA-11)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Với Global English (6 trình độ A1 đến C2), người học có được chọn trình độ bắt đầu không? Nếu có: chọn ở S1 ngay sau khi chọn bộ, hay ở Cài đặt, hay cả hai? Đổi trình độ giữa chừng thì lộ trình tính lại thế nào? |
| **Code đang làm** | Lộ trình đi lần lượt từ unit đầu (A1-01). |
| **Spec** | [`fe/src/data/spec.md:140`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/spec.md#L140) (câu hỏi); [`fe/src/data/spec.md:120-122`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/spec.md#L120-L122) (DATA-11); [`docs/new/ui-spec.md:81`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/new/ui-spec.md#L81) (câu hỏi 4) |
| **Code liên quan** | [`fe/src/data/path.ts:13-22`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/path.ts#L13-L22) (`nextUnitIndex`, `nextItemId`); [`fe/src/pages/S1-chon-ngon-ngu/S1ChonNgonNgu.tsx:63`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S1-chon-ngon-ngu/S1ChonNgonNgu.tsx#L63) (bước chọn bộ); [`fe/src/data/progress.ts:53-63`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/progress.ts#L53-L63) (Settings, nơi lưu trình độ) |
| **Test** | [`fe/tests/unit/data.test.ts`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/data.test.ts) (lộ trình, DATA-AC14); [`fe/tests/unit/app.test.tsx`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/app.test.tsx) (S1) |
| **Nếu đổi thì sửa** | Thêm trường `levelByLang` vào Settings; `nextUnitIndex` bỏ qua unit dưới trình độ đã chọn; thêm bước 3 vào S1-07 và một mục vào S8-01; cập nhật `transfer.ts` để xuất nhập trường mới. |
| **Mục nghiệm thu kiểm lại** | DATA-AC14, S1-AC07, S1-AC08, S8-AC01 |

### A3. Chế độ "Tiếng Việt (từ tiếng Anh)" (S1-07)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Bản cũ có chế độ đảo chiều: hiện câu tiếng Việt, người học nhớ câu tiếng Anh. Khách có cần chế độ này không? Nếu có, áp dụng cho bộ nào? |
| **Code đang làm** | Không có. |
| **Spec** | [`fe/src/pages/S1-chon-ngon-ngu/spec.md:89`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S1-chon-ngon-ngu/spec.md#L89) (câu hỏi); [`fe/src/pages/S1-chon-ngon-ngu/spec.md:63`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S1-chon-ngon-ngu/spec.md#L63) (S1-07) |
| **Code liên quan** | [`fe/src/data/catalog.ts:14-16`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/catalog.ts#L14-L16) (`PACKS`); [`fe/src/data/types.ts:4`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/types.ts#L4) (`PackId`); [`fe/src/components/C1-the-cau/SentenceCard.tsx:90-118`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/components/C1-the-cau/SentenceCard.tsx#L90-L118) (thứ tự nghĩa và câu gốc trên thẻ) |
| **Nếu đổi thì sửa** | Thêm một bộ ảo vào `PACKS`; thẻ câu nhận cờ đảo chiều để che nghĩa thay câu gốc; đáp án nhiễu ở S3b đổi sang chọn câu gốc. |
| **Mục nghiệm thu kiểm lại** | S1-AC07, S1-AC08, C1-AC01 đến C1-AC03, S3-AC03, S3-AC04 |

### A4. Ai duyệt thiết kế (G-05)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Ai bên khách duyệt giao diện, ở những mốc nào (sau buổi thử, trước bàn giao)? Ai được đánh dấu G-AC05? |
| **Spec** | [`docs/new/ui-spec.md:79`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/new/ui-spec.md#L79) (câu hỏi 2); [`docs/new/acceptance.md`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/new/acceptance.md) (G-AC05) |
| **Code liên quan** | Không có. Ảnh 5 màn chính nằm trong `docs/evidence/`. |

### A5. Iframe hay tab mới (APP-09)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Trang học chính mở mini app bằng iframe hay tab mới? Có truyền tham số URL, token hay postMessage không? |
| **Code đang làm** | Chạy được cả hai cách, không dùng `window.top`, không chờ token. |
| **Spec** | [`docs/new/ui-spec.md:80`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/new/ui-spec.md#L80) (câu hỏi 3); [`fe/src/app/spec.md:75-77`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/spec.md#L75-L77) (APP-09); [`docs/legacy/README.md`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/legacy/README.md) |
| **Nếu đổi thì sửa** | Chỉ phải sửa nếu khách truyền tham số mà app cần đọc (ví dụ ngôn ngữ mặc định): thêm đọc tham số trong [`fe/src/app/router.ts:20-24`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/router.ts#L20-L24). |
| **Mục nghiệm thu kiểm lại** | APP-AC12, APP-AC13 |

### A6. Xác nhận dữ liệu (DATA-09)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Khách xác nhận bằng văn bản cho dùng bộ dữ liệu trong `fe/public/data/` khi phát triển và demo. Hỏi luôn: có cho để repo công khai không? |
| **Spec** | [`fe/src/data/acceptance.md:25`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/acceptance.md#L25) (DATA-AC12, mục `[human]`) |
| **Nếu đổi thì sửa** | Người kiểm đánh `[x]` và ghi dòng bằng chứng (ngày, người gửi, nơi lưu tin nhắn) ngay dưới DATA-AC12. Nếu khách không cho công khai thì chuyển repo sang riêng tư. |

### A7. Mục pháp lý ở bản cũ 1.9.45

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Bản cũ 1.9.45 từng hiện một mục pháp lý (lần đọc 10/10 không thấy lại). Bản mới có cần mục này không, nội dung lấy ở đâu? |
| **Spec** | [`docs/legacy/README.md`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/legacy/README.md) (ghi bản cũ 1.9.40) |
| **Nếu đổi thì sửa** | Thêm một dòng vào nhóm Trợ giúp của S8-06 ([`fe/src/pages/S8-cai-dat/spec.md:45`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/spec.md#L45)). |

---

## B. Nhóm chọn phương án

### B1. Khoảng ôn và trả lời đúng không gợi ý (DATA-07)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | (1) Giữ khoảng ôn 1, 3, 7, 14, 30 ngày, hay theo quy tắc của bản cũ (`demo/learning-ui.js`, `demo/learning-store.js`)? (2) Trả lời đúng ở bước trắc nghiệm mà không dùng gợi ý thì giữ nguyên lịch ôn, hay cũng tăng `streak`? |
| **Code đang làm** | Khoảng 1, 3, 7, 14, 30 ngày; đúng không gợi ý thì giữ nguyên `streak` và `due`. |
| **Spec** | [`fe/src/data/spec.md:139`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/spec.md#L139) và [`fe/src/data/spec.md:141`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/spec.md#L141) (câu hỏi); [`fe/src/data/spec.md:92-102`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/spec.md#L92-L102) (DATA-07) |
| **Code** | [`fe/src/data/review.ts:7`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/review.ts#L7) (`INTERVAL_DAYS`); [`fe/src/data/review.ts:23-26`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/review.ts#L23-L26) (`applyCheck`, dòng 24 là chỗ giữ nguyên) |
| **Dữ liệu mẫu phải sinh lại** | [`scripts/make-fixtures.mjs:62`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/scripts/make-fixtures.mjs#L62) và [`scripts/make-fixtures.mjs:125`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/scripts/make-fixtures.mjs#L125) (bản sao của khoảng ôn); [`fe/fixtures/progress/README.md:58`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/fixtures/progress/README.md#L58); [`fe/fixtures/progress/fluency-en-30-ngay.so-lieu.json`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/fixtures/progress/fluency-en-30-ngay.so-lieu.json) (số liệu tính tay) |
| **Test** | [`fe/tests/unit/data.test.ts:135-143`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/data.test.ts#L135-L143) |
| **Nếu đổi thì sửa** | Đổi mảng ở cả `review.ts:7` và `make-fixtures.mjs:62` (nên cho script import từ một chỗ); chạy `node scripts/make-fixtures.mjs`; tính tay lại số liệu T4 trong `so-lieu.json`. Lưu ý: chốt trước khi ra mắt, vì lịch ôn đã lưu trên máy người học tính theo quy tắc cũ. |
| **Mục nghiệm thu kiểm lại** | DATA-AC08, DATA-AC09, T4-AC02, T4-AC06 |

### B2. Câu báo lỗi nhập file (S8-05, FND-12)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Câu hiện tại "File không phải tiến độ VITASR hoặc của ngôn ngữ khác." chưa nói cần làm gì, trái FND-12. Duyệt câu thêm: "Chọn file đã xuất từ Cài đặt khi đang học ngôn ngữ này." Nhân tiện xác nhận: chữ "file" ở đây có được dùng không, vì bảng "Không dùng" của FND-12 có "File" (bảng đó nói về cách gọi câu học, nhưng người rà FND-AC12 nên chốt luôn). |
| **Code đang làm** | Giữ đúng chữ trong spec, chờ duyệt. Đây là mục duy nhất làm FND-AC12 chưa đạt. |
| **Spec** | [`fe/src/pages/S8-cai-dat/spec.md:52`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/spec.md#L52) (câu hỏi); [`fe/src/pages/S8-cai-dat/spec.md:38-43`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/spec.md#L38-L43) (S8-05); [`fe/src/foundation/spec.md:89-101`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/foundation/spec.md#L89-L101) (FND-12, bảng từ) |
| **Code** | [`fe/src/pages/S8-cai-dat/S8CaiDat.tsx:96`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/S8CaiDat.tsx#L96) |
| **Test** | [`fe/tests/unit/s8.test.tsx:174`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/s8.test.tsx#L174) |
| **Nếu đổi thì sửa** | Sửa chuỗi ở 3 chỗ: spec S8-05, `S8CaiDat.tsx:96`, `s8.test.tsx:174`. |
| **Mục nghiệm thu kiểm lại** | S8-AC06, FND-AC12 ([`fe/src/foundation/acceptance.md:24`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/foundation/acceptance.md#L24)) |

Hai điểm khác của S8-05 chỉ cần xác nhận ([`fe/src/pages/S8-cai-dat/spec.md:53-54`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/spec.md#L53-L54)): chỉ nhận file đúng cả ngôn ngữ lẫn bộ nội dung ([`fe/src/data/transfer.ts:70`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/transfer.ts#L70)), và tên nút trong sheet nhập, xóa (`S8CaiDat.tsx:100-140`).

### B3. "Theo thiết bị" hay "Theo hệ thống" (S8-04, FND-03)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Chọn một tên cho lựa chọn giao diện tự động, dùng chung ở S8-04 và FND-03. |
| **Code đang làm** | "Theo thiết bị". |
| **Spec** | [`fe/src/pages/S8-cai-dat/spec.md:51`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/spec.md#L51) (câu hỏi); [`fe/src/pages/S8-cai-dat/spec.md:34-36`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/spec.md#L34-L36) (S8-04); [`fe/src/foundation/spec.md:38-40`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/foundation/spec.md#L38-L40) (FND-03) |
| **Code** | [`fe/src/pages/S8-cai-dat/S8CaiDat.tsx:18`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/S8CaiDat.tsx#L18) |
| **Nếu đổi thì sửa** | Nếu chọn "Theo thiết bị": chỉ sửa chữ trong FND-03. Nếu chọn "Theo hệ thống": sửa S8-04 và `S8CaiDat.tsx:18`. Không có test nào so chuỗi này. |
| **Mục nghiệm thu kiểm lại** | S8-AC05, FND-AC04 |

### B4. "7 ngày tới" gộp hay tách (T4-05)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Dòng "7 ngày tới" có tính cả số câu của "Ngày mai" không? Người học dễ cộng nhầm nếu gộp. |
| **Code đang làm** | Gộp: từ ngày mai tới hết ngày thứ 7 (tiến độ mẫu: Ngày mai 5, 7 ngày tới 19). |
| **Spec** | [`fe/src/pages/T4-tien-bo/spec.md:80`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/spec.md#L80) (câu hỏi); [`fe/src/pages/T4-tien-bo/spec.md:62-64`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/spec.md#L62-L64) (T4-05) |
| **Code** | [`fe/src/data/stats.ts:78-93`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/stats.ts#L78-L93) (dòng 91 là điều kiện gộp); hiển thị ở [`fe/src/pages/T4-tien-bo/T4TienBo.tsx:150-172`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/T4TienBo.tsx#L150-L172) |
| **Dữ liệu mẫu và test** | [`fe/fixtures/progress/fluency-en-30-ngay.so-lieu.json:9`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/fixtures/progress/fluency-en-30-ngay.so-lieu.json#L9) (`next7: 19`); [`fe/tests/unit/t2-t4.test.tsx:190-193`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/t2-t4.test.tsx#L190-L193) |
| **Nếu đổi thì sửa** | Tách: đổi `stats.ts:91` thành `s.due > endTomorrow && s.due <= end7`, sửa chú thích dòng 79, tính lại `next7` trong `so-lieu.json`. Có thể đổi nhãn thành "2 đến 7 ngày tới" cho rõ. |
| **Mục nghiệm thu kiểm lại** | T4-AC06, T4-AC10 (buổi thử người học) |

### B5. Biểu đồ T4: màu cột hôm nay và cột hẹp (T4-04)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | (1) Cột hôm nay tô `--brand` theo T4-04, nhưng FND-02 chỉ cho `--brand` ở nút chính và ô đang học. Giữ làm ngoại lệ (ghi vào FND-02) hay đổi màu khác (ví dụ `--ink` đậm 100%)? (2) Khoảng 30 ngày ở 320 px mỗi cột chỉ khoảng 9 px, nhỏ hơn vùng chạm 44 px. Có cần cách khác để mở chi tiết ngày (ví dụ danh sách ngày bên dưới biểu đồ) không? |
| **Code đang làm** | Theo T4-04; ngày không học là một chấm, không chạm được. |
| **Spec** | [`fe/src/pages/T4-tien-bo/spec.md:81-82`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/spec.md#L81-L82) (câu hỏi); [`fe/src/pages/T4-tien-bo/spec.md:58-60`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/spec.md#L58-L60) (T4-04); [`fe/src/foundation/spec.md:34-36`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/foundation/spec.md#L34-L36) (FND-02) |
| **Code** | [`fe/src/pages/T4-tien-bo/t4.css:35-38`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/t4.css#L35-L38) (dòng 37 tô màu cột hôm nay); [`fe/src/pages/T4-tien-bo/T4TienBo.tsx:205-222`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/T4TienBo.tsx#L205-L222) (cột chạm được, chấm không chạm được) |
| **Test** | [`fe/tests/unit/t2-t4.test.tsx:177`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/t2-t4.test.tsx#L177) (kiểm cột hôm nay có class `is-today`) |
| **Nếu đổi thì sửa** | Đổi màu: chỉ sửa `t4.css:37`. Thêm cách mở chi tiết ngày: thêm phần tử mới trong `T4TienBo.tsx` sau biểu đồ, kèm yêu cầu mới trong T4-04 hoặc T4-07. |
| **Mục nghiệm thu kiểm lại** | T4-AC04, T4-AC05, FND-AC03 |

### B6. Lớp nền sau sheet ở chế độ tối (C6-01)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Lớp nền dùng `--ink` độ mờ 40%; ở chế độ tối `--ink` là màu sáng nên màn phía sau bị bạc đi thay vì tối lại. Có dùng token riêng cho chế độ tối (ví dụ đen độ mờ 50%) không? |
| **Code đang làm** | Như spec. |
| **Spec** | [`fe/src/components/C6-sheet/spec.md:33`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/components/C6-sheet/spec.md#L33) (câu hỏi); [`fe/src/components/C6-sheet/spec.md:15-17`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/components/C6-sheet/spec.md#L15-L17) (C6-01); [`fe/src/foundation/spec.md:18`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/foundation/spec.md#L18) (FND-01 bảng token) |
| **Code** | [`fe/src/foundation/tokens.css:18`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/foundation/tokens.css#L18) (sáng), [`fe/src/foundation/tokens.css:62`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/foundation/tokens.css#L62) (tối khi chọn Tối), [`fe/src/foundation/tokens.css:80`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/foundation/tokens.css#L80) (tối theo thiết bị); dùng ở [`fe/src/components/C6-sheet/sheet.css:3`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/components/C6-sheet/sheet.css#L3) và [`fe/src/pages/S9-huong-dan/s9.css:3`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S9-huong-dan/s9.css#L3) |
| **Nếu đổi thì sửa** | Chỉ sửa giá trị `--scrim` ở [`fe/src/foundation/tokens.css:62`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/foundation/tokens.css#L62) và [`:80`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/foundation/tokens.css#L80) (ví dụ `rgb(0 0 0 / 0.5)`), thêm dòng `--scrim` vào bảng FND-01. Chụp lại ảnh bằng chứng (`npm run evidence`). |
| **Mục nghiệm thu kiểm lại** | C6-AC01, S9-AC02, FND-AC01 |

### B7. Nghe nghĩa tiếng Việt (S8-02)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Giọng tiếng Việt chọn và lưu được ở S8 nhưng chưa màn nào đọc nghĩa. Có thêm nút nghe nghĩa ở thẻ câu không? Nếu không, có bỏ lựa chọn "Giọng cho: Tiếng Việt" ở S8 cho gọn không? |
| **Code đang làm** | Lưu lựa chọn, chưa dùng. |
| **Spec** | [`fe/src/pages/S8-cai-dat/spec.md:55`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/spec.md#L55) (câu hỏi); [`fe/src/pages/S8-cai-dat/spec.md:21-28`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/spec.md#L21-L28) (S8-02); [`fe/src/components/C1-the-cau/spec.md`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/components/C1-the-cau/spec.md) (C1-01, C1-04 nếu thêm nút) |
| **Code** | [`fe/src/pages/S8-cai-dat/S8CaiDat.tsx:329-357`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/S8CaiDat.tsx#L329-L357) (sheet Giọng đọc, lựa chọn Tiếng Việt); [`fe/src/components/C1-the-cau/SentenceCard.tsx:90`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/components/C1-the-cau/SentenceCard.tsx#L90) (dòng nghĩa); [`fe/src/components/C1-the-cau/useSpeaker.ts`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/components/C1-the-cau/useSpeaker.ts) (hàm đọc) |
| **Nếu đổi thì sửa** | Thêm nút: thêm yêu cầu C1-09, nút cạnh dòng nghĩa gọi `useSpeaker` với `lang="vi"`. Bỏ lựa chọn: xóa phần `['lang', 'vi']` ở `S8CaiDat.tsx:354`. |
| **Mục nghiệm thu kiểm lại** | S8-AC02, S8-AC03, C1-AC01, C1-AC04 |

---

## C. Nhóm xác nhận cách code đang làm

Đồng ý thì chỉ cần ghi vào spec (bước 1 ở đầu file). Không đồng ý thì sửa theo cột cuối.

### C1. Phiên nào tính vào mục tiêu tuần (T1-03)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Mục tiêu tuần đếm mọi loại phiên đã xong (lộ trình, ôn tập, từ khóa, một câu, kiểm tra nhanh) và không đếm phiên bị dừng. Có loại nào không nên tính, ví dụ phiên "Một câu" từ T3 chỉ có vài câu? |
| **Spec** | [`fe/src/pages/T1-hoc/spec.md:101`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T1-hoc/spec.md#L101) (câu hỏi); [`fe/src/pages/T1-hoc/spec.md:79-81`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T1-hoc/spec.md#L79-L81) (T1-03) |
| **Code** | [`fe/src/data/path.ts:56-60`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/path.ts#L56-L60) (`sessionsInLast7Days`); dùng ở [`fe/src/pages/T1-hoc/T1Hoc.tsx:24`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T1-hoc/T1Hoc.tsx#L24) và [`fe/src/pages/T4-tien-bo/T4TienBo.tsx:91`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/T4TienBo.tsx#L91) |
| **Test** | [`fe/tests/unit/app.test.tsx:320-323`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/app.test.tsx#L320-L323); [`fe/tests/unit/t2-t4.test.tsx:160`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/t2-t4.test.tsx#L160) |
| **Nếu đổi thì sửa** | Thêm điều kiện lọc `s.nguon` ở `path.ts:59`; T1 và T4 cùng đổi theo. |
| **Mục nghiệm thu kiểm lại** | T1-AC04, T4-AC03 |

### C2. Nút và cách tìm của Học theo từ khóa (T2-03)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | (1) Tìm thấy dưới 8 câu thì nút vẫn ghi "Học 8 câu đầu"; có đổi thành "Học N câu" như T1-02 không? (2) Tìm theo chuỗi con nên "bus" khớp cả "busy"; có muốn khớp theo từ không? |
| **Spec** | [`fe/src/pages/T2-luyen-tap/spec.md:60-61`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T2-luyen-tap/spec.md#L60-L61) (câu hỏi); [`fe/src/pages/T2-luyen-tap/spec.md:46-48`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T2-luyen-tap/spec.md#L46-L48) (T2-03); [`fe/src/data/spec.md:124-126`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/spec.md#L124-L126) (DATA-12) |
| **Code** | [`fe/src/pages/T2-luyen-tap/T2LuyenTap.tsx:160-171`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T2-luyen-tap/T2LuyenTap.tsx#L160-L171) (nút, dòng 169 là chữ); [`fe/src/data/search.ts:21`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/search.ts#L21) (so khớp chuỗi con) |
| **Test** | [`fe/tests/unit/t2-t4.test.tsx:58`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/t2-t4.test.tsx#L58), [`fe/tests/unit/t2-t4.test.tsx:94`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/t2-t4.test.tsx#L94), [`fe/tests/unit/t2-t4.test.tsx:280`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/t2-t4.test.tsx#L280) (tìm nút theo tên "Học 8 câu đầu"); [`fe/tests/unit/data.test.ts:200-201`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/data.test.ts#L200-L201) (tìm kiếm) |
| **Nếu đổi thì sửa** | (1) Đổi chữ thành `` `Học ${Math.min(count, 8)} câu đầu` `` và sửa 3 chỗ trong test. (2) Đổi `search.ts:21` sang so khớp đầu từ; việc này đổi luôn tìm kiếm ở T3 vì dùng chung DATA-12. |
| **Mục nghiệm thu kiểm lại** | T2-AC03, T2-AC07, DATA-AC15, T3-AC03 |

### C3. Chờ nạp giọng ở bước 1 Kiểm tra nhanh (S5-03)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Trong lúc trình duyệt nạp danh sách giọng (tối đa 1,5 giây), bước 1 chưa hiện nút "Nghe lại" lẫn chữ câu gốc. Chấp nhận khoảng trống này, hay hiện khung xương trong lúc chờ? |
| **Spec** | [`fe/src/pages/S5-kiem-tra-nhanh/spec.md:70`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/spec.md#L70) (câu hỏi); [`fe/src/pages/S5-kiem-tra-nhanh/spec.md:41-43`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/spec.md#L41-L43) (S5-03) |
| **Code** | [`fe/src/app/speech.ts:28`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/speech.ts#L28) (mốc 1500 ms); [`fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:365-383`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx#L365-L383) (`voicesReady`, `noVoice`, `showText`) |
| **Test** | [`fe/tests/unit/s5.test.tsx:115`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/s5.test.tsx#L115) |
| **Nếu đổi thì sửa** | Thêm nhánh `!voicesReady` hiện khung xương ở `S5KiemTra.tsx:383`; giảm mốc chờ ở `speech.ts:28` nếu muốn. |
| **Mục nghiệm thu kiểm lại** | S5-AC03, S5-AC09 |

### C4. Loại lượt cho bước Nghe theo cụm (S5-04)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Bước Nghe theo cụm chưa có loại lượt riêng, nên làm "Chỉ nghe theo cụm" tạo phiên hoàn tất không có lượt nào: T4 đếm phiên này nhưng không đếm câu nào là đã học. Có thêm loại lượt `nghe-cum` không? |
| **Spec** | [`fe/src/pages/S5-kiem-tra-nhanh/spec.md:68`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/spec.md#L68) (câu hỏi); [`fe/src/pages/S5-kiem-tra-nhanh/spec.md:45-47`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/spec.md#L45-L47) (S5-04); [`fe/src/data/spec.md:81-90`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/spec.md#L81-L90) (DATA-06) |
| **Code** | [`fe/src/data/progress.ts:7`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/progress.ts#L7) (`AttemptKind`); [`fe/src/data/transfer.ts:34`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/transfer.ts#L34) (danh sách `KIND` khi nhập file); [`fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:108`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx#L108) (đếm `cumDone`) và [`fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:275`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx#L275) (`record`); [`fe/src/data/session.ts:37-46`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/session.ts#L37-L46) (`recordCheck`) |
| **Nếu đổi thì sửa** | Thêm `'nghe-cum'` vào `progress.ts:7` và `transfer.ts:34`; gọi ghi lượt (outcome `dung`) trong `next()` ở `S5KiemTra.tsx:108`; `stats.ts:37-41` sẽ tự đếm câu. Ghi loại lượt mới vào DATA-06. |
| **Mục nghiệm thu kiểm lại** | S5-AC04, S5-AC07, DATA-AC06, DATA-AC17, T4-AC02 |

### C5. Kết quả bước Nghe theo cụm (S5-07)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Bước này không có đúng sai. Code ghi số câu đã làm xong, ví dụ "Nghe theo cụm: 8/8". Giữ, hay đổi thành "Đã nghe 8 câu"? |
| **Spec** | [`fe/src/pages/S5-kiem-tra-nhanh/spec.md:67`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/spec.md#L67) (câu hỏi); [`fe/src/pages/S5-kiem-tra-nhanh/spec.md:57-59`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/spec.md#L57-L59) (S5-07) |
| **Code** | [`fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:236-243`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx#L236-L243) (dòng 240 tính số cho bước này) |
| **Test** | [`fe/tests/unit/s5.test.tsx:204`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/s5.test.tsx#L204) |
| **Nếu đổi thì sửa** | Đổi chuỗi ở `S5KiemTra.tsx:241` riêng cho `nghe-cum` và sửa `s5.test.tsx:204`. |
| **Mục nghiệm thu kiểm lại** | S5-AC07 |

### C6. Thoát Kiểm tra nhanh về đâu (S5-08)

**Chuyện là gì.** Đang làm Kiểm tra nhanh, người học bấm "Thoát" (hoặc Esc, hoặc Back trình duyệt), sheet "Dừng kiểm tra?" hiện ra, bấm "Dừng". Spec S5-08 chỉ ghi "như S3-07", tức là "về màn đã mở", mà không nói rõ màn nào. Code hiểu là "khu chính (tab) mở gần nhất" và lấy giá trị này lúc vào S5.

**Code chạy ra sao trong từng trường hợp.** Trong app chỉ có một lối vào S5 là mục "Kiểm tra nhanh" ở Luyện tập (T2), cộng nút "Kiểm tra unit tiếp theo" ngay trong S5. Vì vậy:

| Người học vào S5 bằng cách | Bấm Thoát rồi Dừng thì về | Bấm "Xong" ở màn kết quả thì về |
|---|---|---|
| Luyện tập, chạm "Kiểm tra nhanh" (đường bình thường) | Luyện tập | Luyện tập |
| Từ màn kết quả, bấm "Kiểm tra unit tiếp theo" | Luyện tập (vẫn nhớ tab cũ) | Luyện tập |
| Mở thẳng link `#/kiem-tra?unit=3` (bookmark, gõ URL, trang chính gửi link) | **Học (T1)** | Luyện tập |
| Đang làm thì tải lại trang (F5) rồi mới thoát | **Học (T1)** | Luyện tập |

Hai dòng in đậm là chỗ lệch: biến nhớ tab gần nhất nằm trong bộ nhớ trang ([`fe/src/app/router.ts:48-50`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/router.ts#L48-L50)), tải lại trang là mất, nên rơi về giá trị mặc định là màn Học. Khi đó nút "Thoát" và nút "Xong" của cùng một màn dẫn về hai nơi khác nhau. Sơ đồ điều hướng ([`docs/new/navigation.md:158-160`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/docs/new/navigation.md#L158-L160)) thì ghi cả hai đều về Luyện tập.

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Bấm Thoát rồi Dừng ở Kiểm tra nhanh thì về đâu? Chọn một: **(a)** luôn về Luyện tập, giống nút "Xong" và giống sơ đồ điều hướng; **(b)** giữ như code: về khu chính mở gần nhất, mở thẳng link thì về Học; **(c)** lùi một bước lịch sử trình duyệt như nút Back (mở thẳng link thì có thể ra khỏi app hoặc về trang chính). |
| **Đề xuất** | (a). Lối vào S5 chỉ có ở Luyện tập, nên về Luyện tập là đúng trong mọi trường hợp; khớp với "Xong" và với `navigation.md`; sửa ít nhất. (c) rủi ro nhất vì app có thể nằm trong iframe của trang học chính. |
| **Spec** | [`fe/src/pages/S5-kiem-tra-nhanh/spec.md:69`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/spec.md#L69) (câu hỏi); [`fe/src/pages/S5-kiem-tra-nhanh/spec.md:61-63`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/spec.md#L61-L63) (S5-08, nơi ghi câu trả lời: thay "Như S3-07" bằng màn đích cụ thể) |
| **Code** | [`fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:62`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx#L62) (lấy `lastMainRoute()` lúc vào S5); [`fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:120-123`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx#L120-L123) (`leave`, chạy khi bấm Dừng); [`fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:264`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx#L264) (nút "Xong", cố định về Luyện tập); [`fe/src/app/router.ts:48-50`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/router.ts#L48-L50) và [`fe/src/app/router.ts:108-110`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/router.ts#L108-L110) (biến nhớ tab gần nhất và chỗ cập nhật) |
| **Test hiện có** | [`fe/tests/unit/s5.test.tsx:237-254`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/s5.test.tsx#L237-L254): chỉ thử đường bình thường (vào từ `#/luyen-tap`), nên vẫn đạt với cả (a) lẫn (b); chưa có test cho trường hợp mở thẳng link. |
| **Nếu chọn (a) thì sửa** | Ở [`fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:122`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx#L122) đổi `navigate(origin.current.name, origin.current.params)` thành `navigate('luyen-tap')`; bỏ `origin` ở dòng 62 nếu không dùng nữa. Thêm test: mở thẳng `#/kiem-tra?unit=1`, Thoát, Dừng, kiểm `hash()` là `#/luyen-tap`. |
| **Nếu chọn (b)** | Không sửa code; chỉ ghi vào S5-08 "về khu chính mở gần nhất, mặc định là Học", và sửa dòng 158 của `navigation.md` cho khớp. |
| **Mục nghiệm thu kiểm lại** | S5-AC08 |

### C7. Bộ lọc Thư viện (T3-03)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | (1) Chỉ Unit và từ khóa giữ trong route; Trạng thái, Chủ đề, Trình độ mất khi tải lại trang. Có cần giữ cả ba không? (2) Danh sách chọn của bộ lọc mở bằng sheet. (3) Bộ lọc Trình độ chỉ liệt kê trình độ có trong dữ liệu. |
| **Spec** | [`fe/src/pages/T3-thu-vien/spec.md:84-86`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T3-thu-vien/spec.md#L84-L86) (câu hỏi); [`fe/src/pages/T3-thu-vien/spec.md:62-64`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T3-thu-vien/spec.md#L62-L64) (T3-03) |
| **Code** | [`fe/src/pages/T3-thu-vien/T3ThuVien.tsx:47-51`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T3-thu-vien/T3ThuVien.tsx#L47-L51) (unit đọc từ route, ba bộ lọc kia là state), [`fe/src/pages/T3-thu-vien/T3ThuVien.tsx:72`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T3-thu-vien/T3ThuVien.tsx#L72) (`setUnit` ghi route), [`fe/src/pages/T3-thu-vien/T3ThuVien.tsx:136-206`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T3-thu-vien/T3ThuVien.tsx#L136-L206) (các sheet chọn); [`fe/src/pages/T3-thu-vien/filter.ts:61-63`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T3-thu-vien/filter.ts#L61-L63) (`levelsIn`) |
| **Test** | [`fe/tests/unit/t3.test.tsx`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/t3.test.tsx); [`fe/tests/unit/t2-t4.test.tsx:262`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/t2-t4.test.tsx#L262) |
| **Nếu đổi thì sửa** | Giữ trong route: đổi 3 `useState` ở dòng 48-50 thành đọc `params.trang-thai`, `params.chu-de`, `params.trinh-do` như cách làm với `unit`, và ghi route khi chọn; thêm tham số vào bảng route APP-04 ([`fe/src/app/spec.md:28-43`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/spec.md#L28-L43)). |
| **Mục nghiệm thu kiểm lại** | T3-AC04, T3-AC09, T3-AC10, APP-AC05 |

### C8. "Chưa có phiên nào" (T4-08)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Code hiểu là chưa từng hoàn tất phiên nào. Khi đã có phiên nhưng khoảng đang chọn không có, màn vẫn hiện chỉ số bằng 0 và ẩn mục "Các phiên". Đúng ý chưa? |
| **Spec** | [`fe/src/pages/T4-tien-bo/spec.md:83`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/spec.md#L83) (câu hỏi); [`fe/src/pages/T4-tien-bo/spec.md:74-76`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/spec.md#L74-L76) (T4-08) |
| **Code** | [`fe/src/data/stats.ts:97`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/stats.ts#L97) (`hasCompletedSession`); [`fe/src/pages/T4-tien-bo/T4TienBo.tsx:75-87`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/T4TienBo.tsx#L75-L87) (trạng thái trống), [`fe/src/pages/T4-tien-bo/T4TienBo.tsx:174`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/T4-tien-bo/T4TienBo.tsx#L174) (ẩn "Các phiên") |
| **Test** | [`fe/tests/unit/t2-t4.test.tsx:237`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/t2-t4.test.tsx#L237) |
| **Mục nghiệm thu kiểm lại** | T4-AC09 |

### C9. Thanh trên cùng ở Cài đặt (S8-06)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Ở S8 thanh trên cùng chỉ có nút "Quay lại" bên trái, bỏ tên ngôn ngữ và nút Cài đặt. Được không? |
| **Spec** | [`fe/src/pages/S8-cai-dat/spec.md:56`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/spec.md#L56) (câu hỏi); [`fe/src/app/spec.md:20-22`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/spec.md#L20-L22) (APP-02, nơi nên ghi câu trả lời) |
| **Code** | [`fe/src/app/TopBar.tsx:12-21`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/TopBar.tsx#L12-L21); gọi ở [`fe/src/app/App.tsx:132`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/App.tsx#L132) |
| **Test** | [`fe/tests/unit/s8.test.tsx:210-218`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/s8.test.tsx#L210-L218) |
| **Mục nghiệm thu kiểm lại** | APP-AC03, S8-AC08 |

### C10. Cập nhật bản mới và font ngoại tuyến (APP-10)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Service worker tự kích hoạt bản mới, trang đang mở chỉ tải lại khi bấm "Cập nhật". Font Noto (tiếng Nhật, Thái...) chỉ có khi ngoại tuyến từ lần mở có mạng thứ hai; tắt mạng ngay sau lần đầu thì dùng font sẵn có của máy. Chấp nhận được không, hay phải lưu sẵn font Noto ngay lần đầu (tăng dung lượng tải lần đầu)? |
| **Spec** | [`fe/src/app/spec.md:89`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/spec.md#L89) (câu hỏi); [`fe/src/app/spec.md:79-81`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/spec.md#L79-L81) (APP-10) |
| **Code** | [`fe/src/app/sw.js:3-5`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/sw.js#L3-L5) (chiến lược lưu), [`fe/src/app/sw.js:17-18`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/sw.js#L17-L18) (`skipWaiting`), [`fe/src/app/sw.js:27`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/sw.js#L27) (`clients.claim`); [`fe/src/app/updates.ts:23`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/app/updates.ts#L23) (tải lại khi bấm) |
| **Test** | [`fe/tests/e2e/dot2.spec.ts:118-143`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/e2e/dot2.spec.ts#L118-L143) (tắt mạng rồi tải lại); [`fe/tests/unit/s8.test.tsx:251-275`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/s8.test.tsx#L251-L275) (thông báo cập nhật) |
| **Nếu đổi thì sửa** | Lưu sẵn font Noto: thêm font của ngôn ngữ đang học vào bước lưu dữ liệu ở lần mở đầu trong `sw.js`. |
| **Mục nghiệm thu kiểm lại** | APP-AC14, APP-AC15 |

### C11. Liên kết "Cài đặt > Giọng đọc" (C1-05)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Liên kết nằm trong dòng chữ nên thấp hơn vùng chạm 44 px của FND-14 (WCAG cho phép ngoại lệ với liên kết trong đoạn văn). Giữ, hay đổi thành nút riêng dưới dòng chữ? |
| **Spec** | [`fe/src/components/C1-the-cau/spec.md:66`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/components/C1-the-cau/spec.md#L66) (câu hỏi); [`fe/src/components/C1-the-cau/spec.md:48-50`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/components/C1-the-cau/spec.md#L48-L50) (C1-05) |
| **Code** | [`fe/src/components/C1-the-cau/SentenceCard.tsx:144-160`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/components/C1-the-cau/SentenceCard.tsx#L144-L160) (`NoVoice`); [`fe/src/components/C1-the-cau/card.css:35`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/components/C1-the-cau/card.css#L35) (`.card__link`, `min-height: 0`) |
| **Test** | [`fe/tests/unit/components.test.tsx:78-79`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/tests/unit/components.test.tsx#L78-L79) |
| **Nếu đổi thì sửa** | Tách nút ra khỏi `<p>` trong `SentenceCard.tsx:147-159`, dùng `Button variant="secondary"`; bỏ `.card__link`. Test tìm nút theo tên nên vẫn chạy. |
| **Mục nghiệm thu kiểm lại** | C1-AC06, FND-AC15 |

### C12. Các trường lưu thêm (DATA-06)

| | |
|---|---|
| **Câu hỏi cần làm rõ** | Code lưu thêm: Session có `step`, `abandonedAt`, `params`; trạng thái câu `status` là `da-hoc` hoặc `kiem-tra`; mốc thời gian là số mili giây. Đồng ý ghi các điểm này vào DATA-06? Cần chốt trước khi ra mắt vì đây là định dạng dữ liệu trên máy người học và trong file xuất. |
| **Spec** | [`fe/src/data/spec.md:142`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/spec.md#L142) (câu hỏi); [`fe/src/data/spec.md:81-90`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/spec.md#L81-L90) (DATA-06) |
| **Code** | [`fe/src/data/progress.ts:6-49`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/progress.ts#L6-L49) (kiểu dữ liệu); [`fe/src/data/transfer.ts:34`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/transfer.ts#L34), [`fe/src/data/transfer.ts:51-54`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/data/transfer.ts#L51-L54) (kiểm tra khi nhập file) |
| **Nếu đổi thì sửa** | Đồng ý: chỉ chép kiểu dữ liệu từ `progress.ts` vào DATA-06. Không đồng ý: phải sửa cả S3-08 (phiên dở) vì dùng `step` và `abandonedAt`. |
| **Mục nghiệm thu kiểm lại** | DATA-AC06, DATA-AC07, DATA-AC17 |

---

## D. Hai mục phạm vi còn lại

| STT | Mục | Câu hỏi cần làm rõ | Vị trí | Ghi chú |
|---|---|---|---|---|
| D1 | Đọc nghĩa tiếng Việt thành tiếng | Gộp với B7 | Như B7 | |
| D2 | Gói âm thanh ngoại tuyến (S8-03) | Để bản sau được không? | [`fe/src/pages/S8-cai-dat/spec.md:30-32`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/fe/src/pages/S8-cai-dat/spec.md#L30-L32); dữ liệu gói tiếng Lào trong `fe/public/data/` | Mục đang ẩn với mọi ngôn ngữ, không cần sửa code nếu để bản sau |

## Việc kỹ thuật không cần hỏi ai

| Việc | Vị trí | Sửa |
|---|---|---|
| Ghim Ubuntu cho CI trước 19/10 | [`.github/workflows/ci.yml:11`](https://github.com/nguyendinhdat2207/dangonngu/blob/ec1d2f2/.github/workflows/ci.yml#L11) | `runs-on: ubuntu-latest` thành `runs-on: ubuntu-24.04` |
| Dòng bằng chứng "chưa commit (đợt 2)" | 14 file `acceptance.md` (T2, T3, T4, S5, S8, S9, APP, DATA, FND, C4 đến C7, G) | Thay bằng `757a784` (tìm bằng `grep -rn "chưa commit (đợt 2)" fe/src docs`) |
