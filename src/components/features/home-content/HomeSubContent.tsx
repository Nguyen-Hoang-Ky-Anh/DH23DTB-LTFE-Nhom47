import type {NewsItem} from "../../../services/rssService.ts";
import HomeSec1Card from "./HomeSec1Card.tsx";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";
import HomeEnglishNews from "./HomeEnglishNews.tsx";
import HomeSec2Card from "./HomeSec2Card.tsx";
import {Link} from "react-router-dom";
import HomePodcastTable from "./HomePodcastTable.tsx";
import TuHaoCoToQuoc from "./TuHaoCoToQuoc.tsx";
import DragCarousel from "../../ui/DragCarousel.tsx";
import type {ExchangeRate} from "../../../services/currencyRateService.ts";
import type {GoldPrice} from "../../../services/sjcService.ts";
import type {VietLott} from "../../../services/lotteryService.ts";
import HomeVietLott from "./HomeVietLott.tsx";
import NewsSection from "../news/NewsSection.tsx";

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
    tuHaoCoToQuocNews: NewsItem[];
    usdExchangeRateData: ExchangeRate | null;
    sjcData: GoldPrice | null;
    exchangeRateLoading: boolean;
    error?: string;
    powerVietLottData: VietLott | null | undefined;
    megaVietLottData: VietLott | null | undefined;
    vietLottIsLoading: boolean;
}

export default function HomeSubContent({
                                           hoiNongDapNhanhNews, truyVetMXHNews,
                                           noiThangNews, gocNhinNews, seeMoreNews,
                                           nguoiLaoDongNews, docQuyenNews, xuatKhauLaoDongNews,
                                           taiChinhChungKhoanNews, podcastNews,
                                           tuHaoCoToQuocNews, usdExchangeRateData, sjcData, error, powerVietLottData,
                                            megaVietLottData, vietLottIsLoading
                                       }: HomeSubContentProbs) {
    if (usdExchangeRateData) console.log(usdExchangeRateData.buy);

    const hoiNongDapNhanh = SECTIONS["hoiNongDapNhanh"];
    const truyVetMXH = SECTIONS["truyVetMXH"];
    const noiThang = SECTIONS["noiThang"];
    const gocNhin = SECTIONS["gocNhin"];
    const nldNews = SECTIONS["NLDNEWS"];
    const docQuyen = SECTIONS["docQuyen"];
    const tpMTBac = SECTIONS["NamMuoiNamThanhPhoMangTenBac"];
    const podcast = SECTIONS["podcast"];
    const tuHaoCoToQuoc = SECTIONS['tuHaoCoToQuoc'];
    const ketQuaSoXo = SECTIONS['ketQuaXoSo'];

    const contests = {
        langNgheNguoiDanHienKe:
            {
                imgLink: "https://nld.mediacdn.vn/291774122806476800/2023/11/29/rectangle-1225-4-1701221929066910932049.png",
                title: "Lắng nghe người dân hiến kế",
                linkTo: "/",
            },
        nguoiThayKinhYeu:
            {
                imgLink: "https://nld.mediacdn.vn/291774122806476800/2023/9/21/rectangle-1225-1-1693900030418161769919-16952925086121610184025.png",
                title: "Người thầy kính yêu",
                linkTo: "/",
            },
        cuocThiVietChuQuyenQuocGia:
            {
                imgLink: "https://nld.mediacdn.vn/291774122806476800/2023/9/21/rectangle-1225-2-16939000303821286919412-1695292530664794641331.png",
                title: "Cuộc thi viết Chủ quyền quốc gia bất khả xâm phạm",
                linkTo: "/"
            },
        longTotQuanhTa:
            {
                imgLink: "https://nld.mediacdn.vn/291774122806476800/2023/9/21/rectangle-1225-3-1693900030362451538564-169529255266561075350.png",
                title: "Lòng tốt quanh ta",
                linkTo: "/"
            },
        nguoiThayThuocTrongToi:
            {
                imgLink: "https://nld.mediacdn.vn/291774122806476800/2023/9/21/rectangle-1225-5-1693900030317760775449-169529258209037581898.png",
                title: "Người thầy thuốc trong tôi",
                linkTo: "/"
            },
        cuocThiAnhThiengLiengCoToQuoc:
            {
                imgLink: "https://nld.mediacdn.vn/291774122806476800/2023/9/21/rectangle-1225-16939000304221972406419-16952917942721181501137.png",
                title: "Cuộc thi ảnh thiêng liêng cờ Tổ quốc",
                linkTo: "/"
            },
        nangBuocNguoiLaoDong:
            {
                imgLink: "https://nld.mediacdn.vn/291774122806476800/2024/7/8/nang-buoc-nguoi-lao-dong-1720421072167284918973.jpg",
                title: "NÂNG BƯỚC NGƯỜI LAO ĐỘNG",
                linkTo: "/"
            },
        ngheVaLangNgheTPHCM:
            {
                imgLink: "https://nld.mediacdn.vn/291774122806476800/2025/11/10/lang-nghe-truyen-thong-1762749246384609820724.jpg",
                title: "Nghề và làng nghề truyền thống TP HCM",
                linkTo: "/"
            }
    }

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
                            <HomeSec2Card icon="fa-solid fa-bolt" title={"Độc quyền"} cateHref={docQuyen.href} newsItem={docQuyenNews[0]}/>
                        )}
                    </div>

                    <div className={"col-4"}>
                        {xuatKhauLaoDongNews[0] && xuatKhauLaoDong && (
                            <HomeSec2Card icon="fa-solid fa-helmet-safety" title={"Xuất khẩu lao động"} cateHref={xuatKhauLaoDong?.href}
                                          newsItem={xuatKhauLaoDongNews[0]}/>
                        )}
                    </div>

                    <div className={"col-4"}>
                        {taiChinhChungKhoanNews[0] && taiChinhChungKhoan && (
                            <HomeSec2Card icon={"fa-solid fa-chart-column"} title={"Tài chính - Chứng khoán"} cateHref={taiChinhChungKhoan?.href}
                                          newsItem={taiChinhChungKhoanNews[0]}/>
                        )}
                    </div>
                </div>

            </section>


            {/* Banner + Poscd */}
            <section>
                <div className={"mb-3"}>
                    <Link to={tpMTBac.href} title={"50 năm thành phố mang tên Bác"}>
                        <img src={"https://static.mediacdn.vn/nld.com.vn/banner-thanh-pho-mang-ten-bac-pc.png"}
                             alt={"50 năm thành phố mang tên Bác"}
                             style={{
                                 height: "100%",
                                 width: "100%",
                                 minWidth: "100%"
                             }}
                        />
                    </Link>
                </div>
                <div className={"mb-3"}>
                    <Link to={"/"} title={"E-paper"}>
                        <img src={"https://static.mediacdn.vn/nld/images/e-paper.png"} alt={"E-paper"}
                             style={{
                                 height: "100%",
                                 width: "100%",
                                 minWidth: "100%"
                             }}
                        />
                    </Link>
                </div>

                {podcastNews[0] &&
                    <HomePodcastTable href={podcast.href} links={podcast.links} moreLinks={podcast.moreLinks}
                                      news={podcastNews}/>
                }
            </section>

            {/* Tự hào cờ tổ quốc */}
            <section>
                {tuHaoCoToQuocNews[0] &&
                    <TuHaoCoToQuoc href={tuHaoCoToQuoc.href} news={tuHaoCoToQuocNews}/>}
            </section>

            {/* Contests */}
            <section className={"w-100 text-start border-bottom pb-3"} style={{minWidth: 0}}>
                <div className={"mt-3"}>
                    <Link to={"/"} title={"Các cuộc thi khác đang chờ bạn"}
                          className={"align-items-center d-flex gap-1"}>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.31853 13.0477C9.31029 13.0477 9.30202 13.0476 9.29375 13.0472C9.14116 13.0401 8.99877 12.9684 8.90224 12.85C8.80367 12.7291 6.49221 9.85458 6.82257 6.85569C7.15253 3.86042 9.73255 1.74677 9.84222 1.65823C9.95353 1.56836 10.0961 1.52654 10.2383 1.54233C10.3805 1.55802 10.5106 1.62976 10.5997 1.74165C10.6487 1.8033 11.8065 3.27367 12.2662 5.25797C12.3052 5.42646 12.2607 5.6034 12.1467 5.73336L11.2192 6.79049L11.9792 6.94065C12.2549 6.99514 12.4419 7.25296 12.4082 7.53198C12.0543 10.4607 9.79765 12.7892 9.70176 12.8869C9.60051 12.99 9.46231 13.0477 9.31853 13.0477Z"
                                fill="#FDDB8D"></path>
                            <path
                                d="M11.9831 6.94064L11.2231 6.79048L12.1506 5.73335C12.2647 5.60338 12.3092 5.42644 12.2701 5.25795C11.8104 3.27366 10.6527 1.80325 10.6037 1.74164C10.5145 1.62972 10.3845 1.55797 10.2423 1.54232C10.1 1.52657 9.95752 1.56839 9.8462 1.65822C9.82748 1.67332 9.73675 1.74751 9.59766 1.87486V12.9711C9.63668 12.9478 9.67327 12.9199 9.70575 12.8869C9.80163 12.7891 12.0583 10.4606 12.4122 7.532C12.4459 7.25295 12.2588 6.99517 11.9831 6.94064Z"
                                fill="#FBAC5B"></path>
                            <path
                                d="M10.01 16.7522C9.77857 16.7522 9.56489 16.6014 9.49551 16.3683C9.11359 15.0854 8.85441 13.4589 8.7252 11.5339C8.675 10.7859 8.65606 10.1456 8.64901 9.74019C8.64493 9.50535 8.64436 9.32465 8.64457 9.21438C8.64468 9.15172 8.64511 9.10335 8.6455 9.07063C8.64969 8.73393 8.83254 8.59097 8.98517 8.53032C9.26071 8.42073 9.57302 8.55542 9.68258 8.83107C9.71201 8.90515 9.72382 8.98191 9.71996 9.05663C9.71706 9.25104 9.67957 13.2222 10.525 16.0618C10.6096 16.346 10.4477 16.6451 10.1635 16.7297C10.1124 16.745 10.0608 16.7522 10.01 16.7522ZM9.71888 9.07317C9.71477 9.12312 9.70367 9.17199 9.6862 9.21839C9.70385 9.17206 9.71509 9.12319 9.71888 9.07317Z"
                                fill="#FBAC5B"></path>
                            <path
                                d="M10.5188 16.0635C9.67348 13.2239 9.71097 9.25273 9.71383 9.05835C9.71766 8.98363 9.70588 8.9069 9.67645 8.83279C9.6549 8.77855 9.62529 8.73003 9.58984 8.6875V16.5585C9.69106 16.6811 9.84312 16.7539 10.0039 16.7539C10.0546 16.7539 10.1062 16.7467 10.1573 16.7314C10.4416 16.6468 10.6035 16.3478 10.5188 16.0635ZM9.68007 9.22007C9.69754 9.17367 9.70864 9.1248 9.71276 9.07486C9.70896 9.12487 9.69772 9.17374 9.68007 9.22007Z"
                                fill="#FD8F32"></path>
                            <path
                                d="M10.7979 17.3995H8.4018C8.1052 17.3995 7.86475 17.1856 7.86475 16.9217V15.427C7.86475 15.1631 8.1052 14.9492 8.4018 14.9492H10.7979C11.0945 14.9492 11.335 15.1631 11.335 15.427V16.9217C11.335 17.1856 11.0945 17.3995 10.7979 17.3995Z"
                                fill="#FBAC5B"></path>
                            <path
                                d="M11.1558 15.7225H8.04364C7.74705 15.7225 7.50659 15.4821 7.50659 15.1855C7.50659 14.8889 7.74705 14.6484 8.04364 14.6484H11.1558C11.4524 14.6484 11.6929 14.8889 11.6929 15.1855C11.6929 15.4821 11.4524 15.7225 11.1558 15.7225Z"
                                fill="#FDDB8D"></path>
                            <path
                                d="M11.1542 14.6484H9.59058V15.7225H11.1542C11.4508 15.7225 11.6913 15.4821 11.6913 15.1855C11.6913 14.8889 11.4508 14.6484 11.1542 14.6484Z"
                                fill="#FDDB8D"></path>
                            <path
                                d="M12.9485 19.8732H6.25311C5.95652 19.8732 5.71606 19.6327 5.71606 19.3361V18.4398C5.71606 17.592 6.40574 16.9023 7.25349 16.9023H11.9481C12.7959 16.9023 13.4856 17.5921 13.4856 18.4398V19.3361C13.4856 19.6327 13.2451 19.8732 12.9485 19.8732Z"
                                fill="#BA602B"></path>
                            <path
                                d="M11.9525 16.9023H9.59766V19.8732H12.9529C13.2495 19.8732 13.4899 19.6327 13.4899 19.3361V18.4398C13.4899 17.5921 12.8003 16.9023 11.9525 16.9023Z"
                                fill="#BA602B"></path>
                            <path
                                d="M13.6646 19.8749H5.53705C5.24046 19.8749 5 19.6344 5 19.3378C5 19.0412 5.24046 18.8008 5.53705 18.8008H13.6646C13.9612 18.8008 14.2016 19.0412 14.2016 19.3378C14.2016 19.6344 13.9612 19.8749 13.6646 19.8749Z"
                                fill="#964C22"></path>
                            <path
                                d="M13.669 18.8008H9.59766V19.8749H13.669C13.9656 19.8749 14.206 19.6344 14.206 19.3378C14.206 19.0412 13.9656 18.8008 13.669 18.8008Z"
                                fill="#964C22"></path>
                        </svg>
                        <span className={"main-title"} style={{
                            fontSize: 18
                        }}>Các cuộc thi khác đang chờ đợi</span>
                    </Link>
                </div>
                <div>
                    <DragCarousel showRadio>
                        {Object.values(contests).map((contest, index) => (
                            <article key={index}>
                                <Link to={contest.linkTo} title={contest.title}>
                                    <img src={contest.imgLink} alt={contest.title}
                                         className={'border mt-3'} height={104} width={104}/>
                                </Link>
                            </article>
                        ))}
                    </DragCarousel>
                </div>
            </section>

            {/* Tỷ giá */}
            <section className={'border-bottom pb-1 mb-3'}>
                <div className={'row my-3'}>
                    <div className={"col-auto border-end pe-3 mb-0"}>
                        {usdExchangeRateData ? (
                            <table className={'table table-bordered text-start'}
                                   style={{
                                       width: "100%",
                                       height: "100%",
                                       minWidth: 0,
                                       backgroundColor: "#f8fbff",
                                       verticalAlign: "middle"
                                   }}>
                                <thead style={{fontSize: 12, fontWeight: 700}}>
                                <tr>
                                    <th scope="col">TỶ GIÁ</th>
                                    <th scope="col">MUA</th>
                                    <th scope="col">BÁN</th>
                                </tr>
                                </thead>

                                <tbody className={'semi-bold'} style={{fontSize: 12, fontWeight: 400}}>
                                <tr>
                                    <td scope={'row'}>USD/VNĐ</td>
                                    <td>{usdExchangeRateData.buy}</td>
                                    <td>{usdExchangeRateData.sell}</td>
                                </tr>
                                {sjcData && (
                                    <tr>
                                        <td scope={'row'}>SJC/LƯỢNG</td>
                                        <td>{sjcData.buy}</td>
                                        <td>{sjcData.sell}</td>
                                    </tr>)}

                                </tbody>

                            </table>
                        ) : (
                            <p>Error : {error}</p>
                        )}
                    </div>

                    <div className={'col d-flex'}>
                        <Link to={ketQuaSoXo.href} title={'Kết quả sổ xố'}>
                            <img src="https://static.mediacdn.vn/nld.com.vn/images/g-kqxs.svg" alt="Kết quả xổ số"
                                 style={{
                                     width: "100%",
                                     height: "100%",
                                     minWidth: 0
                                 }}
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* VietLott */}
            {powerVietLottData && megaVietLottData && (
                <section className={'border-bottom pb-3 mb-3'}>
                    {vietLottIsLoading ? (
                        <p>Đang tải</p>
                    ): (
                        <HomeVietLott powerData={powerVietLottData} megaData={megaVietLottData}/>
                    )}

                </section>
            )}

            {/* Giáo dục */}
            <section>
                <NewsSection section={'giaoDuc'} layout={'home-sub-main-1'} embedded={true}/>
            </section>

            {/* Thể thao */}
            <section>
                <NewsSection section={'theThao'} layout={'home-sub-main-1'} embedded={true}/>
            </section>

            {/* Đôồng tiền thông minh */}
            <section>
                <NewsSection section={'dongTienThongMinh'} layout={'home-sub-main-1'} embedded={true}/>
            </section>


        </section>
    );
}