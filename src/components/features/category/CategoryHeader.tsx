export default function CategoryHeader() {
    return (
        <div className="container pt-3 pb-1 border-bottom">
            <ul className="d-flex gap-3 list-inline">
                <li className="list-inline-item first-category-item"><a href="#">Thời sự</a></li>
                <li className="list-inline-item category-header-item"><a href="#">Chính trị</a></li>
                <li className="list-inline-item category-header-item"><a href="#">Xã hội</a></li>
                <li className="list-inline-item category-header-item"><a href="#">Đô thị</a></li>
                <li className="list-inline-item category-header-item"><a href="#">Chuyện thường ngày ở phường, xã</a></li>
                <li className="list-inline-item category-header-item"><a href="#">Biển đảo</a></li>
            </ul>
        </div>
    )
}