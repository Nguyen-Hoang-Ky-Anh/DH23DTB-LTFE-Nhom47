export interface NewsItem {
    title: string;
    link: string;
    image: string;
    description: string;
    pubDate: string;
    guid: string;
}

const parser = new DOMParser();

export default async function fetchRSS(feed: string) {
    const response = await fetch(`/nld/rss/${feed}.rss`);

    if (!response.ok) {
        throw new Error("RSS error:" + response.status);
    }

    const xml = await response.text();
    const doc = parser.parseFromString(xml, "text/xml");
    const error = doc.querySelector("parsererror");

    if (error) {
        throw new Error("RSS error: " + error.textContent);
    }

    return Array.from(doc.querySelectorAll("item")).map((item): NewsItem => {
        const description = item.querySelector("description")?.textContent || "";
        const doc2 = parser.parseFromString(description, "text/html");
        const img = doc2.querySelector("img")?.getAttribute("src") || "";
        return {
            title: item.querySelector("title")?.textContent?.trim() || "",
            link: item.querySelector("link")?.textContent?.trim() || "",
            image: /^https?:\/\//i.test(img) ? img : "/news-placeholder.svg",
            description: doc2.body.textContent.trim(),
            pubDate: item.querySelector("pubDate")?.textContent?.trim() || "",
            guid: item.querySelector("guid")?.textContent?.trim() || ""
        };
    });
}

