import type {NewsItem} from "../../../services/rssService.ts";
import HomeHorizontalCard from "../../ui/HomeHorizontalCard.tsx";

interface HomeMainContentProps {
    news: NewsItem[],
}

export default function HomeMainContent({news}: HomeMainContentProps) {
    const list = news.slice(0, 21);
    const randomSeeMore = news[Math.floor(Math.random() * list.length)];
    return (
        <div>
            {list.map(((item, index) => (
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
