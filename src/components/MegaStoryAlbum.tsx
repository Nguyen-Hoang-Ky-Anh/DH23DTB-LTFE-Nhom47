import {Fragment, useRef, useState} from "react";
import {megaStoryImagePath, type MegaStoryAlbum, type MegaStoryImage} from "../config/megaStoryContent.ts";

export function MegaStoryText({text}: {text: string}) {
    return text.split("Người Lao Động").map((part, index) => (
        <Fragment key={index}>
            {index > 0 && <em>Người Lao Động</em>}
            {part}
        </Fragment>
    ));
}

export function MediaCaption({caption, captionSpace, italicTitle}: {caption?: string; captionSpace?: boolean; italicTitle?: boolean}) {
    if (caption) return <figcaption>{italicTitle ? <MegaStoryText text={caption} /> : caption}</figcaption>;
    if (captionSpace) return <div className="mega-story-caption-space" aria-hidden="true" />;
    return null;
}

export default function MegaStoryAlbum({rows, layout, archive, extra = [], caption, captionSpace}: MegaStoryAlbum) {
    const photos = [...rows.flat(), ...extra];
    const hiddenStart = photos.length - extra.length;
    const [index, setIndex] = useState<number | null>(null);
    const dialog = useRef<HTMLDialogElement>(null);
    const currentPhoto = index === null ? undefined : photos[index];

    function open(photoIndex: number) {
        setIndex(photoIndex);
        dialog.current?.showModal();
    }

    function step(direction: number) {
        setIndex(current => ((current ?? 0) + direction + photos.length) % photos.length);
    }

    function showTile(photo: MegaStoryImage) {
        const [name, tileWidth, tileHeight] = photo;
        const photoIndex = photos.indexOf(photo);
        const showMore = extra.length > 0 && photoIndex === hiddenStart - 1;

        return (
            <button
                key={name}
                type="button"
                className="mega-story-tile"
                style={{aspectRatio: archive ? "2 / 3" : `${tileWidth} / ${tileHeight}`}}
                aria-label={showMore ? `Xem thêm ${extra.length} ảnh` : `Xem ảnh ${photoIndex + 1}`}
                onClick={() => open(showMore ? hiddenStart : photoIndex)}
            >
                <img src={megaStoryImagePath(name)} alt="" width={tileWidth} height={tileHeight} loading="lazy" decoding="async" />
                {showMore && <span className="mega-story-tile-more" aria-hidden="true">+{extra.length}</span>}
            </button>
        );
    }

    return (
        <figure className={`mega-story-media mega-story-album ${layout === "wide" ? "mega-story-wide" : "mega-story-full"}`}>
            {rows.map(row => (
                <div
                    key={row[0][0]}
                    className="mega-story-album-row"
                    style={{gridTemplateColumns: row.map(([, w, h]) => `minmax(0, ${archive ? 1 : w / h}fr)`).join(" ")}}
                >
                    {row.map(showTile)}
                </div>
            ))}
            <MediaCaption caption={caption} captionSpace={captionSpace} />
            <dialog
                ref={dialog}
                className="mega-story-lightbox"
                aria-label={caption || "Album ảnh"}
                onClose={() => setIndex(null)}
                onKeyDown={event => {
                    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                        event.preventDefault();
                        step(event.key === "ArrowLeft" ? -1 : 1);
                    }
                }}
                onClick={event => {
                    if (event.target === event.currentTarget) dialog.current?.close();
                }}
            >
                <button type="button" className="mega-story-close" aria-label="Đóng album" onClick={() => dialog.current?.close()}>×</button>
                <button type="button" className="mega-story-previous" aria-label="Ảnh trước" onClick={() => step(-1)}>‹</button>
                {currentPhoto && (
                    <img src={megaStoryImagePath(currentPhoto[0])} alt={`Ảnh ${(index ?? 0) + 1}`} width={currentPhoto[1]} height={currentPhoto[2]} />
                )}
                <button type="button" className="mega-story-next" aria-label="Ảnh sau" onClick={() => step(1)}>›</button>
                {index !== null && <output className="mega-story-image-index" aria-live="polite">{index + 1} / {photos.length}</output>}
            </dialog>
        </figure>
    );
}
