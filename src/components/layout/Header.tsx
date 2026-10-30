import {Category} from "../Category.tsx";
import {useState} from "react";

export default function Header() {
    const [showCategory, setShowCategory] = useState(false);
    return (
        <header className="w-100">
                <div style={{ backgroundColor: "#c90009" }}>
                    <div className="container">
                        <div className="d-flex flex-column p-1">
                            <div className="d-flex flex-row justify-content-between align-items-center p-1">
                                <div className="d-flex flex-row p-2 align-items-center">
                                    <img src="https://static-tuoitre.tuoitre.vn/images/logo-tuoitre-2026v1.svg" alt="Tuổi trẻ VN" style={{borderRight: "1px solid white", paddingRight: "10px"}}></img>
                                    <img src="https://static-tuoitre.tuoitre.vn/tuoitre/images/logo_nld_white.png" alt="Tuổi trẻ VN" style={{borderRight: "1px solid white", paddingRight: "20px", paddingLeft: "10px", width: "150px", height: "30px"}}></img>
                                    <p className="mb-0 ms-2" style={{color: "white", fontSize: "14px", fontWeight: "500"}}>Thứ Ba, 27/10/2026</p>
                                </div>

                                <div className="d-flex flex-row align-items-center gap-3">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item" style={{color:"white", fontSize: "15px"}}><i className="fa fa-microphone" style={{color:"white", opacity: 0.6}}></i> Podcast</li>
                                        <li className="list-inline-item" style={{color:"white", fontSize: "15px"}}><i className="fab fa-youtube-square" style={{color:"white", opacity: 0.6}}></i> Youtube</li>
                                        <li className="list-inline-item" style={{color:"white", fontSize: "15px"}}><i className="fa fa-lightbulb" style={{color:"white", opacity: 0.6}}></i> Cần biết</li>
                                        <li className="list-inline-item" style={{color:"white", fontSize: "15px"}}><i className="fa fa-volume-high" style={{color:"white", opacity: 0.6}}></i> Quảng cáo</li>
                                    </ul>

                                    <div className="d-flex flex-row align-items-center gap-2">
                                        <i className="fa fa-magnifying-glass" style={{color:"white"}}></i>
                                        <div className="btn fw-semibold text-nowrap fw-bold" style={{backgroundColor: "#5580df", color: "white", fontSize: "15px"}}>Đăng ký Tuổi Trẻ Sao</div>
                                        <div className="btn rounded-circle d-flex align-items-center justify-content-center p-2" style={{ width: "25px", height: "25px", backgroundColor: "#5580df", color: "white"}}><i className="fa fa-question"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                </div>
            {showCategory && <Category/>}
        </header>
    )
}