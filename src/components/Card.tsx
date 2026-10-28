interface Card {
    image: string;
    title: string;
    description?: string;
    feature?:boolean;
}

export default function Card({image, title, description, feature=false}: Card) {
    return(
        <div className="text-white">
            <img src={image} alt={title} className={feature ? "w-100 mb-2 card-image" : "w-100 mb-2 sub-card-image"} />
            <h3 className={feature ? "fs-4 fw-bold text-start" : "fs-6 fw-bold text-start"}>
                {title}
            </h3>
            <p className="fs-6 text-start">{description}</p>
        </div>
    )
}