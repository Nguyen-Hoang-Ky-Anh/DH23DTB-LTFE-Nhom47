import {SECTIONS} from "../../../config/newsSectionConfig.ts";
import {Link} from "react-router-dom";

export default function FooterNavigationBar() {

    const categoriesList = Object.values(SECTIONS)
        .slice(0, 16);

    return (
        <div className="d-flex flex-row align-items-center">
            <ul className="list-inline">
                {categoriesList.map((section) => (
                    <li key={section.feed} className="list-inline-item fw-bold header-option">
                        <Link to={section.href} className="text-decoration-none text-dark">
                            {section.title.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}