import type {NewsItem} from "../../services/rssService.ts";

export interface HomeSec1CardProps {
    news : NewsItem;
}

export default function HomeSec1Card({news} : HomeSec1CardProps) {
        return (
            <div className={'col-6 d-flex text-start'}>
                <a href={""} title={"Hỏi nóng - đáp nhanh"}>
                    <p style={{fontSize:"18px",
                        lineHeight: 1.5,
                        fontWeight: 700,
                        fontFamily: 'MerriWeather'}}>Hỏi nóng - đáp nhanh</p>
                    <img src={news.image}
                         alt={news.title}
                         style={{width: 200, height: 125, margin: '10px 0'}}
                    />
                    <p
                        style={
                            {
                                fontSize: 15,
                                fontWeight: 700,
                                lineHeight: 1.5,
                                fontFamily: 'MerriWeather'
                            }
                        }>
                        {news.title}
                    </p>
                </a>
            </div>
        )
}