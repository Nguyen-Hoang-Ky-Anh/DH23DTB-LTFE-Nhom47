import type {SubmitEvent} from "react";
import {Link, useNavigate} from "react-router-dom";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";

const podcastLinks = [...SECTIONS.podcast.links, ...SECTIONS.podcast.moreLinks];
const menu = [
    {slug: "11-gio-30", icon: "fa-clock"},
    {slug: "gioi-tre", icon: "fa-face-smile"},
    {slug: "ban-tron-phai-dep", icon: "fa-seedling"},
    {slug: "cau-vong-hanh-phuc", icon: "fa-rainbow"},
    {slug: "sau-gio-lam", icon: "fa-briefcase"},
    {slug: "suc-khoe-cua-ban", icon: "fa-heart-pulse"},
    {slug: "doanh-nghiep-tu-gioi-thieu", icon: "fa-building"},
];

export default function PodcastHeader() {
    const navigate = useNavigate();

    function search(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const keyword = new FormData(event.currentTarget).get("keyword")?.toString().trim();
        if (keyword) navigate(`/search/${encodeURIComponent(keyword)}`);
    }

    return (
        <header className="podcast-header sticky-top text-start">
            <div className="podcast-header-inner">
                <Link to="/" className="podcast-home-link">
                    <i className="fa-solid fa-arrow-left"/>
                    <span>Trang chủ</span>
                </Link>

                <Link to={SECTIONS.podcast.href} className="podcast-header-brand">
                    <img src="/mega-story/tuoi-tre.webp" alt="Tuổi trẻ" width={193} height={60} />
                </Link>

                <nav className="podcast-header-menu">
                    {menu.map(({slug, icon}) => {
                        const link = podcastLinks.find(item => item.href === `${SECTIONS.podcast.href}/${slug}`);
                        if (!link) return null;

                        return (
                            <Link key={link.href} to={link.href}>
                                <i className={`fa-solid ${icon}`} />
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <details className="podcast-header-search">
                    <summary className="podcast-search-toggle" title="Tìm kiếm bài viết">
                        <i className="fa-solid fa-magnifying-glass"/>
                    </summary>
                    <form className="podcast-search-form d-flex gap-2 p-2 rounded shadow" onSubmit={search}>
                        <input name="keyword" type="search" placeholder="Tìm bài viết"
                               className="form-control form-control-sm" required />
                        <button type="submit" className="btn btn-primary btn-sm">Tìm</button>
                    </form>
                </details>
            </div>
        </header>
    );
}
