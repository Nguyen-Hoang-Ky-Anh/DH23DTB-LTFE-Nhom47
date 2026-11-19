import { useEffect } from "react";
import {fetchNewsDetails} from "./services/fetchNewsDetails.ts";
import {parseNewsDetail} from "./services/parseNewsDetail.ts";
import {RSS_CATEGORIES} from "./services/rssConfig.ts";

export default function TestPage() {
    useEffect(() => {
        fetchNewsDetails("news-detail-proxy/nld/chu-quan-voi-chung-tieu-ra-mau-nguoi-dan-ong-phat-hien-bi-ung-thu-bang-quang-196260630175653469.htm")
            .then(doc => console.log(parseNewsDetail(doc, RSS_CATEGORIES.sucKhoe)))
            .catch(console.error);
    }, []);
}