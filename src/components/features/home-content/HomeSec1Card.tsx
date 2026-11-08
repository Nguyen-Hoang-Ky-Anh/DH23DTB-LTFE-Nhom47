import type {NewsItem} from "../../../services/rssService.ts";
import {Link} from "react-router-dom";

export interface HomeSec1CardProps {
    news : NewsItem;
    title: string;
    cateHref: string;
}

export default function HomeSec1Card({news, title, cateHref} : HomeSec1CardProps) {
        return (
            <div className={'col-6 d-flex text-start m-0 p-0 pe-1'}>
                <Link to={cateHref} title={title}>
                    <p className={'main-title'} style={{fontSize: 18}}>{title}</p>
                    <img src={news.image}
                         alt={news.title}
                         className={'home-sec-1-image'}
                    />
                    <p className={'main-title'} style={{fontSize: 15}}>
                        {news.title}
                    </p>
                </Link>
            </div>
        )
}