import { Outlet } from "react-router-dom";
import Header from "./components/layout/header/Header.tsx";
import Footer from "./components/layout/footer/Footer.tsx";

export default function MainLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="flex-grow-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}