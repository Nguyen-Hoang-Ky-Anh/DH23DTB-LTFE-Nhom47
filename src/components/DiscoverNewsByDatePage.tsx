import {useSearchParams} from "react-router-dom";
import {findSectionByCategory} from "../config/newsSectionConfig.ts";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../store/slice/newsSlice.ts";
import type {AppDispatch, RootState} from "../store/store.ts";
import NewsListingPage from "./features/news/NewsListingPage.tsx";

export default function DiscoverNewsByDatePage() {
    const dispatch = useDispatch<AppDispatch>();
    const [searchParam, setSearchParams] = useSearchParams();

    const category = searchParam.get("category");
    const date = searchParam.get("date");

    const [selectedDate, setSelectedDate] = useState(date);

    useEffect(() => {
        setSelectedDate(date);
    }, [date]);

    const handleDateChange = (value: string) => {
        setSelectedDate(value);
    }

    const handleApplyDate = () => {
        if (!selectedDate || !category) return;

        setSearchParams(prev => {
            const next = new URLSearchParams(prev);

            next.set("date", selectedDate);

            return next;
        });
    };

    const matchedCategory = category
        ? findSectionByCategory(category)
        : undefined;

    const currentFeed = matchedCategory?.feed;

    useEffect(() => {
        if (currentFeed) {
            dispatch(fetchNews(currentFeed));
        }
    }, [dispatch, currentFeed])

    const news = useSelector((state: RootState) =>
        currentFeed ? state.news.feeds[currentFeed] : undefined
    );

    const filteredNews = news?.filter(item => {
        const publishedDate = new Date(item.pubDate)

        if (Number.isNaN(publishedDate.getTime())) {
            return false;
        }

        const itemDate = new Intl.DateTimeFormat('en-CA', {
            timeZone: 'Asia/Ho_Chi_Minh',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).format(publishedDate);

        return itemDate === date;
    })

    return (
        <>
            <NewsListingPage
                title={matchedCategory?.title ?? "Tin tức"}
                searchByDay={date ?? ""}
                news={filteredNews ?? []}
                selectedDate={selectedDate ?? ""}
                onDateChange={handleDateChange}
                onApplyDate={handleApplyDate}
            />
        </>
    )
}