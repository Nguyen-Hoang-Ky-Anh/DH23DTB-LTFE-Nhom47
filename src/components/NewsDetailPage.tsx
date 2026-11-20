import {useEffect} from "react";
import {fetchNewsDetail} from "../store/slice/newsDetailSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../store/store.ts";
import {Link, useSearchParams} from "react-router-dom";
import NewsContentSideBar from "./features/news-detail/detail-components/NewsContentSideBar.tsx";
import {findChildrenSectionBySectionKey, findSectionByFeedName} from "../config/newsSectionConfig.ts";

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
    console.log(news.detailAuthor[0])
    return (
        <div className={'container mt-3'}>
            <div className={'row'}>
                <div className={'col-1 p-0'}>
                    <NewsContentSideBar/>
                </div>

                <div className={'col-11'}>
                    <div className="category-box-news-detail description fw-bold d-flex flex-row gap-3"
                         style={{fontSize: 14}}>
                        {news.typeOfNews?.map((category) => {
                            let isChildren = false;
                            let section = findSectionByFeedName(category.feedName);

                            if (!section) {
                                section = findChildrenSectionBySectionKey(category.feedName);
                                isChildren = !!section;
                            }

                            if (!section) {
                                return (
                                    <span key={category.feedName} className="category-link">
                                        {category.title}
                                    </span>
                                );
                            }

                            return (
                                <Link key={category.feedName} to={section.href} className="category-link">
                                    <div className={'align-items-center d-flex flex-row gap-2'}>
                                        {isChildren && (<i className="fa-solid fa-circle"
                                                           style={{fontSize: 5}}
                                        ></i>)}
                                        {category.title}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <h1 className={'news-detail-title my-3'}>{news.detailTitle}</h1>

                    <div className={'row'}>
                        <div className={'col-8 text-start'}>
                            <div className={'news-detail-info d-flex justify-content-between'}>
                                <p className={'detail-author'}> {news.detailAuthor.map(author => author + " ")} </p>
                                <p className={'detail-time'}> {news.detailTime}</p>
                            </div>
                        </div>

                        <div className={'col-4'}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}