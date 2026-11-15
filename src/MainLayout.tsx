import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/layout/header/Header.tsx";
import Footer from "./components/layout/footer/Footer.tsx";
import UpToTopBtn from "./components/ui/UpToTopBtn.tsx";
import { useState } from "react";

export default function MainLayout() {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const handleSearch = (keyword: string) => {
        const trimmedKeyword = keyword.trim();

        if (trimmedKeyword) {
            navigate(`/search/${encodeURIComponent(trimmedKeyword)}`);
        } else {
            navigate("/");
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                onSearch={handleSearch}
            />

            <main className="flex-grow-1">
                <Outlet />
            </main>

            <Footer />
            <UpToTopBtn />
        </div>
    );
}