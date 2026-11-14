import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews } from "../store/slice/newsSlice.ts";
import type { AppDispatch, RootState } from "../store/store.ts";
import type { FeedName } from "../services/rssConfig.ts";

import NewsListingPage from "./features/news/NewsListingPage.tsx";

interface SearchLoaderData {
    title: string;
    feed: FeedName;
    keyword: string;
}

export default function SearchPage() {
    const { title, feed, keyword } = useLoaderData() as SearchLoaderData;

    const dispatch = useDispatch<AppDispatch>();

    const news = useSelector(
        (state: RootState) => state.news.feeds[feed]
    );

    useEffect(() => {
        dispatch(fetchNews(feed));
    }, [dispatch, feed]);

    return (
        <NewsListingPage
            title={title}
            news={news ?? []}
            searchKeyword={keyword}
        />
    );
}