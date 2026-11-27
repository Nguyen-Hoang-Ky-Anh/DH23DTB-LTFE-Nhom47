import type {NewsItem} from "../services/rssService.ts";

export interface TagStructure {
    tagName: string;
    tagItems: NewsItem[];
}