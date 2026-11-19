import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store/store.ts";
import {fetchNews} from "../../store/slice/newsSlice.ts";
import type {FeedName} from "../../services/rssConfig.ts";
import DragCarousel from "./DragCarousel.tsx";

interface PodcastSection {
    title: string;
    feed: FeedName;
}

interface PodcastCarouselProps {
    sections: PodcastSection[];
}

export default function PodcastCarousel({sections}: PodcastCarouselProps) {
    const dispatch = useDispatch<AppDispatch>();

    const feeds = useSelector(
        (state: RootState) => state.news.feeds
    );

    useEffect(() => {
        sections.forEach((section) => {
            dispatch(fetchNews(section.feed));
        });
    }, [dispatch, sections]);

    const carouselItems = sections
        .map((section) => ({
            title: section.title,
            feed: section.feed,
            newsItem: feeds[section.feed]?.[0]
        }))
        .filter((item) => item.newsItem !== undefined);

    return (
        <DragCarousel
            showControlsStartEnd
            fullWidthSlides
            nextSlide={1374}
        >
            {carouselItems.map((item) => (
                <section
                    key={item.feed}
                    className="podcast-slide flex-shrink-0 w-100"
                    style={{
                        backgroundImage: `url("${item.newsItem?.image}")`
                    }}
                >
                    <div className="podcast-content">
                        <div className="podcast-info text-start">
                            <div className="podcast-text">
                                <span className="podcast-category">
                                    {item.title}
                                    <i className="fa-solid fa-angle-right"></i>
                                </span>
                                <h2>
                                    {item.newsItem?.title}
                                </h2>
                                <p>
                                    {item.newsItem?.description}
                                </p>
                            </div>

                            <div className="podcast-actions">
                                <a
                                    href={item.newsItem?.link}
                                    className="podcast-play-btn"
                                >
                                    <i className="fa-solid fa-circle-play"></i>
                                    Nghe podcast
                                </a>
                            </div>
                        </div>
                        <div className="podcast-cover">
                            <img
                                src={item.newsItem?.image}
                                alt={item.newsItem?.title}
                            />
                        </div>
                    </div>
                </section>
            ))}
        </DragCarousel>
    );
}