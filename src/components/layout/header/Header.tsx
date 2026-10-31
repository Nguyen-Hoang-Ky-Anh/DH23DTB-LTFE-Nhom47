import TopHeader from "./TopHeader.tsx";
import HeaderNavigationBar from "./HeaderNavigationBar.tsx";

export default function Header() {
    return (
        <header className="w-100">
            <TopHeader/>
            <HeaderNavigationBar/>
        </header>
    )
}