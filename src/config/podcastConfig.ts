import {type FeedName, RSS_CATEGORIES} from "../services/rssConfig.ts";

const children = RSS_CATEGORIES.podcast.children;

export interface PodcastSectionConfig {
    slug?: string;
    title: string;
    feed: FeedName;
    layout?: "grid" | "featured";
    hasSubContent?: boolean;
    subContentTitle?: string;
    rows?: number;
    showMore?: boolean;
    moreLink?: string;
}

export const PODCAST_SECTIONS: PodcastSectionConfig[] = [
    {
        title: "Tuần này có gì?",
        feed: children["11Gio30"].feed,
        layout: "grid",
        rows: 1,
    },
    {
        slug: "11-gio-30",
        title: "11 giờ 30",
        feed: children["11Gio30"].feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        slug: "gioi-tre",
        title: "Giới trẻ",
        feed: children.gioiTre.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        slug: "ban-tron-phai-dep",
        title: "Bàn tròn phái đẹp",
        feed: children.banTronPhaiDep.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        slug: "cau-vong-hanh-phuc",
        title: "Cầu vồng hạnh phúc",
        feed: children.cauVongHanhPhuc.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        slug: "sau-gio-lam",
        title: "Sau giờ làm",
        feed: children.sauGioLam.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        slug: "doanh-nghiep-tu-gioi-thieu",
        title: "Doanh nghiệp tự giới thiệu",
        feed: children.doanhNghiepTuGioiThieu.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        slug: "suc-khoe-cua-ban",
        title: "Sức khỏe của bạn",
        feed: children.sucKhoeCuaBan.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        title: "Sáng tác ca khúc Đất nước trọn niềm vui",
        feed: children.sangTacCaKhucDatNuocTronNiemVui.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
];

export const findPodcastSection = (slug?: string) =>
    slug ? PODCAST_SECTIONS.find((s) => s.slug === slug) : undefined;