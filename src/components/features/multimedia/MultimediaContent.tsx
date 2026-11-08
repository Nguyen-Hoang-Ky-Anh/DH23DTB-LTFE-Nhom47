import Card from "../../ui/Card.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store.ts";
import {FEED_PATHS, type FeedName} from "../../../services/rssConfig.ts";

const multimediaContent = [
    { label: "VIP", feed: "vip" },
    { label: "Podcast", feed: "podcast" },
    { label: "AI 365", feed: "ai365" },
    { label: "Net Zero", feed: "netZero" },
    { label: "Thời sự", feed: "thoiSu" },
    { label: "Kinh tế", feed: "kinhTe" },
    { label: "Đời sống", feed: "doiSong" },
] satisfies { label: string; feed: FeedName }[];

export function MultimediaContent() {
    const feeds = useSelector((state: RootState) => state.news.feeds);

    const multiMediaItems = multimediaContent.map(item => {
        const article = feeds[item.feed]?.[0];
        const path = FEED_PATHS[item.feed];

        return {
            ...item,
            article,
            path
        };
    });

    const filteredItems =
        multiMediaItems.filter(item => item.article !== undefined);

    if (filteredItems.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(
        Math.random() * filteredItems.length
    );

    const featuredCard = filteredItems[randomIndex];

    if (!featuredCard?.article) {
        return null;
    }

    const remainedCards = filteredItems.filter(
        (_, index) => index !== randomIndex
    );

    return (
        <div className="row g-4 text-white pb-5">
            <div className="col-12 col-lg-4">
                <Card
                    image={featuredCard.article.image}
                    title={featuredCard.article.title}
                    description={featuredCard.article.description}
                    feature
                />
            </div>

            <div className="col-12 col-lg-8">
                <div className="row g-4">
                    {remainedCards.map(card => {
                        if (!card.article) return null;

                        return (
                            <div className="col-12 col-lg-4 col-sm-6" key={card.feed}>
                                <Card
                                    image={card.article.image}
                                    title={card.article.title}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}