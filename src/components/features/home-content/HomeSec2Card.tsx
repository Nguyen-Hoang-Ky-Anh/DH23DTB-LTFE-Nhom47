import type {NewsItem} from "../../../services/rssService.ts";
import {Link} from "react-router-dom";

export interface HomeSec2CardProps {
    title: string;
    cateHref: string;
    newsItem: NewsItem;
}

export default function HomeSec2Card({title, cateHref, newsItem} : HomeSec2CardProps){
    return (
        <div className={"text-start rounded border"} style={{
            minWidth: 0,
            width: "100%",
            height: "100%"
        }}>
            <div className={"rounded-start border-bottom p-2 align-items-center"} style={{
                backgroundColor: "#f0f6fd",
                height: 60,
                fontFamily: "MerriWeather"
            }}>
                <Link to={cateHref} title={title} style={{
                    fontSize: 14,
                    fontWeight: 700,
                    lineHeight: 1.2
                }}>{title}</Link>
            </div>
            <div>
                <Link to={newsItem.link} title={newsItem.title} className={'d-flex flex-column'}>
                    <img src={newsItem.image} title={newsItem.title} style={{
                        width: 150,
                        height: "100%",
                        aspectRatio: "16/9",
                        objectFit: "cover",
                        margin: 15,
                        display: "block"
                    }}/>
                    <p style={{
                        fontFamily: "MerriWeather",
                        fontSize: 15,
                        fontWeight: 600,
                        lineHeight: 1.5,
                        margin: 15
                    }}

                    >{newsItem.title}</p>
                </Link>
            </div>
        </div>
    )
}