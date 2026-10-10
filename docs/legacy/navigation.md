# Sơ đồ điều hướng cửa sổ: bản cũ

Nét liền: thao tác xác nhận được trên trang thật hoặc trong code. Nét đứt: chưa xác nhận (cửa sổ có thật nhưng vị trí nút mở chưa rõ, hoặc phần trang chính sau đăng nhập chưa kiểm trực tiếp, xem `README.md` mục "Đang chờ xác nhận"). Mã màn hình có tiền tố `L-`; chi tiết từng màn ở `ui-spec.md`.

```mermaid
flowchart TD
  subgraph HOST["Trang chính: language.pomaskhoahocnaobo.com"]
    H0["/register (đăng ký)"] -->|"Sign in"| HL["/ (đăng nhập)"]
    HL --> H1["Trang học sau đăng nhập"]
    H1 -.->|"nút góc trên bên trái"| H2["Menu / danh sách<br/>(chưa xác nhận)"]
    H2 -.->|"Đa ngôn ngữ"| H3["Mở mini app ở trang mới<br/>(không iframe, xác nhận 10/10/2026)"]
  end
  H3 -.-> S0
  subgraph MINI["Mini app ĐA NGÔN NGỮ"]
    S0["L-S0 Màn tải"] -->|"chưa lưu ngôn ngữ"| S1["L-S1 Chọn ngôn ngữ"]
    S0 -->|"đã lưu ngôn ngữ"| S2
    S0 -->|"URL có ?share= hoặc ?invite="| D11["L-D11 Chấp nhận lời mời"]
    D11 --> S2
    S1 -->|"chọn ngôn ngữ"| S2["L-S2 Màn chính"]
    S2 -->|"Học 8 câu / Tiếp tục phiên"| D1["L-D1 Chọn nhóm câu"]
    D1 -->|"Bắt đầu học"| D2["L-D2 Phiên học"]
    D1 -->|"Xem toàn bộ câu"| S2
    D2 -->|"Hoàn tất phiên"| D2b["L-D2b Tổng kết phiên"]
    D2b -->|"Xem tiến bộ và lịch ôn"| D3
    D2b -->|"Quay lại câu đang học"| S2
    S2 -->|"Tiến bộ"| D3["L-D3 Tiến bộ của tôi"]
    S2 -->|"Của tôi"| D4["L-D4 Của tôi"]
    S2 -->|"Góp ý"| D5["L-D5 Góp ý của tôi"]
    S2 -->|"Khảo sát và Trò chuyện"| X1["Trang ngoài ve360-commons"]
    S2 -->|"TEST NOW"| D6["L-D6 TEST NOW"]
    D6 --> D6b["L-D6b Vòng lặp hoàn tất"]
    S2 -.->|"Học theo chủ đề"| D7["L-D7 Học theo chủ đề"]
    D7 -->|"Học từng nhóm 8 câu / Học toàn bộ"| D2
    S2 -->|"Giọng đọc"| D8["L-D8 Giọng đọc"]
    S2 -->|"Hướng dẫn"| D9["L-D9 Hướng dẫn nhanh"]
    S2 -.->|"Chia sẻ"| D10a["L-D10 Hộp chia sẻ"]
    D10a -->|"Chia sẻ truy cập và dữ liệu"| D10["L-D10b Chia sẻ thư viện của tôi"]
    D10 -->|"chưa đăng nhập"| X2["/signin-with-chatgpt"]
    S2 -->|"demo-about"| D12["L-D12 Thông tin bản chạy thử"]
  end
```

Ngoài sơ đồ: nút nổi `pwa-update` "Có bản mới · Cập nhật" tự hiện khi service worker có bản mới; bấm vào thì tải lại trang.
