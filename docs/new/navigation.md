# Sơ đồ điều hướng cửa sổ: bản mới

Sơ đồ này là hình minh họa. Nguồn chân lý cho điều hướng là bảng route APP-04 trong `fe/src/app/spec.md` và các yêu cầu điều hướng trong spec của từng trang. Khi hai nơi khác nhau, spec thắng; sửa sơ đồ cho khớp.

```mermaid
flowchart TD
  A[Mở app] -->|lần đầu| L[S1 Chọn ngôn ngữ]
  A -->|đã chọn ngôn ngữ| H
  L --> H
  L -.->|lần đầu| GD[S9 Hướng dẫn 3 bước trên T1]

  subgraph TABS[Thanh tab]
    H[T1 Học]
    P[T2 Luyện tập]
    B[T3 Thư viện]
    G[T4 Tiến bộ]
  end

  H -->|Học 8 câu / Tiếp tục| S[S3 Phiên học]
  H -->|N câu cần ôn| S
  S --> SR[S3c Tổng kết phiên]
  SR -->|Xem tiến bộ| G
  SR -->|Học tiếp 8 câu| S
  SR -->|Xong| H

  P -->|Ôn câu cần ôn| S
  P -->|Kiểm tra nhanh| K[S5 Kiểm tra nhanh]
  K --> KR[S5d Kết quả]
  P -->|Học theo từ khóa| C[Sheet Tìm câu theo từ khóa]
  C -->|Học 8 câu đầu / từng nhóm| S

  B -->|chạm vào câu| D[Sheet Chi tiết câu]
  D -->|Học câu này| S

  G -->|chạm vào ngày| GDY[Sheet Chi tiết ngày]

  H & P & B & G -->|tên ngôn ngữ| LS[Sheet Đổi ngôn ngữ]
  H & P & B & G -->|Cài đặt| ST[S8 Cài đặt]
  ST --> V[Sheet Giọng đọc]
  ST -->|Xem lại hướng dẫn| GD
```

## So sánh với bản cũ

| | Bản cũ | Bản mới |
|---|---|---|
| Số cửa sổ người dùng gặp | Màn chính và 15 hộp thoại | 4 tab, màn Cài đặt, 3 màn toàn trang, 6 loại sheet (đổi ngôn ngữ, từ khóa, chi tiết câu, chi tiết ngày, giọng đọc, xác nhận) |
| Hộp thoại chồng hộp thoại | Có (Tổng kết mở Tiến bộ trong cùng hộp thoại; Chia sẻ mở hộp quản lý bên trong hộp chia sẻ) | Không |
| Lối vào luyện tập | Rải rác: Học 8 câu, TEST NOW, Học theo chủ đề nằm ở 3 chỗ | Gom vào tab Luyện tập; T1 chỉ giữ lối vào học tiếp |

Sơ đồ bản cũ: `docs/legacy/navigation.md`.
