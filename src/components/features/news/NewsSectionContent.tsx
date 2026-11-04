import Card from "../../ui/Card.tsx";
import HorizontalCard from "../../ui/HorizontalCard.tsx";
import type {NewsItem} from "../../../services/rssService.ts";

export type NewsLayout = "horizontal" | "vertical" | "columns" | "compact";

interface NewsSectionContentProps {
    news: NewsItem[];
    layout: NewsLayout;
}

export default function NewsSectionContent({news, layout}: NewsSectionContentProps) {
    const [featured, ...rest] = news;
    if (!featured) return null;

    if (layout === "compact") {
        return (
            <div className="compact-news border-top pt-3">
                <Card image={featured.image} title={featured.title}/>
                {rest.slice(0, 2).map(item => (
                    <p key={item.link} className="border-top pt-3 mt-3 mb-0 text-start"
                       style={{fontSize: 14, lineHeight: 1.5, color: "#454545"}}>
                        <span className="text-primary me-1">›</span>{item.title}
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
                 style={{borderBottom: "1px solid #ddd", borderTop: "1px solid #ddd"}}>
                <div className="col-lg-4">
                    <Card
                        image={featured.image}
                        title={featured.title}
                        description={featured.description}
                        feature
                    />
                </div>
                <div className="d-flex flex-column col-lg-5 gap-3">
                    {list.map(item => (
                        <HorizontalCard key={item.link} image={item.image} title={item.title}/>
                    ))}
                </div>
                {sideItem && (
                    <div className="d-flex flex-column col-lg-3 w-25" style={{borderLeft: "1px solid #ddd"}}>
                        {/*<h6 className="text-start mb-2"*/}
                        {/*    style={{borderBottom: "3px solid #0959ab", width: "fit-content"}}>Xã hội</h6>*/}
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

    return (
        <div className="pb-3">
            <div className="row mb-4 mt-4">
                <div className="col-9">
                    <HorizontalCard
                        image={featured.image}
                        title={featured.title}
                        description={featured.description}
                        feature
                    />
                </div>
            </div>

            <div
                className="d-flex flex-wrap gap-4 border-top pt-4 mt-2"
                style={{ width: "fit-content", maxWidth: "100%" }}
            >
                {list.map(item => (
                    <div key={item.link} style={{ width: 303 }}>
                        <Card image={item.image} title={item.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}
