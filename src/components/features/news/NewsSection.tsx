import NewsSectionHeader from "./NewsSectionHeader.tsx";
import NewsSectionContent from "./NewsSectionContent.tsx";

interface NewsSectionProps {
    title: string
    layout?: "horizontal" | "vertical";
}

export default function NewsSection({title, layout = "horizontal"}: NewsSectionProps) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-9">
                    <NewsSectionHeader title={title}/>

                    <NewsSectionContent layout = {layout}/>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}