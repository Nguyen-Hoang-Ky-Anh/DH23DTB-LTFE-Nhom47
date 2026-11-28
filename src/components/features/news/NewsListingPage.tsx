import {Link} from "react-router-dom";
import {newsDetailHref} from "../../../utils/newsDetailURL.ts";
import {useEffect} from "react";
import type {NewsItem} from "../../../services/rssService.ts";
import NewsResults from "../trending/NewsResults.tsx";
import Card from "../../ui/Card.tsx";

interface NewsListingPageProps {
    title: string;
    news: NewsItem[];
    showHighlights?: boolean;
    searchKeyword?: string;
    searchByDay?: string;

    selectedDate?: string;
    onDateChange?: (date: string) => void;
    onApplyDate?: () => void;
}

export default function NewsListingPage({title, news, showHighlights = false, searchKeyword, searchByDay, selectedDate, onDateChange, onApplyDate}: NewsListingPageProps) {
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

    function formatDate(date: string) {
        const [year, month, day] = date.split("-");

        return `${day}/${month}/${year}`;
    }

    return (
        <div className="container text-start">
            {searchByDay ? (
                <div className="news-listing-date-heading">
                    <div className="d-flex align-items-baseline gap-3">
                        <h1>{title}</h1>
                        <span>Ngày {formatDate(searchByDay)}</span>
                    </div>

                    <div className={'category-news-by-date'}>
                        <input
                            type="date"
                            value={selectedDate ?? searchByDay}
                            onChange={(e) => onDateChange?.(e.target.value)}
                        />

                        <button
                            type="button"
                            onClick={onApplyDate}
                        >
                            OK
                        </button>
                    </div>
                </div>
            ) : (
                <h1
                    className="main-title fs-4 fw-bold text-dark mb-4"
                    style={{
                        letterSpacing: "normal",
                        borderBottom: "2px solid #0959ab"
                    }}
                >
                    {searchKeyword?.trim() ? (
                        <>
                            <span style={{ color: "#0959ab" }}>
                                Kết quả tìm kiếm:{" "}
                            </span>
                            {searchKeyword.trim()}
                        </>
                    ) : title}
                </h1>
            )}
            {featured && (
                <section className="news-listing-highlights border-bottom pb-3 mb-4">
                    <article className="row g-0 bg-light">
                        <div className="col-12 col-md-8">
                            <Link to={newsDetailHref(featured.link)}>
                                <img src={featured.image} alt={featured.title} className="news-listing-cover w-100"/>
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 p-3">
                            <h2 className="main-title fs-4 text-dark">
                                <Link to={newsDetailHref(featured.link)}>{featured.title}</Link>
                            </h2>
                            <p className="horizontal-card-description">{featured.description}</p>
                        </div>
                    </article>
                    <div className="row g-3 border-top mt-3">
                        {filteredItems.slice(1, 5).map(item => (
                            <article key={item.guid} className="col-6 col-lg-3">
                                <Card image={item.image} title={item.title} link={item.link}/>
                            </article>
                        ))}
                    </div>
                </section>
            )}
            <div className="row">
                <div className="col-12 col-lg-9">
                    <NewsResults
                        key={`${title}-${searchByDay ?? ""}`}
                        news={featured ? filteredItems.slice(5) : filteredItems}
                        initialCount={showHighlights ? 5 : 15}
                    />
                </div>
            </div>
        </div>
    );
}
