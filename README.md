# VITASR Đa ngôn ngữ: làm lại giao diện

Khung dự án để làm lại giao diện mini app "ĐA NGÔN NGỮ" của VITASR. Chưa có code giao diện. Repo hiện gồm: tài liệu bản cũ, spec bản mới chia theo từng trang và thành phần, điều kiện nghiệm thu cho từng phần, và một script giữ ánh xạ giữa spec, code và nghiệm thu.

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
├── package.json                  lệnh spec:trace, spec:acceptance, spec:check
├── scripts/spec.mjs              script truy vết (Node 18+, không cần thư viện)
├── docs/
│   ├── QUY-TRINH.md              ID, ánh xạ, ai kiểm gì, khi nào được chấp nhận
│   ├── QUYET-DINH.md             quyết định kỹ thuật (QD-xx)
│   ├── legacy/                   bản cũ (tham khảo, không phải yêu cầu)
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
    ├── fixtures/                 dữ liệu mẫu (DATA-09)
    ├── tests/                    test tự động, gắn @ac
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

Mỗi thư mục khu vực có `spec.md` (yêu cầu `<ID>-NN`), `acceptance.md` (mục kiểm `<ID>-ACNN`) và `.gitkeep`. Code của khu vực đặt vào đúng thư mục đó.

## Lệnh

```bash
npm run spec:check        # kiểm ánh xạ; thoát mã 1 nếu có lỗi
npm run spec:trace        # sinh docs/generated/traceability.md
npm run spec:acceptance   # sinh docs/generated/acceptance-report.md
```

Chạy trực tiếp không cần `npm install`: `node scripts/spec.mjs check`.

## Trạng thái hiện tại

- 20 khu vực, 132 yêu cầu, 158 mục nghiệm thu (99 tự động, còn lại do Claude hoặc người kiểm).
- Chưa có code, chưa có fixture.
- Các quyết định QD-01, QD-02, QD-04, QD-05 đang ở trạng thái Đề xuất, cần chốt trước khi viết code.
- Câu hỏi mở cho khách: `docs/new/ui-spec.md` mục 5; câu hỏi mở theo khu vực nằm cuối từng `spec.md`.
