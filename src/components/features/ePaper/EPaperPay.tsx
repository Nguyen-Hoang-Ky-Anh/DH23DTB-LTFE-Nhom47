export default function EPaperPay() {
    return (
        <div className="container py-4">
            <div className="row g-4">
                <div className="col-8">
                    <div className="card border-0 shadow rounded-4 p-4">
                        <h3 className="main-title text-start" style={{fontSize: "20px", color: "#0D4FA1", marginBottom: 0}}>Gói đọc báo E-Paper đăng ký</h3>
                        <hr />
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="table-primary">
                                    <tr>
                                        <th className="text-start">Loại báo</th>
                                        <th className="text-end">Giá</th>
                                        <th>Số lượng</th>
                                        <th>Khuyến mãi</th>
                                        <th className="text-end">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{fontWeight: "400"}}>
                                        <td className="text-start">Mua số đang đọc</td>
                                        <td className="text-end">5.000đ</td>
                                        <td>1</td>
                                        <td style={{color:"red"}}>0%</td>
                                        <td className="text-end">5.000đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="d-flex p-4 align-items-center gap-4 border"
                            style={{
                                borderStyle: "dotted",
                                borderWidth: "1px",
                                borderColor: "#ccc",
                                borderRadius: "8px"
                            }}
                        >
                        <span className="icon">
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

                            <p className="mb-0">Mua số đang đọc</p>
                        </div>
                    </div>
                    <div className="card border-0 shadow rounded-4 p-4 mt-4">
                        <h3 className="main-title text-start" style={{fontSize: "20px", color: "#0D4FA1", marginBottom: 0}}>Chọn hình thức thanh toán</h3>
                        <hr />

                        <div className="mb-4 text-start">
                            <label className="form-label fw-bold">
                                Thêm Email hoặc số điện thoại
                                <br/>
                                <sub style={{color:"gray", fontWeight: "normal"}}>Bạn chưa muốn đăng ký tài khoản hoặc đăng nhập, hãy điền email hoặc số điện thoại để nhận mã thanh toán</sub>
                            </label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập Email / Số điện thoại"
                                />
                                <button className="btn btn-primary">
                                    Tiếp tục
                                </button>
                            </div>
                        </div>

                        <div className="d-flex flex-column mb-4 align-items-start">
                            <p className="fw-bold mb-3">
                                Bạn muốn dùng tài khoản:
                            </p>

                            <div className="d-flex flex-row gap-3">
                                <button className="btn btn-light me-2">
                                    Đăng ký tài khoản
                                </button>

                                <button className="btn btn-light">
                                    Đăng nhập ngay
                                </button>
                            </div>
                        </div>

                        <div className="mb-4 text-start">
                            <label className="form-label fw-bold">
                                Chọn một trong số các hình thức sau
                            </label>
                            <div className="payment-list">
                                <label className="payment-method">
                                    <input type="radio" name="payment" checked/>
                                    <img src="src/assets/zalopay.png" alt="Zalopay"/>
                                    <span className="payment-info">
                                        <strong>Zalopay</strong>
                                    </span>
                                    <span className="payment-check">✓</span>
                                </label>
                                <label className="payment-method">
                                    <input type="radio" name="payment"/>
                                    <img src="src/assets/momo.png" alt="MoMo"/>
                                    <span className="payment-info">
                                        <strong>Ví MoMo</strong>
                                    </span>
                                    <span className="payment-check">✓</span>
                                </label>
                                <label className="payment-method">
                                    <input type="radio" name="payment"/>
                                    <img src="src/assets/nganluong.png" alt="Ngân Lượng"/>
                                    <span className="payment-info">
                                        <strong>Ngân Lượng</strong>
                                        <small>Hỗ trợ quét QR qua app ngân hàng</small>
                                    </span>
                                    <span className="payment-check">✓</span>
                                </label>
                                <label className="payment-method">
                                    <input type="radio" name="payment"/>
                                    <img src="src/assets/napas.png" alt="NAPAS"/>
                                    <span className="payment-info">
                                        <strong>NAPAS</strong>
                                        <small>Chuyển khoản sử dụng internet banking</small>
                                    </span>
                                    <span className="payment-check">✓</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card border-0 rounded-4 shadow p-3">
                        <table className="table">
                            <thead className="table-primary">
                            <tr>
                                <th className="text-start">Gói đăng ký</th>
                                <th className="text-end">Thành tiền</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-start">Mua số đang đọc</td>
                                <td className="fw-bold text-end">5.000đ</td>
                            </tr>
                            <tr>
                                <td className="text-start">Tổng thanh toán</td>
                                <td className="text-danger fw-bold text-end">
                                    5.000đ
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="form-check my-4">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="terms"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="terms"
                            >
                                Tôi đồng ý với điều khoản sử dụng
                            </label>
                        </div>

                        <button className="btn btn-primary w-100 rounded-pill">
                            Thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}