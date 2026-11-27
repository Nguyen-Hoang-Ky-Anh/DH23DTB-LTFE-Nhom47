import {Link} from "react-router-dom";
import {newsDetailHref} from "../../utils/newsDetailURL.ts";
interface Card {
    image: string;
    title: string;
    description?: string;
    feature?:boolean;
    isVideo?: boolean;
    date?: string;
    link?: string;
}

export default function Card({image, title, description, feature=false, isVideo, date, link}: Card) {
    return (
        <div>
            <div className="card-media mb-2">
                <img src={image} alt={title} className={feature ? "w-100 card-image" : "w-100 sub-card-image"}/>
                {isVideo && (
                    <span className="video-play-icon">
                        <i className="fa fa-play"></i>
                    </span>
                )}
            </div>

            {isVideo && (
                <div className="card-meta">
                    <span className="meta-type">Video</span>
                    {date && <span className="meta-date">{date}</span>}
                </div>
            )}

            <h3 className="fw-bold text-start main-title">
                {link ? <Link className="article-title-link" to={newsDetailHref(link)}>{title}</Link> : title}
            </h3>
            <p className="card-description description text-start">{description}</p>
        </div>
    );
}