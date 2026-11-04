import {useLocation} from "react-router-dom";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";

export default function CategoryHeader() {
    const { pathname } = useLocation();

    // Lay / dau tien VD: /thoi-su/chinh-tri -> /thoi-su
    const currentPath = "/" + pathname.split("/")[1];

    const section = Object.values(SECTIONS).find((s) => s.href === currentPath);

    if (!section) return null;

    const links = [...section.links, ...section.moreLinks];

    return (
        <div className="container pt-3 pb-1 border-bottom">
            <ul className="d-flex flex-wrap gap-3 list-inline">
                <li className="list-inline-item first-category-item"><a href={section.href}>{section.title}</a></li>
                {links.map((link, index) => (
                    <li key={index} className="list-inline-item second-category-item">
                        {link.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}