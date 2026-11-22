import PodcastCarousel from "../../ui/PodcastCarousel.tsx";
import {PODCAST_SECTIONS, type PodcastSectionConfig} from "../../../config/podcastConfig.ts";
import PodcastSection from "./PodcastSection.tsx";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchNews} from "../../../store/slice/newsSlice.ts";
import PodcastBanner from "./PodcastBanner.tsx";

interface PodcastContentProps {
    section?: PodcastSectionConfig
}

export default function PodcastContent({section}: PodcastContentProps) {
    const dispatch = useDispatch<AppDispatch>();
    const ROWS_STEP = 3;
    const [rows, setRows] = useState(ROWS_STEP);

    const feeds = useSelector(
        (state: RootState) => state.news.feeds
    );

    useEffect(() => {
        if (section) dispatch(fetchNews(section.feed));
    }, [dispatch, section]);


    if (section) {
        const podcasts = feeds[section.feed] ?? [];
        const hasMore = podcasts.length > 1 + rows * 3;

        return (
            <>
                <PodcastBanner title={section.title} />
                <div className="container mt-4">
                    <div className="mx-5">
                        <PodcastSection
                            title={section.title}
                            podcasts={podcasts}
                            layout={section.layout}
                            hasSubContent={section.hasSubContent}
                            subContentTitle={section.subContentTitle}
                            rows={rows}
                            showMore={false}
                            hideHeader={true}
                        />
                        {hasMore && (
                            <div className="text-center mb-4">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={() => setRows(rows + ROWS_STEP)}
                                >
                                    Xem thêm
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <PodcastCarousel sections={PODCAST_SECTIONS} />
            <div className="container mt-4">
                <div className="mx-5">
                    {PODCAST_SECTIONS.map((s) => (
                        <PodcastSection
                            key={s.slug ?? s.title}
                            title={s.title}
                            podcasts={feeds[s.feed] ?? []}
                            layout={s.layout}
                            hasSubContent={s.hasSubContent}
                            subContentTitle={s.subContentTitle}
                            rows={s.rows}
                            showMore={s.showMore}
                            moreLink={s.moreLink}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}