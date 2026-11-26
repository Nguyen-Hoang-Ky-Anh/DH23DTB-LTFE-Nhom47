import type {LongformBlock, LongformPhoto, LongformWidth, NewsStructure} from "../config/newsStructure.ts";
import {convertToProxyURL} from "./rssService.ts";

const gallerySelector = '[type="photo-grid-album"]';
const videoSelector = '[type="VideoStream"], video';
const relatedSelector = '[type="RelatedNewsBox"], .kbwscwl-relatedbox';
const quoteSelector = '[type="block-quote-info"], blockquote';
const creditSelector = '[type="credit"]';
const photoSelector = `${gallerySelector}, figure:not(:has(${videoSelector}))`;
const groupedBlocks = `${photoSelector}, ${videoSelector}, ${relatedSelector}, ${quoteSelector}, ${creditSelector}`;

function text(element: Element | null) {
    return element?.textContent?.replace(/\s+/g, " ").trim() ?? "";
}

function readWidth(element: Element): LongformWidth {
    if (element.classList.contains("alignJustifyFull")) return "full";
    if (element.classList.contains("alignCenterOverflow") || element.matches(gallerySelector)) return "wide";
    return "reading";
}

function mediaURL(value: string | null | undefined, sourceURL: URL) {
    if (!value) return "";
    const absolute = /^[\w.-]+\.[a-z]{2,}\//i.test(value) ? `https://${value}` : value;
    const url = URL.parse(absolute, sourceURL);
    return url?.protocol === "https:" ? url.href : "";
}

function parsePhoto(img: HTMLImageElement, sourceURL: URL): LongformPhoto | undefined {
    const src = mediaURL(img.getAttribute("src"), sourceURL) || mediaURL(img.dataset.original, sourceURL);
    return src ? {src, alt: img.alt === "img" ? "" : img.alt} : undefined;
}

function parseLongformContent(content: Element, sourceURL: URL, title: string): LongformBlock[] {
    const blocks: LongformBlock[] = [];
    const elements = content.querySelectorAll(`p, h2, h3, h4, h5, h6, ${groupedBlocks}`);

    for (const element of elements) {
        const parent = element.parentElement?.closest(groupedBlocks);
        if (parent && content.contains(parent)) continue;

        if (element.matches(photoSelector)) {
            const galleryRows = element.querySelectorAll(":scope > .grid-row");
            const rows: LongformPhoto[][] = [];
            for (const row of galleryRows.length ? galleryRows : [element]) {
                const photos = Array.from(row.querySelectorAll("img"), img => parsePhoto(img, sourceURL))
                    .filter(photo => photo !== undefined);
                if (photos.length) rows.push(photos);
            }
            if (rows.length) {
                blocks.push({type: "gallery", rows, caption: text(element.querySelector("figcaption")), width: readWidth(element)});
            }
        } else if (element.matches(videoSelector)) {
            const videoSrc = element.getAttribute("data-vid") || element.getAttribute("src") ||
                element.querySelector("source[src]")?.getAttribute("src");
            const src = mediaURL(videoSrc, sourceURL);
            if (src) {
                blocks.push({
                    type: "video",
                    src,
                    poster: mediaURL(element.getAttribute("data-thumb"), sourceURL),
                    caption: text(element.querySelector(".VideoCMS_Caption, figcaption")),
                    width: readWidth(element),
                });
            }
        } else if (element.matches(relatedSelector)) {
            const links = Array.from(element.querySelectorAll("a[href]")).flatMap(anchor => {
                const href = URL.parse(anchor.getAttribute("href") ?? "", sourceURL);
                const label = text(anchor);
                return label && href?.origin === sourceURL.origin && /^\/nld\/.+\.htm$/i.test(href.pathname)
                    ? [{title: label, src: convertToProxyURL(href)}] : [];
            });
            if (links.length) blocks.push({type: "related", links});
        } else {
            const value = text(element);
            if (!value || value === title) continue;

            let type: "credit" | "quote" | "paragraph" | "heading" = "heading";
            if (element.matches(creditSelector)) type = "credit";
            else if (element.matches(quoteSelector)) type = "quote";
            else if (element.matches("p")) type = "paragraph";
            blocks.push({type, text: value});
        }
    }

    return blocks;
}

export function parseLongform(doc: Document): NewsStructure | undefined {
    const content = doc.querySelector('.container-magazine .detail-content[itemprop="articleBody"]');
    if (!content) return;

    const meta = (property: string) => doc.querySelector(`meta[property="${property}"]`)?.getAttribute("content") ?? "";
    const siteURL = new URL("https://tuoitre.vn/nld/");
    const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute("href");
    const articleURL = URL.parse(canonical || meta("og:url"), siteURL);
    const sourceURL = articleURL?.origin === siteURL.origin ? articleURL : siteURL;
    const title = meta("og:title").replace(/\s+- Báo Người Lao Động\s*$/i, "").trim() ||
        text(content.querySelector("h1, h2, h3")) || doc.title;
    const coverImage = doc.querySelector<HTMLImageElement>('.container-magazine img[data-role="cover"], .detailmaincontent img[data-role="cover"]');
    const cover = coverImage ? parsePhoto(coverImage, sourceURL) : undefined;

    return {
        detailTitle: title,
        detailSapo: "",
        detailAuthor: [],
        detailTime: "",
        detailContent: [],
        relativeBox: {type: "relativeBox", firstRelatedImg: "", firstRelatedDescription: "", relatedLinks: []},
        detailTab: {type: "detailTab", tabLinks: []},
        longform: {cover, blocks: parseLongformContent(content, sourceURL, title)},
    };
}
