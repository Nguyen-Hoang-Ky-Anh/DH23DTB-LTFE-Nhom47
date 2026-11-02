import Card from "../../ui/Card.tsx";
import HorizontalCard from "../../ui/HorizontalCard.tsx";
import type {NewsItem} from "../../../services/rssService.ts";

interface NewsSectionContentProps {
    news: NewsItem[];
    layout: "horizontal" | "vertical";
}

export default function NewsSectionContent({news, layout}: NewsSectionContentProps) {
    const [featured, ...rest] = news;
    if (!featured) return null;

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
            <div className="row mb-4">
                <div className="col-12">
                    <HorizontalCard
                        image={featured.image}
                        title={featured.title}
                        description={featured.description}
                        feature
                    />
                </div>
            </div>

            <div className="row g-4 mt-2 border-top">
                {list.map(item => (
                    <div key={item.link} className="col-4">
                        <Card image={item.image} title={item.title}/>
                    </div>
                ))}
            </div>
        </div>
    )
}