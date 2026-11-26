import type {
    ContentWrap, DetailTab, NewsCallOutLink, NewsCallOutUl, NewsContent, RelatedLink, RelativeBox,
    TextContent, typeOfNews,
} from "../config/newsStructure.ts";
import {convertToProxyURL} from "./rssService.ts";
import type {NewsStructure, callOutVariant} from "../config/newsStructure";
import {newsDetailHref} from "../utils/newsDetailURL.ts";

export const TAGS = new Set([
    "p", "h1", "h2", "h3", "h4", "h5", "h6",
    "a", "b", "span", "strong", "br"
])

function parseText(node: Node): TextContent {
    if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent ?? "";
    }

    if (!(node instanceof Element)) {
        return "";
    }

    const tag = node.tagName.toLowerCase();

    if (!TAGS.has(tag)) {
        return "";
    }

    return {
        tag,
        href: tag === "a"
            ? newsDetailHref(convertToProxyURL(new URL(node.getAttribute("href") ?? "")))
            : undefined,
        children: Array.from(node.childNodes).map(child => parseText(child))
    };
}

function parseCallOutUl(element: Element, type: callOutVariant, index: number): NewsCallOutUl {
    const links: NewsCallOutLink[] = Array.from(
        element.querySelectorAll("li a")).map(a => ({
        type: "callOutLink",
        src: a.getAttribute("href") ?? "",
        title: a.textContent?.trim() ?? ""
    }));

    const liImg = Array.from(element.querySelectorAll("img")).map(img =>
        img.getAttribute("src") ?? "");
    return {type: "callOutUl", variant: type, liImg: liImg, index, li: links};
}

function parseContentWrap(element: Element, index: number): ContentWrap {
    return {
        type: "contentWrap",
        index,
        title: element.querySelector("b")?.textContent?.trim() ?? "",
        paragraph: element.querySelector("p")?.textContent?.trim() ?? ""
    };
}

function parseRelativeBox(element: Element): RelativeBox {
    const relatedLinks: RelatedLink[] = Array.from(element.querySelectorAll("a"))
        .map(a => ({
            title: a.textContent?.trim() ?? "",
            src: convertToProxyURL(new URL(a.href)),
        }))

    const img = element.querySelector("img")?.src;

    return {
        type: "relativeBox",
        firstRelatedImg: img ?? "",
        firstRelatedDescription:
            element.querySelector("p")
                ?.textContent?.trim() ?? "",
        relatedLinks
    };
}

function parseDetailContent(
    container: Element
): NewsContent[] {
    const blocks: NewsContent[] = [];

    const elements = container.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, figure, .content-wrap, .kbwscwl-relatedbox"
    );

    elements.forEach(element => {
        if (element.parentElement?.closest("figure, .content-wrap, .kbwscwl-relatedbox, table")) return;

        const index = element.matches(".kbwscwl-relatedbox") ?
            Math.max(blocks.length - 1, 1) : blocks.length;

        if (element.matches(".content-wrap")) {
            blocks.push(parseContentWrap(element, index));
        } else if (element.matches(".kbwscwl-relatedbox")) {
            const variant = (
                ["type-1", "type-2", "type-3", "type-4", "type-6"] as const
            ).find(type => element.classList.contains(type)) ?? "type-2";
            blocks.push(parseCallOutUl(element, variant, index));
        } else if (element.matches("figure")) {
            const img = element.querySelector("img");
            const src = img?.getAttribute("src");
            if (src) {
                blocks.push({
                    type: "image",
                    index,
                    src: src,
                    caption: element.querySelector("figcaption")
                        ?.textContent?.trim()
                });
            }
        } else if (element.matches("p, h1, h2, h3, h4, h5, h6")) {
            blocks.push({
                type: "text",
                index,
                content: parseText(element)
            });
        }
    });

    return blocks;
}

export function parseNewsDetail(doc: Document): NewsStructure {
    const categoryNameAcList = doc.querySelectorAll(".detail-cate a");

    const category: typeOfNews[] = Array.from(categoryNameAcList).map(a => ({
        title: a.textContent?.trim() ?? "",
        feedName: a.getAttribute("href") ?? "",
    }));

    const mainContent = doc.querySelector(".detail-cmain");
    if (!mainContent) {
        throw new Error("Không tìm thấy nội dung chính");
    }

    const authors = Array.from(doc.querySelectorAll(".author-info p"))
        .map(p => p.textContent?.trim() ?? "")
        .filter(Boolean);

    const box_category = doc.querySelector(".box-category");
    const detailTabElement = doc.querySelector(".detail-tab");

    const detailTab: DetailTab = {
        type: "detailTab",
        tabLinks: Array.from(detailTabElement?.querySelectorAll("a") ?? []).map(a => ({
            title: a.textContent?.trim() ?? "",
            href: a.href
        }))
    };

    return {
        typeOfNews: category,
        detailTitle: doc.querySelector("h1")?.textContent?.trim() ?? "",
        detailSapo: doc.querySelector("h2")?.textContent?.trim() ?? "",
        detailAuthor: authors,
        detailTime: doc.querySelector(".detail-time time")?.textContent?.trim() ?? "",
        detailContent: parseDetailContent(mainContent),
        relativeBox: box_category ? parseRelativeBox(box_category) : {
            type: "relativeBox",
            firstRelatedImg: "",
            firstRelatedDescription: "",
            relatedLinks: []
        },
        detailTab
    };
}