import TopHeader from "./TopHeader.tsx";
import HeaderNavigationBar from "./HeaderNavigationBar.tsx";

interface HeaderProps {
    searchInput: string;
    setSearchInput: (value: string) => void;
    onSearch: (keyword: string) => void;
}

export default function Header({ searchInput, setSearchInput, onSearch }: HeaderProps) {
    return (
        <>
            <div className="w-100 border-bottom"><TopHeader searchInput={searchInput} setSearchInput={setSearchInput} onSearch={onSearch}/></div>
            <div className="sticky-top bg-white border-bottom"><HeaderNavigationBar/></div>
        </>
    )
}