import EPaperContent from "./features/ePaper/EPaperContent.tsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function EPaperPage() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    },[location.pathname]);
    return (
        <section className="flex-grow-1">
            <EPaperContent/>
        </section>
    )
}