import NewsSectionHeader from "./NewsSectionHeader.tsx";
import NewsSectionContent from "./NewsSectionContent.tsx";

export default function NewsSection() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-9">
                    <NewsSectionHeader/>

                    <NewsSectionContent/>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}