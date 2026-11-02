import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {fetchNews} from "../../../store/slice/newsSlice.ts";
import DragCarousel from "../../ui/DragCarousel.tsx";

const topics = [
    "50 năm thành phố mang tên Bác",
    "Tuyển sinh lớp 10 năm 2026",
    "Biến động giá vàng",
    "Thời tiết hôm nay",
    "Thi tốt nghiệp THPT 2026",
    "Cấp bách tiết kiệm năng lượng",
];

const titleStyle = {lineHeight: 1.4, color: "#292929"};
const descriptionStyle = {fontSize: 14, color: "#555555"};

export default function TopNews() {
    const dispatch = useDispatch<AppDispatch>();
    const {feeds, state} = useSelector((state: RootState) => state.news);

    const news = feeds.home ?? [];
    const vipNews = feeds.vip ?? [];

    const mainNews = news[0];

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <div className="text-start" style={{letterSpacing: "normal"}}>
            <section className="mx-auto px-3 py-4" style={{width: 1140}}>
                {state === 'loading' && <p className="alert alert-light border">Đang tải tin mới...</p>}
                {state === 'failed' && (
                    <div className="alert alert-warning">
                        Không tải được tin RSS. Vui lòng thử lại.
                        <button type="button" className="btn btn-outline-primary btn-sm ms-3" onClick={() => dispatch(fetchNews())}>
                            Thử lại
                        </button>
                    </div>
                )}
                <div className="row g-4">
                    <div className="col-9">
                        {mainNews && (
                            <>
                                <div className="row g-4">
                                    <article className="col-8">
                                        <h2 className="fw-bold mb-3" style={{...titleStyle, fontSize: 26}}>{mainNews.title}</h2>
                                        <img className="w-100 mb-2" src={mainNews.image} alt=""/>
                                        <p className="mb-0" style={descriptionStyle}>{mainNews.description}</p>
                                    </article>
                                    <div className="col-4">
                                        {news.slice(1, 3).map(item => (
                                            <article key={item.link} className="mb-3">
                                                <img className="w-100 mb-2" src={item.image} alt=""/>
                                                <h3 className="fs-6 fw-bold mb-0" style={titleStyle}>{item.title}</h3>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                                <div className="row g-3 border-top mt-4 pt-3 pb-3">
                                    {news.slice(3, 6).map(item => (
                                        <article key={item.link} className="col-4">
                                            <h3 className="fs-6 fw-bold mb-2" style={titleStyle}>{item.title}</h3>
                                            <p className="mb-0" style={descriptionStyle}>{item.description}</p>
                                        </article>
                                    ))}
                                </div>
                            </>
                        )}
                        <div className="d-flex align-items-center gap-3 border-top border-bottom py-3 my-3 small">
                            <i className="fa-solid fa-arrow-trend-up text-danger"/>
                            <DragCarousel showControls>
                                {topics.map(topic => <span className="bg-light py-1 px-3 text-nowrap" key={topic}>{topic}</span>)}
                            </DragCarousel>
                        </div>
                        <img className="w-100" src="https://static.mediacdn.vn/nld.com.vn/Banner_Nhung_cau_chuyen_nho_PC.png" alt="Những câu chuyện nhỏ"/>
                    </div>

                    { /*
                    Tinh Nong + Cuoc thi tim hieu nong thon...
                     */}
                    <aside className="col-3">
                        <div className="d-flex align-items-center justify-content-between gap-2 border-bottom border-primary border-2 pb-2">
                            <h2 className="fs-6 fw-bold text-uppercase text-nowrap mb-0" style={titleStyle}>Tin nóng</h2>
                            <img style={{width: 140, minWidth: 0}} src="https://static.mediacdn.vn/thumb_w/226/nld.com.vn/banner_WC2026.png" alt="World Cup 2026"/>
                        </div>
                        <ul className="list-unstyled overflow-auto fs-6 fw-bold mb-4" style={{...titleStyle, maxHeight: 430}}>
                            {news.slice(6, 13).map(item => (
                                <li key={item.link} className="border-bottom py-3" style={{cursor: "default"}}>{item.title}</li>
                            ))}
                        </ul>
                        <img className="w-100" src="https://static.mediacdn.vn/zoom/300_250/nld/images/BannerCTMTNT.jpg" alt="Cuộc thi tìm hiểu ngành nghề nông thôn và bảo vệ môi trường nông thôn TP Hồ Chí Minh" loading="lazy"/>
                    </aside>
                </div>
            </section>
            {/*
            Khach doc vip
             */}
            <section className="py-4" style={{backgroundColor: "#afeafa"}}>
                <div className="mx-auto px-3" style={{width: 1140}}>
                    <h2 className="fs-6 fw-bold text-uppercase mb-3" style={titleStyle}>
                        <i className="fa-solid fa-crown text-warning me-2"/>Dành cho bạn đọc VIP
                    </h2>
                    <DragCarousel showProgress>
                        {vipNews.slice(0, 10).map(item => (
                            <article key={item.link} style={{width: 190}}>
                                <img className="w-100 mb-2" src={item.image} alt="" loading="lazy" draggable={false}/>
                                <h3 className="fs-6 fw-bold mb-0" style={titleStyle}>{item.title}</h3>
                            </article>
                        ))}
                    </DragCarousel>
                </div>
            </section>
        </div>
    );
}
