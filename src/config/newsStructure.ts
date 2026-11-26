export interface typeOfNews {
    title: string;
    feedName: string;
}

export interface NewsImage {
    type: "image";
    index: number;
    src: string;
    caption?: string;
}

export type callOutVariant = 'type-1' | 'type-2' | 'type-3' | 'type-4' | 'type-5' | 'type-6';

export interface NewsCallOutUl {
    type: "callOutUl";
    variant: callOutVariant;
    liImg?: string[];
    index: number;
    li: NewsCallOutLink[];
}

export interface NewsCallOutLink {
    type: "callOutLink";
    src: string;
    title: string;
}

export interface RelatedLink {
    title: string;
    src: string;
}

export interface RelativeBox {
    type: "relativeBox";
    firstRelatedImg: string;
    firstRelatedDescription: string;
    relatedLinks: RelatedLink[],
}

export interface ContentWrap {
    type: "contentWrap";
    index: number;
    title: string;
    paragraph: string;
}

export interface tabLink {
    title: string;
    href: string;
}

export interface DetailTab {
    type: "detailTab";
    tabLinks: tabLink[];
}

export type NewsContent =
    | NewsText
    | NewsImage
    | NewsCallOutUl
    | ContentWrap;

export type LongformWidth = "reading" | "wide" | "full";

export interface LongformPhoto {
    src: string;
    alt: string;
}

export type LongformBlock =
    | {type: "paragraph" | "heading" | "quote" | "credit"; text: string}
    | {type: "gallery"; rows: LongformPhoto[][]; caption: string; width: LongformWidth}
    | {type: "video"; src: string; poster: string; caption: string; width: LongformWidth}
    | {type: "related"; links: RelatedLink[]};

export type TextContent = string | {
    tag: string,
    href?: string,
    children: TextContent[];
}

export interface NewsText {
    type: "text",
    index: number;
    content: TextContent;
}

export interface NewsStructure {
    typeOfNews?: typeOfNews[];
    detailTitle: string;
    detailSapo: string;
    detailAuthor: string[];
    detailTime: string;
    detailContent: NewsContent[];
    relativeBox: RelativeBox;
    detailTab: DetailTab;
    longform?: {cover?: LongformPhoto; blocks: LongformBlock[]};
}
