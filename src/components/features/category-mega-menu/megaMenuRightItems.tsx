import type {ReactNode} from "react";
import {SECTIONS, type SectionKey} from "../../../config/newsSectionConfig";
import {
    LyTuongSongIcon, NoiThangIcon, TinDocQuyenIcon, ThiTruongIcon,
    LienHeIcon, ThongTinToaSoanIcon, DichVuTruyenThongIcon,
} from "./MegaMenuIcons";

export interface MenuItem {
    label: string;
    href: string;
    icon: ReactNode;
}

// Mục có trong SECTIONS: tự lấy title + href, có thể ghi đè label
const fromSection = (section: SectionKey, icon: ReactNode, label?: string): MenuItem => ({
    label: label ?? SECTIONS[section].title,
    href: SECTIONS[section].href,
    icon,
});

const fa = (name: string) => <i className={`fa ${name} category-icon`}></i>;

export const MEGA_MENU_COLUMNS_RIGHT: MenuItem[][] = [
    [
        fromSection("video", fa("fa-video")),
        {label: "Photo", href: "/photo", icon: fa("fa-photo-film")},
        {label: "Longform", href: "/longform", icon: fa("fa-chart-column")},
        {label: "Infographic", href: "/infographic", icon: fa("fa-newspaper")},
    ],
    [
        fromSection("lyTuongSong", <LyTuongSongIcon/>),
        fromSection("noiThang", <NoiThangIcon/>),
        fromSection("docQuyen", <TinDocQuyenIcon/>, "Tin độc quyền"),
        fromSection("thiTruong", <ThiTruongIcon/>),
        {label: "Liên hệ", href: "/lien-he", icon: <LienHeIcon/>},
        {label: "Thông tin tòa soạn", href: "/thong-tin-toa-soan", icon: <ThongTinToaSoanIcon/>},
        {label: "Dịch vụ truyền thông", href: "/dich-vu-truyen-thong", icon: <DichVuTruyenThongIcon/>},
    ],
];