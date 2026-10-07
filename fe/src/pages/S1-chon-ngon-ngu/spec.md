---
id: S1
title: Chọn ngôn ngữ
status: nháp
version: 0.1
route: "#/chon-ngon-ngu"
depends: APP, FND, DATA
legacy: L-S1
---

# S1 Chọn ngôn ngữ

Màn toàn trang, hiện khi mở app lần đầu (APP-05).

## Bố cục

```
┌───────────────────────────┐
│ VITASR                    │
│                           │
│ Bạn muốn học              │
│ ngôn ngữ nào?             │
│                           │
│ ┌───────────────────────┐ │
│ │ Tiếng Anh       4.096 │ │
│ │ English               │ │
│ └───────────────────────┘ │
│  Tiếng Bồ Đào Nha  4.096  │
│  Português                │
│  ... (danh sách cuộn)     │
│                           │
│ Có thể đổi sau ở thanh    │
│ trên cùng.                │
└───────────────────────────┘
```

## Yêu cầu

### S1-01 Danh sách và thứ tự

Liệt kê mọi ngôn ngữ trong manifest (DATA-01). Tiếng Anh đứng đầu, nằm trong khối viền `--line` để nổi lên; các ngôn ngữ còn lại xếp theo tên tiếng Việt A đến Z.

### S1-02 Nội dung mỗi dòng

Mỗi dòng có tên tiếng Việt (`name`, `--t-body` đậm 600) và tên gốc bên dưới (`--t-sm`, `--muted`). Tên gốc lấy bằng `Intl.DisplayNames` theo chính `locale` của ngôn ngữ đó (ví dụ "日本語" cho `ja-JP`); trình duyệt không hỗ trợ thì bỏ dòng tên gốc.

### S1-03 Số câu

Bên phải mỗi dòng là số câu (`count` của manifest) định dạng kiểu Việt Nam ("4.096").

### S1-04 Chọn

Chạm một dòng là chọn ngay: lưu ngôn ngữ (DATA-06) và chuyển sang `#/hoc`. Không có nút xác nhận. Trong lúc tải dữ liệu ngôn ngữ đó, dòng vừa chạm hiện chỉ báo đang tải và các dòng khác bị khóa.

### S1-05 Chú thích

Cuối danh sách có dòng "Có thể đổi sau ở thanh trên cùng." `--t-sm`, `--muted`.

### S1-06 Tải và lỗi

Khi đang tải manifest: khung xương 6 dòng. Lỗi tải: theo APP-08.

## Câu hỏi mở

- Bản cũ có chế độ "Tiếng Việt (từ tiếng Anh)" đảo chiều câu gốc và nghĩa. Bản đầu không có. Khách có cần không?

## Lịch sử thay đổi

- 0.1 (07/10/2026): bản đầu.
