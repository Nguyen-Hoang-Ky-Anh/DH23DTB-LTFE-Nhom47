import {E_PAPER_ITEMS} from "./ePaperData.ts";
import EPaperHeader from "./EPaperHeader.tsx";
import Pagination from "../../ui/Pagination.tsx";

export default function EPaperContent() {
    const PAGE_SIZE = 16;

    return (
        <div className="container my-4">
            <EPaperHeader/>
            <div className="row g-4">
                {E_PAPER_ITEMS.slice(0, PAGE_SIZE).map(item => (
                    <div className="col-3 g-3">
                        <a href={item.readUrl} target="_blank" className="text-decoration-none">
                            <div className="card h-100">
                                <img src={item.thumbnail}
                                     alt={item.title} className="card"
                                     style={{ aspectRatio: "5 / 7", objectFit: "cover", objectPosition: "top" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold main-title" style={{fontSize: "18px"}}>{item.title}</h5>
                                    <p className="card-text text-secondary fw-bold description text-center">{item.date}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <Pagination/>
        </div>
    )
}