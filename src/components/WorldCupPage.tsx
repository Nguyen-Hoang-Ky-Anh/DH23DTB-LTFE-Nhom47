import {useParams} from "react-router-dom";
import {SECTIONS} from "../config/newsSectionConfig.ts";
import WorldCupHeader from "./features/world-cup/WorldCupHeader.tsx";
import WorldCupContent from "./features/world-cup/WorldCupContent.tsx";

export default function WorldCupPage() {
    const {subcategory} = useParams();
    const section = SECTIONS.WorldCup2026;
    const currentPath = subcategory ? `${section.href}/${subcategory}` : section.href;
    const links = [...section.links, ...section.moreLinks];
    const matchedLink = links.find(link => link.href === currentPath);
    const currentFeed = matchedLink ? matchedLink.feed : section.feed;

    return (
        <div className="world-cup-page text-start">
            <WorldCupHeader section={section} currentPath={currentPath}/>
            <WorldCupContent feed={currentFeed} href={currentPath} title={matchedLink?.label}/>
        </div>
    );
}
