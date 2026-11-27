import parseNewsDetailHistory from "./parseNewDetailHistory.ts";
import {convertToProxyURL} from "./rssService.ts";

export default async function fetchNewsDetailHistory(threadId: string) {
    const url = new URL(`https://tuoitre.vn/nld/ajax-load-detail-thread-${threadId}.htm`);

    const response = await fetch(convertToProxyURL(url));

    if(!response.ok) {
        throw new Error("Fetch news detail history error: " + response.status);
    }

    const text =  await response.text();
    const doc = new DOMParser().parseFromString(text, "text/html");
    return parseNewsDetailHistory(doc);
}