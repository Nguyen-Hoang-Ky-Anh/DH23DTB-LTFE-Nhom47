interface Card {
    image: string;
    title: string;
    description?: string;
    feature?:boolean;
}

export default function Card({image, title, description, feature=false}: Card) {
    return(
        <div>
            <img src={image} alt={title} className={feature ? "w-100 mb-2 card-image" : "w-100 mb-2 sub-card-image"} />
            <h3 className={`${feature ? "fw-bold text-start" : "fw-bold text-start"} main-title`}>
                {title}
            </h3>
            <p className="description text-start">{description}</p>
        </div>
    )
}