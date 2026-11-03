import {useState} from "react";
import {CategoryMegaMenu} from "../../features/category-mega-menu/CategoryMegaMenu.tsx";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";

export default function HeaderNavigationBar() {
    const [showCategory, setShowCategory] = useState(false);

    const categoriesList = Object.values(SECTIONS)
        .slice(0, 16)
        .map((section) => section.title);

    return (
        <div style={{ backgroundColor: "white" }}>
            <div className="container">
                <div className="d-flex flex-row align-items-center justify-content-center p-2">
                    <img
                        src="https://static.mediacdn.vn/nld.com.vn/images/logo_blue.png"
                        alt="Tuổi trẻ"
                        style={{
                            paddingRight: "10px",
                            width: "170px",
                            height: "30px"
                        }}
                    />

                    <ul className="list-inline mb-0">
                        {categoriesList.map((title) => (
                            <li className="list-inline-item fw-bold header-option">
                                {title.toUpperCase()}
                            </li>
                        ))}
                        <li className="list-inline-item fw-bold header-option"
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
    )
}