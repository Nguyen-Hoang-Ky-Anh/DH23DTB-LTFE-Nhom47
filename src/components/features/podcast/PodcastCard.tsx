import {newsDetailHref} from "../../../utils/newsDetailURL.ts";
import {Link} from "react-router-dom";
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
    const [duration, setDuration] = useState<string | null>(null);
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
                <Link to={newsDetailHref(link)}>
                   <img className="card-img" src={image} alt={title}/>
                </Link>
                <div className="card-body">
                    <p className="card-title text-start" style={{fontWeight: "bold"}}>
                        <Link to={newsDetailHref(link)} className="text-reset">{title}</Link>
                    </p>
                    {description && <p className="card-description">{description}</p>}
                    <div className="d-flex align-items-center gap-1">
                        <Link to={newsDetailHref(link)} className="podcast-duration">
                            <span className="video-play-icon-podcast">
                                <i className="fa fa-play"></i>
                            </span>
                        </Link>
                        <span className="podcast-duration-text">
                            {loading
                                ? "Đang lấy thời lượng..."
                                : duration !== null
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
            <Link to={newsDetailHref(link)}><img className="horizontal-card-image" src={image} alt={title}/></Link>
            <div className="horizontal-card-content">
                <span className="podcast-category">
                    {category}
                    <i className="fa-solid fa-angle-right"></i>
                </span>
                <h3 className="horizontal-card-title">
                    <Link className="text-reset" to={newsDetailHref(link)}>{title}</Link>
                </h3>
                <p className="horizontal-card-description">{description}</p>
                <div className="podcast-audio-actions">
                    <Link to={newsDetailHref(link)} className="podcast-duration">
                            <span className="video-play-icon-podcast">
                                <i className="fa fa-play"></i>
                            </span>
                            Nghe podcast
                    </Link>
                    <span className="podcast-duration-text">
                            {loading
                                ? "Đang lấy thời lượng..."
                                : duration !== null
                                    ? duration
                                    : "Chưa có thời lượng"}
                    </span>
                </div>
            </div>
        </div>
    )
}