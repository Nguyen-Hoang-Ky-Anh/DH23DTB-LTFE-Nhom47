import {useState} from "react";
import {CategoryMegaMenu} from "../../features/category-mega-menu/CategoryMegaMenu.tsx";

export default function HeaderNavigationBar() {
    const [showCategory, setShowCategory] = useState(false);
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
                        <li className="list-inline-item fw-bold header-option">THỜI SỰ</li>
                        <li className="list-inline-item fw-bold header-option">QUỐC TẾ</li>
                        <li className="list-inline-item fw-bold header-option">LAO ĐỘNG</li>
                        <li className="list-inline-item fw-bold header-option">BẠN ĐỌC</li>
                        <li className="list-inline-item fw-bold header-option">NET ZERO</li>
                        <li className="list-inline-item fw-bold header-option">KINH TẾ</li>
                        <li className="list-inline-item fw-bold header-option">SỨC KHỎE</li>
                        <li className="list-inline-item fw-bold header-option">GIÁO DỤC</li>
                        <li className="list-inline-item fw-bold header-option">PHÁP LUẬT</li>
                        <li className="list-inline-item fw-bold header-option">VĂN HÓA - VĂN NGHỆ</li>
                        <li className="list-inline-item fw-bold header-option">GIẢI TRÍ</li>
                        <li className="list-inline-item fw-bold header-option">THỂ THAO</li>
                        <li className="list-inline-item fw-bold header-option">AI 365</li>
                        <li className="list-inline-item fw-bold header-option">PHỤ NỮ</li>
                        <li className="list-inline-item fw-bold header-option">WORLD CUP 2026</li>
                        <li className="list-inline-item fw-bold header-option">ĐỊA ỐC</li>
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