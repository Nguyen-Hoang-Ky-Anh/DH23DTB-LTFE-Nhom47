import type {NewsItem} from "../../../services/rssService.ts";
import HomeHorizontalCard from "./HomeHorizontalCard.tsx";

interface HomeMainContentProps {
    news: NewsItem[],
}

export default function HomeMainContent({news}: HomeMainContentProps) {
    const seeMore = news.pop();
    return (
        <div>
            {news.map(((item, index) => (
                <HomeHorizontalCard
                    index={index}
                    image={item.image}
                    title={item.title}
                    link={item.link}
                    description={item.description}
                    seeMore = {seeMore}
                />
            )))}
        </div>
    )
}
