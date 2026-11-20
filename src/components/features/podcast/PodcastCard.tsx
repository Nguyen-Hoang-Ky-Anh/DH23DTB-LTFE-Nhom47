import {fetchPodcastDuration} from "../../../services/podcastService.ts";
import {useEffect, useState} from "react";

interface PodcastCardProps {
    title: string;
    image: string;
    link: string;
    description?: string;
    style?: "vertical" | "horizontal";
    category?: string;
}

export default function PodcastCard({ title, image, link, description, style = "vertical", category}: PodcastCardProps) {
    const [duration, setDuration] = useState<number | undefined>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchDuration() {
            try {
                setLoading(true);

                const result = await fetchPodcastDuration(link);

                console.log("Podcast duration:", result);

                setDuration(result);
            } catch (error) {
                console.error("Fetch duration failed:", error);
            } finally {
                setLoading(false);
            }
        }

        if (link) {
            fetchDuration();
        }
    }, [link]);

    if (style === "vertical") {
        return (
            <div className="card shadow mb-4" style={{width:'18rem', fontFamily: "Inter"}}>
                <img className="card-img" src={image} alt={title}/>
                <div className="card-body">
                    <p className="card-title text-start" style={{fontWeight: "bold"}}>{title}</p>
                    {description && <p className="card-description">{description}</p>}
                    <div className="d-flex align-items-center gap-1">
                        <a href={link} className="podcast-duration">
                            <span className="video-play-icon-podcast">
                                <i className="fa fa-play"></i>
                            </span>
                        </a>
                        <span className="podcast-duration-text">
                            {loading
                                ? "Đang lấy thời lượng..."
                                : duration !== undefined
                                    ? duration
                                    : "Chưa có thời lượng"}
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="podcast-featured-card">
            <img className="horizontal-card-image" src={image} alt={title}/>
            <div className="horizontal-card-content">
                <span className="podcast-category">
                    {category}
                    <i className="fa-solid fa-angle-right"></i>
                </span>
                <h3 className="horizontal-card-title">{title}</h3>
                <p className="horizontal-card-description">{description}</p>
                <div className="podcast-audio-actions">
                    <a href={link} className="podcast-duration">
                            <span className="video-play-icon-podcast">
                                <i className="fa fa-play"></i>
                            </span>
                            Nghe podcast
                    </a>
                    <span className="podcast-duration-text">
                            {loading
                                ? "Đang lấy thời lượng..."
                                : duration !== undefined
                                    ? duration
                                    : "Chưa có thời lượng"}
                    </span>
                </div>
            </div>
        </div>
    )
}