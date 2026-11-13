import {useEffect} from "react";
import {useLoaderData} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import type {FeedName} from "../services/rssConfig.ts";
import {fetchNews} from "../store/slice/newsSlice.ts";
import type {AppDispatch, RootState} from "../store/store.ts";
import NewsListingPage from "./features/news/NewsListingPage.tsx";

export default function TrendingPage() {
    const {title, feed} = useLoaderData<{title: string; feed: FeedName}>();
    const dispatch = useDispatch<AppDispatch>();
    const news = useSelector((state: RootState) => state.news.feeds[feed]);

    useEffect(() => {
        dispatch(fetchNews(feed));
    }, [dispatch, feed]);

    return <NewsListingPage title={title} news={news ?? []}/>;
}
