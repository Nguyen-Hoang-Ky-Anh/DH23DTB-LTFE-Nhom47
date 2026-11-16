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
import SportsScores from "../sports/SportsScores.tsx";
import type {NavLink} from "../../../config/newsSectionConfig.ts";
import CategorySideSection from "./CategorySideSection.tsx";

interface CategoryContentProps {
    feed: FeedName;
    sidebarLinks: NavLink[];
    isWorldCup?: boolean;
    isSports?: boolean;
}

export default function CategoryContent({feed, sidebarLinks, isWorldCup = false, isSports = false}: CategoryContentProps) {
    const dispatch = useDispatch<AppDispatch>();
    const news = useSelector((state: RootState) => state.news.feeds[feed]) ?? [];
    const [visibleCount, setVisibleCount] = useState(15);

    useEffect(() => {
        dispatch(fetchNews(feed));
    }, [dispatch, feed]);

    return (
        <div className="container">
            <NewsSectionContent layout="vertical" news={news}/>

            {isWorldCup ? <WorldCupScores/> : !isSports && (
                <div className="row align-items-center">
                    <div className="col-9 d-flex align-items-center gap-3 py-3 my-3 border-top border-bottom">
                        <div className="d-flex align-items-center gap-2 text-danger flex-shrink-0">
                            <i className="fa-solid fa-arrow-trend-up " />
                            <span className="fw-bold">TRENDING</span>
                        </div>

                        <div className="flex-grow-1 overflow-hidden">
                            <DragCarousel showControls>
                                {news.map(item => (
                                    <span title={item.title}
                                          className="bg-light py-1 px-3 text-truncate" style={{maxWidth: 260}}>
                                        {item.title}
                                    </span>
                                ))}
                            </DragCarousel>
                        </div>
                    </div>
                </div>
            )}

            <div className="row">
                <div className={`${isSports ? "col-12 col-lg-9" : "col-9"} d-flex flex-column`}>
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

                <div className={`${isSports ? "col-12 col-lg-3" : "col-3"} d-flex flex-column gap-3`}>
                    {isSports && <SportsScores sidebar/>}
                    {sidebarLinks.map(link => (
                        <CategorySideSection key={link.feed} link={link}/>
                    ))}
                    <SideGroupCard title="Đọc nhiều" feature={news[0]} items={news.slice(1, 5)}
                                   variant="text"/>
                </div>
            </div>
        </div>
    );
}
