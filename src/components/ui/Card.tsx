interface Card {
    image: string;
    title: string;
    description?: string;
    feature?:boolean;
    isVideo?: boolean;
    date?: string;
}

export default function Card({image, title, description, feature=false, isVideo, date}: Card) {
    return(
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
    )
}