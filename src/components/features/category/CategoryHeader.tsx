import type {NewsSectionConfig} from "../../../config/newsSectionConfig.ts";
import {Link} from "react-router-dom";

interface CategoryHeaderProps {
    section: NewsSectionConfig
}

export default function CategoryHeader({section}: CategoryHeaderProps) {
    if (!section) return null;

    const links = [...section.links, ...section.moreLinks];

    return (
        <div className="container pt-3 pb-1 border-bottom">
            <ul className="d-flex flex-wrap gap-3 list-inline">
                <li className="list-inline-item first-category-item">
                    <Link to={section.href}>
                        {section.title}
                    </Link>
                </li>
                {links.map((link) => (
                    <li key={link.href} className="list-inline-item second-category-item">
                        <Link to={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}