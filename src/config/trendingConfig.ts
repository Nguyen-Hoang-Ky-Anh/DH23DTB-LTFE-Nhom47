import {RSS_FEEDS} from "../services/rssConfig.ts";

interface TrendingTopic {
    title: string;
    href?: string;
    feed?: string;
}

export const TRENDING_TOPICS: TrendingTopic[] = [
    {
        title: "50 năm thành phố mang tên Bác",
        href: "/dong-su-kien/50-nam-thanh-pho-mang-ten-bac",
        feed: RSS_FEEDS.otherCategories.NamMuoiNamThanhPhoMangTenBac.feed,
    },
    {
        title: "Tuyển sinh lớp 10 năm 2026",
        href: "/dong-su-kien/tuyen-sinh-lop-10-nam-2026",
        feed: RSS_FEEDS.categories.giaoDuc.children.tuyenSinh.feed,
    },
    {
        title: "Biến động giá vàng",
    },
    {
        title: "Thời tiết hôm nay",
    },
    {
        title: "Thi tốt nghiệp THPT 2026",
    },
    {
        title: "Cấp bách tiết kiệm năng lượng",
    },
    {
        title: "Xung đột Nga - Ukraine",
    },
    {
        title: "Giải Pickleball Báo Người Lao Động 2026",
    },
    {
        title: 'Vườn chim Hai Chìa "kêu cứu"',
    },
];
