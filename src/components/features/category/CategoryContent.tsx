import DragCarousel from "../../ui/DragCarousel.tsx";
import type {FeedName} from "../../../services/rssConfig.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {useEffect} from "react";
import {fetchNews} from "../../../store/slice/newsSlice.ts";
import NewsSectionContent from "../news/NewsSectionContent.tsx";
import HomeHorizontalCard from "../home-content/HomeHorizontalCard.tsx";
import SideGroupCard from "./SideGroupCard.tsx";

const topics = [
    "50 năm thành phố mang tên Bác",
    "Tuyển sinh lớp 10 năm 2026",
    "Biến động giá vàng",
    "Thời tiết hôm nay",
    "Thi tốt nghiệp THPT 2026",
    "Cấp bách tiết kiệm năng lượng",
];

interface CategoryContentProps {
    feed: FeedName;
}

export default function CategoryContent({feed}: CategoryContentProps) {
    const dispatch = useDispatch<AppDispatch>();

    const news = useSelector(
        (state: RootState) => state.news.feeds[feed] ?? []
    )

    useEffect(() => {
        dispatch(fetchNews(feed))
    }, [dispatch, feed])

    const SIDE_START = 6;

    return (
        <div className="container">
            <NewsSectionContent
                layout="vertical"
                news={news}
            />

            <div className="row align-items-center">
                <div className="col-9 d-flex align-items-center gap-3 py-3 my-3 border-top border-bottom">
                    <i className="fa-solid fa-arrow-trend-up text-danger flex-shrink-0" />

                    <div className="flex-grow-1 overflow-hidden">
                        <DragCarousel showControls>
                            {topics.map(topic => (
                                <span
                                    className="bg-light py-1 px-3 text-nowrap"
                                    key={topic}
                                >
                                    {topic}
                                </span>
                            ))}
                        </DragCarousel>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-9 d-flex flex-column">
                    {news.slice(0, 15).map((item, index) => (
                        <HomeHorizontalCard
                            key={item.link}
                            index={index}
                            image={item.image}
                            title={item.title}
                            link={item.link}
                            description={item.description}
                            seeMore={news[index + 6]}
                        />
                    ))}
                </div>

                <div className="col-3 d-flex flex-column gap-4">
                    {[0, 1, 2].map(i => {
                        const start = SIDE_START + i * 3;
                        return (
                            <SideGroupCard
                                key={start}
                                feature={news[start]}
                                items={news.slice(start + 1, start + 3)}
                            />
                        );
                    })}

                    <SideGroupCard
                        feature={news[15]}
                        items={news.slice(16, 20)}
                        variant="text"
                    />
                </div>
            </div>
        </div>
    );
}