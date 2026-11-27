import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../../store/store.ts";
import {fetchDetailHistory} from "../../../../store/slice/detailHistorySlice.ts";
import {newsDetailHref} from "../../../../utils/newsDetailURL.ts";

export interface NewsDetailHistoryProps {
    threadId: string
}

export default function NewsDetailHistory({threadId}: NewsDetailHistoryProps) {
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams] = useSearchParams();
    const url = searchParams.get("url");
    const detailHistory = useSelector((state: RootState) =>
        threadId ? state.detailHistory.feeds[threadId] : undefined
    );

    useEffect(() => {
        if (threadId) {
            dispatch(fetchDetailHistory(threadId))
        }
    }, [dispatch, threadId])
    const currentLink = url ? newsDetailHref(url) : undefined;
    const historyItemsFiltered = detailHistory?.historyItems.filter(item =>
        item.link !== currentLink);

    if (detailHistory)
        return (
            <div className={'detail-history px-4 pt-3 mb-4'}>
                <div className={'mb-3 title-box'}>Dòng sự kiện: <span className={'detail-history-title'}>{detailHistory.title}</span></div>
                <div>
                    {historyItemsFiltered?.map((item, index) =>
                        <div className={`mb-4 ${index !== historyItemsFiltered.length - 1 &&
                        "detail-history-item"} align-items-start`}>
                            <div className={'row'}>
                                <div className={'col-1'}>
                                    <div className={'detail-history-time'}>{item.date}</div>
                                </div>
                                <div className={'col-11'}>
                                    <div className={'ms-2'}>
                                        <Link to={item.link} className={'detail-history-link'}>{item.itemTitle}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        )
}