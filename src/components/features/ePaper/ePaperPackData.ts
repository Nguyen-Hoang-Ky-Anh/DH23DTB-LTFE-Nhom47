export interface EPaperPack {
    name: string;
    image: string;
    price: number;
    perDay: number;
    benefits: string[];
}

export const E_PAPER_PACKS: EPaperPack[] = [
    {name: "1 kỳ", image: "https://static.mediacdn.vn/nld.com.vn/images/muagoi_epaper.png", price: 5000, perDay: 5000, benefits: ["Xem 1 kỳ"]},
    {name: "7 kỳ", image: "https://static.mediacdn.vn/nld.com.vn/images/muagoi_epaper.png", price: 20000, perDay: 2857, benefits: ["Gói 7 kỳ"]},
    {name: "01 tháng", image: "https://static.mediacdn.vn/nld.com.vn/images/muagoi_epaper.png", price: 50000, perDay: 1667,
        benefits: ["Tặng 01 áo mưa (100 độc giả đăng ký đầu tiên)"]},
    {name: "03 tháng", image: "https://static.mediacdn.vn/nld.com.vn/images/muagoi_epaper.png", price: 100000, perDay: 1111,
        benefits: ["Tặng 01 áo mưa (100 độc giả đăng ký đầu tiên)"]},
    {name: "06 tháng", image: "https://static.mediacdn.vn/nld.com.vn/images/muagoi_epaper.png", price: 200000, perDay: 1111,
        benefits: ["Tặng xem tin/bài Dành bạn đọc VIP (3 tháng)",
            "Tặng 02 áo mưa (100 độc giả đăng ký đầu tiên)"]},
    {name: "12 tháng", image: "https://static.mediacdn.vn/nld.com.vn/images/muagoi_epaper.png", price: 300000, perDay: 822,
        benefits: ["Tặng xem tin/bài Dành bạn đọc VIP (6 tháng)",
            "Tặng 02 áo mưa + 01 nón bảo hiểm/cân điện tử (100 độc giả đăng ký đầu tiên)"]},
    {name: "24 tháng", image: "https://static.mediacdn.vn/nld.com.vn/images/muagoi_epaper.png", price: 500000, perDay: 685,
        benefits: ["Tặng xem tin/bài Dành bạn đọc VIP (12 tháng)",
            "Tặng 02 áo mưa + 01 nón bảo hiểm/cân điện tử (100 độc giả đăng ký đầu tiên)"]},
];