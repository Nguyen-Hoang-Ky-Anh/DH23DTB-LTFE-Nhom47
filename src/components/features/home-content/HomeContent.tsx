import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {useEffect} from "react";
import {fetchNews} from "../../../store/slice/newsSlice.ts";
import HomeMainContent from "./HomeMainContent.tsx";


export default function HomeContent() {
    const dispatch = useDispatch<AppDispatch>();
    const {feeds, states} = useSelector((state: RootState) => state.news);

    const news = feeds.home ?? [];
    const loading = states.home === 'loading';
    const failedFeeds = (['home'] as const).filter(feed => states[feed] === 'failed');

    useEffect(() => {
        dispatch(fetchNews('home'));
    },[dispatch]);

    return (
        <div className="container home-content border-top" style={{margin: '80px auto 40px auto', minWidth: 1200,
        paddingTop: '20px'}}>
            <section className={`mx-auto px-3 py-4 ${loading ? "" : "d-none"}`} style={{ width: "100vw" }}>
                {loading && <p className="alert alert-light
                 border">Đang tải...</p>}
                {failedFeeds.length > 0 &&(
                    <div className="alert alert-warning">
                        Không tải được một số ngồn RSS. Vui lòng thử lại.
                        <button type ="button" className="btn btn-outline-primary btn-sm ms-3"
                                onClick={() => failedFeeds.forEach(feed => dispatch(fetchNews(feed)))}>
                            Thử lại
                        </button>
                    </div>
                )}
            </section>
            <div className="row">
                <div className="col home-main p-0" style={{maxWidth: '46.7%'}}>
                    <HomeMainContent news={news}/>
                </div>
                <div className="col home-sub border-start">
                    home sub
                </div>
            </div>
        </div>
    );
}
