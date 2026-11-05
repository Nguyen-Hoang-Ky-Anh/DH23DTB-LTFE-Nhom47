import type {NewsItem} from "../../services/rssService.ts";
import SeeMore from "./SeeMore.tsx";

interface HomeHorizontalCardProps {
    index: number;
    image: string;
    title: string;
    link: string;
    description?: string;
    seeMore?: NewsItem;
}

function getImageType(index: number) {
    switch (index) {
        case 5:
        case 13:
            return "special-home-horizontal-card-image";
        case 9:
            return "only-image-home-horizontal-card-image";
        default:
            return "home-horizontal-card-image";
    }
}

export default function HomeHorizontalCard({
                                               index,
                                               image,
                                               title,
                                               link,
                                               description,
                                               seeMore
                                           }: HomeHorizontalCardProps,) {
    return (
        <div className={`home-horizontal-card text-start 
        ${index !== 20 ? "border-bottom pb-2 me-4 mb-4" : ""} me-4`}>
            <a className="home-horizontal-card-title" href={link}>{title}</a>
            <div className="home-horizontal-card-content mt-3 gap-0">
                <img src={image} alt={title} className={getImageType(index) + " me-3"}/>

                <div className={'d-flex flex-column gap-2 justify-content-between'}>
                    {index !== 9 && description && (
                        <p className="home-horizontal-card-description">{description}</p>
                    )}
                    {index !== 9 && index !== 8 && seeMore && <SeeMore
                        newsItem={seeMore}
                        isUl={index !== 5 && index !== 13}/>}
                </div>
            </div>
        </div>
    )
}