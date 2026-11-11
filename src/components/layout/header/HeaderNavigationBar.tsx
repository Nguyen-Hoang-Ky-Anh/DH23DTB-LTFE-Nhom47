import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {CategoryMegaMenu} from "../../features/category-mega-menu/CategoryMegaMenu.tsx";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";

export default function HeaderNavigationBar() {
    const [showCategory, setShowCategory] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categoriesList = Object.values(SECTIONS).slice(0, 16);
    const location = useLocation();

    const isHomepage = location.pathname === "/";

    return (
        <div style={{backgroundColor: "white"}}>
            <div className="container">
                <div className="d-flex flex-row align-items-center justify-content-between p-2"
                >
                    <Link to="/">
                        <img
                            src="https://static.mediacdn.vn/nld.com.vn/images/logo_blue.png"
                            alt="Tuổi trẻ"
                            style={{
                                paddingRight: "10px",
                                width: "130px",
                                height: "20px",
                            }}
                        />
                    </Link>

                    <ul className="list-inline mb-0">
                        {categoriesList.map((section) => (
                            <li
                                key={section.feed}
                                className="list-inline-item fw-bold header-option"
                                style={{fontSize: 11, fontFamily: "Inter, sans-serif"}}
                            >
                                <Link
                                    to={section.href}
                                    className={`text-decoration-none 
                                    ${!isHomepage && activeCategory === section.feed ? "header-nav-item-active" : "text-dark"}`
                                    }
                                    onClick={() => setActiveCategory(section.feed)}
                                >
                                    {section.title.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                        <li
                            className="list-inline-item fw-bold header-option"
                            onClick={() => setShowCategory(!showCategory)}
                            style={{cursor: "pointer"}}
                        >
                            <i className="fa-solid fa-ellipsis"></i>
                        </li>
                    </ul>
                </div>
            </div>
            {showCategory && <CategoryMegaMenu/>}
        </div>
    );
}