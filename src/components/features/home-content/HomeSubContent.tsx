import type {NewsItem} from "../../../services/rssService.ts";
import HomeSec1Card from "./HomeSec1Card.tsx";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";
import HomeEnglishNews from "./HomeEnglishNews.tsx";
import HomeSec2Card from "./HomeSec2Card.tsx";
import {Link} from "react-router-dom";
import HomePodcastTable from "./HomePodcastTable.tsx";

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
    podcastNews: NewsItem[];
}

export default function HomeSubContent({
                                           hoiNongDapNhanhNews, truyVetMXHNews,
                                           noiThangNews, gocNhinNews, seeMoreNews,
                                           nguoiLaoDongNews, docQuyenNews, xuatKhauLaoDongNews,
                                           taiChinhChungKhoanNews, podcastNews
                                       }: HomeSubContentProbs) {

    const hoiNongDapNhanh = SECTIONS["hoiNongDapNhanh"];
    const truyVetMXH = SECTIONS["truyVetMXH"];
    const noiThang = SECTIONS["noiThang"];
    const gocNhin = SECTIONS["gocNhin"];
    const nldNews = SECTIONS["NLDNEWS"];
    const docQuyen = SECTIONS["docQuyen"];
    const tpMTBac = SECTIONS["NamMuoiNamThanhPhoMangTenBac"];
    const podcast = SECTIONS["podcast"];

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
                    <strong className={'main-title'}>Xem nhiều</strong>

                    <div className={'SubMainSec1SeeMore d-flex flex-column mt-2'}>
                        {seeMoreNews.map(((item, index) => (
                            <div className={'py-3 border-bottom'}>
                                <a className={'see-more-item'}
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
                                        className={'see-more-background-number'}>
                                        {index}
                                    </span>
                                </a>
                            </div>
                        )))}

                        <Link className={'pt-2 see-more-link'} to={"/"}>Xem thêm</Link>
                    </div>
                </div>
            </section>

            {/* sub-main-section-2 nguoi-lao-dong-news */}
            <section
                className={"sub-main-section-2 border-bottom pb-5 mb-3"}
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


            {/* Banner + Poscd */}
            <section>
                <div className={"mb-3"}>
                    <Link to={tpMTBac.href} title={"50 năm thành phố mang tên Bác"}>
                        <img src={"https://static.mediacdn.vn/nld.com.vn/banner-thanh-pho-mang-ten-bac-pc.png"}
                             alt={"50 năm thành phố mang tên Bác"}/>
                    </Link>
                </div>
                <div className={"mb-3"}>
                    <Link to={"/"} title={"E-paper"}>
                        <img src={"https://static.mediacdn.vn/nld/images/e-paper.png"} alt={"E-paper"}/>
                    </Link>
                </div>

                {podcastNews[0] &&
                    <HomePodcastTable href={podcast.href} links={podcast.links} moreLinks={podcast.moreLinks} news={podcastNews}/>
                }
            </section>

        </section>
    );
}