import DragCarousel from "../../ui/DragCarousel.tsx";
import type {FeedName} from "../../../services/rssConfig.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {useEffect, useState} from "react";
import {fetchNews} from "../../../store/slice/newsSlice.ts";
import NewsSectionContent from "../news/NewsSectionContent.tsx";
import HomeHorizontalCard from "../home-content/HomeHorizontalCard.tsx";
import SideGroupCard from "./SideGroupCard.tsx";
import WorldCupScores from "../world-cup/WorldCupScores.tsx";
import {Link} from "react-router-dom";
import {trendingTopics} from "../../../config/trendingConfig.ts";

interface CategoryContentProps {
    feed: FeedName;
    isWorldCup?: boolean;
}

export default function CategoryContent({feed, isWorldCup = false}: CategoryContentProps) {
    const dispatch = useDispatch<AppDispatch>();
    const news = useSelector((state: RootState) => state.news.feeds[feed]) ?? [];
    const [visibleCount, setVisibleCount] = useState(15);

    useEffect(() => {
        dispatch(fetchNews(feed));
    }, [dispatch, feed]);

    const SIDE_START = 6;

    return (
        <div className="container">
            <NewsSectionContent layout="vertical" news={news}/>

            {isWorldCup ? <WorldCupScores/> : (
                <div className="row align-items-center">
                    <div className="col-9 d-flex align-items-center gap-3 py-3 my-3 border-top border-bottom">
                        <div className="d-flex align-items-center gap-2 text-danger flex-shrink-0">
                            <i className="fa-solid fa-arrow-trend-up " />
                            <span className="fw-bold">TRENDING</span>
                        </div>

                        <div className="flex-grow-1 overflow-hidden">
                            <DragCarousel showControls>
                                {trendingTopics.map(topic => topic.href ? (
                                    <Link key={topic.title} to={topic.href} className="bg-light py-1 px-3 text-nowrap">
                                        {topic.title}
                                    </Link>
                                ) : (
                                    <span key={topic.title} className="bg-light py-1 px-3 text-nowrap">
                                        {topic.title}
                                    </span>
                                ))}
                            </DragCarousel>
                        </div>
                    </div>
                </div>
            )}

            <div className="row">
                <div className="col-9 d-flex flex-column">
                    {news.slice(0, visibleCount).map((item, index) => (
                        <HomeHorizontalCard
                            key={item.link}
                            // index={index}
                            image={item.image}
                            title={item.title}
                            link={item.link}
                            description={item.description}
                            seeMore={news[index + 6]}
                            linkArticles={!isWorldCup}
                        />
                    ))}
                    {visibleCount < news.length && (
                        <div className="text-center my-4">
                            <button type="button" className="btn btn-outline-secondary px-5"
                                    onClick={() => setVisibleCount(visibleCount + 15)}>
                                Xem thêm
                            </button>
                        </div>
                    )}
                </div>

                <div className="col-3 d-flex flex-column gap-4">
                    {[0, 1, 2].map(i => {
                        const start = SIDE_START + i * 3;
                        return (
                            <SideGroupCard
                                key={start}
                                feature={news[start]}
                                items={news.slice(start + 1, start + 3)}
                                linkArticles={!isWorldCup}
                            />
                        );
                    })}

                    <SideGroupCard
                        feature={news[15]}
                        items={news.slice(16, 20)}
                        variant="text"
                        linkArticles={!isWorldCup}
                    />
                </div>
            </div>
        </div>
    );
}