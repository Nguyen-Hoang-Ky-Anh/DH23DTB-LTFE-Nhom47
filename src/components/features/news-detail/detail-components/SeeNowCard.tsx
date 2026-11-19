import { type FeedName } from "../../../../services/rssConfig.ts";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../../store/store.ts";
import { useEffect } from "react";
import { fetchNews } from "../../../../store/slice/newsSlice.ts";

interface SeeNowCardProps {
    feedName: FeedName;
}

export default function SeeNowCard({ feedName }: SeeNowCardProps) {
    const dispatch = useDispatch<AppDispatch>();

    const news = useSelector(
        (state: RootState) => state.news.feeds[feedName]
    ) ?? [];

    const selectedNews = news[0];

    useEffect(() => {
        dispatch(fetchNews(feedName));
    }, [dispatch, feedName]);

    if (!selectedNews) {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    Đang tải tin tức...
                </div>
            </div>
        );
    }

    return (
        <div className="card" style={{ width: "18rem", fontFamily: "MarriWeather", backgroundColor: "#EAEAEA"}}>
            <img
                src={selectedNews.image}
                alt={selectedNews.title}
            />

            <div className="card-body">
                <h5 className="card-title text-start fw-bold">
                    {selectedNews.title}
                </h5>

                <div className="d-flex justify-content-end mt-3">
                    <a href={selectedNews.link} className="see-now-btn">
                        <span>XEM NGAY</span>
                        <span className="see-now-icon">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}