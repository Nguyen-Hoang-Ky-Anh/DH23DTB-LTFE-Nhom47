export default function Pagination() {
    return (
        <section className="d-flex align-items-center justify-content-center mt-4">
            <ul className="pagination pagination-lg">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true"><i className="fa-solid fa-chevron-left"></i></span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true"><i className="fa-solid fa-chevron-right"></i></span>
                    </a>
                </li>
            </ul>
        </section>
    )
}