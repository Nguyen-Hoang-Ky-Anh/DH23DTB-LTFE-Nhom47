interface HorizontalCardProps {
    image: string;
    title: string;
    description?: string;
}

export default function HorizontalCard({ image, title, description }: HorizontalCardProps) {
    return (
        <div className="horizontal-card">
            <img src={image} alt={title} className="horizontal-card-image" />
            <div className="horizontal-card-content">
                <h3 className="horizontal-card-title">{title}</h3>
                {description && (
                    <p className="horizontal-card-description">{description}</p>
                )}
            </div>
        </div>
    )
}