import {RSS_CATEGORIES, type RSSCategory, type RSSFeed, type FeedName, type CategoryName} from "../services/rssConfig.ts";

export interface NavLink {
    label: string;
    href: string;
    feed: FeedName;
}

export interface NewsSectionConfig {
    title: string;
    href: string;
    icon: string;
    feed: FeedName;
    links: NavLink[];
    moreLinks: NavLink[];
}

function childLink(child: RSSFeed): NavLink {
    return {
        label: child.title,
        href: `/${child.feed.replace(/^nld\//, "")}`,
        feed: child.feed as FeedName,
    };
}

function createSection(key: CategoryName, icon: string): NewsSectionConfig {
    const category: RSSCategory = RSS_CATEGORIES[key];
    const links: NavLink[] = [];
    const moreLinks: NavLink[] = [];

    for (const child of Object.values(category.children)) {
        const link = childLink(child);
        if (links.length < 3) {
            links.push(link);
        } else {
            moreLinks.push(link);
        }
    }

    for (const child of Object.values(category.extraChildren)) {
        moreLinks.push(childLink(child));
    }

    let href = `/${category.feed}`;
    if (key === "home") {
        href = "/";
    }

    return {
        title: category.title,
        href,
        icon,
        feed: key,
        links,
        moreLinks,
    };
}

export const SECTIONS = {
    thoiSu: createSection("thoiSu", "fa fa-newspaper"),
    quocTe: createSection("quocTe", "fa-solid fa-globe"),
    kinhTe: createSection("kinhTe", "fa-solid fa-chart-line"),
    netZero: createSection("netZero", "fa-solid fa-leaf"),
    ai365: createSection("ai365", "fa-solid fa-microchip"),
    laoDong: createSection("laoDong", "fa-solid fa-person-digging"),
    phapLuat: createSection("phapLuat", "fa-solid fa-scale-balanced"),
    banDoc: createSection("banDoc", "fa-solid fa-book"),
    thiTruong: createSection("thiTruong", "fa-solid fa-store"),
    vanHoaVanNghe: createSection("vanHoaVanNghe", "fa-solid fa-masks-theater"),
    phuNu: createSection("phuNu", "fa-solid fa-venus"),
    khoaHoc: createSection("khoaHoc", "fa-solid fa-flask"),
    doiSong: createSection("doiSong", "fa-solid fa-person"),
    moiTruong: createSection("moiTruong", "fa-solid fa-seedling"),
    diaOc: createSection("diaOc", "fa-solid fa-building"),
    giaDinh: createSection("giaDinh", "fa-solid fa-house"),
    duLichXanh: createSection("duLichXanh", "fa-solid fa-plane"),
    sucKhoe: createSection("sucKhoe", "fa-solid fa-heart-pulse"),
    giaoDuc: createSection("giaoDuc", "fa-solid fa-graduation-cap"),
    giaiTri: createSection("giaiTri", "fa-solid fa-gamepad"),
    theThao: createSection("theThao", "fa-solid fa-person-running"),
    truyVetMXH: createSection("truyVetMXH", "fa fa-newspaper"),
    hoiNongDapNhanh: createSection("hoiNongDapNhanh", "fa fa-newspaper"),
    maiVang: createSection("maiVang", "fa fa-newspaper"),
    vungMien: createSection("vungMien", "fa-solid fa-mountain"),
    vip: createSection("vip", "fa fa-newspaper"),
    nguoiVietYeuSuViet: createSection("nguoiVietYeuSuViet", "fa fa-newspaper"),
    WorldCup2026: createSection("WorldCup2026", "fa fa-newspaper"),
    home: createSection("home", "fa fa-newspaper"),
    noiThang: createSection("noiThang", "fa fa-newspaper"),
    gocNhin: createSection("gocNhin", "fa fa-newspaper"),
    docQuyen: createSection("docQuyen", "fa fa-newspaper"),
    trichDanNong: createSection("trichDanNong", "fa fa-newspaper"),
    viTuyenDauChongDich: createSection("viTuyenDauChongDich", "fa fa-newspaper"),
    tuHaoCoToQuoc: createSection("tuHaoCoToQuoc", "fa fa-newspaper"),
    duLich: createSection("duLich", "fa fa-newspaper"),
    chuyenTuNoiCachLy: createSection("chuyenTuNoiCachLy", "fa fa-newspaper"),
    bienDao: createSection("bienDao", "fa fa-newspaper"),
    video: createSection("video", "fa fa-newspaper"),
    lyTuongSong: createSection("lyTuongSong", "fa fa-newspaper"),
    dongTienThongMinh: createSection("dongTienThongMinh", "fa-solid fa-coins"),
    tuHaoHangViet: createSection("tuHaoHangViet", "fa fa-newspaper"),
    ketQuaXoSo: createSection("ketQuaXoSo", "fa fa-newspaper"),
    podcast: createSection("podcast", "fa fa-newspaper"),
    cuocVanDongSangTacCaKhuc: createSection("cuocVanDongSangTacCaKhuc", "fa fa-newspaper"),
    toanCanhDaiHoiXIV: createSection("toanCanhDaiHoiXIV", "fa fa-newspaper"),
    NamMuoiNamThanhPhoMangTenBac: createSection("NamMuoiNamThanhPhoMangTenBac", "fa fa-newspaper"),
    bauCuDaiBieuQuocHoi: createSection("bauCuDaiBieuQuocHoi", "fa fa-newspaper"),
    NLDNEWS: createSection("NLDNEWS", "fa fa-newspaper"),
    SEAGame33: createSection("SEAGame33", "fa fa-newspaper"),
} satisfies Record<string, NewsSectionConfig>;

export type SectionKey = keyof typeof SECTIONS;
