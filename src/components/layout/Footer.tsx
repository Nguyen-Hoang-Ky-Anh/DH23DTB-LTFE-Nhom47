export default function Footer() {
    return(
        <footer className="d-flex flex-column">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-row align-items-center">
                    <ul className="list-inline">
                        <li className="list-inline-item"><a>TRANG CHỦ</a></li>
                        <li className="list-inline-item"><a>MỚI NHẤT</a></li>
                        <li className="list-inline-item"><a>XEM NHIỀU</a></li>
                        <li className="list-inline-item"><a>VIDEO</a></li>
                        <li className="list-inline-item"><a>THỜI SỰ</a></li>
                        <li className="list-inline-item"><a>THẾ GIỚI</a></li>
                        <li className="list-inline-item"><a>PHÁP LUẬT</a></li>
                        <li className="list-inline-item"><a>KINH DOANH</a></li>
                        <li className="list-inline-item"><a>CÔNG NGHỆ</a></li>
                        <li className="list-inline-item"><a>XE</a></li>
                        <li className="list-inline-item"><a>DU LỊCH</a></li>
                        <li className="list-inline-item"><a>NHỊP SỐNG TRẺ</a></li>
                        <li className="list-inline-item"><a>VĂN HÓA</a></li>
                        <li className="list-inline-item"><a>GIẢI TRÍ</a></li>
                        <li className="list-inline-item"><a>THỂ THAO</a></li>
                        <li className="list-inline-item"><a>GIÁO DỤC</a></li>
                        <li className="list-inline-item"><a>NHÀ ĐẤT</a></li>
                        <li className="list-inline-item"><a>SỨC KHỎE</a></li>
                        <li className="list-inline-item"><a>GIẢ THẬT</a></li>
                        <li className="list-inline-item"><a>BẠN ĐỌC</a></li>
                    </ul>
                </div>
                <div className="d-flex flex-row align-items-start justify-content-space-between gap-5 p-4" style={{borderTop: "3px solid red"}}>
                    <div className="d-flex flex-row align-items-center justify-content-space-between gap-5">
                        <img src="https://vahc.com.vn/media/k2/items/cache/dca6745fdbb9da5b038270324f6ced2f_M.jpg" alt="Tuổi trẻ VN" width="200px" height="71px"></img>
                        <div className="d-flex flex-column w-75 text-start" style={{fontSize: 13, color:"#292929"}}>
                            <div className='d-flex flex-column justify-content-center'>
                                <p>Tổng biên tập: TRẦN XUÂN TOÀN</p>
                                <p>Báo điện tử Tuổi Trẻ (tuoitre.vn)</p>
                                <p>Cơ quan Báo và Phát thanh, Truyền hình TP.HCM</p>
                                <p>Giấy phép hoạt động báo điện tử tiếng Việt,</p>
                                <p>tiếng Anh Số 561/GP-BTTTT, cấp ngày 25-11-2022.</p>
                            </div>
                            <div className="d-flex flex-column">
                                <ul className="list-inline d-flex flex-column">
                                    <li className="list-inline-item footer"><a>Thông tin tòa soạn</a></li>
                                    <li className="list-inline-item footer"><a>Cơ quan Báo và Phát thanh, Truyền hình TP.HCM</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-start justify-content-space-between gap-5">
                        <div className="d-flex flex-column w-100 text-start" style={{fontSize: 13, color:"#292929"}}>
                            <p>Địa chỉ: 60A Hoàng Văn Thụ, phường Đức Nhuận, Tp. Hồ Chí Minh</p>
                            <p>Hotline: 0918.033.133 - Email: tto@tuoitre.com.vn</p>
                            <p>Quảng cáo: 028.39974848</p>
                            <div className="d-flex flex-row gap-1">
                                <ul className="list-inline">
                                    <li className="list-inline-item footer"><a>Dịch vụ truyền thông</a></li>
                                    <li className="list-inline-item footer"><a>Điều khoản bảo mật</a></li>
                                    <li className="list-inline-item footer"><a>Liên hệ góp ý</a></li>
                                    <li className="list-inline-item footer"><a>RSS</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex gap-3">
                            <div className="border border-2 rounded-circle p-1" style={{borderColor: "#4f4f4f", color: "#4f4f4f"}}><i className="fab fa-youtube"></i></div>
                            <div className="border border-2 rounded-circle p-1" style={{borderColor: "#4f4f4f", color: "#4f4f4f"}}><i className="fab fa-facebook-f"></i></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-start text-start" style={{fontSize: 13, color:"#4f4f4f"}}>
                    <p>© Copyright 2026 Bao dien tu Tuoi Tre, All rights reserved ® Báo điện tử Tuổi Trẻ giữ bản quyền nội dung trên website này</p>
                </div>
            </div>
        </footer>
    )
}