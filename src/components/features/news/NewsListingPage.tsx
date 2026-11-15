import {useEffect} from "react";
import type {NewsItem} from "../../../services/rssService.ts";
import NewsResults from "../trending/NewsResults.tsx";
import Card from "../../ui/Card.tsx";

interface NewsListingPageProps {
    title: string;
    news: NewsItem[];
    showHighlights?: boolean;
    searchKeyword?: string;
}

export default function NewsListingPage({title, news, showHighlights = false, searchKeyword}: NewsListingPageProps) {
    const keyword = searchKeyword?.trim().toLowerCase() ?? "";

    const filteredItems = keyword
        ? news.filter(item =>
            item.title.toLowerCase().includes(keyword) ||
            (item.description ?? "").toLowerCase().includes(keyword)
        )
        : news;

    const featured = showHighlights ? filteredItems[0] : undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title, keyword]);

    return (
        <div className="container text-start">
            <h1 className="main-title fs-4 fw-bold text-dark mb-4"
                style={{letterSpacing: "normal", borderBottom: "2px solid #0959ab"}}>
                {searchKeyword?.trim() ? (
                    <>
                        <span style={{ color: "#0959ab" }}>
                            Kết quả tìm kiếm:{" "}
                        </span>
                        {searchKeyword.trim()}
                    </>
                ) : title}
            </h1>
            {featured && (
                <section className="news-listing-highlights border-bottom pb-3 mb-4">
                    <article className="row g-0 bg-light">
                        <div className="col-12 col-md-8">
                            <img src={featured.image} alt={featured.title} className="news-listing-cover w-100"/>
                        </div>
                        <div className="col-12 col-md-4 p-3">
                            <h2 className="main-title fs-4 text-dark">{featured.title}</h2>
                            <p className="horizontal-card-description">{featured.description}</p>
                        </div>
                    </article>
                    <div className="row g-3 border-top mt-3">
                        {filteredItems.slice(1, 5).map(item => (
                            <article key={item.guid || item.link} className="col-6 col-lg-3">
                                <Card image={item.image} title={item.title}/>
                            </article>
                        ))}
                    </div>
                </section>
            )}
            <div className="row">
                <div className="col-12 col-lg-9">
                    <NewsResults key={title} news={featured ? filteredItems.slice(5) : filteredItems}/>
                </div>
            </div>
        </div>
    );
}
