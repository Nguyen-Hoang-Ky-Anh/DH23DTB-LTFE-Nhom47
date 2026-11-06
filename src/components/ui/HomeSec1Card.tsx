import type {NewsItem} from "../../services/rssService.ts";

export interface HomeSec1CardProps {
    news : NewsItem;
    title: string;
}

export default function HomeSec1Card({news, title} : HomeSec1CardProps) {
        return (
            <div className={'col-6 d-flex text-start m-0 p-0 pe-1'}>
                <a href={""} title={title}>
                    <p style={{fontSize:"18px",
                        lineHeight: 1.5,
                        fontWeight: 700,
                        fontFamily: 'MerriWeather'}}>{title}</p>
                    <img src={news.image}
                         alt={news.title}
                         style={{width: "100%", height: "auto", margin: '10px 0', justifyContent: "center", alignItems:"center"}}
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