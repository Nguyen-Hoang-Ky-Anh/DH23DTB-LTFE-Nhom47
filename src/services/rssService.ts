export interface NewsItem {
    title: string;
    link: string;
    image: string;
    description: string;
    pubDate: string;
    guid: string;
}

const parser = new DOMParser();

export default async function fetchRSS(feed = "home") {
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

    const items = Array.from(doc.querySelectorAll("item"));

    const newsItems: NewsItem[] = items.map(item => {
        const itemTitle = item.querySelector("title");
        const itemLink = item.querySelector("link");
        const itemBaseDescription = item.querySelector("description");

        const doc2 = parser.parseFromString(itemBaseDescription?.textContent || "", "text/html");

        const imgElement = doc2.querySelector("img");
        const img = imgElement?.getAttribute("src") || "";
        const itemPubDate = item.querySelector("pubDate");
        const itemGuid = item.querySelector("guid");

        return {
            title: itemTitle?.textContent?.trim() || "",
            link: itemLink?.textContent?.trim() || "",
            image: /^https?:\/\//i.test(img) ? img : "/news-placeholder.svg",
            description: doc2.body.textContent.trim(),
            pubDate: itemPubDate?.textContent?.trim() || "",
            guid: itemGuid?.textContent?.trim() || ""
        };
    });
    return newsItems;
}

