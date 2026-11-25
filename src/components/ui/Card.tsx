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
    const card = (
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

            <h3 className={`${feature ? "fw-bold text-start" : "fw-bold text-start"} main-title`}>
                {title}
            </h3>
            <p className="description text-start">{description}</p>
        </div>
    );
    return link ? <Link className="d-block text-reset text-decoration-none" to={newsDetailHref(link)}>{card}</Link> : card;
}