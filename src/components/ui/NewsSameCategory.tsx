import type {NavLink, NewsSectionConfig} from "../../config/newsSectionConfig.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store/store.ts";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchNews} from "../../store/slice/newsSlice.ts";
import {newsDetailHref} from "../../utils/newsDetailURL.ts";

export interface NewsSameCategoryProps {
    section: NewsSectionConfig | NavLink,
}

export default function NewsSameCategory({section}: NewsSameCategoryProps) {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState("");
    const [searchParams] = useSearchParams();
    const url = searchParams.get("url");
    const news = useSelector((state: RootState) =>
        state.news.feeds[section.feed]
    );

    useEffect(() => {
        dispatch(fetchNews(section.feed));
    }, [dispatch, section.feed]);

    // Đoạn này loại news đang đọc
    const sameCategory = news?.filter(item => item.link !== url).slice(0,6);

    const handleDateChange = () => {
        if (!selectedDate) return;

        navigate(
            `/discover-news-by-date?category=${encodeURIComponent(section.feed)}&date=${selectedDate}`
        );
    };

    return (
        <div>
            <div className={'d-flex justify-content-between'}>
                <p className={'same-category-title-type-1'}>TIN MỚI CÙNG CHUYÊN MỤC</p>
                <div className={'category-news-by-date'}>
                    <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
                    <button
                        type="button"
                        onClick={handleDateChange}
                        disabled={!selectedDate}
                    >
                        OK
                    </button>
                </div>
            </div>
            <div className={'same-category-grid mt-2'}>
                {sameCategory && sameCategory.map(item =>
                    <div className={'same-category-card'}>
                        <Link to={newsDetailHref(item.link)}>
                            <img src={item.image} alt={item.title}
                            className={'same-category-img mb-2'}/>
                        </Link>
                        <Link to={newsDetailHref(item.link)}>
                            <div className={'same-category-card-title'}>{item.title}</div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}