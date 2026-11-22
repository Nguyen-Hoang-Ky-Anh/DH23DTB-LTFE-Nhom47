import {useEffect, useRef, useState} from "react";
import {megaStoryImagePath, type MegaStoryTimelineImage, type MegaStoryVideoBlock} from "../config/megaStoryContent.ts";
import {MediaCaption} from "./MegaStoryAlbum.tsx";

const videoPath = "291774122806476800/2026/6/24/2026-khep-lai-178234243589567230044.mp4";
const videoCdn = "https://nld.mediacdn.vn";

export function MegaStoryVideo({path, caption, italicTitle, poster = `${videoCdn}/.v-thumb/${path}.jpg`}: Omit<MegaStoryVideoBlock, "type"> & {poster?: string}) {
    return (
        <figure className="mega-story-media mega-story-wide">
            <video className="d-block w-100 h-auto" width={1280} height={720}
                   poster={poster} controls playsInline preload="none">
                <source src={`${videoCdn}/.hls/${path}.master.m3u8`} type="application/vnd.apple.mpegurl" />
                <source src={`${videoCdn}/${path}`} type={path.endsWith(".mp4") ? "video/mp4" : undefined} />
            </video>
            <MediaCaption caption={caption} italicTitle={italicTitle} />
        </figure>
    );
}

const milestones: MegaStoryTimelineImage[] = [
    ["anh-025-01", 2560, 1600, "28-7-1975"],
    ["anh-026-01", 2560, 1600, "1984–1989"],
    ["anh-027-01", 2560, 1600, "28-7-1990"],
    ["anh-028-01", 2560, 1600, "1995"],
    ["anh-029-01", 2560, 1600, "2019"],
    ["anh-030-01", 2560, 1600, "2020"],
    ["anh-031-01", 2560, 1600, "2021"],
    ["anh-032-01", 2560, 1600, "2025"],
    ["anh-033-01", 2560, 1600, "30-6-2026"],
];

export function MegaStoryMilestones() {
    return (
        <>
            <MegaStoryTimeline images={milestones} layout="wide" />
            <MegaStoryVideo path={videoPath} poster="/mega-story/cot-moc-video-poster.webp" />
        </>
    );
}

export default function MegaStoryTimeline({images, layout = "reading"}: {
    images: MegaStoryTimelineImage[];
    layout?: "wide" | "reading";
}) {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const slideCount = images.length;
    const [file, width, height, alt = ""] = images[activeIndex];

    useEffect(() => {
        const timeline = timelineRef.current;
        const frame = timeline?.firstElementChild;
        if (!timeline || !frame) return;

        let request = 0;
        const updateIndex = () => {
            request = 0;
            const {top, height} = timeline.getBoundingClientRect();
            const step = Math.max(1, (height - frame.clientHeight) / slideCount);
            const nextIndex = Math.floor(-top / step);
            setActiveIndex(Math.max(0, Math.min(nextIndex, slideCount - 1)));
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
    }, [slideCount]);

    return (
        <div ref={timelineRef} style={{height: `${100 + slideCount * 40}svh`}}>
            <div className="position-sticky top-0 d-flex align-items-center justify-content-center"
                 style={{height: "100svh", paddingBlock: "54px 16px"}}>
                <figure className={`mega-story-${layout} m-0 h-100 d-flex align-items-center`}>
                    <img key={file} src={megaStoryImagePath(file)} alt={alt} width={width} height={height}
                         className="d-block w-100 h-auto" style={{maxHeight: "100%", objectFit: "contain"}}
                         loading="lazy" decoding="async" onLoad={event => {
                             event.currentTarget.animate([{opacity: 0}, {opacity: 1}], {duration: 350, easing: "ease-out"});
                         }} />
                </figure>
            </div>
        </div>
    );
}
