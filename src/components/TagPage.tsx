import NewsListingPage from "./features/news/NewsListingPage.tsx";
import {useEffect, useState} from "react";
import type {TagStructure} from "../config/tagStructure.ts";
import fetchTagDetails from "../services/fetchTagDetail.ts";
import {useSearchParams} from "react-router-dom";

export default function TagPage() {
    const [searchParams] = useSearchParams();
    const url = searchParams.get("url");
    const [tagData, setTagData] = useState<TagStructure | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if(!url) return

        let cancelled = false

        async function loadTag() {
            setLoading(true);
            setError(null);
            setTagData(null);

            try {
                const data = await fetchTagDetails(url)
                if (!cancelled) {
                    setTagData(data)
                }
            }
            catch (error) {
                if (!cancelled) {
                    setError("Không thể tải dữ liệu")
                }
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadTag();

        return () => {
            cancelled = true;
        };
    }, [url])

    if (!url) return <p>Không tìm thấy URL của tag.</p>;
    if (loading) return <p>Đang tải dữ liệu...</p>;
    if (error) return <p>{error}</p>;
    if (!tagData) return null;

    return (
        <NewsListingPage title={tagData.tagName} news={tagData.tagItems}/>
    );
}