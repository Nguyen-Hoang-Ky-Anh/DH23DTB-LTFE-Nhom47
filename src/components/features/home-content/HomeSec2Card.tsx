import type {NewsItem} from "../../../services/rssService.ts";
import {Link} from "react-router-dom";

export interface HomeSec2CardProps {
    icon?: string;
    title: string;
    cateHref: string;
    newsItem: NewsItem;
}

export default function HomeSec2Card({icon, title, cateHref, newsItem} : HomeSec2CardProps){
    return (
        <div className={"text-start rounded border sec-2-card"}>
            <div className={"text-primary rounded-start border-bottom p-2 sec-2-title align-items-center d-flex " +
                "gap-2"}>

                <Link to={cateHref} title={title} className={'main-title d-flex align-items-center gap-2'}
                      style={{
                          color: "#0d6efd"
                      }}>
                    {icon && <i className={icon}></i>}
                    {title}
                </Link>
            </div>
            <div>
                <Link to={newsItem.link} title={newsItem.title}>
                    <div className={'d-flex flex-column justify-content-center align-items-center'}>
                        <div className={'sec-2-card-img-wrapper'}>
                            <img src={newsItem.image} alt={newsItem.title} className={'mt-3 sec-2-card-img'}/>
                        </div>
                        <p style={{
                            fontSize: 15,
                            fontWeight: 600,
                            verticalAlign: "middle"
                        }}
                           className={'sub-title p-2 m-2 align-items-center '}
                        >{newsItem.title}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}