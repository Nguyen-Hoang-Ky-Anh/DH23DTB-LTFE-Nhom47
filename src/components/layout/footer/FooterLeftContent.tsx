export default function FooterLeftContent() {
    return (
        <div className="d-flex flex-row align-items-center justify-content-space-between gap-5">
            <img src="https://vahc.com.vn/media/k2/items/cache/dca6745fdbb9da5b038270324f6ced2f_M.jpg" alt="Tuổi trẻ VN"
                 width="200px" height="71px"></img>
            <div className="d-flex flex-column w-75 text-start" style={{fontSize: 13, color: "#292929"}}>
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
                        <li className="list-inline-item footer"><a>Cơ quan Báo và Phát thanh, Truyền hình TP.HCM</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}