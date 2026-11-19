import {parseNewsDetail} from "./parseNewsDetail.ts";

export async function fetchNewsDetails(proxyUrl: string) {
    const response = await fetch(proxyUrl);
    if (!response.ok) {
        throw new Error(`Fetch error: ${response.status}`);
    }
    const html = await response.text();
    const doc =  new DOMParser().parseFromString(html, "text/html");
    return parseNewsDetail(doc);
}