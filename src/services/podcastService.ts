export async function fetchPodcastDuration(proxyUrl: string): Promise<string | null> {
    const response = await fetch(proxyUrl);
    if (!response.ok) {
        throw new Error(`Fetch error: ${response.status}`);
    }

    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, "text/html");

    const text = doc.querySelector(".box-radio-time")?.textContent?.trim();
    if (!text) return null;

    const totalSeconds = text.split(":").reduce(
        (total, part) => total * 60 + Number(part),
        0
    );

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}