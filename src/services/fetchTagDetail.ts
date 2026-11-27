import parseTag from "./parseTag.ts";

export default async function fetchTagDetails(proxyUrl: string | null) {
    const response = await fetch(proxyUrl ? proxyUrl : "");
    if (!response.ok) {
        throw new Error(`Fetch error: ${response.status}`);
    }

    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, "text/html");

    return parseTag(doc);
}