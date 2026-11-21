import {Fragment} from "react";
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
    const lastRow = rows.at(-1);

    function showTile(photo: MegaStoryImage) {
        const [name, tileWidth, tileHeight] = photo;
        const showMore = extra.length > 0 && photo === lastRow?.at(-1);

        return (
            <button
                key={name}
                type="button"
                className="mega-story-tile"
                style={{aspectRatio: archive ? "2 / 3" : `${tileWidth} / ${tileHeight}`}}
                title={showMore ? `Xem thêm ${extra.length} ảnh` : "Phóng to ảnh"}
                data-mega-story-photo={megaStoryImagePath(name)}
                data-mega-story-more={showMore || undefined}
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
            {extra.map(([name, width, height]) => (
                <span key={name} hidden data-mega-story-photo={megaStoryImagePath(name)} data-width={width} data-height={height} />
            ))}
            <MediaCaption caption={caption} captionSpace={captionSpace} />
        </figure>
    );
}
