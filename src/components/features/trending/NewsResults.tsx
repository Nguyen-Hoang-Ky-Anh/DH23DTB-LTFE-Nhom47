import {useState} from "react";
import type {NewsItem} from "../../../services/rssService.ts";
import HorizontalCard from "../../ui/HorizontalCard.tsx";

interface NewsResultsProps {
    news: NewsItem[];
    initialCount?: number;
}

export default function NewsResults({news, initialCount = 15}: NewsResultsProps) {
    const [visibleCount, setVisibleCount] = useState(initialCount);

    return (
        <div className="news-results">
            {news.slice(0, visibleCount).map(item => (
                <HorizontalCard key={item.guid} image={item.image} title={item.title} link={item.link}
                                description={item.description} showDescription/>
            ))}
            {visibleCount < news.length && (
                <div className="text-center my-4">
                    <button type="button" className="btn btn-outline-secondary px-5" onClick={() => setVisibleCount(visibleCount + 15)}>
                        Xem thêm
                    </button>
                </div>
            )}
        </div>
    );
}
