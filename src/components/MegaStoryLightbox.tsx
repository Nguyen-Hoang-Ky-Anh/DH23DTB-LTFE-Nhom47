import {useLayoutEffect, useRef, useState} from "react";
import type {MouseEvent, ReactNode} from "react";

export default function MegaStoryLightbox({children}: {children: ReactNode}) {
    const dialog = useRef<HTMLDialogElement>(null);
    const image = useRef<HTMLImageElement>(null);
    const origin = useRef<DOMRect | undefined>(undefined);
    const [selection, setSelection] = useState<{photos: HTMLElement[]; index: number} | null>(null);
    const photo = selection?.photos[selection.index];
    const thumbnail = photo?.querySelector("img");
    const width = Number(thumbnail?.getAttribute("width") || photo?.dataset.width);
    const height = Number(thumbnail?.getAttribute("height") || photo?.dataset.height);
    const caption = photo?.closest("figure")?.querySelector(":scope > figcaption")?.textContent;

    useLayoutEffect(() => {
        if (!selection || !dialog.current || dialog.current.open) return;
        dialog.current.showModal();

        const from = origin.current;
        const to = image.current?.getBoundingClientRect();
        if (!from || !to?.width || !to.height) return;
        const x = from.left + from.width / 2 - to.left - to.width / 2;
        const y = from.top + from.height / 2 - to.top - to.height / 2;
        const transform = `translate(${x}px, ${y}px) scale(${from.width / to.width}, ${from.height / to.height})`;
        image.current?.animate([{transform}, {transform: "none"}], {duration: 280, easing: "ease-out"});
    }, [selection]);

    function openPhoto(event: MouseEvent<HTMLElement>) {
        if (!(event.target instanceof Element)) return;
        const button = event.target.closest("button[data-mega-story-photo]");
        if (!button) return;

        const photos = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("[data-mega-story-photo]"))
            .filter(entry => !entry.closest("details:not([open])"));
        const index = photos.indexOf(button as HTMLElement);
        if (index < 0) return;

        origin.current = button.querySelector("img")?.getBoundingClientRect();
        setSelection({photos, index: index + (button.hasAttribute("data-mega-story-more") ? 1 : 0)});
    }

    function step(direction: number) {
        setSelection(current => current && ({
            photos: current.photos,
            index: (current.index + direction + current.photos.length) % current.photos.length,
        }));
    }

    return (
        <article onClick={openPhoto}>
            {children}
            <dialog ref={dialog} className="mega-story-lightbox" onClose={() => setSelection(null)}
                    onClick={event => {
                        const target = event.target;
                        if (target instanceof Element && target !== image.current && !target.closest("button")) {
                            event.currentTarget.close();
                        }
                    }}
                    onKeyDown={event => {
                        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
                        event.preventDefault();
                        step(event.key === "ArrowLeft" ? -1 : 1);
                    }}>
                <button type="button" className="mega-story-previous" title="Ảnh trước" onClick={() => step(-1)}>‹</button>
                <button type="button" className="mega-story-next" title="Ảnh sau" onClick={() => step(1)}>›</button>
                {photo && (
                    <figure className="mega-story-lightbox-picture">
                        <img ref={image} src={photo.dataset.megaStoryPhoto} alt={thumbnail?.alt ?? ""}
                             width={width} height={height} style={{
                                 width: `min(${width}px, calc((100dvh - ${caption ? 160 : 96}px) * ${width / height}))`,
                                 aspectRatio: `${width} / ${height}`,
                             }} />
                        {caption && <figcaption>{caption}</figcaption>}
                    </figure>
                )}
            </dialog>
        </article>
    );
}
