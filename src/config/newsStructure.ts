export interface typeOfNews {
    title: string;
    feedName: string;
}
export interface Paragraph {
    type: "paragraph";
    index: number;
    content: string;
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
    | Paragraph
    | NewsImage
    | NewsCallOutUl
    | ContentWrap;

export interface NewsStructure {
    typeOfNews?: typeOfNews[];
    detailTitle: string;
    detailSapo: string;
    detailAuthor: string[];
    detailTime: string;
    detailContent: NewsContent[];
    relativeBox: RelativeBox;
    detailTab: DetailTab;
}
