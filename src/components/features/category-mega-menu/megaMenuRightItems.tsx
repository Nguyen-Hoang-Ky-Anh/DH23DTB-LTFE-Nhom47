import type {ReactNode} from "react";
import {SECTIONS, type SectionKey} from "../../../config/newsSectionConfig";
import {multimediaItems} from "../../../config/multimediaConfig.ts";
import {
    LyTuongSongIcon, NoiThangIcon, TinDocQuyenIcon, ThiTruongIcon,
    LienHeIcon, ThongTinToaSoanIcon, DichVuTruyenThongIcon, FacebookIcon, YoutubeIcon, ZaloIcon, RssIcon,
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
        ...multimediaItems.map(({title, href, icon}) => ({label: title, href, icon: fa(icon)})),
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
    [
        {label: "", href: "https://www.facebook.com/nguoilaodong", icon: <FacebookIcon/>},
        {label: "", href: "https://www.youtube.com/channel/UCzkyOx_0O1pGOqHiUMOe2KQ", icon: <YoutubeIcon/>},
        {label: "", href: "https://zalo.me/4417973660626754335", icon: <ZaloIcon/>},
        {label: "", href: "/", icon: <RssIcon/>},
    ]
];