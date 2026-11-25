export function newsDetailHref(proxyURL: string): string {
    return `/news-detail?${new URLSearchParams({url: proxyURL})}`;
}
