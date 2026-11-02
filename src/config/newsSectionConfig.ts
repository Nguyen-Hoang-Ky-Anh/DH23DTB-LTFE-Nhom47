import type {FeedName} from "../store/slice/newsSlice.ts";
export interface NavLink {
    label: string;
    href: string;
}

interface NewsSectionConfig {
    title: string;
    icon: string;
    feed: FeedName;
    links: NavLink[];
    moreLinks?: NavLink[];
}

export const SECTIONS = {
    thoiSu: {
        title: "Thời sự",
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
        icon: "fa-solid fa-globe",
        feed: "quocTe",
        links: [
            { label: "Người Việt đó đây", href: "#" },
            { label: "Hay - lạ", href: "#" },
            { label: "Vấn đề nóng", href: "#" },
        ],
        moreLinks: [
            {
                label: "Hồ sơ",
                href: "#",
            },
            {
                label: "Quân sự - Quốc phòng",
                href: "#",
            },
        ],
    },

    kinhTe: {
        title: "Kinh tế",
        icon: "fa-solid fa-chart-line",
        feed: "kinhTe",
        links: [
            { label: "Kinh doanh", href: "#" },
            { label: "Tiêu dùng", href: "#" },
            { label: "Ôtô - Xe - Điện máy", href: "#" },
        ],
        moreLinks: [
            {
                label: "Bất động sản",
                href: "#",
            },
            {
                label: "Tài chính - Chứng khoán",
                href: "#",
            },
            {
                label: "Diễn đàn kinh tế",
                href: "#",
            },
        ],
    },

    netZero: {
        title: "Net Zero",
        icon: "fa-solid fa-leaf",
        feed: "netZero",
        links: [
            { label: "Tin tức & Xu hướng", href: "#" },
            { label: "Chuyển đổi xanh", href: "#" },
            { label: "Sống xanh", href: "#" },
        ],
        moreLinks: [
            {
                label: "Cẩm nang",
                href: "#",
            },
        ],
    },

    ai365: {
        title: "AI 365",
        icon: "fa-solid fa-microchip",
        feed: "ai365",
        links: [
            { label: "Công nghệ số", href: "#" },
            { label: "Bảo mật", href: "#" },
            { label: "Mạng xã hội", href: "#" },
        ],
        moreLinks: [
            {
                label: "Giải trí cùng AI",
                href: "#",
            },
        ],
    },

    laoDong: {
        title: "Lao động",
        icon: "fa-solid fa-person-digging",
        feed: "laoDong",
        links: [
            { label: "Công đoàn - Công nhân", href: "#" },
            { label: "Việc làm", href: "#" },
            { label: "An sinh xã hội", href: "#" },
        ],
        moreLinks: [
            {
                label: "Chính sách",
                href: "#",
            },
            {
                label: "Xuất khẩu lao động",
                href: "#",
            },
        ],
    },

    phapLuat: {
        title: "Pháp luật",
        icon: "fa-solid fa-scale-balanced",
        feed: "phapLuat",
        links: [
            { label: "Luật sư của bạn", href: "#" },
            { label: "Truy nã", href: "#" },
            { label: "Chuyện pháp đình", href: "#" },
        ],
        moreLinks: [],
    },

    banDoc: {
        title: "Bạn đọc",
        icon: "fa-solid fa-book",
        feed: "banDoc",
        links: [
            { label: "Những câu chuyện nhỏ", href: "#" },
            { label: "Nhà ở xã hội", href: "#" },
            { label: "Tôi lên tiếng", href: "#" },
        ],
        moreLinks: [
            {
                label: "Góc ảnh bạn đọc",
                href: "#",
            },
            {
                label: "Cuộc sống nhân ái",
                href: "#",
            },
            {
                label: "Thư bạn đọc",
                href: "#",
            },
        ],
    },
}  satisfies Record<string, NewsSectionConfig>;

export type SectionKey = keyof typeof SECTIONS;