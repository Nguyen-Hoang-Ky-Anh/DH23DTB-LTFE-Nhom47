import type {NewsItem} from "../../../services/rssService.ts";
import {Link, useLocation} from "react-router-dom";
import {type NavLink, SECTIONS} from "../../../config/newsSectionConfig.ts";

export interface HomeEnglishNewsProps {
    href: string;
    links: readonly NavLink[];
    news: NewsItem[]
}

export default function HomeEnglishNews({href, links, news}: HomeEnglishNewsProps) {
    const {pathname} = useLocation();
    const currentPath = "/" + pathname.split("/")[1];
    const section = Object.values(SECTIONS).find((s) => s.href === currentPath);
    if (!section) return null;
    const firstNews = news[0];
    const contentNews = news.slice(1, 4);

    return (
        <div className={"nguoi-lao-dong-news-box border rounded p-0 mt-3"}>
            <div className="nld-news-header d-flex align-items-center justify-content-between text-start rounded-top">
                <div>
                    <h5 className="mb-0">
                        {<Link to={href}>
                            <img src={"https://static.mediacdn.vn/nld.com.vn/image/Logoenglish2.png"}
                                 className={"nld-news-header-icon"}
                                 alt={"Nguoi lao dong news"}/>
                        </Link>}
                    </h5>
                </div>
                <div className="d-flex align-items-center">
                    <ul className="list-inline mb-0 d-flex flew-row justify-content-between align-items-center">
                        {links.map(link => (
                            <li key={link.label} className={'category-more-link'}>
                                <Link to={link.href}
                                      className={'text-white'}
                                >{link.label}</Link>
                            </li>
                        ))}
                        <li><Link to={href} className={'see-all-link'}>See all</Link></li>
                    </ul>
                </div>
            </div>
            <div className={"content text-start p-1"} style={{backgroundColor: "#fafafc"}}>
                {/* First news */}
                <div className={"row border-bottom mx-2 pb-2 align-items-center mb-2"}>
                    <div className={"col-5 ps-0 py-0"}>
                        <Link to={"/"}>
                            <img src={firstNews.image} alt={firstNews.title} width={"100%"}/>
                        </Link>
                    </div>

                    <div className={"col-7 p-0"}>
                        <Link to={"/"} className={'main-title'}> {firstNews.title}</Link>
                        <p className={'description'}>{firstNews.description}</p>
                    </div>
                </div>


                <div className={"content-news"}>
                    <ul className={'d-flex justify-content-between gap-4 ps-3'}>
                        {contentNews.map(item => (
                            <li>
                                <Link to={"/"} title={item.title} className={'sub-title'}>
                                    {item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}