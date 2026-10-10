# Ma trận truy vết spec, code và acceptance

File sinh tự động bởi `node scripts/spec.mjs trace` lúc 2026-10-10 06:36 UTC. Không sửa tay.

Tổng: 134 yêu cầu, 170 mục acceptance, 414 ghi chú @spec/@ac trong code.

Yêu cầu chưa có code gắn @spec: 10/134.

## G Tổng quan giao diện bản mới

Spec: [docs/new/ui-spec.md](../../docs/new/ui-spec.md) · Acceptance: [docs/new/acceptance.md](../../docs/new/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| G-01 | Giao diện dễ hiểu dễ nhìn để sử dụng | G-AC01 | - | - | - |
| G-02 | Hiểu được tiến bộ của mình | G-AC02 | - | - | - |
| G-03 | Không nhầm thao tác đánh giá | G-AC03 | - | - | - |
| G-04 | Gọn hơn bản cũ | G-AC04 | - | - | - |
| G-05 | Không mang dấu hiệu giao diện do AI dựng mặc định | G-AC05 | - | - | - |

## APP Khung app

Spec: [fe/src/app/spec.md](../../fe/src/app/spec.md) · Acceptance: [fe/src/app/acceptance.md](../../fe/src/app/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| APP-01 | Bốn khu chính | APP-AC01, APP-AC02 | docs/new/navigation.md:106<br>docs/new/navigation.md:280<br>docs/new/navigation.md:282<br>docs/new/navigation.md:284 | fe/src/app/App.tsx:1<br>fe/src/app/app.css:1<br>fe/src/components/C5-thanh-tab/TabBar.tsx:1 | fe/tests/e2e/app.spec.ts:108 |
| APP-02 | Thanh trên cùng | APP-AC03, APP-AC17 | docs/new/navigation.md:36<br>docs/new/navigation.md:114<br>docs/new/navigation.md:116<br>docs/new/navigation.md:272<br>docs/new/navigation.md:274 | fe/src/app/TopBar.tsx:1<br>fe/src/app/app.css:1 | fe/tests/unit/app.test.tsx:162 |
| APP-03 | Màn toàn trang | APP-AC04 | docs/new/navigation.md:34 | fe/src/app/App.tsx:1<br>fe/src/app/app.css:1<br>fe/src/pages/S3-phien-hoc/s3.css:1<br>fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:1<br>fe/src/pages/S5-kiem-tra-nhanh/s5.css:1 | fe/tests/unit/app.test.tsx:122 |
| APP-04 | Bảng route | APP-AC02, APP-AC05 | docs/new/navigation.md:36<br>docs/new/navigation.md:525 | fe/src/app/App.tsx:1<br>fe/src/app/router.ts:1 | fe/tests/e2e/app.spec.ts:108<br>fe/tests/e2e/app.spec.ts:124<br>fe/tests/unit/app.test.tsx:139 |
| APP-05 | Khởi động | APP-AC06, APP-AC07 | docs/new/navigation.md:20<br>docs/new/navigation.md:22<br>docs/new/navigation.md:48<br>docs/new/navigation.md:50<br>docs/new/navigation.md:56<br>docs/new/navigation.md:58<br>docs/new/navigation.md:70<br>docs/new/navigation.md:72<br>docs/new/navigation.md:94<br>docs/new/navigation.md:102 | fe/src/app/App.tsx:1<br>fe/src/app/state.tsx:1 | fe/tests/unit/app.test.tsx:148 |
| APP-06 | Sheet Đổi ngôn ngữ | APP-AC08, APP-AC17 | docs/new/navigation.md:114<br>docs/new/navigation.md:272<br>docs/new/navigation.md:286 | fe/src/app/LanguageList.tsx:1<br>fe/src/app/TopBar.tsx:1<br>fe/src/app/state.tsx:1<br>fe/src/app/useLanguageSheet.tsx:1 | fe/tests/unit/app.test.tsx:162 |
| APP-07 | Bố cục theo khổ màn hình | APP-AC09, APP-AC13 | - | fe/src/app/App.tsx:1<br>fe/src/app/app.css:1<br>fe/src/pages/S3-phien-hoc/s3.css:1<br>fe/src/pages/S5-kiem-tra-nhanh/s5.css:1<br>fe/src/pages/T3-thu-vien/t3.css:1 | - |
| APP-08 | Trạng thái toàn cục | APP-AC07, APP-AC10, APP-AC11 | docs/new/navigation.md:52<br>docs/new/navigation.md:54<br>docs/new/navigation.md:74 | fe/src/app/App.tsx:1<br>fe/src/app/States.tsx:1<br>fe/src/app/app.css:1<br>fe/src/app/state.tsx:1<br>fe/src/data/storage.ts:1 | fe/tests/unit/app.test.tsx:186<br>fe/tests/unit/app.test.tsx:197<br>fe/tests/unit/app.test.tsx:206 |
| APP-09 | Chạy trong iframe | APP-AC12, APP-AC13 | - | fe/src/app/App.tsx:1<br>fe/src/app/app.css:1 | - |
| APP-10 | Ngoại tuyến và cập nhật | APP-AC14, APP-AC15 | - | fe/src/app/App.tsx:1<br>fe/src/app/sw.js:1<br>fe/src/app/updates.ts:1<br>fe/src/data/source.ts:1<br>fe/src/main.tsx:1 | fe/tests/unit/s8.test.tsx:238<br>fe/tests/unit/s8.test.tsx:265<br>fe/tests/unit/s8.test.tsx:299 |
| APP-11 | Một lớp phủ tại một thời điểm | APP-AC16 | docs/new/navigation.md:38 | fe/src/components/C6-sheet/SheetHost.tsx:1<br>fe/src/pages/S9-huong-dan/S9HuongDan.tsx:1 | fe/tests/unit/s8.test.tsx:282<br>fe/tests/unit/t3.test.tsx:171 |

## FND Nền tảng thiết kế

Spec: [fe/src/foundation/spec.md](../../fe/src/foundation/spec.md) · Acceptance: [fe/src/foundation/acceptance.md](../../fe/src/foundation/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| FND-01 | Token màu | FND-AC01, FND-AC02 | - | fe/src/foundation/tokens.css:1 | fe/tests/unit/foundation.test.ts:40<br>fe/tests/unit/foundation.test.ts:53 |
| FND-02 | Quy tắc dùng màu | FND-AC02, FND-AC03 | - | - | fe/tests/unit/foundation.test.ts:53 |
| FND-03 | Sáng và tối | FND-AC04 | - | fe/index.html:7<br>fe/src/app/state.tsx:1<br>fe/src/foundation/tokens.css:1 | fe/tests/e2e/app.spec.ts:70 |
| FND-04 | Font | FND-AC05 | - | fe/src/foundation/base.css:1<br>fe/src/foundation/fonts.ts:1 | - |
| FND-05 | Thang chữ | FND-AC06 | - | fe/src/foundation/base.css:1<br>fe/src/foundation/tokens.css:1 | fe/tests/unit/foundation.test.ts:86 |
| FND-06 | Cỡ câu theo độ dài | FND-AC07 | - | fe/src/foundation/typography.ts:1 | fe/tests/unit/foundation.test.ts:97 |
| FND-07 | Khoảng cách và lề | FND-AC08 | - | fe/src/foundation/base.css:1<br>fe/src/foundation/tokens.css:1 | - |
| FND-08 | Bo góc theo vai trò | FND-AC08 | - | fe/src/foundation/tokens.css:1 | - |
| FND-09 | Đổ bóng | FND-AC08 | - | fe/src/foundation/tokens.css:1 | - |
| FND-10 | Icon | FND-AC09 | - | - | - |
| FND-11 | Chuyển động | FND-AC10, FND-AC11 | - | fe/src/foundation/base.css:1<br>fe/src/foundation/tokens.css:1 | fe/tests/e2e/app.spec.ts:93 |
| FND-12 | Giọng văn và từ ngữ | FND-AC12, FND-AC13 | - | - | - |
| FND-13 | Quy tắc tránh giao diện kiểu AI | FND-AC14 | - | - | - |
| FND-14 | Trợ năng chung | FND-AC15, FND-AC16, FND-AC17 | - | fe/src/foundation/base.css:1 | fe/tests/e2e/app.spec.ts:156<br>fe/tests/e2e/dot2.spec.ts:25 |

## DATA Dữ liệu và tiến độ

Spec: [fe/src/data/spec.md](../../fe/src/data/spec.md) · Acceptance: [fe/src/data/acceptance.md](../../fe/src/data/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| DATA-01 | Manifest | DATA-AC01, DATA-AC16, DATA-AC19 | - | fe/src/data/catalog.ts:1<br>fe/src/data/contract.ts:1<br>fe/src/data/types.ts:1 | fe/tests/unit/data.test.ts:41<br>fe/tests/unit/data.test.ts:86<br>fe/tests/unit/data.test.ts:100 |
| DATA-02 | File ngôn ngữ | DATA-AC01, DATA-AC02, DATA-AC19 | - | fe/src/data/contract.ts:1<br>fe/src/data/types.ts:1 | fe/tests/unit/app.test.tsx:225<br>fe/tests/unit/data.test.ts:41<br>fe/tests/unit/data.test.ts:63<br>fe/tests/unit/data.test.ts:100 |
| DATA-03 | File unit | DATA-AC01, DATA-AC03, DATA-AC16, DATA-AC19 | - | fe/src/data/contract.ts:1<br>fe/src/data/types.ts:1 | fe/tests/unit/data.test.ts:41<br>fe/tests/unit/data.test.ts:74<br>fe/tests/unit/data.test.ts:86<br>fe/tests/unit/data.test.ts:100 |
| DATA-04 | Trường tùy chọn | DATA-AC04, DATA-AC18 | - | fe/src/data/contract.ts:1<br>fe/src/data/types.ts:1<br>fe/src/pages/T3-thu-vien/T3ThuVien.tsx:1<br>fe/src/pages/T3-thu-vien/filter.ts:1 | fe/tests/unit/app.test.tsx:366<br>fe/tests/unit/components.test.tsx:83<br>fe/tests/unit/t3.test.tsx:188<br>fe/tests/unit/t3.test.tsx:203 |
| DATA-05 | Nguồn dữ liệu thay được | DATA-AC02, DATA-AC05 | docs/new/navigation.md:64 | fe/src/app/state.tsx:1<br>fe/src/data/contract.ts:1<br>fe/src/data/source.ts:1 | fe/tests/unit/app.test.tsx:225<br>fe/tests/unit/app.test.tsx:239<br>fe/tests/unit/data.test.ts:63 |
| DATA-06 | Lưu tiến độ | DATA-AC06, DATA-AC07, DATA-AC17 | - | fe/src/app/state.tsx:1<br>fe/src/data/progress.ts:1<br>fe/src/data/session.ts:1<br>fe/src/data/storage.ts:1<br>fe/src/data/transfer.ts:1 | fe/tests/unit/app.test.tsx:206<br>fe/tests/unit/data.test.ts:212<br>fe/tests/unit/s3.test.tsx:215<br>fe/tests/unit/s3.test.tsx:232 |
| DATA-07 | Quy tắc câu cần ôn | DATA-AC08, DATA-AC09 | - | fe/src/data/review.ts:1<br>fe/src/data/session.ts:1<br>fe/src/data/stats.ts:1<br>fe/src/pages/T3-thu-vien/filter.ts:1 | fe/tests/unit/app.test.tsx:326<br>fe/tests/unit/data.test.ts:134<br>fe/tests/unit/t2-t4.test.tsx:247 |
| DATA-08 | Đáp án nhiễu | DATA-AC10 | - | fe/src/data/distractors.ts:1<br>fe/src/data/text.ts:1 | fe/tests/unit/data.test.ts:167 |
| DATA-09 | Fixture | DATA-AC11, DATA-AC12 | - | - | - |
| DATA-10 | Không gọi mạng ngoài phạm vi | DATA-AC13 | - | fe/src/data/source.ts:1 | fe/tests/e2e/app.spec.ts:136<br>fe/tests/e2e/dot2.spec.ts:98 |
| DATA-11 | Lộ trình học | DATA-AC14 | - | fe/src/data/path.ts:1 | fe/tests/unit/data.test.ts:182 |
| DATA-12 | Tìm kiếm | DATA-AC15 | - | fe/src/data/search.ts:1<br>fe/src/data/text.ts:1<br>fe/src/pages/T3-thu-vien/filter.ts:1 | fe/tests/unit/data.test.ts:191 |
| DATA-13 | Bộ nội dung | DATA-AC16, DATA-AC17 | docs/new/navigation.md:60 | fe/src/app/state.tsx:1<br>fe/src/data/catalog.ts:1<br>fe/src/data/types.ts:1 | fe/tests/unit/data.test.ts:86<br>fe/tests/unit/data.test.ts:212<br>fe/tests/unit/s3.test.tsx:232 |

## C1 Thẻ câu

Spec: [fe/src/components/C1-the-cau/spec.md](../../fe/src/components/C1-the-cau/spec.md) · Acceptance: [fe/src/components/C1-the-cau/acceptance.md](../../fe/src/components/C1-the-cau/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| C1-01 | Cấu trúc | C1-AC01 | - | fe/src/components/C1-the-cau/SentenceCard.tsx:1<br>fe/src/components/C1-the-cau/card.css:1 | - |
| C1-02 | Trạng thái che câu gốc | C1-AC02 | - | fe/src/components/C1-the-cau/SentenceCard.tsx:1<br>fe/src/components/C1-the-cau/card.css:1 | fe/tests/unit/components.test.tsx:24 |
| C1-03 | Trạng thái hiện đầy đủ | C1-AC03 | - | fe/src/components/C1-the-cau/SentenceCard.tsx:1<br>fe/src/components/C1-the-cau/card.css:1 | fe/tests/unit/components.test.tsx:39 |
| C1-04 | Phát âm | C1-AC04, C1-AC05 | - | fe/src/app/speech.ts:1<br>fe/src/components/C1-the-cau/SentenceCard.tsx:1<br>fe/src/components/C1-the-cau/useSpeaker.ts:1 | fe/tests/unit/components.test.tsx:48 |
| C1-05 | Không có giọng đọc | C1-AC06 | docs/new/navigation.md:145<br>docs/new/navigation.md:290 | fe/src/app/speech.ts:1<br>fe/src/components/C1-the-cau/SentenceCard.tsx:1<br>fe/src/components/C1-the-cau/useSpeaker.ts:1 | fe/tests/unit/components.test.tsx:70 |
| C1-06 | Dòng Cách dùng | C1-AC07 | - | fe/src/components/C1-the-cau/SentenceCard.tsx:1 | fe/tests/unit/components.test.tsx:83 |
| C1-07 | Phiên âm | C1-AC07 | - | fe/src/components/C1-the-cau/SentenceCard.tsx:1 | fe/tests/unit/components.test.tsx:83 |
| C1-08 | Thuộc tính ngôn ngữ | C1-AC08 | - | fe/src/components/C1-the-cau/SentenceCard.tsx:1 | fe/tests/unit/components.test.tsx:106 |

## C2 Dải 8 ô

Spec: [fe/src/components/C2-dai-8-o/spec.md](../../fe/src/components/C2-dai-8-o/spec.md) · Acceptance: [fe/src/components/C2-dai-8-o/acceptance.md](../../fe/src/components/C2-dai-8-o/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| C2-01 | Kích thước và số ô | C2-AC01 | - | fe/src/components/C2-dai-8-o/Strip.tsx:1<br>fe/src/components/C2-dai-8-o/strip.css:1 | fe/tests/e2e/app.spec.ts:30 |
| C2-02 | Trạng thái ô | C2-AC02 | - | fe/src/components/C2-dai-8-o/Strip.tsx:1<br>fe/src/components/C2-dai-8-o/strip.css:1 | - |
| C2-03 | Trợ năng | C2-AC03 | - | fe/src/components/C2-dai-8-o/Strip.tsx:1 | fe/tests/unit/components.test.tsx:128 |

## C3 Nút

Spec: [fe/src/components/C3-nut/spec.md](../../fe/src/components/C3-nut/spec.md) · Acceptance: [fe/src/components/C3-nut/acceptance.md](../../fe/src/components/C3-nut/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| C3-01 | Nút chính | C3-AC01 | - | fe/src/components/C3-nut/Button.tsx:1<br>fe/src/components/C3-nut/button.css:1 | - |
| C3-02 | Nút phụ | C3-AC01 | - | fe/src/components/C3-nut/Button.tsx:1<br>fe/src/components/C3-nut/button.css:1 | - |
| C3-03 | Cặp nút đánh giá | C3-AC02, C3-AC03 | docs/new/navigation.md:339<br>docs/new/navigation.md:341 | fe/src/components/C3-nut/RatePair.tsx:1<br>fe/src/components/C3-nut/button.css:1 | - |
| C3-04 | Trạng thái chung | C3-AC04 | - | fe/src/components/C3-nut/Button.tsx:1<br>fe/src/components/C3-nut/button.css:1 | fe/tests/e2e/app.spec.ts:44<br>fe/tests/unit/components.test.tsx:140 |

## C4 Lựa chọn trắc nghiệm

Spec: [fe/src/components/C4-lua-chon/spec.md](../../fe/src/components/C4-lua-chon/spec.md) · Acceptance: [fe/src/components/C4-lua-chon/acceptance.md](../../fe/src/components/C4-lua-chon/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| C4-01 | Bố cục | C4-AC01 | - | fe/src/components/C4-lua-chon/Choices.tsx:1<br>fe/src/components/C4-lua-chon/choices.css:1 | - |
| C4-02 | Chọn đáp án | C4-AC02 | - | fe/src/components/C4-lua-chon/Choices.tsx:1<br>fe/src/components/C4-lua-chon/choices.css:1 | fe/tests/unit/components.test.tsx:162 |
| C4-03 | Thông báo kết quả | C4-AC03 | - | fe/src/components/C4-lua-chon/Choices.tsx:1 | fe/tests/unit/components.test.tsx:177 |

## C5 Thanh tab

Spec: [fe/src/components/C5-thanh-tab/spec.md](../../fe/src/components/C5-thanh-tab/spec.md) · Acceptance: [fe/src/components/C5-thanh-tab/acceptance.md](../../fe/src/components/C5-thanh-tab/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| C5-01 | Thanh dưới đáy | C5-AC01 | docs/new/navigation.md:106<br>docs/new/navigation.md:280<br>docs/new/navigation.md:282<br>docs/new/navigation.md:284 | fe/src/components/C5-thanh-tab/TabBar.tsx:1<br>fe/src/components/C5-thanh-tab/tabbar.css:1 | - |
| C5-02 | Thanh dọc | C5-AC02 | - | fe/src/components/C5-thanh-tab/TabBar.tsx:1<br>fe/src/components/C5-thanh-tab/tabbar.css:1 | - |
| C5-03 | Mục đang chọn | C5-AC03 | - | fe/src/components/C5-thanh-tab/TabBar.tsx:1<br>fe/src/components/C5-thanh-tab/tabbar.css:1 | fe/tests/unit/components.test.tsx:190 |
| C5-04 | Mục có số | C5-AC04 | - | fe/src/components/C5-thanh-tab/TabBar.tsx:1<br>fe/src/components/C5-thanh-tab/tabbar.css:1 | fe/tests/unit/components.test.tsx:201 |

## C6 Sheet

Spec: [fe/src/components/C6-sheet/spec.md](../../fe/src/components/C6-sheet/spec.md) · Acceptance: [fe/src/components/C6-sheet/acceptance.md](../../fe/src/components/C6-sheet/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| C6-01 | Dạng hiển thị | C6-AC01 | docs/new/navigation.md:38 | fe/src/components/C6-sheet/SheetHost.tsx:1<br>fe/src/components/C6-sheet/sheet.css:1 | - |
| C6-02 | Tiêu đề và đóng | C6-AC02, C6-AC03 | - | fe/src/components/C6-sheet/SheetHost.tsx:1 | fe/tests/unit/components.test.tsx:221 |
| C6-03 | Focus | C6-AC04 | - | fe/src/components/C6-sheet/SheetHost.tsx:1 | fe/tests/unit/components.test.tsx:253 |
| C6-04 | Nội dung dài | C6-AC05 | - | fe/src/components/C6-sheet/SheetHost.tsx:1<br>fe/src/components/C6-sheet/sheet.css:1<br>fe/src/pages/T2-luyen-tap/t2.css:1 | - |

## C7 Thông báo ngắn

Spec: [fe/src/components/C7-thong-bao/spec.md](../../fe/src/components/C7-thong-bao/spec.md) · Acceptance: [fe/src/components/C7-thong-bao/acceptance.md](../../fe/src/components/C7-thong-bao/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| C7-01 | Vị trí và hiển thị | C7-AC01 | - | fe/src/components/C7-thong-bao/ToastHost.tsx:1<br>fe/src/components/C7-thong-bao/toast.css:1 | - |
| C7-02 | Thời gian và hành động | C7-AC02 | - | fe/src/components/C7-thong-bao/ToastHost.tsx:1 | fe/tests/unit/components.test.tsx:299 |
| C7-03 | Trợ năng | C7-AC03 | - | fe/src/components/C7-thong-bao/ToastHost.tsx:1 | fe/tests/unit/components.test.tsx:323 |

## S1 Chọn ngôn ngữ

Spec: [fe/src/pages/S1-chon-ngon-ngu/spec.md](../../fe/src/pages/S1-chon-ngon-ngu/spec.md) · Acceptance: [fe/src/pages/S1-chon-ngon-ngu/acceptance.md](../../fe/src/pages/S1-chon-ngon-ngu/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| S1-01 | Danh sách và thứ tự | S1-AC01, S1-AC02, S1-AC06 | - | fe/src/data/catalog.ts:1<br>fe/src/pages/S1-chon-ngon-ngu/S1ChonNgonNgu.tsx:1<br>fe/src/pages/S1-chon-ngon-ngu/s1.css:1 | fe/tests/unit/app.test.tsx:36 |
| S1-02 | Nội dung mỗi dòng | S1-AC02, S1-AC03 | - | fe/src/app/LanguageList.tsx:1<br>fe/src/data/catalog.ts:1<br>fe/src/pages/S1-chon-ngon-ngu/S1ChonNgonNgu.tsx:1 | fe/tests/unit/app.test.tsx:46 |
| S1-03 | Số câu | S1-AC02 | - | fe/src/app/LanguageList.tsx:1<br>fe/src/data/catalog.ts:1<br>fe/src/pages/S1-chon-ngon-ngu/S1ChonNgonNgu.tsx:1 | - |
| S1-04 | Chọn | S1-AC04, S1-AC06, S1-AC07 | docs/new/navigation.md:24<br>docs/new/navigation.md:60<br>docs/new/navigation.md:66<br>docs/new/navigation.md:72<br>docs/new/navigation.md:96<br>docs/new/navigation.md:208<br>docs/new/navigation.md:214 | fe/src/pages/S1-chon-ngon-ngu/S1ChonNgonNgu.tsx:1 | fe/tests/unit/app.test.tsx:68<br>fe/tests/unit/app.test.tsx:101 |
| S1-05 | Chú thích | S1-AC02 | - | fe/src/pages/S1-chon-ngon-ngu/S1ChonNgonNgu.tsx:1<br>fe/src/pages/S1-chon-ngon-ngu/s1.css:1 | - |
| S1-06 | Tải và lỗi | S1-AC05 | - | fe/src/pages/S1-chon-ngon-ngu/S1ChonNgonNgu.tsx:1 | fe/tests/unit/app.test.tsx:88 |
| S1-07 | Chọn bộ nội dung | S1-AC07, S1-AC08 | docs/new/navigation.md:20<br>docs/new/navigation.md:62<br>docs/new/navigation.md:64<br>docs/new/navigation.md:68<br>docs/new/navigation.md:98<br>docs/new/navigation.md:100<br>docs/new/navigation.md:208<br>docs/new/navigation.md:210<br>docs/new/navigation.md:212 | fe/src/pages/S1-chon-ngon-ngu/S1ChonNgonNgu.tsx:1<br>fe/src/pages/S1-chon-ngon-ngu/s1.css:1 | fe/tests/unit/app.test.tsx:101 |

## S3 Phiên học

Spec: [fe/src/pages/S3-phien-hoc/spec.md](../../fe/src/pages/S3-phien-hoc/spec.md) · Acceptance: [fe/src/pages/S3-phien-hoc/acceptance.md](../../fe/src/pages/S3-phien-hoc/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| S3-01 | Nguồn câu của phiên | S3-AC01 | - | fe/src/data/path.ts:1<br>fe/src/pages/S3-phien-hoc/S3PhienHoc.tsx:1 | fe/tests/unit/s3.test.tsx:14 |
| S3-02 | Khung phiên | S3-AC02, S3-AC07 | docs/new/navigation.md:141 | fe/src/pages/S3-phien-hoc/S3PhienHoc.tsx:1<br>fe/src/pages/S3-phien-hoc/s3.css:1 | fe/tests/unit/s3.test.tsx:38 |
| S3-03 | Bước ghi nhớ | S3-AC03, S3-AC07, S3-AC11 | docs/new/navigation.md:339<br>docs/new/navigation.md:341 | fe/src/data/session.ts:1<br>fe/src/pages/S3-phien-hoc/S3PhienHoc.tsx:1 | fe/tests/unit/s3.test.tsx:38 |
| S3-04 | Bước kiểm tra | S3-AC04, S3-AC07, S3-AC11 | docs/new/navigation.md:343 | fe/src/data/session.ts:1<br>fe/src/pages/S3-phien-hoc/S3PhienHoc.tsx:1<br>fe/src/pages/S3-phien-hoc/s3.css:1 | fe/tests/unit/s3.test.tsx:70 |
| S3-05 | Gợi ý | S3-AC05 | - | fe/src/data/session.ts:1<br>fe/src/pages/S3-phien-hoc/S3PhienHoc.tsx:1 | fe/tests/unit/s3.test.tsx:88 |
| S3-06 | Tổng kết phiên | S3-AC06, S3-AC07 | docs/new/navigation.md:141<br>docs/new/navigation.md:351<br>docs/new/navigation.md:353 | fe/src/data/session.ts:1<br>fe/src/pages/S3-phien-hoc/S3PhienHoc.tsx:1<br>fe/src/pages/S3-phien-hoc/s3.css:1 | fe/tests/unit/s3.test.tsx:104 |
| S3-07 | Thoát giữa phiên | S3-AC08 | docs/new/navigation.md:345<br>docs/new/navigation.md:347<br>docs/new/navigation.md:349 | fe/src/pages/S3-phien-hoc/S3PhienHoc.tsx:1 | fe/tests/e2e/app.spec.ts:6<br>fe/tests/unit/s3.test.tsx:168 |
| S3-08 | Phiên dở | S3-AC09 | - | fe/src/data/session.ts:1<br>fe/src/pages/S3-phien-hoc/S3PhienHoc.tsx:1 | fe/tests/unit/s3.test.tsx:133 |
| S3-09 | Điều khiển | S3-AC10 | - | fe/src/pages/S3-phien-hoc/S3PhienHoc.tsx:1 | fe/tests/unit/s3.test.tsx:194 |

## S5 Kiểm tra nhanh

Spec: [fe/src/pages/S5-kiem-tra-nhanh/spec.md](../../fe/src/pages/S5-kiem-tra-nhanh/spec.md) · Acceptance: [fe/src/pages/S5-kiem-tra-nhanh/acceptance.md](../../fe/src/pages/S5-kiem-tra-nhanh/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| S5-01 | Màn bắt đầu | S5-AC01, S5-AC09 | docs/new/navigation.md:407<br>docs/new/navigation.md:409<br>docs/new/navigation.md:411 | fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:1<br>fe/src/pages/S5-kiem-tra-nhanh/s5.css:1 | fe/tests/unit/s5.test.tsx:48 |
| S5-02 | Chỉ báo bước | S5-AC02 | - | fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:1<br>fe/src/pages/S5-kiem-tra-nhanh/s5.css:1 | fe/tests/unit/s5.test.tsx:73 |
| S5-03 | Bước 1: Nghe và chọn nghĩa | S5-AC03, S5-AC09 | - | fe/src/app/hooks.ts:1<br>fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:1 | fe/tests/unit/s5.test.tsx:91 |
| S5-04 | Bước 2: Nghe theo cụm | S5-AC04, S5-AC09, S5-AC10 | - | fe/src/app/hooks.ts:1<br>fe/src/data/chunks.ts:1<br>fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:1<br>fe/src/pages/S5-kiem-tra-nhanh/s5.css:1 | fe/tests/unit/dot2-data.test.ts:48<br>fe/tests/unit/s5.test.tsx:119<br>fe/tests/unit/s5.test.tsx:136 |
| S5-05 | Bước 3: Sắp xếp câu | S5-AC05, S5-AC09, S5-AC10 | - | fe/src/data/chunks.ts:1<br>fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:1<br>fe/src/pages/S5-kiem-tra-nhanh/s5.css:1 | fe/tests/unit/dot2-data.test.ts:65<br>fe/tests/unit/s5.test.tsx:153 |
| S5-06 | Nghĩa hiển thị | S5-AC06 | - | fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:1<br>fe/src/pages/S5-kiem-tra-nhanh/s5.css:1 | - |
| S5-07 | Kết quả | S5-AC07, S5-AC09 | docs/new/navigation.md:131<br>docs/new/navigation.md:417<br>docs/new/navigation.md:419 | fe/src/data/session.ts:1<br>fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:1<br>fe/src/pages/S5-kiem-tra-nhanh/s5.css:1 | fe/tests/unit/s5.test.tsx:195<br>fe/tests/unit/s5.test.tsx:220 |
| S5-08 | Thoát giữa chừng | S5-AC08 | docs/new/navigation.md:413<br>docs/new/navigation.md:415 | fe/src/data/session.ts:1<br>fe/src/pages/S5-kiem-tra-nhanh/S5KiemTra.tsx:1 | fe/tests/unit/s5.test.tsx:236<br>fe/tests/unit/s5.test.tsx:267 |

## S8 Cài đặt

Spec: [fe/src/pages/S8-cai-dat/spec.md](../../fe/src/pages/S8-cai-dat/spec.md) · Acceptance: [fe/src/pages/S8-cai-dat/acceptance.md](../../fe/src/pages/S8-cai-dat/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| S8-01 | Học tập | S8-AC01, S8-AC09, S8-AC10 | docs/new/navigation.md:527 | fe/src/app/TopBar.tsx:1<br>fe/src/app/router.ts:1<br>fe/src/pages/S8-cai-dat/S8CaiDat.tsx:1<br>fe/src/pages/S8-cai-dat/s8.css:1 | fe/tests/unit/s8.test.tsx:21<br>fe/tests/unit/s8.test.tsx:197 |
| S8-02 | Giọng đọc | S8-AC02, S8-AC03, S8-AC09 | docs/new/navigation.md:143<br>docs/new/navigation.md:529 | fe/src/app/hooks.ts:1<br>fe/src/app/speech.ts:1<br>fe/src/pages/S8-cai-dat/S8CaiDat.tsx:1<br>fe/src/pages/S8-cai-dat/s8.css:1 | fe/tests/unit/s8.test.tsx:57<br>fe/tests/unit/s8.test.tsx:91 |
| S8-03 | Âm thanh ngoại tuyến | S8-AC04 | - | fe/src/pages/S8-cai-dat/S8CaiDat.tsx:1 | fe/tests/unit/s8.test.tsx:102 |
| S8-04 | Giao diện | S8-AC05, S8-AC09 | - | fe/src/pages/S8-cai-dat/S8CaiDat.tsx:1<br>fe/src/pages/S8-cai-dat/s8.css:1 | fe/tests/unit/s8.test.tsx:109 |
| S8-05 | Dữ liệu | S8-AC06, S8-AC07, S8-AC09 | docs/new/navigation.md:531<br>docs/new/navigation.md:533<br>docs/new/navigation.md:535 | fe/src/app/hooks.ts:1<br>fe/src/data/transfer.ts:1<br>fe/src/pages/S8-cai-dat/S8CaiDat.tsx:1<br>fe/src/pages/S8-cai-dat/s8.css:1 | fe/tests/unit/dot2-data.test.ts:81<br>fe/tests/unit/s8.test.tsx:124 |
| S8-06 | Trợ giúp | S8-AC08, S8-AC09 | docs/new/navigation.md:147<br>docs/new/navigation.md:537 | fe/src/pages/S8-cai-dat/S8CaiDat.tsx:1<br>fe/src/pages/S8-cai-dat/s8.css:1 | fe/tests/unit/s8.test.tsx:180 |

## S9 Hướng dẫn lần đầu

Spec: [fe/src/pages/S9-huong-dan/spec.md](../../fe/src/pages/S9-huong-dan/spec.md) · Acceptance: [fe/src/pages/S9-huong-dan/acceptance.md](../../fe/src/pages/S9-huong-dan/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| S9-01 | Khi nào hiện | S9-AC01 | docs/new/navigation.md:76<br>docs/new/navigation.md:78<br>docs/new/navigation.md:210<br>docs/new/navigation.md:212<br>docs/new/navigation.md:214 | fe/src/pages/S9-huong-dan/S9HuongDan.tsx:1 | fe/tests/unit/app.test.tsx:382 |
| S9-02 | Ba bước | S9-AC02, S9-AC06 | - | fe/src/pages/S9-huong-dan/S9HuongDan.tsx:1<br>fe/src/pages/S9-huong-dan/s9.css:1 | - |
| S9-03 | Điều khiển | S9-AC03 | docs/new/navigation.md:80<br>docs/new/navigation.md:82<br>docs/new/navigation.md:216<br>docs/new/navigation.md:218 | fe/src/pages/S9-huong-dan/S9HuongDan.tsx:1 | fe/tests/unit/app.test.tsx:390 |
| S9-04 | Không hiện lại | S9-AC04 | docs/new/navigation.md:84 | fe/src/pages/S9-huong-dan/S9HuongDan.tsx:1 | fe/tests/unit/app.test.tsx:411 |
| S9-05 | Xem lại | S9-AC05 | docs/new/navigation.md:147<br>docs/new/navigation.md:537 | fe/src/pages/S9-huong-dan/S9HuongDan.tsx:1 | fe/tests/unit/s8.test.tsx:180 |

## T1 Học

Spec: [fe/src/pages/T1-hoc/spec.md](../../fe/src/pages/T1-hoc/spec.md) · Acceptance: [fe/src/pages/T1-hoc/acceptance.md](../../fe/src/pages/T1-hoc/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| T1-01 | Thẻ câu tiếp theo | T1-AC01, T1-AC02, T1-AC10 | - | fe/src/pages/T1-hoc/T1Hoc.tsx:1<br>fe/src/pages/T1-hoc/t1.css:1 | fe/tests/unit/app.test.tsx:284<br>fe/tests/unit/app.test.tsx:366 |
| T1-02 | Nút chính đổi chữ theo ngữ cảnh | T1-AC03, T1-AC09 | docs/new/navigation.md:34<br>docs/new/navigation.md:119<br>docs/new/navigation.md:276 | fe/src/pages/T1-hoc/T1Hoc.tsx:1 | fe/tests/unit/app.test.tsx:296 |
| T1-03 | Mục tiêu tuần | T1-AC04 | - | fe/src/data/path.ts:1<br>fe/src/pages/T1-hoc/T1Hoc.tsx:1<br>fe/src/pages/T1-hoc/t1.css:1 | fe/tests/unit/app.test.tsx:316 |
| T1-04 | Câu cần ôn | T1-AC05, T1-AC09 | docs/new/navigation.md:119<br>docs/new/navigation.md:278 | fe/src/pages/T1-hoc/T1Hoc.tsx:1<br>fe/src/pages/T1-hoc/t1.css:1 | fe/tests/unit/app.test.tsx:326 |
| T1-05 | Học hết lộ trình | T1-AC06 | docs/new/navigation.md:121<br>docs/new/navigation.md:288 | fe/src/pages/T1-hoc/T1Hoc.tsx:1 | fe/tests/unit/app.test.tsx:339 |
| T1-06 | Bố cục máy tính | T1-AC07 | - | fe/src/pages/T1-hoc/T1Hoc.tsx:1<br>fe/src/pages/T1-hoc/t1.css:1 | - |
| T1-07 | Không đổi câu trên T1 | T1-AC08 | - | fe/src/pages/T1-hoc/T1Hoc.tsx:1 | fe/tests/unit/app.test.tsx:352 |

## T2 Luyện tập

Spec: [fe/src/pages/T2-luyen-tap/spec.md](../../fe/src/pages/T2-luyen-tap/spec.md) · Acceptance: [fe/src/pages/T2-luyen-tap/acceptance.md](../../fe/src/pages/T2-luyen-tap/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| T2-01 | Danh sách cách luyện | T2-AC01 | - | fe/src/pages/T2-luyen-tap/T2LuyenTap.tsx:1<br>fe/src/pages/T2-luyen-tap/t2.css:1 | - |
| T2-02 | Ôn câu cần ôn | T2-AC02 | docs/new/navigation.md:123<br>docs/new/navigation.md:401 | fe/src/pages/T2-luyen-tap/T2LuyenTap.tsx:1 | fe/tests/unit/t2-t4.test.tsx:24 |
| T2-03 | Học theo từ khóa | T2-AC03, T2-AC06, T2-AC07 | docs/new/navigation.md:125<br>docs/new/navigation.md:127<br>docs/new/navigation.md:403<br>docs/new/navigation.md:405 | fe/src/app/hooks.ts:1<br>fe/src/pages/T2-luyen-tap/T2LuyenTap.tsx:1<br>fe/src/pages/T2-luyen-tap/t2.css:1 | fe/tests/unit/t2-t4.test.tsx:42<br>fe/tests/unit/t2-t4.test.tsx:64<br>fe/tests/unit/t2-t4.test.tsx:97<br>fe/tests/unit/t2-t4.test.tsx:272 |
| T2-04 | Kiểm tra nhanh | T2-AC04 | docs/new/navigation.md:34<br>docs/new/navigation.md:129<br>docs/new/navigation.md:407 | fe/src/pages/T2-luyen-tap/T2LuyenTap.tsx:1 | fe/tests/unit/t2-t4.test.tsx:73 |
| T2-05 | Không có kết quả | T2-AC05, T2-AC06 | - | fe/src/pages/T2-luyen-tap/T2LuyenTap.tsx:1<br>fe/src/pages/T2-luyen-tap/t2.css:1 | fe/tests/unit/t2-t4.test.tsx:87 |

## T3 Thư viện

Spec: [fe/src/pages/T3-thu-vien/spec.md](../../fe/src/pages/T3-thu-vien/spec.md) · Acceptance: [fe/src/pages/T3-thu-vien/acceptance.md](../../fe/src/pages/T3-thu-vien/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| T3-01 | Danh sách câu | T3-AC01, T3-AC02 | - | fe/src/pages/T3-thu-vien/T3ThuVien.tsx:1<br>fe/src/pages/T3-thu-vien/t3.css:1 | fe/tests/unit/t3.test.tsx:21 |
| T3-02 | Tìm kiếm | T3-AC03 | - | fe/src/app/hooks.ts:1<br>fe/src/pages/T3-thu-vien/T3ThuVien.tsx:1<br>fe/src/pages/T3-thu-vien/filter.ts:1<br>fe/src/pages/T3-thu-vien/t3.css:1 | fe/tests/unit/t3.test.tsx:42<br>fe/tests/unit/t3.test.tsx:220 |
| T3-03 | Bộ lọc | T3-AC04, T3-AC09, T3-AC10 | - | fe/src/pages/T3-thu-vien/T3ThuVien.tsx:1<br>fe/src/pages/T3-thu-vien/filter.ts:1<br>fe/src/pages/T3-thu-vien/t3.css:1 | fe/tests/unit/t3.test.tsx:61<br>fe/tests/unit/t3.test.tsx:134<br>fe/tests/unit/t3.test.tsx:146 |
| T3-04 | Phân trang | T3-AC05 | - | fe/src/pages/T3-thu-vien/T3ThuVien.tsx:1<br>fe/src/pages/T3-thu-vien/filter.ts:1<br>fe/src/pages/T3-thu-vien/t3.css:1 | fe/tests/unit/t3.test.tsx:77 |
| T3-05 | Chi tiết câu | T3-AC06 | docs/new/navigation.md:133<br>docs/new/navigation.md:135<br>docs/new/navigation.md:447<br>docs/new/navigation.md:449 | fe/src/data/stats.ts:1<br>fe/src/pages/T3-thu-vien/T3ThuVien.tsx:1 | fe/tests/unit/t3.test.tsx:103 |
| T3-06 | Không có kết quả | T3-AC07 | - | fe/src/pages/T3-thu-vien/T3ThuVien.tsx:1<br>fe/src/pages/T3-thu-vien/t3.css:1 | fe/tests/unit/t3.test.tsx:121 |
| T3-07 | Bố cục máy tính | T3-AC08 | - | fe/src/app/hooks.ts:1<br>fe/src/pages/T3-thu-vien/T3ThuVien.tsx:1<br>fe/src/pages/T3-thu-vien/t3.css:1 | - |

## T4 Tiến bộ

Spec: [fe/src/pages/T4-tien-bo/spec.md](../../fe/src/pages/T4-tien-bo/spec.md) · Acceptance: [fe/src/pages/T4-tien-bo/acceptance.md](../../fe/src/pages/T4-tien-bo/acceptance.md)

| Yêu cầu | Tên | Acceptance | Sơ đồ | Code (@spec) | Test (@ac) |
|---|---|---|---|---|---|
| T4-01 | Khoảng thời gian | T4-AC01 | - | fe/src/data/stats.ts:1<br>fe/src/pages/T4-tien-bo/T4TienBo.tsx:1<br>fe/src/pages/T4-tien-bo/t4.css:1 | fe/tests/unit/t2-t4.test.tsx:120 |
| T4-02 | Ba chỉ số | T4-AC02, T4-AC10 | - | fe/src/data/stats.ts:1<br>fe/src/pages/T4-tien-bo/T4TienBo.tsx:1<br>fe/src/pages/T4-tien-bo/t4.css:1 | fe/tests/unit/dot2-data.test.ts:29<br>fe/tests/unit/t2-t4.test.tsx:135 |
| T4-03 | Mục tiêu tuần | T4-AC03 | - | fe/src/data/stats.ts:1<br>fe/src/pages/T4-tien-bo/T4TienBo.tsx:1<br>fe/src/pages/T4-tien-bo/t4.css:1 | fe/tests/unit/t2-t4.test.tsx:150 |
| T4-04 | Biểu đồ theo ngày | T4-AC04, T4-AC05 | - | fe/src/data/stats.ts:1<br>fe/src/pages/T4-tien-bo/T4TienBo.tsx:1<br>fe/src/pages/T4-tien-bo/t4.css:1 | fe/tests/unit/t2-t4.test.tsx:167 |
| T4-05 | Lịch ôn | T4-AC06, T4-AC10 | - | fe/src/data/stats.ts:1<br>fe/src/pages/T4-tien-bo/T4TienBo.tsx:1<br>fe/src/pages/T4-tien-bo/t4.css:1 | fe/tests/unit/dot2-data.test.ts:29<br>fe/tests/unit/t2-t4.test.tsx:187 |
| T4-06 | Các phiên | T4-AC07 | - | fe/src/data/stats.ts:1<br>fe/src/pages/T4-tien-bo/T4TienBo.tsx:1<br>fe/src/pages/T4-tien-bo/t4.css:1 | fe/tests/unit/t2-t4.test.tsx:197 |
| T4-07 | Chi tiết ngày | T4-AC08 | docs/new/navigation.md:137<br>docs/new/navigation.md:477 | fe/src/data/stats.ts:1<br>fe/src/pages/T4-tien-bo/T4TienBo.tsx:1<br>fe/src/pages/T4-tien-bo/t4.css:1 | fe/tests/unit/t2-t4.test.tsx:213 |
| T4-08 | Chưa có dữ liệu | T4-AC09 | docs/new/navigation.md:139<br>docs/new/navigation.md:479 | fe/src/pages/T4-tien-bo/T4TienBo.tsx:1<br>fe/src/pages/T4-tien-bo/t4.css:1 | fe/tests/unit/t2-t4.test.tsx:233 |
