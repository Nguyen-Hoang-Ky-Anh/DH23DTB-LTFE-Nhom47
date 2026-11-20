import SeeNowCard from "./features/news-detail/detail-components/SeeNowCard.tsx";
import {useEffect} from "react";
import {fetchNewsDetail} from "../store/slice/newsDetailSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../store/store.ts";
import {useSearchParams} from "react-router-dom";

export default function NewsDetailPage() {
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams] = useSearchParams();

    const url = searchParams.get("url");

    const news = useSelector((state: RootState) =>
        url ? state.newsDetail.feeds[url] : undefined
    );

    const status = useSelector((state: RootState) =>
        url ? state.newsDetail.state[url] : undefined
    );

    useEffect(() => {
        if (url) {
            dispatch(fetchNewsDetail(url));
        }
    }, [dispatch, url]);

    if (!url) {
        return <p>Không tìm thấy URL bài báo.</p>;
    }

    if (status === "loading" || (!status && !news)) {
        return <p>Đang tải bài báo...</p>;
    }

    if (status === "failed") {
        return <p>Không thể tải nội dung bài báo.</p>;
    }

    if (!news) {
        return <p>Không tìm thấy bài báo.</p>;
    }
    return (
        <>
            <SeeNowCard feedName={"theThao"}/>
            <pre style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "anywhere"
            }}>
                {JSON.stringify(news, null, 2)}
            </pre>
        </>
    )
}