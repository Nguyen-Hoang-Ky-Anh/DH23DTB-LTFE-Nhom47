export default function NewsSectionHeader() {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <h5><i className="fa fa-newspaper" style={{color: "#0959ab"}}></i> Thời sự</h5>
            </div>
            <div className="d-flex align-items-center">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item fs-6" style={{color: "#3e3e3e"}}>Chính trị</li>
                    <li className="list-inline-item fs-6" style={{color: "#3e3e3e"}}>Xã hội</li>
                    <li className="list-inline-item fs-6" style={{color: "#3e3e3e"}}>Đô thị</li>
                    <li className="list-inline-item fs-6 category-dropdown" style={{color: "#3e3e3e"}}>
                        <i className="fa fa-angle-down"></i>
                        <div className="category-box">
                            <a href="#" title="Chuyện thường ngày ở phường, xã">Chuyện thường ngày ở phường, xã</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}