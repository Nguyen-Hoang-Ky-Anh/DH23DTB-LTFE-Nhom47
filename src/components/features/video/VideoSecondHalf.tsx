import VideoSection from "./VideoSection.tsx";
import {VIDEO_SECTIONS} from "../../VideoPage.tsx";

export default function VideoSecondHalf() {
    return (
        <div className="container">
            {VIDEO_SECTIONS.map(s => (
                <VideoSection key={s.feed} {...s}/>
            ))}
        </div>
    )
}