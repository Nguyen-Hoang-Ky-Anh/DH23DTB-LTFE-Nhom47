import {useEffect} from "react";
import {RSS_FEEDS, type RSSFeed} from "../services/rssConfig.ts";

const feeds = {...RSS_FEEDS.categories, ...RSS_FEEDS.otherCategories};
const categoryOrder = [
    "home", "thoiSu", "quocTe", "laoDong", "banDoc", "netZero", "kinhTe", "sucKhoe",
    "giaoDuc", "phapLuat", "vanHoaVanNghe", "giaiTri", "theThao", "ai365", "duLichXanh",
    "phuNu", "giaDinh", "diaOc", "truyVetMXH", "hoiNongDapNhanh", "doiSong", "khoaHoc",
    "noiThang", "gocNhin", "maiVang", "docQuyen", "trichDanNong", "vungMien", "viTuyenDauChongDich",
    "vip", "tuHaoCoToQuoc", "duLich", "chuyenTuNoiCachLy", "bienDao", "video", "thiTruong",
    "lyTuongSong", "dongTienThongMinh", "moiTruong", "tuHaoHangViet", "ketQuaXoSo", "nguoiVietYeuSuViet",
    "podcast", "cuocVanDongSangTacCaKhuc", "toanCanhDaiHoiXIV", "NamMuoiNamThanhPhoMangTenBac",
    "bauCuDaiBieuQuocHoi", "WorldCup2026", "NLDNEWS", "SEAGame33",
] satisfies (keyof typeof feeds)[];

const categoryLabels: Record<string, string> = {
    "mai-vang": "Mai vàng",
    "hoi-nong-dap-nhanh": "Hỏi nóng - đáp nhanh",
    "danh-cho-ban-doc-vip": "DÀNH CHO BẠN ĐỌC VIP",
};

function feedLink({title, feed}: RSSFeed) {
    const url = `https://tuoitre.vn/nld/rss/${feed}.rss`;
    return (
        <a className="rss-feed-link" href={url}>
            <strong>{categoryLabels[feed] ?? title} - </strong>{url}
        </a>
    );
}

export default function RssPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container py-4 text-start rss-page">
            <title>Danh mục RSS | Người Lao Động</title>
            <h1>Báo điện tử Tuổi Trẻ và các kênh tin RSS Feeds</h1>
            <div className="rss-guide mb-3">
                <p>Sử dụng RSS của Báo điện tử Tuổi Trẻ sẽ giúp bạn luôn có được những thông tin mới nhất, nóng nhất trong và ngoài nước! Thêm một kênh RSS của Báo điện tử Tuổi Trẻ vào trang My Yahoo!</p>
                <p>Nhấn vào nút "Add to My Yahoo!" cùng dòng với mục bạn muốn trong bảng danh mục RSS của Báo điện tử Tuổi Trẻ</p>
                <p>Làm theo các chỉ dẫn để thêm mục RSS tương ứng của Báo điện tử Tuổi Trẻ vào trang My Yahoo của bạn. Sử dụng chương trình đọc RSS (RSS Reader)</p>
                <p>Chép (copy) đường dẫn (URL) tương ứng với kênh RSS mà bạn ưa thích</p>
                <p>Dán (paste) URL vào chương trình đọc RSS</p>
            </div>
            <ul className="rss-directory list-unstyled border rounded-2 mb-3">
                {categoryOrder.map(key => {
                    const category = feeds[key];
                    const children = [...Object.values(category.children), ...Object.values(category.extraChildren)];
                    return (
                        <li key={key}>
                            {children.length ? (
                                <details>
                                    <summary className="rss-row">
                                        {feedLink(category)}
                                        <span className="rss-toggle">
                                            <span className="rss-more">Xem thêm</span>
                                            <span className="rss-less">Thu gọn</span>
                                        </span>
                                    </summary>
                                    <ul className="rss-subcategories list-unstyled mb-0">
                                        {children.map(child => <li key={child.feed}>{feedLink(child)}</li>)}
                                    </ul>
                                </details>
                            ) : (
                                <div className="rss-row">{feedLink(category)}</div>
                            )}
                        </li>
                    );
                })}
            </ul>
            <div className="rss-guide">
                <h2>RSS là gì?</h2>
                <p>
                    <strong>RSS</strong> (Really Simple Syndication) là định dạng dữ liệu dựa theo chuẩn XML được sử dụng để chia sẻ và phát tán nội dung Web. Việc sử dụng các chương trình đọc tin (News Reader, RSS Reader hay RSS Feeds) sẽ giúp bạn luôn xem được nhanh chóng tin tức mới nhất từ Báo điện tử Tuổi Trẻ. Mỗi tin dưới dạng RSS sẽ gồm: Tiêu đề, tóm tắt nội dung và đường dẫn nối đến trang Web chứa nội dung đầy đủ của tin.
                </p>
                <h2>Chương trình đọc RSS là gì?</h2>
                <p>
                    <strong>RSS Reader</strong> là phần mềm có chức năng tự động lấy tin tức đã được cấu trúc theo định dạng RSS. Một số phần mềm đọc RSS cho phép bạn lập lịch cập nhật tin tức. Với chương trình đọc RSS, bạn có thể nhấn chuột vào tiêu đề của 1 tin để đọc phần tóm tắt hoặc mở ra nội dung của toàn bộ tin trong một cửa sổ trình duyệt mặc định.
                </p>
                <p>Có rất nhiều phần mềm phục vụ khai thác tin qua định dạng RSS, bạn có thể tham khảo bảng các chương trình đọc RSS bên cạnh và lựa chọn cái bạn thích nhất.</p>
                <p>Nếu đang sử dụng FireFox, bạn có thể tải chương trình Wizz RSS từ địa chỉ https://addons.mozilla.org/firefox/424/</p>
                <h2>Điều kiện sử dụng</h2>
                <p>Báo điện tử Tuổi Trẻ không chịu trách nhiệm về các nội dung của các trang khác ngoài Báo điện tử Tuổi Trẻ được dẫn trong trang này. Khi sử dụng lại các tin lấy từ Báo điện tử Tuổi Trẻ, bạn phải ghi rõ nguồn tin là "Theo Báo điện tử Tuổi Trẻ" hoặc "Báo điện tử Tuổi Trẻ".</p>
            </div>
        </div>
    );
}
