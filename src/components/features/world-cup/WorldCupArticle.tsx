import {Link} from "react-router-dom";
import type {NewsItem} from "../../../services/rssService.ts";

interface WorldCupArticleProps {
    newsItem?: NewsItem;
    href: string;
    loading: boolean;
}

export default function WorldCupArticle({newsItem, href, loading}: WorldCupArticleProps) {
    return (
        <article className="wc-article mb-4">
            <Link to={href} className="small text-primary">← Về danh sách tin</Link>
            {newsItem ? (
                <>
                    <h2 className="main-title wc-feature-title my-3">{newsItem.title}</h2>
                    <p className="small text-muted mb-3">{newsItem.pubDate}</p>
                    <p className="description mb-3">{newsItem.description}</p>
                    <img src={newsItem.image} alt={newsItem.title} className="img-fluid"/>
                    <p className="small text-muted mt-3">Tóm tắt bài viết từ RSS.</p>
                </>
            ) : (
                <p className="py-4">{loading ? "Đang tải bài báo..." : "Bài báo không còn trong danh sách tin hiện tại."}</p>
            )}
        </article>
    );
}
