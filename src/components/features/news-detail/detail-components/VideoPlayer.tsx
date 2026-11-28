import type {NewsVideo} from "../../../../config/newsStructure.ts";

interface NewsVideoPlayerProps {
    video: NewsVideo;
}

export default function VideoPlayer({
                                            video
                                        }: NewsVideoPlayerProps) {
    if (video.format === "embed") {
        return (
            <iframe
                src={video.src}
                title="SohaTV Player"
                className="w-100 border-0"
                style={{ aspectRatio: "16 / 9" }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            />
        );
    }

    if (video.format === "mp4" || video.format === "mov") {
        return (
            <video
                src={video.src}
                className="w-100"
                controls
            />
        );
    }

    return null;
}