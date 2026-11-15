import TopHeaderLink from "./TopHeaderLink.tsx";
import TopHeaderLogoNav from "./TopHeaderLogoNav.tsx";

interface TopHeaderProps {
    searchInput: string;
    setSearchInput: (value: string) => void;
    onSearch: (keyword: string) => void;
}

export default function TopHeader({ searchInput, setSearchInput, onSearch }: TopHeaderProps) {
    return (
        <div style={{ backgroundColor: "#c90009"}}>
            <div className="container">
                <div className="d-flex flex-column p-0">
                    <div className="d-flex flex-row justify-content-between align-items-center p-0">
                        <TopHeaderLogoNav/>
                        <TopHeaderLink searchInput={searchInput} setSearchInput={setSearchInput} onSearch={onSearch}/>
                    </div>
                </div>
            </div>
        </div>
    )
}