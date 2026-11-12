interface HorizontalCardProps {
    image: string;
    title: string;
    description?: string;
    feature?: boolean;
    whiteText?: boolean;
    showDescription?: boolean;
}

export default function HorizontalCard({image, title, description, feature, whiteText, showDescription}: HorizontalCardProps) {
    return (
        <div className={`horizontal-card ${feature ? "horizontal-card-featured" : ""} ${whiteText ? "horizontal-card-white" : ""}`}>
            <img src={image} alt={title} className="horizontal-card-image"/>
            <div className="horizontal-card-content">
                <h3 className="horizontal-card-title main-title">{title}</h3>
                {(feature || showDescription) && description && (
                    <p className="horizontal-card-description">{description}</p>
                )}
            </div>
        </div>
    );
}
