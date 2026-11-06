import type {NewsItem} from "../../../services/rssService.ts";
import HomeSec1Card from "./HomeSec1Card.tsx";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";
import HomeEnglishNews from "./HomeEnglishNews.tsx";
import HomeSec2Card from "./HomeSec2Card.tsx";

export interface HomeSubContentProbs {
    hoiNongDapNhanhNews: NewsItem[];
    truyVetMXHNews: NewsItem[];
    noiThangNews: NewsItem[];
    gocNhinNews: NewsItem[];
    seeMoreNews: NewsItem[];
    nguoiLaoDongNews: NewsItem[];
    docQuyenNews: NewsItem[];
    xuatKhauLaoDongNews: NewsItem[];
    taiChinhChungKhoanNews: NewsItem[];
}

export default function HomeSubContent({
                                           hoiNongDapNhanhNews, truyVetMXHNews,
                                           noiThangNews, gocNhinNews, seeMoreNews,
                                           nguoiLaoDongNews, docQuyenNews, xuatKhauLaoDongNews,
                                           taiChinhChungKhoanNews
                                       }: HomeSubContentProbs) {

    const hoiNongDapNhanh = SECTIONS["hoiNongDapNhanh"];
    const truyVetMXH = SECTIONS["truyVetMXH"];
    const noiThang = SECTIONS["noiThang"];
    const gocNhin = SECTIONS["gocNhin"];
    const nldNews = SECTIONS["NLDNEWS"];
    const docQuyen = SECTIONS["docQuyen"];

    const xuatKhauLaoDong =
        SECTIONS["laoDong"].moreLinks.find((link) => link.feed === "nld/lao-dong/xuat-khau-lao-dong");
    const taiChinhChungKhoan =
        SECTIONS["kinhTe"].moreLinks.find((link) => link.feed === "nld/kinh-te/tai-chinh-chung-khoan");

    return (
        <section className={'subMain'}>

            {/* sub-main-section-1 */}
            <section className={'row sub-main-section-1'}>
                <div className={'col-8'}>
                    {/* Hoi nong dap nhanh / Truy vet mang xa hoi */}
                    <div className={'row d-flex border-bottom mb-3 pb-3 mx-1'}>
                        {hoiNongDapNhanhNews[0] && (
                            <HomeSec1Card news={hoiNongDapNhanhNews[0]} title={"Hỏi nóng đáp nhanh"}
                                          cateHref={hoiNongDapNhanh.href}/>
                        )}

                        {truyVetMXHNews[0] && (
                            <HomeSec1Card news={truyVetMXHNews[0]} title={"Truy vết mạng xã hội"}
                                          cateHref={truyVetMXH.href}/>
                        )}
                    </div>

                    {/* Noi thang / Goc nhin */}
                    <div className={'row d-flex flex-row my-1 mx-1'}
                    >
                        {noiThangNews[0] && (
                            <HomeSec1Card news={noiThangNews[0]} title={"Nói thẳng"} cateHref={noiThang.href}/>
                        )}

                        {gocNhinNews[0] && (
                            <HomeSec1Card news={gocNhinNews[0]} title={"Góc nhìn"} cateHref={gocNhin.href}/>
                        )}
                    </div>


                </div>
                {/* see more */}
                <div className={'col-4 border-start text-start'}>
                    <strong

                        style={{
                            fontFamily: 'MerriWeather',
                            fontSize: 18,
                            fontWeight: 700,
                            lineHeight: 1.5,
                        }}

                    >Xem nhiều</strong>

                    <div className={'SubMainSec1SeeMore d-flex flex-column mt-2'}>
                        {seeMoreNews.map(((item, index) => (
                            <div className={'py-3 border-bottom'}>
                                <a style={{
                                    fontFamily: 'MerriWeather',
                                    fontSize: 15,
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    cursor: "pointer",
                                    position: "relative",
                                    isolation: "isolate",
                                    display: "block"
                                }}
                                   href={item.link}
                                   title={item.title}
                                >
                                    <span
                                        style={{
                                            position: "relative",
                                            zIndex: 1,
                                        }}
                                    >{item.title}</span>

                                    <span
                                        style={{
                                            position: "absolute",
                                            right: 0,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            fontSize: "64px",
                                            fontWeight: "bold",
                                            zIndex: -1,
                                            fontFamily: "BungeeShade",
                                            color: "silver"
                                        }}>
                                        {index}
                                    </span>
                                </a>
                            </div>
                        )))}

                        <a
                            style={{
                                fontFamily: "Inter",
                                marginTop: "10px",
                                fontSize: "14px",
                                color: "silver"
                            }}
                            href={"/"}>Xem thêm</a>
                    </div>
                </div>
            </section>

            {/* sub-main-section-2 nguoi-lao-dong-news */}
            <section
                className={"mx-1 sub-main-section-2"}
            >
                {nguoiLaoDongNews[0] && (
                    <HomeEnglishNews href={nldNews.href} links={nldNews.links}
                                     news={nguoiLaoDongNews}></HomeEnglishNews>
                )}


                <div className={'row g-3 mt-3'}>
                    <div className={"col-4"}>
                        {docQuyenNews[0] && (
                            <HomeSec2Card title={"Độc quyền"} cateHref={docQuyen.href} newsItem={docQuyenNews[0]}/>
                        )}
                    </div>

                    <div className={"col-4"}>
                    {xuatKhauLaoDongNews[0] && (
                        <HomeSec2Card title={"Xuất khẩu lao động"} cateHref={xuatKhauLaoDong?.href} newsItem={xuatKhauLaoDongNews[0]}/>
                    )}
                    </div>

                    <div className={"col-4"}>
                    {taiChinhChungKhoanNews[0] && (
                        <HomeSec2Card title={"Tài chính - Chứng khoán"} cateHref={taiChinhChungKhoan?.href} newsItem={taiChinhChungKhoanNews[0]}/>
                    )}
                    </div>
                </div>

            </section>

        </section>
    );
}