import {newsDetailHref} from "../utils/newsDetailURL.ts";

export interface DetailHistoryItem {
    date: string,
    itemTitle: string,
    link: string
}

export interface DetailHistory {
    title: string,
    historyItems: DetailHistoryItem[]
}

export default function parseNewsDetailHistory(doc: Document, ): DetailHistory {
    const title = doc.querySelector('.title-box a')?.textContent ?? "";
    const historyItems: DetailHistoryItem[] =
        Array.from(doc.querySelectorAll('.box-category-item')).map((item) => {
            return ({
                date: item.querySelector('.time-ago')?.textContent ?? "",
                itemTitle: item.querySelector('.box-category-link-title')?.textContent ?? "",
                link: newsDetailHref(
                    "/news-detail-proxy" + item.querySelector('.box-category-link-title')?.getAttribute('href')
                )
            })
        });
    console.log(historyItems)
    return {title, historyItems};
}