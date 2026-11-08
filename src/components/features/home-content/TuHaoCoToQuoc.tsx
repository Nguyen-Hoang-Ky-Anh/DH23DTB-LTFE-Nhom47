import type {NewsItem} from "../../../services/rssService.ts";
import {Link} from "react-router-dom";

export interface TuHaoCoToQuocProps {
    href: string;
    news: NewsItem[];
}

export default function TuHaoCoToQuoc({href, news}: TuHaoCoToQuocProps) {
    return (
        <div>
            <div className={'border-bottom text-start mt-4 pb-2'}>
                <Link to={href}>
                    <div className={'d-flex flex-row gap-3'}>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.734 13.9345C12.7674 11.1388 7.8008 16.7302 2.83423 13.9345C2.83423 10.8282 2.83423 7.72192 2.83423 4.61563C7.80083 7.4113 12.7674 1.81996 17.734 4.61563V13.9345Z"
                                fill="#DD0000"></path>
                            <path
                                d="M11.7606 9.48812C12.0852 10.3229 12.4097 11.1648 12.7342 12.0184C11.9591 11.5918 11.184 11.2322 10.4088 10.876C10.4074 10.872 10.4059 10.8681 10.4045 10.8641C10.4027 10.8689 10.401 10.8738 10.3992 10.8787C9.62412 11.6709 8.84899 12.4661 8.07389 13.2007C8.3984 12.2182 8.72292 11.225 9.04743 10.2258C9.05615 10.2175 9.06484 10.2091 9.07357 10.2008C9.0695 10.2018 9.06546 10.2029 9.06139 10.2039C8.26243 9.86982 7.46351 9.5 6.66455 9.02471C7.62591 8.94775 8.58724 8.718 9.5486 8.45713C9.81152 7.4638 10.0744 6.46816 10.3374 5.47266C10.6346 6.30879 10.9318 7.14512 11.229 7.98525C11.2278 7.98877 11.2267 7.99229 11.2255 7.9958C11.2278 7.99372 11.2301 7.99163 11.2325 7.98955C12.2028 7.72793 13.1732 7.50693 14.1435 7.45169C13.3431 8.03656 12.5427 8.73418 11.7423 9.47438C11.7397 9.47503 11.7371 9.47568 11.7345 9.47633C11.7432 9.48024 11.7519 9.48418 11.7606 9.48812Z"
                                fill="#FFF800"></path>
                            <path d="M2.40991 3.12109H3.26307V18.616H2.40991V3.12109Z" fill="#563400"></path>
                            <path d="M3.99976 18.1875V19.0407H1.66418V18.1875H3.99976Z" fill="#833F00"></path>
                            <path
                                d="M2.84598 3.8653C3.25751 3.8653 3.59113 3.53168 3.59113 3.12015C3.59113 2.70861 3.25751 2.375 2.84598 2.375C2.43444 2.375 2.10083 2.70861 2.10083 3.12015C2.10083 3.53168 2.43444 3.8653 2.84598 3.8653Z"
                                fill="#833F00"></path>
                        </svg>
                        <p className={"main-title"} style={{fontSize:18}}>Tự hào cờ tổ quốc</p>
                    </div>
                </Link>
            </div>

            <div className={'border-bottom pb-3'}>
                <div className={'row'}>
                    <div className={'col-8 my-2 pe-2 text-start border-end gap-1 d-flex '}>
                        <img src={news[0].image} alt={news[0].title} height={130} width={130} style={{objectFit: "cover"}}/>
                        <div className={'d-flex flex-column px-1'}>
                            <Link to={news[0].link} title={news[0].title}
                                  className={'main-title'}>
                                {news[0].title}
                            </Link>

                            <p className={'truncate-description mt-2'} style={{color:"#727272"}} >
                                {news[0].description}
                            </p>
                        </div>
                    </div>

                    <div className={'text-start col-4 d-flex flex-column my-2'}>
                        <Link to={news[1].title} title={news[1].title} className={'main-title'}>
                            {news[1].title}
                        </Link>
                        <p className={'truncate-description mt-2'} style={{color:"#727272"}} >
                            {news[1].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}