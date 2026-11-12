import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {fetchNews} from "../../../store/slice/newsSlice.ts";
import DragCarousel from "../../ui/DragCarousel.tsx";
import {Link} from "react-router-dom";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";
import {TRENDING_TOPICS} from "../../../config/trendingConfig.ts";

const titleStyle = {lineHeight: 1.4, color: "#292929", fontFamily: "Merriweather, serif"};
const descriptionStyle = {fontSize: 14, color: "#555555"};

export default function TopNews() {
    const dispatch = useDispatch<AppDispatch>();
    const {feeds, } = useSelector((state: RootState) => state.news);

    const news = feeds.home ?? [];
    const vipNews = feeds.vip ?? [];

    const mainNews = news[0];

    useEffect(() => {
        dispatch(fetchNews('home'));
        dispatch(fetchNews('vip'));

    }, [dispatch]);

    return (
      <div className="text-start" style={{ letterSpacing: "normal" }}>
        <section className="container px-3 py-4">
          <div className="row g-4">
            <div className="col-9">
              {/*
                        Tin chinh thuc
                         */}
              {mainNews && (
                <>
                  <div className="row g-4">
                    <article className="col-8">
                      <h2
                        className="fw-bold mb-3"
                        style={{ ...titleStyle, fontSize: 26 }}
                      >
                        {mainNews.title}
                      </h2>
                      <img className="w-100 mb-2" src={mainNews.image} alt="" />
                      <p className="mb-0" style={descriptionStyle}>
                        {mainNews.description}
                      </p>
                    </article>
                    <div className="col-4">
                      {news.slice(1, 3).map((item) => (
                        <article key={item.link} className="mb-3">
                          <img className="w-100 mb-2" src={item.image} alt="" />
                          <h3 className="fs-6 fw-bold mb-0" style={titleStyle}>
                            {item.title}
                          </h3>
                        </article>
                      ))}
                    </div>
                  </div>
                  <div className="row g-3 border-top mt-4 pt-3 pb-3">
                    {news.slice(3, 6).map((item, index) => (
                      <article
                        key={item.link}
                        className={`col-4 ${index > 0 ? "border-start" : ""}`}
                      >
                        <h3 className="fs-6 fw-bold mb-2" style={titleStyle}>
                          {item.title}
                        </h3>
                        <p className="mb-0" style={descriptionStyle}>
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </>
              )}

              <div className="d-flex align-items-center gap-3 border-top border-bottom py-3 my-3 small">
                <i className="fa-solid fa-arrow-trend-up text-danger" />
                <DragCarousel showControls>
                  {TRENDING_TOPICS.map((topic) => topic.href ? (
                    <Link
                      to={topic.href}
                      className="bg-light py-1 px-3 text-nowrap"
                      key={topic.title}
                    >
                      {topic.title}
                    </Link>
                  ) : (
                    <span key={topic.title} className="bg-light py-1 px-3 text-nowrap">
                      {topic.title}
                    </span>
                  ))}
                </DragCarousel>
              </div>
              <Link to="/ban-doc/nhung-cau-chuyen-nho">
                <img
                  className="w-100"
                  src="https://static.mediacdn.vn/nld.com.vn/Banner_Nhung_cau_chuyen_nho_PC.png"
                  alt="Những câu chuyện nhỏ"
                />
              </Link>
            </div>

            {/*
                    Tinh Nong + Cuoc thi tim hieu nong thon...
                     */}
            <aside className="col-3">
              <div className="d-flex align-items-center justify-content-between gap-2 pb-2">
                <h2
                  className="fs-6 fw-bold text-uppercase text-nowrap mb-0"
                  style={titleStyle}
                >
                  Tin nóng
                </h2>
                <Link to={SECTIONS.WorldCup2026.href} style={{minWidth: 0}}>
                  <img className="img-fluid"
                       src="https://static.mediacdn.vn/thumb_w/226/nld.com.vn/banner_WC2026.png"
                       alt="World Cup 2026"
                  />
                </Link>
              </div>
              <ul
                className="border-top border-bottom border-2 list-unstyled overflow-auto mb-4 news-list"
                style={{ ...titleStyle, maxHeight: 430, fontSize: 14 }}
              >
                {news.slice(6, 16).map((item) => (
                  <li key={item.link} className="border-bottom py-3">
                    <a
                      href={"#"}
                      className="text-reset text-decoration-none"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <img
                className="w-100"
                src="https://static.mediacdn.vn/zoom/300_250/nld/images/BannerCTMTNT.jpg"
                alt="Cuộc thi tìm hiểu ngành nghề nông thôn và bảo vệ môi trường nông thôn TP Hồ Chí Minh"
                loading="lazy"
              />
            </aside>
          </div>
        </section>
        {/*
            Khach doc vip
             */}
        <section className="py-4" style={{ backgroundColor: "#afeafa" }}>
          <div className="px-3">
            <h2
              className="fs-6 fw-bold text-uppercase mb-3"
              style={{ ...titleStyle, color: "#0959AB" }}
            >
              <i className="fa-solid fa-crown text-warning me-2" />
              Dành cho bạn đọc VIP
            </h2>
            <DragCarousel showProgress>
              {vipNews.slice(0, 14).map((item) => (
                <article key={item.link} style={{ width: 260 }}>
                  <img
                    className="w-100 mb-2"
                    src={item.image}
                    alt=""
                    loading="lazy"
                    draggable={false}
                  />
                  <h3 className="fs-6 fw-bold mb-0" style={titleStyle}>
                    {item.title}
                  </h3>
                </article>
              ))}
            </DragCarousel>
          </div>
        </section>
      </div>
    );
}
