import {SECTIONS} from "../../../config/newsSectionConfig.ts";

export default function FooterNavigationBar() {

    const categoriesList = Object.values(SECTIONS)
        .slice(0, 16)
        .map((section) => section.title);

    return (
        <div className="d-flex flex-row align-items-center">
            <ul className="list-inline">
                {categoriesList.map((title) => (
                    <li className="list-inline-item fw-bold footer-option">
                        {title.toUpperCase()}
                    </li>
                ))}
            </ul>
        </div>
    )
}