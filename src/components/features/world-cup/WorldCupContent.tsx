import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";
import type {FeedName} from "../../../services/rssConfig.ts";
import type {NewsItem} from "../../../services/rssService.ts";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {fetchNews} from "../../../store/slice/newsSlice.ts";
import Card from "../../ui/Card.tsx";
import HorizontalCard from "../../ui/HorizontalCard.tsx";
import SideGroupCard from "../category/SideGroupCard.tsx";
import WorldCupArticle from "./WorldCupArticle.tsx";
import WorldCupScores from "./WorldCupScores.tsx";

const section = SECTIONS.WorldCup2026;
const links = [...section.links, ...section.moreLinks];
const worldCupFeeds = [section.feed, ...links.map(link => link.feed)];

interface WorldCupContentProps {
    feed: FeedName;
    href: string;
    title?: string;
}

function articleLink(item: NewsItem) {
    return `?article=${encodeURIComponent(item.link.split("/").pop() ?? "")}`;
}

export default function WorldCupContent({feed, href, title = "Tin mới nhất"}: WorldCupContentProps) {
    const dispatch = useDispatch<AppDispatch>();
    const {feeds, states} = useSelector((state: RootState) => state.news);
    const [searchParams] = useSearchParams();
    const [visibleCount, setVisibleCount] = useState(10);
    const news = feeds[feed] ?? [];
    const featured = news[0];
    const article = worldCupFeeds.flatMap(key => feeds[key] ?? [])
        .find(item => item.link.split("/").pop() === searchParams.get("article"));
    const loading = worldCupFeeds.some(key => !states[key] || states[key] === "loading");
    const failedFeeds = worldCupFeeds.filter(key => states[key] === "failed");

    useEffect(() => {
        worldCupFeeds.forEach(key => dispatch(fetchNews(key)));
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [feed, searchParams]);

    return (
        <>
            <div className="container">
                {failedFeeds.length > 0 && (
                    <div className="alert alert-warning">
                        Không tải được một số tin World Cup.
                        <button className="btn btn-outline-primary btn-sm ms-3"
                                onClick={() => failedFeeds.forEach(key => dispatch(fetchNews(key)))}>Thử lại</button>
                    </div>
                )}
                {!featured && states[feed] !== "failed" && (
                    <p className="py-4">{states[feed] === "succeeded" ? "Chưa có bài báo trong chuyên mục này." : "Đang tải tin World Cup..."}</p>
                )}
                {searchParams.has("article") ? (
                    <WorldCupArticle newsItem={article} href={href} loading={loading}/>
                ) : featured && (
                    <div className="row">
                        <div className="col-12 col-lg-9">
                            <Link to={articleLink(featured)} className="card-link d-block mb-4">
                                <HorizontalCard image={featured.image} title={featured.title} description={featured.description} feature/>
                            </Link>
                            <div className="row g-3 border-top border-bottom pt-3 pb-4">
                                {news.slice(1, 4).map(item => (
                                    <div key={item.link} className="col-12 col-sm-4">
                                        <Link to={articleLink(item)} className="card-link">
                                            <Card image={item.image} title={item.title}/>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <WorldCupScores/>
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-12 col-lg-9">
                        <h2 className="main-title border-bottom pb-3">{title}</h2>
                        {news.slice(4, visibleCount + 4).map(item => (
                            <article key={item.link} className="row g-3 border-bottom py-4">
                                <div className="col-5 col-md-4">
                                    <Link to={articleLink(item)} className="card-link">
                                        <img src={item.image} alt={item.title} className="wc-news-image w-100" loading="lazy"/>
                                    </Link>
                                </div>
                                <div className="col-7 col-md-8">
                                    <h3 className="main-title"><Link to={articleLink(item)}>{item.title}</Link></h3>
                                    <p className="description d-none d-sm-block">{item.description}</p>
                                </div>
                            </article>
                        ))}
                        {news.length > visibleCount + 4 && (
                            <button className="btn btn-outline-secondary d-block mx-auto my-4 px-5"
                                    onClick={() => setVisibleCount(visibleCount + 10)}>Xem thêm</button>
                        )}
                    </div>
                    <aside className="col-12 col-lg-3">
                        {links.map(link => {
                            const items = (feeds[link.feed] ?? []).slice(0, 3).map(item => ({...item, link: articleLink(item)}));

                            return (
                                <section key={link.feed} className="mb-4">
                                    <h2 className="main-title border-bottom pb-2"><Link to={link.href}>{link.label}</Link></h2>
                                    <SideGroupCard feature={items[0]} items={items.slice(1)} variant="text"/>
                                    {states[link.feed] === "succeeded" && !items.length && <p className="small">Chưa có bài báo.</p>}
                                </section>
                            );
                        })}
                    </aside>
                </div>
            </div>
        </>
    );
}
