import type {NewsItem} from "../../../services/rssService.ts";
import HomeHorizontalCard from "../../ui/HomeHorizontalCard.tsx";

interface HomeMainContentProps {
    news: NewsItem[],
}

export default function HomeMainContent({news}: HomeMainContentProps) {
    const randomSeeMore = news[Math.floor(Math.random() * news.length)];
    return (
        <div>
            {news.map(((item, index) => (
                <HomeHorizontalCard
                    index={index}
                    image={item.image}
                    title={item.title}
                    link={item.link}
                    description={item.description}
                    seeMore = {randomSeeMore}
                />
            )))}
        </div>
    )
}
