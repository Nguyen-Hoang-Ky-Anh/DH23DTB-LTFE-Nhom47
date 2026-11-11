interface NewsItem {
    link: string;
    title: string;
    image?: string;
}

interface SideGroupProps {
    feature: NewsItem;
    items: NewsItem[];
    variant?: "thumb" | "text";
    linkArticles?: boolean;
}

export default function SideGroupCard({feature, items, variant = "thumb", linkArticles = true}: SideGroupProps) {
    if (!feature) return null;

    return (
        <section className="side-group">
            <a href={linkArticles ? feature.link : undefined} className="side-feature">
                <img src={feature.image} alt={feature.title} className="side-feature-image" />
                <h3 className="side-feature-title">{feature.title}</h3>
            </a>

            <ul className="side-list">
                {items.map(item => (
                    <li key={item.link}>
                        <a href={linkArticles ? item.link : undefined} className="side-item">
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
