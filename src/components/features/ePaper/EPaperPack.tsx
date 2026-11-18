import { E_PAPER_PACKS } from "./ePaperPackData.ts";
import { E_PAPER_HOTLINE } from "../../../config/ePaperHeaderConfig.ts";

const formatVND = (n: number) => n.toLocaleString("vi-VN") + "đ";

export default function EPaperPackage() {
    return (
        <div style={{fontFamily: "MarriWeather", color: "white"}}>
            <div className="epaper-banner">
                <img
                    src="https://static.mediacdn.vn/nld.com.vn/images/epaper_baner_v3.jpg"
                    alt="E-paper banner"
                    className="epaper-banner-image"
                />

                <div className="epaper-banner-content d-flex flex-column align-items-center mb-3">
                    <h1 className="main-title" style={{ color: "white", fontSize: "38px" }}>
                        Báo điện tử Tuổi Trẻ
                        <br />
                        ĐỌC BÁO GIẤY ONLINE
                    </h1>

                    <div className="mb-3" style={{
                        fontFamily: "Inter",
                        color: "white",
                        fontWeight: "400"
                    }}>
                        <p>Đăng ký dài hạn để tiết kiệm hơn 50%</p>
                        <p>
                            Mọi thắc mắc vui lòng liên hệ hotline: {E_PAPER_HOTLINE}
                            hoặc Zalo: {E_PAPER_HOTLINE}
                        </p>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-3 gap-4" style={{}}>
                        <button className="btn rounded-pill px-4 py-2" style={{backgroundColor: "white", fontFamily: "Inter", fontWeight: "400"}}>Đăng nhập ngay</button>
                        <button className="btn rounded-pill px-4 py-2" style={{backgroundColor: "white", fontFamily: "Inter", fontWeight: "400"}}>Đăng ký ngay</button>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column align-items-center mt-4 mb-1 gap-4" style={{color: "black"}}>
                <h2 className="mb-0" style={{color: "#0D4FA1", fontFamily:"MarriWeather", fontWeight:"bold"}}>Đăng ký gói đọc Báo điện tử Tuổi Trẻ E-Paper dành cho bạn</h2>
                <p style={{fontFamily: "Inter", color: "black", fontWeight: "400", fontSize: "16px"}}>
                    Lựa chọn gói Người Lao Động để không bỏ lỡ những nội dung hấp dẫn
                    <br/>
                    đặc biệt chỉ có trên ấn phẩm in của Báo điện tử Tuổi Trẻ.
                </p>
            </div>

            <div className="container mb-4 mt-4" style={{color: "black"}}>
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 p-3 d-flex flex-column align-items-center gap-4" style={{backgroundColor: "#FFE82133"}}>
                            <span style={{ color: "white", backgroundColor: "#0060d1", padding: "8px" }}>
                                Dành cho thẻ mua từ sàn thương mại điện tử
                            </span>

                            <img
                                src="https://static.mediacdn.vn/thumb_w/600/nld.com.vn/images/goithecaonld.png"
                                alt="Kích hoạt thẻ"
                                className="img-fluid"
                            />

                            <button className="btn btn-activate">
                                Kích hoạt thẻ
                            </button>
                        </div>
                    </div>

                    {E_PAPER_PACKS.map((pack) => (
                        <div className="col-12 col-md-6 col-lg-4" key={pack.name}>
                            <div className="card h-100 p-3">

                                <img src={pack.image} alt=""/>

                                <h5 style={{fontWeight: "bold", fontFamily: "MarriWeather", margin: "0"}}>{pack.name}</h5>

                                <p style={{color: "#EA1A20", fontWeight: "bold", fontFamily: "Inter", fontSize: "20px"}}>{formatVND(pack.price)}</p>

                                <p style={{color: "#999999", fontWeight: "bold", fontFamily: "Inter", fontSize: "12px"}}>Chi phí bỏ ra chỉ: {formatVND(pack.perDay)}/ngày</p>

                                <ul className="list-unstyled d-flex flex-column gap-2 mt-3">
                                    {pack.benefits.map((b) => (
                                        <li className="benefit-item" key={b}>
                                            <span className="benefit-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M20 6.5H17.82C17.93 6.19 18 5.85 18 5.5C18 3.84 16.66 2.5 15 2.5C13.95 2.5 13.04 3.04 12.5 3.85L12 4.52L11.5 3.84C10.96 3.04 10.05 2.5 9 2.5C7.34 2.5 6 3.84 6 5.5C6 5.85 6.07 6.19 6.18 6.5H4C2.89 6.5 2.01 7.39 2.01 8.5L2 19.5C2 20.61 2.89 21.5 4 21.5H20C21.11 21.5 22 20.61 22 19.5V8.5C22 7.39 21.11 6.5 20 6.5ZM15 4.5C15.55 4.5 16 4.95 16 5.5C16 6.05 15.55 6.5 15 6.5C14.45 6.5 14 6.05 14 5.5C14 4.95 14.45 4.5 15 4.5ZM9 4.5C9.55 4.5 10 4.95 10 5.5C10 6.05 9.55 6.5 9 6.5C8.45 6.5 8 6.05 8 5.5C8 4.95 8.45 4.5 9 4.5ZM20 19.5H4V17.5H20V19.5ZM20 14.5H4V8.5H9.08L7 11.33L8.62 12.5L12 7.9L15.38 12.5L17 11.33L14.92 8.5H20V14.5Z"
                                                        fill="#EA1A20"
                                                    />
                                                </svg>
                                            </span>

                                            <span className="benefit-text">{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="btn btn-activate mt-auto">
                                    Đăng ký ngay
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}