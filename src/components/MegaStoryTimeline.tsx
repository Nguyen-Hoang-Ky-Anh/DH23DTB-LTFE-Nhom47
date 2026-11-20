import {useEffect, useRef, useState} from "react";
import {megaStoryImagePath} from "../config/megaStoryContent.ts";

const videoPath = "291774122806476800/2026/6/24/2026-khep-lai-178234243589567230044.mp4";
const videoCdn = "https://nld.mediacdn.vn";

const milestones = [
    {file: "anh-025-01", date: "28-7-1975"},
    {file: "anh-026-01", date: "1984–1989"},
    {file: "anh-027-01", date: "28-7-1990"},
    {file: "anh-028-01", date: "1995"},
    {file: "anh-029-01", date: "2019"},
    {file: "anh-030-01", date: "2020"},
    {file: "anh-031-01", date: "2021"},
    {file: "anh-032-01", date: "2025"},
    {file: "anh-033-01", date: "30-6-2026"},
];

export default function MegaStoryTimeline() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const {file, date} = milestones[activeIndex];

    useEffect(() => {
        const timeline = timelineRef.current;
        const frame = timeline?.firstElementChild;
        if (!timeline || !frame) return;

        let request = 0;
        const updateIndex = () => {
            request = 0;
            const {top, height} = timeline.getBoundingClientRect();
            const step = Math.max(1, (height - frame.clientHeight) / milestones.length);
            const nextIndex = Math.floor(-top / step);
            setActiveIndex(Math.max(0, Math.min(nextIndex, milestones.length - 1)));
        };

        function handleScroll() {
            if (!request) request = window.requestAnimationFrame(updateIndex);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll, {passive: true});
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            window.cancelAnimationFrame(request);
        };
    }, []);

    return (
        <>
            <div ref={timelineRef} style={{height: `${100 + milestones.length * 40}svh`}}>
                <div className="position-sticky top-0 d-flex align-items-center justify-content-center"
                     style={{height: "100svh", paddingBlock: "54px 16px"}}>
                    <figure className="mega-story-wide m-0 h-100 d-flex align-items-center">
                        <img key={file} src={megaStoryImagePath(file)} alt={date} width={2560} height={1600}
                             className="d-block w-100 h-auto" style={{maxHeight: "100%", objectFit: "contain"}}
                             loading="lazy" decoding="async" onLoad={event => {
                                 event.currentTarget.animate([{opacity: 0}, {opacity: 1}], {duration: 350, easing: "ease-out"});
                             }} />
                    </figure>
                </div>
            </div>
            <figure className="mega-story-media mega-story-wide">
                <video className="d-block w-100 h-auto" width={1280} height={720}
                       poster="/mega-story/cot-moc-video-poster.webp" controls playsInline preload="none">
                    <source src={`${videoCdn}/.hls/${videoPath}.master.m3u8`} type="application/vnd.apple.mpegurl" />
                    <source src={`${videoCdn}/${videoPath}`} type="video/mp4" />
                </video>
            </figure>
        </>
    );
}
