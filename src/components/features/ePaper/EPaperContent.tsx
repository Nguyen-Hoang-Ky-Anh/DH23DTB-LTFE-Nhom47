import {useEffect, useMemo, useState} from "react";
import {E_PAPER_ITEMS} from "./ePaperData.ts";
import EPaperHeader from "./EPaperHeader.tsx";
import Pagination from "../../ui/Pagination.tsx";
import {Link, useParams} from "react-router-dom";
import EPaperPack from "./EPaperPack.tsx";
import EPaperPay from "./EPaperPay.tsx";

const PAGE_SIZE = 16;
const toISO = (d: string) => {
    const [dd, mm, yyyy] = d.split("/");
    return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
};

export default function EPaperContent() {
    const {category = "daily"} = useParams();

    const [filters, setFilters] = useState({title: "", date: ""});
    const [page, setPage] = useState(1);

    useEffect(() => {setPage(1)}, [category]);

    const handleSearch = (title: string, date: string) => {
        setFilters({title, date});
        setPage(1);
    };

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    const filtered = useMemo(() => {
        const keyword = filters.title.trim().toLowerCase();
        return E_PAPER_ITEMS.filter((item) => {
            const matchType = (item.type ?? "daily") === category;
            const matchTitle = !keyword || item.title.toLowerCase().includes(keyword);
            const matchDate = !filters.date || toISO(item.date) === filters.date;
            return matchType && matchTitle && matchDate;
        });
    }, [filters, category]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    if (category === "pack") return <EPaperPack/>;
    else if (category === "pay") return <EPaperPay/>;
    return (
        <div className="container my-4">
            <EPaperHeader onSearch={handleSearch}/>

            {filtered.length === 0 ? (
                <p className="text-center text-secondary my-5">Không tìm thấy số báo phù hợp.</p>
            ) : (
                <div className="row g-4">
                    {pageItems.map((item, index) => (
                        <div className="col-3 g-3" key={`${item.title}-${item.date}`}>
                            <div className="epaper-card">
                                <div className="epaper-card-image">
                                    <img src={item.thumbnail}
                                         alt={item.title}
                                         className="card"
                                         loading={index < 4 ? "eager" : "lazy"}
                                         decoding="async"
                                         style={{aspectRatio: "5 / 7", objectFit: "cover", objectPosition: "top"}}
                                    />
                                    <div className="epaper-card-overlay">
                                        <div className="epaper-card-actions">
                                            <Link to={"/e-paper/pack"} className="btn btn-light">
                                                Đọc báo ngay
                                            </Link>
                                            <Link to={"/e-paper/pay"} className="btn btn-primary">
                                                Mua ngay
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold main-title"
                                        style={{fontSize: "18px"}}>{item.title}</h5>
                                    <p className="card-text text-secondary fw-bold description text-center">{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {filtered.length > 0 && (
                <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange}/>
            )}
        </div>
    )
}