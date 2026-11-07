import {Link} from "react-router-dom";
import {type NewsSectionConfig} from "../../../config/newsSectionConfig.ts";
import {useState} from "react";

interface CategoryCardProps {
    section: NewsSectionConfig
}

const VISIBLE_LINKS = 6

export default function CategoryMegaMenuCard({ section }: CategoryCardProps) {
    const [expanded, setExpanded] = useState(false);

    const links = section ? [...section.links, ...section.moreLinks] : [];
    const hiddenLinks = Math.max(links.length - VISIBLE_LINKS, 0)
    const showLinks = expanded ? links : links.slice(0, VISIBLE_LINKS);

    return (
        <div className="card border-0" style={{width: '10rem', height: '12rem', backgroundColor: "#FAFAFA"}}>
            <Link to={section?.href ?? "/"} className="card-title text-start fw-bold mb-0" style={{borderBottom: "1px solid #0959ab", width: "fit-content"}}>{section.title}</Link>
            <div className="card-text text-start d-flex flex-column">
                {showLinks.map((link) => (
                    <Link className="category-item mt-2" style={{fontSize: "14px"}}
                          to={link.href}
                          key={link.href}>{link.label}</Link>
                    ))}

                {hiddenLinks > 0 && (
                    <button
                        type="button"
                        className="btn btn-link p-0 mt-2 text-start text-decoration-none"
                        style={{fontSize: "14px", color: "#0959ab"}}
                        aria-expanded={expanded}
                        onClick={() => setExpanded((prev) => !prev)}
                    >
                        {expanded ? "Thu gọn" : `Xem thêm (${hiddenLinks})`}
                    </button>
                )}
            </div>
        </div>
    )
}
