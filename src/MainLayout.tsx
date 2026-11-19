import {Outlet, useLocation, useNavigate} from "react-router-dom";
import Header from "./components/layout/header/Header.tsx";
import Footer from "./components/layout/footer/Footer.tsx";
import UpToTopBtn from "./components/ui/UpToTopBtn.tsx";
import {SECTIONS} from "./config/newsSectionConfig.ts";
import { useState } from "react";
import TestPage from "./test.tsx";

export default function MainLayout() {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
  
    const firstSlashIndex = location.pathname.indexOf('/');
    const headerType = location.pathname.substring(firstSlashIndex);
  
    const anniversaryPath = SECTIONS.NamMuoiNamThanhPhoMangTenBac.href;
    const isAnniversaryCategory = location.pathname === anniversaryPath ||
        location.pathname.startsWith(`${anniversaryPath}/`);

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
            {isAnniversaryCategory && (
                <img
                    className="w-100 h-auto"
                    src="https://static.mediacdn.vn/nld.com.vn/banner-thanh-pho-mang-ten-bac-pc-1920.png"
                    alt="50 năm Thành phố mang tên Bác (1976–2026)"
                    width={1920}
                    height={250}
                />
            )}
            <Header
                variant={headerType}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                onSearch={handleSearch}
            />

            <main className="flex-grow-1">
                <Outlet />
            </main>

            <Footer />
            <TestPage/>
            <UpToTopBtn />
        </div>
    );
}