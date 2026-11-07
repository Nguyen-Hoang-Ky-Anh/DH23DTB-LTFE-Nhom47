import TopHeader from "./TopHeader.tsx";
import HeaderNavigationBar from "./HeaderNavigationBar.tsx";

export default function Header() {
    return (
        <>
            <div className="w-100 border-bottom"><TopHeader/></div>
            <div className="sticky-top bg-white border-bottom"><HeaderNavigationBar/></div>
        </>
    )
}