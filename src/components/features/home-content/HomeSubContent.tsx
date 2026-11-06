import type {NewsItem} from "../../../services/rssService.ts";
import HomeSec1Card from "../../ui/HomeSec1Card.tsx";

export interface HomeSubContentProbs {
    hoiNongDapNhanhNews: NewsItem[];
    truyVetMXHNews: NewsItem[];
    noiThangNews: NewsItem[];
    gocNhinNews: NewsItem[];
}

export default function HomeSubContent({
                                           hoiNongDapNhanhNews, truyVetMXHNews,
                                           noiThangNews, gocNhinNews
                                       }: HomeSubContentProbs) {
    return (
        <section className={'subMain'}>
            <section className={'row sub-main-section-1'}>
                <div className={'col-9'}>
                    {/* Hoi nong dap nhanh / Truy vet mang xa hoi */}
                    <div className={'row justify-content-between d-flex gap-0 border-bottom mb-3 mx-1 pb-3'}>
                        {hoiNongDapNhanhNews[0] && (
                            <HomeSec1Card news={hoiNongDapNhanhNews[0]}/>
                        )}

                        {truyVetMXHNews[0] && (
                            <HomeSec1Card news={truyVetMXHNews[0]}/>
                        )}
                    </div>

                    {/* Noi thang / Goc nhin */}
                    <div className={'row justify-content-between d-flex flex-row my-1 mx-1'}
                    >
                        {noiThangNews[0] && (
                            <HomeSec1Card news={noiThangNews[0]}/>
                        )}

                        {gocNhinNews[0] && (
                            <HomeSec1Card news={gocNhinNews[0]}/>
                        )}
                    </div>


                </div>
                {/* see more */}
                <div className={'col-3'}>


                </div>

            </section>

        </section>
    );
}