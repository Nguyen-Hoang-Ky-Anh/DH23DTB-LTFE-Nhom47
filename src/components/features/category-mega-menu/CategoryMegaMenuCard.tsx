import {Link} from "react-router-dom";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";

interface CategoryCardProps {
    title: string;
    categoryItems: string[];
}

export default function CategoryMegaMenuCard({ title, categoryItems }: CategoryCardProps) {
    const section = Object.values(SECTIONS).find(section => section.title === title);
    const links = section ? [...section.links, ...section.moreLinks] : [];
    return (
        <div className="card border-0" style={{width: '10rem', height: '10rem', backgroundColor: "#FAFAFA"}}>
            <Link to={section?.href ?? "/"} className="card-title text-start fw-bold mb-0" style={{borderBottom: "1px solid #0959ab", width: "fit-content"}}>{title}</Link>
            <div className="card-text text-start d-flex flex-column">
                {categoryItems.map((item, index) => (
                    <Link className="category-item mt-2" style={{fontSize: "14px"}}
                          to={links.find(link => link.label.toLowerCase() === item.toLowerCase())?.href ?? section?.href ?? "/"}
                          key={index}>{item}</Link>
                    ))}
            </div>
        </div>
    )
}
