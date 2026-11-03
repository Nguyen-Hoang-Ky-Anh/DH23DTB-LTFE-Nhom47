import type {FeedName} from "../store/slice/newsSlice.ts";
import {RSS_FEEDS} from "../services/rssConfig.ts";

export interface NavLink {
    label: string;
    href: string;
}

interface NewsSectionConfig {
    title: string;
    href: string;
    icon: string;
    feed: FeedName;
    links: NavLink[];
    moreLinks?: NavLink[];
}

export const SECTIONS = {
    thoiSu: {
        title: "Thời sự",
        href: `/${RSS_FEEDS.categories.thoiSu}`,
        icon: "fa fa-newspaper",
        feed: "thoiSu",
        links: [
            { label: "Chính trị", href: "/thoi-su/chinh-tri" },
            { label: "Xã hội", href: "/thoi-su/xa-hoi" },
            { label: "Đô thị", href: "/thoi-su/do-thi" },
        ],
        moreLinks: [
            {
                label: "Chuyện thường ngày ở phường, xã",
                href: "/chuyen-thuong-ngay-o-phuong-xa",
            },
        ],
    },

    quocTe: {
        title: "Quốc tế",
        href: `/${RSS_FEEDS.categories.quocTe}`,
        icon: "fa-solid fa-globe",
        feed: "quocTe",
        links: [
            { label: "Người Việt đó đây", href: "/quoc-te/nguoi-viet-do-day" },
            { label: "Hay - lạ", href: "/quoc-te/hay-la" },
            { label: "Vấn đề nóng", href: "/quoc-te/van-de-nong" },
        ],
        moreLinks: [
            {
                label: "Hồ sơ",
                href: "/quoc-te/ho-so",
            },
            {
                label: "Quân sự - Quốc phòng",
                href: "/quoc-te/quan-su-quoc-phong",
            },
        ],
    },

    kinhTe: {
        title: "Kinh tế",
        href: `/${RSS_FEEDS.categories.kinhTe}`,
        icon: "fa-solid fa-chart-line",
        feed: "kinhTe",
        links: [
            { label: "Kinh doanh", href: "/kinh-te/kinh-doanh" },
            { label: "Tiêu dùng", href: "/kinh-te/tieu-dung" },
            { label: "Ôtô - Xe - Điện máy", href: "/kinh-te/oto-xe-dien-may" },
        ],
        moreLinks: [
            {
                label: "Bất động sản",
                href: "/kinh-te/bat-dong-san",
            },
            {
                label: "Tài chính - Chứng khoán",
                href: "/kinh-te/tai-chinh-chung-khoan",
            },
            {
                label: "Diễn đàn kinh tế",
                href: "/kinh-te/dien-dan-kinh-te",
            },
        ],
    },

    netZero: {
        title: "Net Zero",
        href: `/${RSS_FEEDS.categories.netZero}`,
        icon: "fa-solid fa-leaf",
        feed: "netZero",
        links: [
            { label: "Tin tức & Xu hướng", href: "/net-zero/tin-tuc-xu-huong" },
            { label: "Chuyển đổi xanh", href: "/net-zero/chuyen-doi-xanh" },
            { label: "Sống xanh", href: "/net-zero/song-xanh" },
        ],
        moreLinks: [
            {
                label: "Cẩm nang",
                href: "/net-zero/cam-nang",
            },
        ],
    },

    ai365: {
        title: "AI 365",
        href: `/${RSS_FEEDS.categories.ai365}`,
        icon: "fa-solid fa-microchip",
        feed: "ai365",
        links: [
            { label: "Công nghệ số", href: "/ai-365/cong-nghe-so" },
            { label: "Bảo mật", href: "/ai-365/bao-mat" },
            { label: "Mạng xã hội", href: "/ai-365/mang-xa-hoi" },
        ],
        moreLinks: [
            {
                label: "Giải trí cùng AI",
                href: "/ai-365/giai-tri-cung-ai",
            },
        ],
    },

    laoDong: {
        title: "Lao động",
        href: `/${RSS_FEEDS.categories.laoDong}`,
        icon: "fa-solid fa-person-digging",
        feed: "laoDong",
        links: [
            { label: "Công đoàn - Công nhân", href: "/lao-dong/cong-doan-cong-nhan" },
            { label: "Việc làm", href: "/lao-dong/viec-lam" },
            { label: "An sinh xã hội", href: "/lao-dong/an-sinh-xa-hoi" },
        ],
        moreLinks: [
            {
                label: "Chính sách",
                href: "/lao-dong/chinh-sach",
            },
            {
                label: "Xuất khẩu lao động",
                href: "/lao-dong/xuat-khau-lao-dong",
            },
        ],
    },

    phapLuat: {
        title: "Pháp luật",
        href: `/${RSS_FEEDS.categories.phapLuat}`,
        icon: "fa-solid fa-scale-balanced",
        feed: "phapLuat",
        links: [
            { label: "Luật sư của bạn", href: "/phap-luat/luat-su-cua-ban" },
            { label: "Truy nã", href: "/phap-luat/truy-na" },
            { label: "Chuyện pháp đình", href: "/phap-luat/chuyen-phap-dinh.rss" },
        ],
        moreLinks: [],
    },

    banDoc: {
        title: "Bạn đọc",
        href: `/${RSS_FEEDS.categories.banDoc}`,
        icon: "fa-solid fa-book",
        feed: "banDoc",
        links: [
            { label: "Những câu chuyện nhỏ", href: "/ban-doc/nhung-cau-chuyen-nho" },
            { label: "Nhà ở xã hội", href: "/ban-doc/nha-o-xa-hoi" },
            { label: "Tôi lên tiếng", href: "/ban-doc/toi-len-tieng" },
        ],
        moreLinks: [
            {
                label: "Góc ảnh bạn đọc",
                href: "/ban-doc/goc-anh-ban-doc",
            },
            {
                label: "Cuộc sống nhân ái",
                href: "/ban-doc/cuoc-song-nhan-ai",
            },
            {
                label: "Thư bạn đọc",
                href: "/ban-doc/thu-ban-doc",
            },
        ],
    },
}  satisfies Record<string, NewsSectionConfig>;

export type SectionKey = keyof typeof SECTIONS;