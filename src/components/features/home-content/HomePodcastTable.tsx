import {type NavLink, SECTIONS} from "../../../config/newsSectionConfig.ts";
import type {NewsItem} from "../../../services/rssService.ts";
import {Link, useLocation} from "react-router-dom";

export interface HomePodcastTableProps {
    href : string,
    links: NavLink[],
    news: NewsItem[],
    moreLinks: NavLink[],
}

export default function HomePodcastTable({href, links, moreLinks, news} : HomePodcastTableProps) {
    const {pathname} = useLocation();
    const currentPath = "/" + pathname.split("/")[1];
    const section = Object.values(SECTIONS).find((s) => s.href === currentPath);
    if (!section) return null;
    const firstNews = news[0];
    const contentNews = news.slice(1, 3);
    return (
        <div className={"nguoi-lao-dong-news-box border rounded p-0 mt-3"}>
            <div className={"podcast-news-header d-flex align-items-center justify-content-between text-start rounded-top px-3 py-2"}>
                <div>
                    <h5 className={"mb-0"}>
                        <Link to={href}>
                            <img src={"https://static.mediacdn.vn/nld.com.vn/image/logo-podcast.png"}
                                 alt={"Podcast"}
                                 style={{
                                     height: "100%",
                                     width: 133
                                 }}
                            />
                        </Link>
                    </h5>
                </div>
                <div className="d-flex align-items-center">
                    <ul className="list-inline mb-0 d-flex flew-row justify-content-between align-items-center">
                        {links.map(link => (
                            <li key={link.label} className={'category-more-link'}>
                                <Link to={link.href} className={'text-white'}
                                >{link.label}</Link>
                            </li>
                        ))}
                        <li key={moreLinks[0].label}
                            className={'category-more-link'}
                        >
                            <Link to={moreLinks[0].href}
                                  style={{
                                      color: "white"
                                  }}
                            >{moreLinks[0].label}</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={"content row text-start p-2"}>
                {/* First news col-8*/}
                <div className={"col-8 d-flex flex-row gap-2 mt-1"}>
                    <Link to={firstNews.link} title={firstNews.title}>
                        <img src={firstNews.image} alt={firstNews.title}
                             style={{
                                 width: 130,
                                 height: 130,
                                 borderRadius: 10,
                                 objectFit: "cover",
                                 objectPosition: "left"
                             }}/>
                    </Link>
                    <div>
                        <p style={{
                            fontSize: 15,
                        }}
                        className={'main-title pb-3'}
                        >{firstNews.title}</p>
                        <div className={"d-flex flex-row gap-3 align-items-center"}>
                            <button type={"button"} className={"py-1 px-2 rounded btn border"} style={{backgroundColor:"#F5F5F58C"}}>
                                <div className={"align-items-center d-flex flex-row justify-content-between gap-1 p-0"}
                                style={{
                                    fontWeight: 400,
                                    lineHeight: "150%",
                                    padding: "6px 8px",
                                    fontFamily: "Inter"
                                }}>
                                    <i className="fa-solid fa-headphones"
                                    style={{
                                        fontSize: 16,
                                        color: "#0055CC"
                                    }}></i>
                                    <p style={{
                                        fontSize: 14,
                                        color: "black",
                                    }}>
                                        Nghe tập này
                                    </p>
                                </div>
                            </button>
                            <p className={'description'}
                                style={{
                                fontSize: 12,
                                }}>07:08</p>
                        </div>
                    </div>
                </div>

                {/* 2 next news*/}
                <div className={'col-4 d-flex flex-column border-start'}>
                    <div className={"mx-1 pb-3 border-bottom"}>
                        <Link to={contentNews[0].link} title={contentNews[0].title}
                        className={'sub-title'}
                            style={{fontSize: 15}}>
                            <p><i className="fa-solid fa-headphones"
                               style={{
                                   fontSize: 16,
                                   color: "#0055CC"

                               }}></i>
                                {contentNews[0].title}
                            </p>
                        </Link>
                    </div>

                    <div className={"mx-1 pt-3"}>
                        <Link to={contentNews[1].link} title={contentNews[0].title}
                        style={{
                            fontFamily: "MerriWeather",
                            fontSize: 15,
                        }}>
                            <p><i className="fa-solid fa-headphones"
                               style={{
                                   fontSize: 16,
                                   color: "#0055CC"

                               }}></i>
                                {contentNews[1].title}
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}