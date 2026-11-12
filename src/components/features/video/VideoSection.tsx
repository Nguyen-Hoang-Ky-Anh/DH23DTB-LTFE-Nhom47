import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {useEffect} from "react";
import {type FeedName, fetchNews} from "../../../store/slice/newsSlice.ts";
import Card from "../../ui/Card.tsx";
import HorizontalCard from "../../ui/HorizontalCard.tsx";

interface VideoSectionProps {
    title: string,
    feed: FeedName,
    hasSubContent?: boolean,
    rows?: number
}

const COLUMNS = 3;
const SIDE_NEWS_COUNT = 5;

export default function VideoSection({title, feed, hasSubContent, rows = 2}: VideoSectionProps) {
    const dispatch = useDispatch<AppDispatch>();
    const news = useSelector((s: RootState) => s.news.feeds[feed]) ?? [];

    useEffect(() => {
        dispatch(fetchNews(feed));
    }, [dispatch, feed]);

    const size = rows * COLUMNS;
    const numberOfNewsInMainContent = news.slice(0, size);
    const numberOfNewsInSideContent = news.slice(size, size + SIDE_NEWS_COUNT)

    return (
        <section className="mt-4">
            <h5 className="main-title text-start border-bottom pb-2">{title}</h5>
            <div className="row">
                <div className="col-9">
                    <div className="row g-3">
                        {numberOfNewsInMainContent.map(item => (
                            <div key={item.link} className="col-4">
                                <Card
                                    image={item.image}
                                    title={item.title}
                                    isVideo
                                    date={new Date(item.pubDate).toLocaleDateString("vi-VN")}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {hasSubContent && (
                    <div className="col-3">
                        {numberOfNewsInSideContent.map(item => (
                            <HorizontalCard key={item.link} image={item.image} title={item.title}/>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}