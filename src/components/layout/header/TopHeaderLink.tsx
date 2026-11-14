import {useState} from "react";

interface TopHeaderLinkProps {
    searchInput: string;
    setSearchInput: (value: string) => void;
    onSearch: (keyword: string) => void;
}

export default function TopHeaderLink({searchInput, setSearchInput, onSearch}: TopHeaderLinkProps) {
    const [searchClicked, setVisibleSearchBar] = useState(false);

    const handleSearch = () => {
        onSearch(searchInput.trim());
    };

    return (
        <div className="d-flex flex-row align-items-center gap-3">
            <ul className="list-inline mb-0">
                <li className="list-inline-item top-header-link-item m-0" style={{color:"white", fontSize: "14px", fontWeight:"bold"}}><i className="fa fa-microphone" style={{color:"white", opacity: 0.6}}></i> Podcast</li>
                <li className="list-inline-item top-header-link-item m-0" style={{color:"white", fontSize: "14px", fontWeight:"bold"}}><i className="fab fa-youtube-square" style={{color:"white", opacity: 0.6}}></i> Youtube</li>
                <li className="list-inline-item top-header-link-item m-0"  style={{color:"white", fontSize: "14px", fontWeight:"bold"}}><i className="fa fa-lightbulb" style={{color:"white", opacity: 0.6}}></i> Cần biết</li>
                <li className="list-inline-item top-header-link-item m-0" style={{color:"white", fontSize: "14px", fontWeight:"bold"}}><i className="fa fa-volume-high" style={{color:"white", opacity: 0.6}}></i> Quảng cáo</li>
            </ul>

            <div className="d-flex flex-row align-items-center gap-2">
                {searchClicked ? (
                    <div className="d-inline-flex gap-1 search-bar align-items-center p-2" style={{backgroundColor: "#9f0009", borderRadius: "5px"}}>
                        <input
                            className="search-input"
                            placeholder="Nhập nội dung cần tìm"
                            autoFocus
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            onKeyDown={e => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                        />

                        <button
                            type="button"
                            className="search-btn"
                            onClick={handleSearch}
                        >
                            <i className="fa fa-magnifying-glass"></i>
                        </button>

                        <button
                            type="button"
                            className="search-btn"
                            onClick={() => {
                                setSearchInput("");
                                onSearch("");
                                setVisibleSearchBar(false);
                            }}
                        >
                            <i className="fa fa-xmark"></i>
                        </button>
                    </div>
                ) : (
                    <button
                        className="search-btn"
                        onClick={() => setVisibleSearchBar(true)}
                    >
                        <i className="fa fa-magnifying-glass"></i>
                    </button>
                )}
                <div className="btn fw-semibold text-nowrap fw-bold" style={{backgroundColor: "#5580df", color: "white", fontSize: "15px"}}>Đăng ký Tuổi Trẻ Sao</div>
                <div className="btn rounded-circle d-flex align-items-center justify-content-center p-2" style={{ width: "25px", height: "25px", backgroundColor: "#5580df", color: "white"}}><i className="fa fa-question"></i></div>
            </div>
        </div>
    )
}