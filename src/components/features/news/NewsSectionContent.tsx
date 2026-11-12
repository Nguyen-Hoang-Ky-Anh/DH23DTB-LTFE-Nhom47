import Card from "../../ui/Card.tsx";
import HorizontalCard from "../../ui/HorizontalCard.tsx";
import type {NewsItem} from "../../../services/rssService.ts";
import type {SectionKey} from "../../../config/newsSectionConfig.ts";
import {Link} from "react-router-dom";

export type NewsLayout = "horizontal" | "vertical" | "columns" | "compact" | "home-sub-main-1";

interface NewsSectionContentProps {
    news: NewsItem[];
    layout: NewsLayout;
    sectionKey?: SectionKey;
    whiteText?: boolean;
}

export default function NewsSectionContent({news, layout, sectionKey, whiteText = false}: NewsSectionContentProps) {
    const [featured, ...rest] = news;
    if (!featured) return null;

    const line = whiteText ? "rgba(255,255,255,.6)" : "#ddd";
    const accent = whiteText ? "#fff" : "#0959ab";

    let sideItemTitle = "";

    switch (sectionKey) {
        case "thoiSu":
            sideItemTitle = "Xã hội";
            break;
        case "quocTe":
            sideItemTitle = "Vấn đề nóng";
            break;
        case "kinhTe":
            sideItemTitle = "Tài chính - Chứng khoán";
            break;
        case "netZero":
            sideItemTitle = "Chuyển đổi xanh";
            break;
        case "ai365":
            sideItemTitle = "Công nghệ số";
            break;
        case "laoDong":
            sideItemTitle = "Chính sách";
            break;
        case "phapLuat":
            sideItemTitle = "Luật sư của bạn";
            break;
        case "banDoc":
            sideItemTitle = "Cuộc sống nhân ái";
            break;
    }

    if (layout === "compact") {
        return (
            <div className="compact-news border-top pt-3">
                <Card image={featured.image} title={featured.title}/>
                {rest.slice(0, 2).map(item => (
                    <p key={item.link} className="border-top pt-3 mt-3 mb-0 text-start description"
                       style={{fontSize: 16, lineHeight: 1.5, color: "#454545"}}>
                        <span className="text-primary me-1 fs-5 sub-title">›</span>
                        {item.title}
                    </p>
                ))}
            </div>
        );
    }

    if (layout === "columns") {
        return (
            <div className="row g-3 mt-0 border-top">
                {news.slice(0, 2).map(item => (
                    <div key={item.link} className="col-12 col-sm-6 col-lg-4">
                        <Card image={item.image} title={item.title} description={item.description}/>
                    </div>
                ))}
                <div className="col-12 col-lg-4 d-flex flex-column gap-3">
                    {news.slice(2, 5).map(item => (
                        <HorizontalCard key={item.link} image={item.image} title={item.title}/>
                    ))}
                </div>
            </div>
        );
    }

    const list = rest.slice(0, 3);
    const sideItem = rest[3];

    if (layout === "horizontal") {
        return (
            <div className="row pt-3 pb-3"
                 style={{borderBottom: `1px solid ${line}`, borderTop: `1px solid ${line}`}}>
                <div className="col-lg-4">
                    <Card
                        image={featured.image}
                        title={featured.title}
                        description={featured.description}
                        feature
                    />
                </div>
                <div className="d-flex flex-column col-lg-5">
                    {list.map((item) => (
                        <HorizontalCard key={item.link} image={item.image} title={item.title} whiteText={whiteText}/>

                    ))}
                </div>
                {sideItem && (
                    <div className="d-flex flex-column col-lg-3 w-25" style={{borderLeft: `1px solid ${line}`}}>
                        <h6 className="text-start mb-2"
                            style={{borderBottom: `3px solid ${accent}`, width: "fit-content"}}>{sideItemTitle}</h6>
                        <Card
                            image={sideItem.image}
                            title={sideItem.title}
                            description={sideItem.description}
                        />
                    </div>
                )}
            </div>
        )
    }
    if (layout === "home-sub-main-1") {
        return (
            <div className="row mx-0 mb-3 pt-3 pb-3 text-start align-items-start border-bottom border-top">
                <div className="col-lg-8 border-end">
                    <div className={'home-sub-main-news-section-card'}>
                        <div className={"row border-bottom me-2 pb-3 align-items-center mb-2"}>
                            <div className={"col-5 ps-0 py-0"}>
                                <Link to={"/"}>
                                    <img src={featured.image} alt={featured.title} width={130} height={130}
                                         style={{
                                             objectFit: "cover"
                                         }}/>
                                </Link>
                            </div>

                            <div className={"col-7 p-0"}>
                                <Link to={"/"} className={'main-title'} style={{fontSize: 15}}> {featured.title}</Link>
                                <p className={'truncate-description'}>{featured.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className={'d-flex flex-row'}>
                        <ul className={'d-flex justify-content-between gap-4 px-2 gap-3'}>
                            {list.slice(0, 2).map(item => (
                                <li>
                                    <Link to={"/"} title={item.title} className={'sub-title'}
                                          style={{fontSize: 15}}>
                                        {item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {sideItem && (
                    <div className="d-flex flex-column col-lg-4">
                        <div className="card-media mb-2">
                            <Link to={sideItem.link}>
                                <img className={'w-100 h-auto'} src={sideItem.image} alt={sideItem.title}/>
                            </Link>
                        </div>

                        <Link to={sideItem.link}>
                            <h3 className={`main-title`} style={{fontSize:15}}>
                            {sideItem.title}
                        </h3>
                        </Link>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="pb-3">
            <div className="row mb-4 mt-4">
                <div className="col-9">
                    <HorizontalCard image={featured.image} title={featured.title} description={featured.description}
                                    feature/>
                </div>
            </div>
            <div className="d-flex flex-wrap gap-4 border-top pt-4 mt-2"
                 style={{width: "fit-content", maxWidth: "100%"}}>
                {list.map(item => (
                    <div key={item.link} style={{width: 303}}>
                        <Card image={item.image} title={item.title}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
