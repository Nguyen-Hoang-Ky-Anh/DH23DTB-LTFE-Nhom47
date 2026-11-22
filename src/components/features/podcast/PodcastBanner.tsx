import {useState} from "react";

interface PodcastBannerProps {
    title: string
}

export default function PodcastBanner({title}: PodcastBannerProps) {
    const [copied, setCopied] = useState(false);
    const url = window.location.href;

    async function copyLink() {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return (
        <div className="podcast-banner">
            <div
                className="podcast-banner-bg"
                style={{ backgroundImage: `url(https://png.pngtree.com/thumb_back/fw800/background/20241128/pngtree-blurred-urban-city-background-image_16700244.jpg)` }}
            />
            <div className="container">
                <div className="mx-5">
                    <div className="podcast-banner-card">
                        <h1>{title}</h1>
                        <div className="podcast-banner-actions">
                            <a
                                href="#"
                                target="_blank"
                                aria-label="Chia sẻ lên Facebook"
                            >
                                <i className="fa-brands fa-facebook-f" />
                            </a>
                            <button type="button" onClick={copyLink} aria-label="Sao chép liên kết">
                                <i className={`fa-solid ${copied ? "fa-check" : "fa-link"}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}