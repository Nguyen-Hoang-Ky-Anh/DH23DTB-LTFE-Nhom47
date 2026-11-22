import {useState, type SubmitEvent} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
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
    const [showSearch, setShowSearch] = useState(false);

    function search(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const keyword = new FormData(event.currentTarget).get("keyword")?.toString().trim();
        if (keyword) navigate(`${SECTIONS.podcast.href}/search/${encodeURIComponent(keyword)}`);
    }

    return (
        <header className="podcast-header sticky-top text-start">
            <div className="podcast-header-inner">
                <Link to="/" className="podcast-home-link">
                    <i className="fa-solid fa-arrow-left"/>
                </Link>

                <Link to={SECTIONS.podcast.href} className="podcast-header-brand">
                    <img src="/mega-story/tuoi-tre.webp" alt="Tuổi trẻ" width={193} height={60} />
                </Link>

                <nav className="podcast-header-menu">
                    {menu.map(({slug, icon}) => {
                        const link = podcastLinks.find(item => item.href === `${SECTIONS.podcast.href}/${slug}`);
                        if (!link) return null;

                        return (
                            <NavLink key={link.href} to={link.href}>
                                <i className={`fa-solid ${icon}`} />
                                {link.label}
                            </NavLink>
                        );
                    })}
                </nav>

                {showSearch ? (
                    <form className="podcast-header-search search-bar d-inline-flex gap-1 align-items-center p-2"
                          onSubmit={search}>
                        <input name="keyword" className="search-input" placeholder="Nhập nội dung cần tìm" autoFocus />
                        <button type="submit" className="search-btn" title="Tìm kiếm bài viết">
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                        <button type="button" className="search-btn" title="Đóng tìm kiếm"
                                onClick={() => setShowSearch(false)}>
                            <i className="fa-solid fa-xmark" />
                        </button>
                    </form>
                ) : (
                    <button type="button" className="podcast-header-search search-btn" title="Mở tìm kiếm"
                            onClick={() => setShowSearch(true)}>
                        <i className="fa-solid fa-magnifying-glass" />
                    </button>
                )}
            </div>
        </header>
    );
}
