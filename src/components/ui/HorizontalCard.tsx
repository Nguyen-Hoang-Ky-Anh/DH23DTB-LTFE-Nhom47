import {Link} from "react-router-dom";
import {newsDetailHref} from "../../utils/newsDetailURL.ts";
interface HorizontalCardProps {
    image: string;
    title: string;
    description?: string;
    feature?: boolean;
    whiteText?: boolean;
    showDescription?: boolean;
    borderBottom?: boolean;
    link?: string;
}

export default function HorizontalCard({image, title, description, feature, whiteText, showDescription,
                                           borderBottom=true, link}: HorizontalCardProps) {
    const card = (
        <div className={`horizontal-card ${feature ? "horizontal-card-featured" : ""}
         ${whiteText ? "horizontal-card-white" : ""}
         ${borderBottom? "border-bottom pb-2" : ""} mb-2`}>
            <img src={image} alt={title} className="horizontal-card-image"/>
            <div className="horizontal-card-content">
                <h3 className="horizontal-card-title main-title">{title}</h3>
                {(feature || showDescription) && description && (
                    <p className="horizontal-card-description">{description}</p>
                )}
            </div>
        </div>
    );
    return link ? <Link className="d-block text-reset text-decoration-none" to={newsDetailHref(link)}>{card}</Link> : card;
}
