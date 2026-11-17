import { E_PAPER_PACKS } from "./ePaperPackData.ts";
import { E_PAPER_HOTLINE } from "../../../config/ePaperHeaderConfig.ts";

const formatVND = (n: number) => n.toLocaleString("vi-VN") + "đ";

export default function EPaperPackage() {
    return (
        <div>
            <div>
                <h1>ĐỌC BÁO GIẤY ONLINE</h1>
                <p>Đăng ký dài hạn để tiết kiệm hơn 50%</p>
                <p>
                    Mọi thắc mắc vui lòng liên hệ hotline: {E_PAPER_HOTLINE}
                    hoặc Zalo: {E_PAPER_HOTLINE}
                </p>
            </div>

            <div>
                <h2>Đăng ký gói đọc Báo điện tử Tuổi Trẻ E-Paper dành cho bạn</h2>
                <p>
                    Lựa chọn gói Người Lao Động để không bỏ lỡ những nội dung hấp dẫn
                    đặc biệt chỉ có trên ấn phẩm in của Báo điện tử Tuổi Trẻ.
                </p>
            </div>

            <div>
                {E_PAPER_PACKS.map((pack) => (
                    <div key={pack.name}>
                        <div>
                            <h5>{pack.name}</h5>
                            <p>{formatVND(pack.price)}</p>
                            <p>{formatVND(pack.perDay)}/ngày</p>

                            <ul>
                                {pack.benefits.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>

                            <button>Đăng ký ngay</button>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <span>Dành cho thẻ mua từ sàn thương mại điện tử</span>
                <button>Kích hoạt thẻ</button>
            </div>
        </div>
    );
}