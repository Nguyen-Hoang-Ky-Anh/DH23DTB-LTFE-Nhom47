import type {NewsItem} from "../services/rssService.ts";

export const megaStory = {
    href: "/mega-story/dieu-con-lai",
    feed: "banDoc",
    title: "MEGA STORY: Điều còn lại - Hành trình 51 năm của Báo Người Lao Động (1975-2026)",
    description: "(NLĐO) - Một tờ báo có thể khép lại hành trình của mình nhưng những giá trị mà tờ báo góp phần tạo dựng cho xã hội sẽ còn ở lại",
    image: "/mega-story/cover.webp",
    thumbnail: "/mega-story/cover-small.webp",
} as const;

export function findMegaStory(news?: NewsItem[]) {
    return news?.find(item => item.title === megaStory.title);
}
