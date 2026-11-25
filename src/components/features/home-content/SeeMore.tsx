import {Link} from "react-router-dom";
import {newsDetailHref} from "../../../utils/newsDetailURL.ts";
import type {NewsItem} from "../../../services/rssService.ts";

interface SeeMoreProps {
    newsItem: NewsItem;
    isUl: boolean;
}

export default function SeeMore({newsItem, isUl}: SeeMoreProps) {
    const href = newsDetailHref(newsItem.link);
    if (isUl) {
        return (
            <div className={"see-more"}>
                <ul className={"p-0"}>
                    <li>
                        <Link to={href}>{newsItem.title}</Link>
                    </li>
                </ul>
            </div>
        )
    } else {
        return (

            <div className={"see-more-box"}>
                <strong>Xem thêm</strong>
                <div className={"border border-1 rounded d-flex justify-content-center align-items-center"}
                style={{padding: 12, marginTop: 8}}>
                    <Link className={'see-more-image-container me-2'} to={href}>
                        <img src={newsItem.image} className={"see-more-image"}/>
                    </Link>

                    <Link to={href} className={'see-more-title'}>{newsItem.title}</Link>
                </div>
            </div>
        )
    }

}
