import {Link} from "react-router-dom";

interface NewsItem {
    link: string;
    title: string;
    image?: string;
}

interface SideGroupProps {
    title?: string;
    href?: string;
    feature: NewsItem;
    items: NewsItem[];
    variant?: "thumb" | "text";
}

export default function SideGroupCard({feature, items, variant = "thumb", title, href}: SideGroupProps) {
    if (!feature) return null;

    return (
        <section className={`side-group ${variant === "thumb" ? "side-group-boxed" : ""}`}>
            {title && <h3 className="side-group-heading main-title text-start">
                {href ? <Link to={href}>{title}</Link> : <a href="#" onClick={event => event.preventDefault()}>{title}</a>}
            </h3>}
            <a href="#" onClick={event => event.preventDefault()} className="side-feature">
                <img src={feature.image} alt={feature.title} className="side-feature-image" />
                <h3 className="side-feature-title">{feature.title}</h3>
            </a>

            <ul className="side-list">
                {items.map(item => (
                    <li key={item.link}>
                        <a href="#" onClick={event => event.preventDefault()} className="side-item">
                            {variant === "thumb" && (
                                <img src={item.image} alt={item.title} className="side-item-image" />
                            )}
                            <span className="side-item-title text-start">{item.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
