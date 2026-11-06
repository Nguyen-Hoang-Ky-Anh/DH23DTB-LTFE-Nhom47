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
            <div className="header d-flex align-items-center justify-content-between text-start rounded-top"
                 style={{
                     backgroundColor: "#0959ab",
                     padding: 12
                 }}
            >
                <div>
                    <h5 className="mb-0">
                        {<Link to={href}>
                            <img src={"https://static.mediacdn.vn/nld.com.vn/image/Logoenglish2.png"}
                                 style={{
                                     height: "100%",
                                     width: 133
                                 }}
                                 alt={"Nguoi lao dong news"}/>
                        </Link>}
                    </h5>
                </div>
                <div className="d-flex align-items-center">
                    <ul className="list-inline mb-0 d-flex flew-row justify-content-between align-items-center">
                        {links.map(link => (
                            <li key={link.label}
                                style={{
                                    color: "white",
                                    padding: 4,
                                    fontSize: 12,
                                    fontWeight: 500,
                                    fontFamily: "Inter",
                                    backgroundColor: "#FFFFFF2E",
                                    marginRight: 5,
                                    borderRadius: 5,
                                }}
                            >
                                <Link to={link.href}
                                      style={{
                                          color: "white"
                                      }}
                                >{link.label}</Link>
                            </li>
                        ))}
                        <li><Link to={href}
                                  style={{
                                      color: "white",
                                      fontSize: 12,
                                      fontWeight: 500,
                                      fontFamily: "Inter",
                                      padding: 4,
                                      textDecoration: "underline"
                                  }}>See all</Link></li>
                    </ul>
                </div>
            </div>
            <div className={"content text-start p-1"} style={{backgroundColor: "#fafafc"}}>
                {/* First news */}
                <div className={"row border-bottom mx-2 pb-2 align-items-center mb-2"}>
                    <div className={"col-5 ps-0 py-0"}>
                        <Link to={"/"}>
                            <img src={firstNews.image} alt={firstNews.title} width={"100%"}
                            />
                        </Link>
                    </div>

                    <div className={"col-7 p-0"}>
                        <Link to={"/"}
                        style={{
                            fontFamily: "MerriWeather",
                            fontSize: 15,
                            fontWeight: 700,
                            lineHeight: 1.5,
                            marginBottom: 4,

                        }}
                        >{firstNews.title}
                        </Link>
                        <p style={{
                            fontFamily: "Inter",
                            fontSize: 14,
                            color: "#727272"
                        }}
                        >{firstNews.description}</p>
                    </div>
                </div>


                <div className={"content-news"}>
                    <ul style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 20,
                        paddingLeft: 20,
                    }}>
                        {contentNews.map(item => (
                            <li>
                                <Link to={"/"} title={item.title}
                                style={{
                                    fontFamily: "MerriWeather",
                                    fontSize: 15,
                                    lineHeight: 1.5,
                                    maxWidth: 120,
                                    flex:1
                                }}>
                                    {item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}