export default function FooterRightContent() {
    return (
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
    )
}