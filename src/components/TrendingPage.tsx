import {useLoaderData, useLocation} from "react-router-dom";
import type {NewsItem} from "../services/rssService.ts";
import NewsResults from "./features/trending/NewsResults.tsx";
import { useEffect } from "react";

export default function TrendingPage() {
    const data = useLoaderData<{title: string; news: NewsItem[]}>();
    const location = useLocation();

    {/*Keo len vi tri goc trai tren cung khi dung Link to */}
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])

    return (
        <div className="container text-start">
            <h1 className="main-title fs-4 fw-bold text-dark mb-4" style={{letterSpacing: "normal", borderBottom: "2px solid #0959ab"}}>
                {data.title}
            </h1>
            <div className="row">
                <div className="col-12 col-lg-9">
                    <NewsResults news={data.news}/>
                </div>
            </div>
        </div>
    );
}
