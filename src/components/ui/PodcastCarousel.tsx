import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store/store.ts";
import {fetchNews} from "../../store/slice/newsSlice.ts";
import type {FeedName} from "../../services/rssConfig.ts";
import DragCarousel from "./DragCarousel.tsx";
import {fetchPodcastDuration} from "../../services/podcastService.ts";
import {Link} from "react-router-dom";

interface PodcastSection {
    title: string;
    feed: FeedName;
}

interface PodcastCarouselProps {
    sections: PodcastSection[];
}

export default function PodcastCarousel({sections}: PodcastCarouselProps) {
    const dispatch = useDispatch<AppDispatch>();
    const [durations, setDurations] = useState<Record<string, string | null>>({});

    const feeds = useSelector(
        (state: RootState) => state.news.feeds
    );

    useEffect(() => {
        sections.forEach((section) => {
            dispatch(fetchNews(section.feed));
        });
    }, [dispatch, sections]);

    const carouselItems = useMemo(() => {
        return sections
            .map((section) => ({
                title: section.title,
                feed: section.feed,
                newsItem: feeds[section.feed]?.[0]
            }))
            .filter((item) => item.newsItem !== undefined);
    }, [sections, feeds])

    useEffect(() => {
        async function getDurations() {
            for (const item of carouselItems) {
                const duration = await fetchPodcastDuration(
                    item.newsItem.link
                );
                setDurations(prev => ({
                    ...prev,
                    [item.feed]: duration
                }))
            }
        }
        getDurations();
    }, [carouselItems]);

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
                                <Link
                                    to={item.newsItem?.link}
                                    className="podcast-play-btn me-3"
                                >
                                    <i className="fa-solid fa-circle-play"></i>
                                    Nghe podcast
                                </Link>
                                <span className="description" style={{color: "#AAAAAA", fontWeight: "bold"}}>{durations[item.feed] || "00:00"}</span>
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