import NewsSectionHeader from "./NewsSectionHeader.tsx";
import NewsSectionContent from "./NewsSectionContent.tsx";
import {type SectionKey, SECTIONS} from "../../../config/newsSectionConfig.ts";

interface NewsSectionProps {
    section: SectionKey
    layout?: "horizontal" | "vertical";
}

export default function NewsSection({section, layout = "horizontal"}: NewsSectionProps) {
    const {title, icon, links, moreLinks} = SECTIONS[section];
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-9">
                    <NewsSectionHeader
                        title={title}
                        icon={icon}
                        links={links}
                        moreLinks={moreLinks}
                    />

                    <NewsSectionContent layout={layout}/>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}