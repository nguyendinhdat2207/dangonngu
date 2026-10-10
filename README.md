# VITASR Đa ngôn ngữ: làm lại giao diện

Làm lại giao diện mini app "ĐA NGÔN NGỮ" của VITASR. Repo gồm: tài liệu bản cũ, spec bản mới chia theo từng trang và thành phần, điều kiện nghiệm thu cho từng phần, code giao diện (Vite, React, TypeScript) viết theo spec, test tự động gắn với mục nghiệm thu, và một script giữ ánh xạ giữa spec, code và nghiệm thu.

**Spec là nguồn chân lý duy nhất.** Người sửa spec, code đi theo spec. Quy trình đầy đủ: `docs/QUY-TRINH.md`.

## Đọc theo thứ tự này

1. `docs/legacy/README.md`: bản cũ là gì, lấy thông tin bằng cách nào, mức tin cậy.
2. `docs/legacy/navigation.md` và `docs/legacy/ui-spec.md`: sơ đồ điều hướng và spec giao diện bản cũ.
3. `docs/new/ui-spec.md`: tổng quan bản mới, mục tiêu, phạm vi, chỉ mục spec.
4. `docs/new/navigation.md`: sơ đồ điều hướng bản mới.
5. `docs/new/mapping-legacy.md`: đối chiếu từng chức năng mới với bản cũ và nguồn dữ liệu.
6. `spec.md` và `acceptance.md` trong từng thư mục dưới `fe/src/`.

## Cấu trúc

```
.
├── CLAUDE.md                     quy tắc cho Claude khi làm trong repo
├── package.json                  lệnh chạy app, test, build và kiểm spec
├── vite.config.ts                cấu hình build và Vitest (gốc app là fe/)
├── playwright.config.ts          test giao diện chạy trên bản build
├── scripts/spec.mjs              script truy vết (Node 18+, không cần thư viện)
├── scripts/make-fixtures.mjs     tạo fixture từ bộ dữ liệu đầy đủ
├── docs/
│   ├── QUY-TRINH.md              ID, ánh xạ, ai kiểm gì, khi nào được chấp nhận
│   ├── QUYET-DINH.md             quyết định kỹ thuật (QD-xx)
│   ├── legacy/                   bản cũ (tham khảo, không phải yêu cầu)
│   │   ├── ban-xuat-du-lieu/     ghi chú và chuỗi giao diện của bản xuất dữ liệu ngày 07/10/2026
│   │   ├── README.md
│   │   ├── navigation.md
│   │   ├── ui-spec.md
│   │   └── api-and-storage.md
│   ├── new/                      bản mới: tổng quan (khu vực G)
│   │   ├── ui-spec.md
│   │   ├── acceptance.md
│   │   ├── navigation.md
│   │   └── mapping-legacy.md
│   ├── evidence/                 ảnh chụp, bằng chứng nghiệm thu
│   └── generated/                do script sinh ra, không sửa tay
│       ├── traceability.md
│       └── acceptance-report.md
└── fe/
    ├── public/data/              bộ dữ liệu đầy đủ khách gửi (15 ngôn ngữ Fluency, Global English)
    ├── fixtures/                 tập con cho test (DATA-09), sinh bằng scripts/make-fixtures.mjs
    │   └── progress/             tiến độ mẫu 30 ngày và số liệu tính tay cho T4
    ├── index.html, src/main.tsx  điểm vào của app
    ├── tests/unit/               test Vitest (dữ liệu, thành phần, trang), gắn @ac
    ├── tests/e2e/                test Playwright trên bản build, gắn @ac; evidence*.spec.ts sinh ảnh bằng chứng
    └── src/
        ├── app/                  APP  khung app, route, bố cục, trạng thái toàn cục
        ├── foundation/           FND  token, chữ, giọng văn, trợ năng
        ├── data/                 DATA hợp đồng dữ liệu, nguồn, tiến độ
        ├── components/
        │   ├── C1-the-cau/       Thẻ câu
        │   ├── C2-dai-8-o/       Dải 8 ô
        │   ├── C3-nut/           Nút
        │   ├── C4-lua-chon/      Lựa chọn trắc nghiệm
        │   ├── C5-thanh-tab/     Thanh tab
        │   ├── C6-sheet/         Sheet
        │   └── C7-thong-bao/     Thông báo ngắn
        └── pages/
            ├── S1-chon-ngon-ngu/ Chọn ngôn ngữ
            ├── T1-hoc/           Học
            ├── S3-phien-hoc/     Phiên học
            ├── T2-luyen-tap/     Luyện tập
            ├── S5-kiem-tra-nhanh/ Kiểm tra nhanh
            ├── T3-thu-vien/      Thư viện
            ├── T4-tien-bo/       Tiến bộ
            ├── S8-cai-dat/       Cài đặt
            └── S9-huong-dan/     Hướng dẫn lần đầu
```

Mỗi thư mục khu vực có `spec.md` (yêu cầu `<ID>-NN`), `acceptance.md` (mục kiểm `<ID>-ACNN`). Code của khu vực đặt vào đúng thư mục đó, mỗi file ghi `@spec <ID>`.

## Lệnh

Cần Node 18 trở lên.

```bash
npm install               # cài thư viện (.npmrc bật legacy-peer-deps, xem QD-01)
npm run dev               # chạy app với bộ dữ liệu đầy đủ: http://localhost:5173
npm run dev:fixture       # chạy app với fixture (giống môi trường test)
npm test                  # test Vitest (fe/tests/unit)
npm run build             # kiểm kiểu TypeScript và build ra dist/ (tĩnh, đặt ở thư mục nào cũng chạy)
npm run test:e2e          # test Playwright trên bản build (cần build trước)
npm run evidence          # chụp ảnh bằng chứng vào docs/evidence/ (cần build trước)
npm run spec:check        # kiểm ánh xạ spec, acceptance, code, test, sơ đồ; thoát mã 1 nếu có lỗi
npm run spec:trace        # sinh docs/generated/traceability.md
npm run spec:acceptance   # sinh docs/generated/acceptance-report.md
```

Lần đầu chạy Playwright trên máy mới: `npx playwright install chromium`. Máy đã có sẵn Chromium thì có thể trỏ tới nó bằng biến `PW_CHROMIUM_PATH`.

## Trạng thái hiện tại (10/10/2026)

- 20 khu vực, 134 yêu cầu, 170 mục nghiệm thu; 93 mũi tên trong sơ đồ điều hướng đều gắn yêu cầu.
- Đã code đủ các màn trong spec: S1, T1, S3, S9 (đợt 1) và T2 Luyện tập, S5 Kiểm tra nhanh, T3 Thư viện, T4 Tiến bộ, S8 Cài đặt (đợt 2). Có service worker để mở lại khi ngoại tuyến và báo bản cập nhật (APP-10).
- Nghiệm thu: 148/170 mục đã đạt. Còn 21 mục `[human]` (thiết bị thật, người dùng thật) và FND-AC12 (chờ duyệt chữ báo lỗi nhập file, xem Câu hỏi mở của S8).
- Tình trạng từng mục: `npm run spec:acceptance` rồi mở `docs/generated/acceptance-report.md`.
- Test đơn vị chạy theo giờ Việt Nam (`TZ=Asia/Ho_Chi_Minh` trong `npm test`) để khớp tiến độ mẫu 30 ngày.
- Câu hỏi mở cho khách: `docs/new/ui-spec.md` mục 5; câu hỏi mở theo khu vực nằm cuối từng `spec.md` (đợt 2 thêm ở APP, T2, T3, T4, S5, S8).
