import { type FeedName, RSS_CATEGORIES } from "../services/rssConfig.ts";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PodcastCarousel from "./ui/PodcastCarousel.tsx";
import PodcastSection from "./features/podcast/PodcastSection.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
import PodcastHeader from "./layout/header/PodcastHeader.tsx";

interface PodcastSectionConfig {
    title: string;
    feed: FeedName;
    layout?: "grid" | "featured";
    hasSubContent?: boolean;
    subContentTitle?: string;
    rows?: number;
    showMore?: boolean;
    moreLink?: string;
}

const PODCAST_SECTIONS: PodcastSectionConfig[] = [
    {
        title: "Tuần này có gì?",
        feed: RSS_CATEGORIES.podcast.children["11Gio30"].feed,
        layout: "grid",
        rows: 1,
    },
    {
        title: "11 giờ 30",
        feed: RSS_CATEGORIES.podcast.children["11Gio30"].feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        title: "Giới trẻ",
        feed: RSS_CATEGORIES.podcast.children.gioiTre.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        title: "Bàn tròn phái đẹp",
        feed: RSS_CATEGORIES.podcast.children.banTronPhaiDep.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        title: "Cầu vồng hạnh phúc",
        feed: RSS_CATEGORIES.podcast.children.cauVongHanhPhuc.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        title: "Sau giờ làm",
        feed: RSS_CATEGORIES.podcast.children.sauGioLam.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        title: "Doanh nghiệp tự giới thiệu",
        feed: RSS_CATEGORIES.podcast.children.doanhNghiepTuGioiThieu.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        title: "Sức khỏe của bạn",
        feed: RSS_CATEGORIES.podcast.children.sucKhoeCuaBan.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
    {
        title: "Sáng tác ca khúc Đất nước trọn niềm vui",
        feed: RSS_CATEGORIES.podcast.children.sangTacCaKhucDatNuocTronNiemVui.feed,
        layout: "featured",
        hasSubContent: true,
        rows: 1,
    },
];

export default function PodcastPage() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const feeds = useSelector(
        (state: RootState) => state.news.feeds
    );

    return (
        <>
            <PodcastHeader />

            <main className="flex-grow-1">
                <PodcastCarousel sections={PODCAST_SECTIONS} />
                <div className="container mt-4">
                    <div className="mx-5">
                        {PODCAST_SECTIONS.map((section) => (
                            <PodcastSection
                                key={section.feed}
                                title={section.title}
                                podcasts={feeds[section.feed] ?? []}
                                layout={section.layout}
                                hasSubContent={section.hasSubContent}
                                subContentTitle={section.subContentTitle}
                                rows={section.rows}
                                showMore={section.showMore}
                                moreLink={section.moreLink}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}