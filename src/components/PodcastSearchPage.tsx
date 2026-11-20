import {useLoaderData} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../store/store.ts";
import {useEffect, useMemo} from "react";
import {fetchNews} from "../store/slice/newsSlice.ts";
import NewsListingPage from "./features/news/NewsListingPage.tsx";
import {RSS_CATEGORIES} from "../services/rssConfig.ts";
import PodcastHeader from "./layout/header/PodcastHeader.tsx";

interface PodcastSearchLoaderData {
    keyword: string;
}

const PODCAST_FEEDS = [
    ...new Set(Object.values(RSS_CATEGORIES.podcast.children).map((c) => c.feed)),
];

export default function PodcastSearchPage() {
    const {keyword} = useLoaderData() as PodcastSearchLoaderData;

    const dispatch = useDispatch<AppDispatch>();

    const feeds = useSelector((state: RootState) => state.news.feeds);

    useEffect(() => {
        PODCAST_FEEDS.forEach((feed) => dispatch(fetchNews(feed)));
    }, [dispatch]);

    const news = useMemo(() => {
        const seen = new Set<string>();
        return PODCAST_FEEDS.flatMap((feed) => feeds[feed] ?? []).filter((item) => {
            const id = item.guid || item.link;
            if (seen.has(id)) return false;
            seen.add(id);
            return true;
        });
    }, [feeds]);

    return (
        <>
            <PodcastHeader />
            <main className="flex-grow-1 mt-4">
                <NewsListingPage title="Podcast" news={news} searchKeyword={keyword} />
            </main>
        </>
    );
}