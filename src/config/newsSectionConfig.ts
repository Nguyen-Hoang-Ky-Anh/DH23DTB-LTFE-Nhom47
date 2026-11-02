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

export const SECTIONS: Record<string, NewsSectionConfig> = {
    thoiSu: {
        title: "Thời sự",
        icon: "fa-newspaper",
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
};

export type SectionKey = keyof typeof SECTIONS;