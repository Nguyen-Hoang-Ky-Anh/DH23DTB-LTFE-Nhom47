import NewsSectionHeader from "./NewsSectionHeader.tsx";
import NewsSectionContent, {type NewsLayout} from "./NewsSectionContent.tsx";
import {type NewsSectionConfig, type SectionKey, SECTIONS} from "../../../config/newsSectionConfig.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {useEffect} from "react";
import {fetchNews} from "../../../store/slice/newsSlice.ts";

interface NewsSectionProps {
    section: SectionKey
    layout?: NewsLayout;
    embedded?: boolean;
}

export default function NewsSection({section, layout = "horizontal", embedded = false}: NewsSectionProps) {
    const dispatch = useDispatch<AppDispatch>();
    const {title, href, icon, feed, links, moreLinks}: NewsSectionConfig = SECTIONS[section];

    const news = useSelector((s: RootState) => s.news.feeds[feed]) ?? [];

    useEffect(() => {
        dispatch(fetchNews(feed));
    },[dispatch, feed]);

    const content = (
        <div className={section === "netZero" ? "news-theme-green" : undefined}>
            <NewsSectionHeader
                title={title}
                href={href}
                icon={icon}
                color={section === "phuNu" ? "#EE508B" : undefined}
                links={links}
                moreLinks={moreLinks}
                compact={layout === "compact"}
            />
            <NewsSectionContent layout={layout} news={news} sectionKey={section} whiteText={section === "netZero"} />
        </div>
    );


    {/*
        Neu embedded = true thi khong tao lai cot rong 9/12
        */}
    return embedded ? <section className="h-100 d-flex flex-column">{content}</section> : (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-9">{content}</div>
            </div>
        </div>
    )
}
