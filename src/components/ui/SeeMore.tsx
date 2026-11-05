import type {NewsItem} from "../../services/rssService.ts";

interface SeeMoreProps {
    newsItem: NewsItem;
    isUl: boolean;
}

export default function SeeMore({newsItem, isUl}: SeeMoreProps) {
    if (isUl) {
        return (
            <div className={"see-more"}>
                <ul className={"p-0"}>
                    <li>
                        <a href={newsItem.link}>{newsItem.title}</a>
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
                    <a className={'see-more-image-container me-2'} href={newsItem.link}>
                        <img src={newsItem.image} className={"see-more-image"}/>
                    </a>

                    <a href={newsItem.link} className={'see-more-title'}>{newsItem.title}</a>
                </div>
            </div>
        )
    }

}