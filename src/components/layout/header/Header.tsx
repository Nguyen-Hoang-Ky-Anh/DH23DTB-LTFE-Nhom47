import TopHeader from "./TopHeader.tsx";
import HeaderNavigationBar from "./HeaderNavigationBar.tsx";
import EPaperTopHeader from "./EPaperTopHeader.tsx";
import EPaperNavigationBar from "./EPaperNavigationBar.tsx";
import {E_PAPER_HOTLINE, E_PAPER_MENU} from "../../../config/ePaperHeaderConfig.ts";
import VideoNavigationBar from "./VideoNavigationBar.tsx";
import {VIDEO_MENU} from "../../features/video/videoNavigationConfig.ts";

interface HeaderProps {
    variant?: string;
    searchInput?: string;
    setSearchInput?: (value: string) => void;
    onSearch?: (keyword: string) => void;
}

export default function Header({ variant = "news", searchInput = "", setSearchInput = () => {}, onSearch = () => {} }: HeaderProps) {
    if (variant.startsWith("/e-paper")) {
        return <>
            <div className="w-100 border-bottom">
                <EPaperTopHeader hotline={E_PAPER_HOTLINE}/>
            </div>
            <div className="sticky-top">
                <EPaperNavigationBar items={E_PAPER_MENU}/>
            </div>
        </>
    }
    if (variant.startsWith("/video")) {
        return <>
            <div className="sticky-top mt-5">
                <VideoNavigationBar items={VIDEO_MENU}/>
            </div>
        </>
    }

    return (
        <>
            <div className="w-100 border-bottom"><TopHeader searchInput={searchInput} setSearchInput={setSearchInput} onSearch={onSearch}/></div>
            <div className="sticky-top bg-white border-bottom"><HeaderNavigationBar/></div>
        </>
    )
}