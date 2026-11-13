import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";
import fetchRSS, {type NewsItem} from "../services/rssService.ts";
import NewsListingPage from "./features/news/NewsListingPage.tsx";

export default function MultimediaItemPage() {
    const {title, feed} = useLoaderData<{title: string; feed: string}>();

     const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        fetchRSS(feed).then(setNews).catch(() => setNews([]));
    }, [feed]);

    return <NewsListingPage title={title} news={news} showHighlights/>;

}


