import {Link} from "react-router-dom";
import type {LongformBlock, NewsStructure} from "../../../config/newsStructure.ts";
import {newsDetailHref} from "../../../utils/newsDetailURL.ts";
import MegaStoryLightbox from "../../MegaStoryLightbox.tsx";
import CommentBlock from "../../ui/CommentBlock.tsx";

function renderBlock(block: LongformBlock, index: number) {
    switch (block.type) {
        case "paragraph":
            return <p key={index} className="longform-reading">{block.text}</p>;
        case "heading":
            return <h2 key={index} className="longform-reading longform-heading">{block.text}</h2>;
        case "quote":
            return <blockquote key={index} className="longform-reading longform-quote">{block.text}</blockquote>;
        case "credit":
            return <p key={index} className="longform-reading longform-credit">{block.text}</p>;
        case "gallery":
            return (
                <figure key={index} className={`longform-media longform-${block.width}`}>
                    {block.rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="longform-photo-row">
                            {row.map((photo, photoIndex) => (
                                <button key={photoIndex} type="button" className="mega-story-photo-trigger"
                                        title="Phóng to ảnh" data-mega-story-photo={photo.src}>
                                    <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async"/>
                                </button>
                            ))}
                        </div>
                    ))}
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
            );
        case "video":
            return (
                <figure key={index} className={`longform-media longform-${block.width}`}>
                    <video src={block.src} poster={block.poster || undefined} controls playsInline preload="none"/>
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
            );
        case "related":
            return (
                <aside key={index} className="longform-reading longform-related">
                    <h2>Đọc thêm</h2>
                    <ul className="mb-0">
                        {block.links.map((link, linkIndex) => (
                            <li key={linkIndex}><Link to={newsDetailHref(link.src)}>{link.title}</Link></li>
                        ))}
                    </ul>
                </aside>
            );
    }
}

export default function LongformArticle({title, article}: {title: string; article: NonNullable<NewsStructure["longform"]>}) {
    return (
        <MegaStoryLightbox key={title} className="longform-detail text-start">
            <title>{title}</title>
            {article.cover && (
                <button type="button" className="mega-story-photo-trigger" title="Phóng to ảnh bìa"
                        data-mega-story-photo={article.cover.src}>
                    <img className="longform-cover" src={article.cover.src} alt={article.cover.alt}/>
                </button>
            )}
            <h1 className="longform-reading longform-title">{title}</h1>
            {article.blocks.map(renderBlock)}
            <section id="longform-comments" className="longform-reading longform-comments">
                <h2>Bình luận</h2>
                <CommentBlock/>
            </section>
        </MegaStoryLightbox>
    );
}
