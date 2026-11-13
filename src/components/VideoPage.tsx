import VideoSecondHalf from "./features/video/VideoSecondHalf.tsx";
import {type FeedName, RSS_CATEGORIES} from "../services/rssConfig.ts";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export const VIDEO_SECTIONS: {title: string; feed: FeedName; hasSubContent?: boolean; rows?: number}[] = [
    {title: "Thời sự quốc tế", feed: RSS_CATEGORIES.video.children.thoiSuQuocTe.feed, hasSubContent: false, rows: 2},
    {title: "Mới cập nhật", feed: RSS_CATEGORIES.video.children.thoiSuTrongNuoc.feed, hasSubContent: true, rows: 4},
];

export function VideoPage() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    return (
        <main className="flex-grow-1">
            <VideoSecondHalf/>
        </main>
    )
}