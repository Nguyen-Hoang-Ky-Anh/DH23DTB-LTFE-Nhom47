import media from "./megaStoryMedia.json";

export type MegaStoryImage = [file: string, width: number, height: number];

interface Caption {
    caption?: string;
    captionSpace?: boolean;
    italicTitle?: boolean;
    captionReading?: boolean;
}

export interface MegaStoryPhoto extends Caption {
    type: "photo";
    image: MegaStoryImage;
    alt?: string;
    reveal?: boolean;
    layout: "full" | "wide" | "reading" | "right";
}

export interface MegaStoryAlbum extends Caption {
    type: "album";
    rows: MegaStoryImage[][];
    layout?: "wide";
    archive?: boolean;
    extra?: MegaStoryImage[];
}

export interface MegaStoryComparison extends Caption {
    type: "compare";
    images: [MegaStoryImage, MegaStoryImage];
}

type MediaBlock = MegaStoryPhoto | MegaStoryAlbum | MegaStoryComparison;

export type MegaStoryBlock = MediaBlock | {type: "video"; path: string} | {
    type: "text";
    paragraphs: string[];
    aside?: MegaStoryPhoto;
} | {
    type: "group";
    title: string;
    blocks: MediaBlock[];
};

interface MegaStoryChapter {
    id: string;
    title: string;
    blocks: MegaStoryBlock[];
}

export const chapters = media as MegaStoryChapter[];

export function megaStoryImagePath(file: string) {
    return `/mega-story/${file}.webp`;
}
