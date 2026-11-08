import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {useEffect} from "react";
import {fetchNews} from "../../../store/slice/newsSlice.ts";
import HomeMainContent from "./HomeMainContent.tsx";
import HomeSubContent from "./HomeSubContent.tsx";


export default function HomeContent() {
    const dispatch = useDispatch<AppDispatch>();
    const {feeds, states} = useSelector((state: RootState) => state.news);

    const xuatKhauLaoDongFeed = "nld/lao-dong/xuat-khau-lao-dong";
    const taiChinhChungKhoanFeed = "nld/kinh-te/tai-chinh-chung-khoan";

    const homeNews = feeds.home ?? [];
    const mainList = homeNews.slice(17, 38);
    const seeMoreList = homeNews.slice(22, 27);
    const hoiNongDapNhanhNews = feeds.hoiNongDapNhanh ?? [];

    const docQuyenNews = feeds.docQuyen ?? []
    const xuatKhauLaoDongNews = xuatKhauLaoDongFeed ? feeds[xuatKhauLaoDongFeed] ?? [] : [];
    const taiChinhChungKhoanNews = taiChinhChungKhoanFeed ? feeds[taiChinhChungKhoanFeed] ?? [] : [];

    const truyVetMXHNews = feeds.truyVetMXH ?? [];
    const noiThangNews = feeds.noiThang ?? [];
    const gocNhinNews = feeds.gocNhin ?? [];
    const nguoiLaoDongNews = feeds.NLDNEWS ?? [];
    const podcastNews = feeds.podcast ?? [];

    const loading = states.home === 'loading'
        || states.hoiNongDapNhanh === 'loading'
        || states.truyVetMXH === 'loading'
        || states.noiThang === 'loading'
        || states.gocNhin === 'loading'
        || states.NLDNEWS === 'loading'
        || states[xuatKhauLaoDongFeed] === 'loading'
    || states[taiChinhChungKhoanFeed] === 'loading'
    || states.podcast === 'loading';

    const failedFeeds = (['home', 'hoiNongDapNhanh', 'truyVetMXH',
        'noiThang', 'gocNhin', 'NLDNEWS', 'podcast', taiChinhChungKhoanFeed, xuatKhauLaoDongFeed] as const).filter(
        feed => states[feed] === 'failed');

    useEffect(() => {
        dispatch(fetchNews('home'));
        dispatch(fetchNews('hoiNongDapNhanh'));
        dispatch(fetchNews('truyVetMXH'));
        dispatch(fetchNews('noiThang'));
        dispatch(fetchNews('gocNhin'));
        dispatch(fetchNews('NLDNEWS'))
        dispatch(fetchNews('docQuyen'))
        if (xuatKhauLaoDongFeed) {
            dispatch(fetchNews(xuatKhauLaoDongFeed));
        }

        if (taiChinhChungKhoanFeed) {
            dispatch(fetchNews(taiChinhChungKhoanFeed));
        }

        dispatch(fetchNews('podcast'))

    }, [dispatch]);

    return (
        <div className="container home-content border-top" style={{
            margin: '80px auto 40px auto',
            paddingTop: '20px'
        }}>
            <section className={`mx-auto px-3 py-4 ${loading ? "" : "d-none"}`} style={{width: "100vw"}}>
                {loading && <p className="alert alert-light
                 border">Đang tải...</p>}
                {failedFeeds.length > 0 && (
                    <div className="alert alert-warning">
                        Không tải được một số ngồn RSS. Vui lòng thử lại.
                        <button type="button" className="btn btn-outline-primary btn-sm ms-3"
                                onClick={() => failedFeeds.forEach(feed => dispatch(fetchNews(feed)))}>
                            Thử lại
                        </button>
                    </div>
                )}
            </section>
            <div className="row">
                <div className="col home-main p-0" style={{maxWidth: '46.7%'}}>
                    <HomeMainContent news={mainList}/>
                </div>
                <div className="col home-sub border-start">
                    <HomeSubContent
                        hoiNongDapNhanhNews={hoiNongDapNhanhNews}
                        noiThangNews={noiThangNews}
                        truyVetMXHNews={truyVetMXHNews}
                        gocNhinNews={gocNhinNews}
                        seeMoreNews={seeMoreList}
                        nguoiLaoDongNews={nguoiLaoDongNews}
                        docQuyenNews={docQuyenNews}
                        xuatKhauLaoDongNews={xuatKhauLaoDongNews}
                        taiChinhChungKhoanNews={taiChinhChungKhoanNews}
                        podcastNews={podcastNews}
                    />
                </div>
            </div>
        </div>
    );
}
