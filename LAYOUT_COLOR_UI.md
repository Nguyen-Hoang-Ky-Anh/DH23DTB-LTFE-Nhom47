# BỐ CỤC (LAYOUT)

## 1. Các trang hiển thị bên ngoài (Trang chủ / Chuyên mục)

### Phần Header
*   **Bố cục chung:** `Flex column`
*   **Row đầu tiên:** Định dạng `justify-content: space-between`.
    *   *Bên trái:* Tên báo chính | Báo phụ | Ngày tháng.
    *   *Bên phải:* Các thẻ `<a>` điều hướng đến trang phụ (Podcast, Youtube, Cần biết, Quảng cáo) và các nút hỗ trợ (Search, Đăng ký).
*   **Row thứ hai:** Kích thước nhỏ hơn row đầu, định dạng `flex-direction: row` (chứa menu điều hướng chính).

### Phần Sub-header
*   **Bố cục:** `Flexbox`.
*   *Bên trái:* Title chuyên mục kèm theo các sub-links (chuyên mục con).
*   *Bên phải:* Không gian dành cho quảng cáo.

### Vùng Nội dung chính (Container tỉ lệ 8 / 4)
*   **Phần bên trái (Chiếm 8 phần):**
    *   *Tin nổi bật:* Chia tỉ lệ `7 / 5` hoặc `8 / 4` (Hình ảnh / Nội dung).
    *   *Hàng 3 card nhỏ bên dưới:* Định dạng `flex row` với `gap` cân bằng nhau.
*   **Phần bên phải (Chiếm 4 phần):**
    *   Tin đầu tiên hiển thị ảnh lớn (Feature card).
    *   Các tin tiếp theo là card không hình, chỉ hiển thị Title.

### Vùng Xu hướng / Trending (Container tỉ lệ 9 / 3)
*   **Phần bên trái (Chiếm 9 phần):**
    *   Chứa danh sách các tin trending.
    *   Mỗi card nhỏ bên trong chia tỉ lệ `4 / 8` (hoặc `3 / 9` nếu hình quá to) cho Hình ảnh / Nội dung.
*   **Phần bên phải (Chiếm 3 phần - Dạng Note):**
    *   Tin đầu tiên có hình nhỏ.
    *   Các tin sau chỉ hiển thị text.

### Phần Footer
*   **Bố cục:** Chia làm 3 rows.
    *   **Row 1:** Chứa các thẻ `<a>` liên kết điều hướng toàn trang.
    *   **Row 2:** Gồm 2 thẻ `div` được định dạng `justify-content: space-between`.
        *   *Div 1 (Trái):* `flex-direction: row`, chứa Image (`200px x 71px`) và Content (`flex-direction: column`).
        *   *Div 2 (Phải):* `flex-direction: row`, chứa Content (`flex-direction: column`) và cụm Icons (`flex` kèm `gap`).
    *   **Row 3:** Thông tin bản quyền (Copyright).

---

## 2. Trang đọc báo (Article Page)

*   **Bố cục tổng thể:** Container tỉ lệ `9 / 3`
*   **Phần bên trái (Chiếm 9 phần - Nội dung bài báo):**
    *   *Chi tiết bài báo:* Bố cục tùy ý, ưu tiên tính thẩm mỹ và dễ đọc.
    *   *Tin mới cùng chuyên mục (Bên dưới bài viết):* Bố cục dạng `Grid 2x3`, các card có đầy đủ hình và title bố trí theo chiều dọc.
*   **Phần bên phải (Chiếm 3 phần - Dạng Note):**
    *   Danh sách các card nằm ngang, bao gồm hình thu nhỏ và title.

---

# HỆ THỐNG MÀU SẮC (COLOR PALETTE)

*   **Màu Primary (Chủ đạo):** `#c90000` hoặc `#d22222`
*   **Màu Nền (Background):**
    *   Background Body: `#454545`
    *   Background Note/Box: *Màu xám nhạt hơn màu Background Body*
*   **Màu Chữ (Text):**
    *   Text Title chính: `white`
    *   Text Sub-title: `#4f4f4f`
    *   Text Sapo (Đoạn trích dẫn ngắn): `#555555`
    *   Text Card-title: `#292929`
    *   Text Card-sub-title: `#454545`
*   **Màu Viền (Border):**
    *   Đường kẻ phân cách các tin: `#ebebeb`

---

# NGHỆ THUẬT CHỮ (TYPOGRAPHY)

*   **Font-family mặc định:** `Roboto`, `sans-serif`

### Cấu trúc Kích thước & Trọng lượng (Size & Weight)
*   **Tiêu đề tin chính lớn nhất (H1):**
    *   Size: `24px - 28px` | Weight: `700` | Line-height: `1.4`
*   **Tiêu đề tin phụ (H2, H3):**
    *   Size: `16px - 18px` | Weight: `600` hoặc `700` | Line-height: `1.4`
*   **Nội dung trích dẫn (Sapo):**
    *   Size: `14px` hoặc `15px` | Weight: `400` | Line-height: `1.5`
*   **Thời gian / Nguồn tin:**
    *   Size: `12px` hoặc `13px` | Weight: `400`

---

# KHOẢNG CÁCH (SPACING: GAP, PADDING, MARGIN)

*   **Khoảng cách chung (Gap):** `~24px`
*   **Margin Bottom (`mb`):**
    *   Giữa các card tin với nhau trong cùng 1 list: `16px`
    *   Dưới mỗi Tiêu đề (Sub-header): `16px`
    *   Giữa các Section (khu vực) lớn: `48px`
*   **Padding trong các khối (Box/Card):** `16px` hoặc `24px`