export interface EPaperNavigationBarItem {
    label: string;
    href: string;
}

export const E_PAPER_HOTLINE = "0819.123.127";

export const E_PAPER_MENU: EPaperNavigationBarItem[] = [
    { label: "NHẬT BÁO", href: "/e-paper" },
    { label: "SỐ BÁO ĐẶC BIỆT", href: "/e-paper/special-news" },
    { label: "BÁO XUÂN", href: "/e-paper/bao-xuan" },
    { label: "E-CARD MAI VÀNG", href: "/e-paper/e-card" },
    { label: "MUA GÓI", href: "/e-paper/pack" },
];