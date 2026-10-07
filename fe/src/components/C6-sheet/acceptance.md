# Acceptance: C6 Sheet

- [ ] C6-AC01 [claude] C6-01: Ảnh chụp sheet ở 375 px (trượt từ dưới, có tay nắm, cao không quá 90%) và 1280 px (hộp thoại giữa màn, rộng không quá 560 px), sáng và tối.
- [ ] C6-AC02 [auto] C6-02: Sheet thường đóng được bằng nút đóng, chạm lớp nền, phím Esc; sheet xác nhận không đóng khi chạm lớp nền nhưng đóng bằng Esc.
- [ ] C6-AC03 [human] C6-02: Trên điện thoại thật, vuốt xuống trên tay nắm đóng được sheet, và vuốt lên xuống trong nội dung không vô tình đóng sheet.
- [ ] C6-AC04 [auto] C6-03: Khi mở, `document.activeElement` nằm trong sheet; nhấn Tab liên tục không ra ngoài sheet; khi đóng, focus về nút đã mở; thuộc tính `role`, `aria-modal`, `aria-labelledby` đúng.
- [ ] C6-AC05 [claude] C6-04: Mở sheet Tìm câu theo từ khóa với 40 kết quả ở 375 px: nội dung cuộn trong sheet, tiêu đề đứng yên, trang phía sau không cuộn.
