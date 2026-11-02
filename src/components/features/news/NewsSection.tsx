import NewsSectionHeader from "./NewsSectionHeader.tsx";
import NewsSectionContent from "./NewsSectionContent.tsx";
import {type SectionKey, SECTIONS} from "../../../config/newsSectionConfig.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {useEffect} from "react";
import {fetchNews} from "../../../store/slice/newsSlice.ts";

interface NewsSectionProps {
    section: SectionKey
    layout?: "horizontal" | "vertical";
}

export default function NewsSection({section, layout = "horizontal"}: NewsSectionProps) {
    const dispatch = useDispatch<AppDispatch>();
    const {title, icon, feed, links, moreLinks} = SECTIONS[section];

    const news = useSelector((s: RootState) => s.news.feeds[feed]) ?? [];

    useEffect(() => {
        dispatch(fetchNews(feed));
    },[dispatch, feed]);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-9">
                    <NewsSectionHeader
                        title={title}
                        icon={icon}
                        links={links}
                        moreLinks={moreLinks}
                    />

                    <NewsSectionContent layout={layout} news={news}/>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}