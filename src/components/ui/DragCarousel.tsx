import {useRef, useState} from "react";
import type {ReactNode} from "react";

interface DragCarouselProps {
    children: ReactNode;
    showControls?: boolean;
    showProgress?: boolean;
    showRadio?: boolean;
}

export default function DragCarousel({
                                         children,
                                         showControls,
                                         showRadio = false,
                                         showProgress = false
                                     }: DragCarouselProps) {
    const viewportRef = useRef<HTMLDivElement>(null);
    const drag = useRef<{ x: number; left: number } | null>(null);
    const dragged = useRef(false);
    const progressDrag = useRef<{ x: number; left: number } | null>(null);
    const [progress, setProgress] = useState(0);
    const [index, setIndex] = useState(0);

    const snapToSide = (viewport: HTMLDivElement) => {
        const maxScroll = Math.max(0,
            viewport.scrollWidth - viewport.clientWidth);

        const target = viewport.scrollLeft >= maxScroll / 2 ?
            maxScroll : 0;

        viewport.scrollTo({
            left: target,
            behavior: "smooth"
        });
    };

    return (
        <div className="flex-grow-1" style={{minWidth: 0}}>
            <div className="d-flex align-items-center gap-3">
                <div
                    ref={viewportRef}
                    className="drag-carousel flex-grow-1 overflow-hidden"
                    tabIndex={0}
                    style={{minWidth: 0, userSelect: "none", touchAction: "pan-y"}}
                    onDragStart={event => event.preventDefault()}
                    onPointerDown={event => {
                        if (event.button !== 0) return;
                        drag.current = {x: event.clientX, left: event.currentTarget.scrollLeft};
                        dragged.current = false;
                    }}
                    onPointerMove={event => {
                        if (drag.current) {
                            if (Math.abs(drag.current.x - event.clientX) < 5 && !dragged.current) return;
                            dragged.current = true;
                            event.currentTarget.setPointerCapture(event.pointerId);
                            event.currentTarget.classList.add("dragging");
                            event.currentTarget.scrollLeft = drag.current.left + drag.current.x - event.clientX;
                        }
                    }}
                    onPointerUp={event => {
                        if (!event.currentTarget.hasPointerCapture(event.pointerId)) drag.current = null;
                    }}
                    onPointerLeave={event => {
                        if (!event.currentTarget.hasPointerCapture(event.pointerId)) drag.current = null;
                    }}
                    onClickCapture={event => {
                        if (dragged.current) {
                            event.preventDefault();
                            event.stopPropagation();
                            dragged.current = false;
                        }
                    }}
                    onLostPointerCapture={event => {
                        if (showRadio && drag.current) {
                            snapToSide(event.currentTarget);
                        }
                        drag.current = null;
                        event.currentTarget.classList.remove("dragging");
                    }}
                    onScroll={event => {
                        const viewport = event.currentTarget;
                        const currentProgress = viewport.scrollLeft / Math.max(1, viewport.scrollWidth - viewport.clientWidth);
                        setProgress(currentProgress);

                        if (showRadio) {
                            setIndex(currentProgress >= 0.5 ? 1 : 0);
                        } else if (viewport.clientWidth > 0) {
                            setIndex(Math.round(viewport.scrollLeft / viewport.clientWidth))
                        }
                    }}
                    onKeyDown={event => {
                        const viewport = event.currentTarget;
                        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                            event.preventDefault();
                            viewport.scrollBy({left: event.key === "ArrowLeft" ? -240 : 240, behavior: "smooth"});
                        }
                    }}
                >
                    <div className="d-flex gap-3" style={{width: "max-content"}}>{children}</div>
                </div>
                {showControls && (
                    <div className="d-flex gap-2 flex-shrink-0">
                        <button type="button" className="btn btn-outline-secondary btn-sm" disabled={progress === 0} onClick={() => viewportRef.current?.scrollBy({left: -320, behavior: "smooth"})}>
                            <i className="fa-solid fa-angle-left"/>
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-sm" disabled={progress >= 0.999} onClick={() => viewportRef.current?.scrollBy({left: 320, behavior: "smooth"})}>
                            <i className="fa-solid fa-angle-right"/>
                        </button>
                    </div>
                )}
            </div>
            {showProgress && (
                <div className="progress bg-white rounded mx-auto mt-4" style={{height: 5, width: 260}}>
                    <div
                        className="progress-bar rounded w-50"
                        style={{marginLeft: `${progress * 50}%`, cursor: "pointer", touchAction: "none", userSelect: "none"}}
                        onPointerDown={event => {
                            const viewport = viewportRef.current;
                            if (event.button !== 0 || !viewport) return;
                            progressDrag.current = {x: event.clientX, left: viewport.scrollLeft};
                            event.currentTarget.setPointerCapture(event.pointerId);
                        }}
                        onPointerMove={event => {
                            const viewport = viewportRef.current;
                            if (!progressDrag.current || !viewport) return;
                            const bar = event.currentTarget;
                            const distance = bar.parentElement!.clientWidth - bar.offsetWidth;
                            viewport.scrollLeft = progressDrag.current.left +
                                (event.clientX - progressDrag.current.x) / Math.max(1, distance) *
                                (viewport.scrollWidth - viewport.clientWidth);
                        }}
                        onLostPointerCapture={() => {
                            progressDrag.current = null;
                        }}
                    />
                </div>
            )}

            {showRadio && (
                <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                    {[0, 1].map((i) => (
                        <button
                            key={i}
                            type="button"
                            className={`border-0`}
                            style={{
                                borderRadius: "50%",
                                height: 10,
                                width: 10,
                                opacity: index === i ? 1 : 0.4,
                                cursor: "pointer",
                                backgroundColor: index === i ? "blue" : "silver",
                            }}

                            onClick={() => {
                                const viewport = viewportRef.current;
                                if (!viewport) return;
                                const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
                                viewport.scrollTo({
                                    left: i === 0 ? 0 : maxScroll,
                                    behavior: "smooth"
                                });
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
