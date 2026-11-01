interface HorizontalCardProps {
    image: string;
    title: string;
    description?: string;
    feature?: boolean
}

export default function HorizontalCard({ image, title, description, feature }: HorizontalCardProps) {
    return (
        <div className={`horizontal-card ${feature ? "horizontal-card-featured" : ""}`}>
            <img src={image} alt={title} className="horizontal-card-image" />
            <div className="horizontal-card-content">
                <h3 className="horizontal-card-title">{title}</h3>
                {feature && description && (
                    <p className="horizontal-card-description">{description}</p>
                )}
            </div>
        </div>
    )
}