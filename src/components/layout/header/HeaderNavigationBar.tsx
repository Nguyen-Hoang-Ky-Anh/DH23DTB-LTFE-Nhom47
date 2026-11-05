import {useState} from "react";
import { Link } from "react-router-dom";
import {CategoryMegaMenu} from "../../features/category-mega-menu/CategoryMegaMenu.tsx";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";

export default function HeaderNavigationBar() {
    const [showCategory, setShowCategory] = useState(false);

    const categoriesList = Object.values(SECTIONS).slice(0, 16);

    return (
      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="d-flex flex-row align-items-center justify-content-center p-2">
            <Link to="/">
              <img
                src="https://static.mediacdn.vn/nld.com.vn/images/logo_blue.png"
                alt="Tuổi trẻ"
                style={{
                  paddingRight: "10px",
                  width: "170px",
                  height: "30px",
                }}
              />
            </Link>

            <ul className="list-inline mb-0">
              {categoriesList.map((section) => (
                <li
                  key={section.feed}
                  className="list-inline-item fw-bold header-option"
                >
                  <Link
                    to={section.href}
                    className="text-decoration-none text-dark"
                  >
                    {section.title.toUpperCase()}
                  </Link>
                </li>
              ))}
              <li
                className="list-inline-item fw-bold header-option"
                onClick={() => setShowCategory(!showCategory)}
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-ellipsis"></i>
              </li>
            </ul>
          </div>
        </div>
        {showCategory && <CategoryMegaMenu />}
      </div>
    );
}