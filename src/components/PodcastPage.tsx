import {type FeedName, RSS_CATEGORIES} from "../services/rssConfig.ts";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import PodcastCarousel from "./ui/PodcastCarousel.tsx";

export const PODCAST_SECTIONS: {title: string; feed: FeedName; hasSubContent?: boolean; subContentTitle?:string, rows?: number}[] = [
    {title: "11 giờ 30", feed: RSS_CATEGORIES.podcast.children["11Gio30"].feed, hasSubContent: true,
        subContentTitle:"", rows: 2},
    {title: "Giới trẻ", feed: RSS_CATEGORIES.podcast.children.gioiTre.feed, hasSubContent: true,
        subContentTitle:"", rows: 2},
    {title: "Bàn tròn phái đẹp", feed: RSS_CATEGORIES.podcast.children.banTronPhaiDep.feed, hasSubContent: true,
        subContentTitle:"", rows: 2},
    {title: "Cầu vồng hạnh phúc", feed: RSS_CATEGORIES.podcast.children.cauVongHanhPhuc.feed, hasSubContent: true,
        subContentTitle:"", rows: 2},
    {title: "Sau giờ làm", feed: RSS_CATEGORIES.podcast.children.sauGioLam.feed, hasSubContent: true,
        subContentTitle:"", rows: 2},
    {title: "Doanh nghiệp tự giới thiệu", feed: RSS_CATEGORIES.podcast.children.doanhNghiepTuGioiThieu.feed, hasSubContent: true,
        subContentTitle:"", rows: 2},
    {title: "Sức khỏe của bạn", feed: RSS_CATEGORIES.podcast.children.sucKhoeCuaBan.feed, hasSubContent: true,
        subContentTitle:"", rows: 2},
    {title: "Sáng tác ca khúc Đất nước trọn niềm vui", feed: RSS_CATEGORIES.podcast.children.sangTacCaKhucDatNuocTronNiemVui.feed, hasSubContent: true,
        subContentTitle:"", rows: 2},
];

export default function PodcastPage() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    const feedNames = PODCAST_SECTIONS.map((section) => section.feed);

    return (
        <main className="flex-grow-1">
            <PodcastCarousel sections={PODCAST_SECTIONS} />
        </main>
    )
}