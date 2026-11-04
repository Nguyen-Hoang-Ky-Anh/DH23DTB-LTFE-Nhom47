import NewsSection from "../news/NewsSection.tsx";
import DragCarousel from "../../ui/DragCarousel.tsx";

const topics = [
    "50 năm thành phố mang tên Bác",
    "Tuyển sinh lớp 10 năm 2026",
    "Biến động giá vàng",
    "Thời tiết hôm nay",
    "Thi tốt nghiệp THPT 2026",
    "Cấp bách tiết kiệm năng lượng",
];

export default function CategoryContent() {
    return (
        <div className="container">
            <NewsSection layout={"vertical"} section={"thoiSu"}/>
                <div className="row align-items-center">
                    <div className="col-9 d-flex align-items-center gap-3 py-3 my-3 border-top border-bottom">
                        <i className="fa-solid fa-arrow-trend-up text-danger flex-shrink-0"/>

                        <div className="flex-grow-1 overflow-hidden">
                            <DragCarousel showControls>
                                {topics.map(topic => (
                                    <span className="bg-light py-1 px-3 text-nowrap" key={topic}>{topic}</span>
                                ))}
                            </DragCarousel>
                        </div>
                    </div>
                </div>
        </div>
    )
}