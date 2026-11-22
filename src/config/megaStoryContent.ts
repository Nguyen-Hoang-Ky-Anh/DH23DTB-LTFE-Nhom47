import media from "./megaStoryMedia.json";

export type MegaStoryImage = [file: string, width: number, height: number];
export type MegaStoryTimelineImage = [...MegaStoryImage, alt?: string];

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

export type MegaStoryVideoBlock = Pick<Caption, "caption" | "italicTitle"> & {type: "video"; path: string};

export type MegaStoryBlock = MediaBlock | MegaStoryVideoBlock | {type: "featured-articles"} | {
    type: "timeline";
    images: MegaStoryTimelineImage[];
} | {
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

export const featuredArticles = [
    {
        title: "Tổng Bí thư, Chủ tịch nước Tô Lâm: Trung ương luôn quan tâm, đồng hành, ủng hộ TPHCM",
        image: "bai-tieu-bieu-1",
    },
    {
        title: "Người chỉ huy xe tăng 390 kể thời khắc lịch sử húc đổ cổng Dinh Độc Lập",
        image: "bai-tieu-bieu-2",
    },
    {
        title: "50 năm bền bỉ ươm mầm tri thức cho Tây Nguyên",
        image: "bai-tieu-bieu-3",
    },
    {
        title: "TP HCM: Tưng bừng \"Ngày hội non sông\"",
        image: "bai-tieu-bieu-4",
    },
    {
        title: "TP HCM hiện thực hóa khát vọng vươn tầm",
        image: "bai-tieu-bieu-5",
    },
    {
        title: "“Hướng đi lạ” của Đinh Võ Nam Hiếu, em trai Khoai Lang Thang",
        image: "bai-tieu-bieu-6",
    },
    {
        title: "Lễ trao giải Mai Vàng lần thứ 31 - hành trình tỏa sáng của nghệ thuật Việt",
        image: "bai-tieu-bieu-7",
    },
    {
        title: "Báo chí giữa tâm lũ: Cứu người, chặn tin giả và khơi dậy triệu trái tim",
        image: "bai-tieu-bieu-8",
    },
];
