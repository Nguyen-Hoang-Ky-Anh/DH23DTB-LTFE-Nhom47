import * as React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({currentPage, totalPages, onPageChange}: PaginationProps) {
    const go = (e: React.MouseEvent, page: number) => {
        e.preventDefault();
        if (page < 1 || page > totalPages || page === currentPage) return;
        onPageChange(page);
    }

    return (
        <section className="d-flex align-items-center justify-content-center mt-4">
            <ul className="pagination pagination-lg">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <a className="page-link" href="#" aria-label="Previous" onClick={(e) => go(e, currentPage - 1)}>
                        <span aria-hidden="true"><i className="fa-solid fa-chevron-left"></i></span>
                    </a>
                </li>
                {Array.from({length: totalPages}, (_, i) => {
                    const page = i + 1;
                    return (
                        <li key={page} className={`page-item ${page === currentPage ? "active" : ""}`}>
                            <a className="page-link" href="#" onClick={(e) => go(e, page)}>{page}</a>
                        </li>
                    );
                })}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <a className="page-link" href="#" aria-label="Next" onClick={(e) => go(e, currentPage + 1)}>
                        <span aria-hidden="true"><i className="fa-solid fa-chevron-right"></i></span>
                    </a>
                </li>
            </ul>
        </section>
    )
}