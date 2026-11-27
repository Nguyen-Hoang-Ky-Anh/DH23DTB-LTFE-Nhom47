import type {TagStructure} from "../config/tagStructure.ts";
import type {NewsItem} from "./rssService.ts";

export default function parseTag(doc: Document): TagStructure {
    const items = doc.querySelectorAll(".box-category-item")
    const tagNameElement = doc.querySelector(".cate-name")
    const tagName = tagNameElement?.textContent.trim() ?? "Không có tag name"
    const tagItems: NewsItem[] = Array.from(items).map((i, index) => {
        const imageElement = i.querySelector<HTMLImageElement>(".box-category-avatar");
        const titleElement = i.querySelector(".box-category-title-text");
        const descriptionElement = i.querySelector(".box-category-sapo");
        const linkElement = i.querySelector<HTMLAnchorElement>("a");

        const link = linkElement?.href ?? "";

        return {
            image: imageElement?.getAttribute("src") ?? "",
            title: titleElement?.textContent.trim() ?? "",
            description: descriptionElement?.textContent.trim() ?? "",
            link: link,
            pubDate: "",
            guid: link || `tag-${index}`,
        };
    })

    return { tagName, tagItems }
}