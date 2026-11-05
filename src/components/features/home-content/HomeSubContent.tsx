import type {NewsItem} from "../../../services/rssService.ts";
import HomeSec1Card from "../../ui/HomeSec1Card.tsx";

export interface HomeSubContentProbs {
    hoiNongDapNhanhNews: NewsItem[];
    truyVetMXHNews: NewsItem[];
    noiThangNews: NewsItem[];
    gocNhinNews: NewsItem[];
    seeMoreNews: NewsItem[];
}

export default function HomeSubContent({
                                           hoiNongDapNhanhNews, truyVetMXHNews,
                                           noiThangNews, gocNhinNews, seeMoreNews
                                       }: HomeSubContentProbs) {
    return (
        <section className={'subMain'}>
            <section className={'row sub-main-section-1'}>
                <div className={'col-8'}>
                    {/* Hoi nong dap nhanh / Truy vet mang xa hoi */}
                    <div className={'row d-flex border-bottom mb-3 pb-3 mx-1'}>
                        {hoiNongDapNhanhNews[0] && (
                            <HomeSec1Card news={hoiNongDapNhanhNews[0]} title={"Hỏi nóng đáp nhanh"}/>
                        )}

                        {truyVetMXHNews[0] && (
                            <HomeSec1Card news={truyVetMXHNews[0]} title={"Truy vết mạng xã hội"}/>
                        )}
                    </div>

                    {/* Noi thang / Goc nhin */}
                    <div className={'row d-flex flex-row my-1 mx-1'}
                    >
                        {noiThangNews[0] && (
                            <HomeSec1Card news={noiThangNews[0]} title={"Nói thẳng"}/>
                        )}

                        {gocNhinNews[0] && (
                            <HomeSec1Card news={gocNhinNews[0]} title={"Góc nhìn"}/>
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
                                            zIndex:1,
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

        </section>
    );
}