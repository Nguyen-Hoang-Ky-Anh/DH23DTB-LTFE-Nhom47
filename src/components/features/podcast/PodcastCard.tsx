import {fetchPodcastDuration} from "../../../services/podcastService.ts";
import {useEffect, useState} from "react";

interface PodcastCardProps {
    title: string;
    image: string;
    link: string;
    description?: string;
    style?: "vertical" | "horizontal";
}

export default function PodcastCard({ title, image, link, description, style = "vertical"}: PodcastCardProps) {
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
            <div className="card mb-4" style={{width:'18rem', fontFamily: "Merriweather"}}>
                <img className="card-img" src={image} alt={title}/>
                <div className="card-body">
                    <p className="card-title text-start" style={{fontWeight: "bold"}}>{title}</p>
                    {description && <p className="card-description">{description}</p>}
                    <a href={link} className="podcast-duration">
                        <span className="video-play-icon-podcast">
                            <i className="fa fa-play"></i>
                        </span>

                        <span className="podcast-duration-text">
                            {loading
                                ? "Đang lấy thời lượng..."
                                : duration !== undefined
                                    ? duration
                                    : "Chưa có thời lượng"}
                        </span>
                    </a>
                </div>
            </div>
        )
    }
}