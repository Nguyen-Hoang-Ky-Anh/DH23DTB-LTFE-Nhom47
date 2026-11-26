import type {NavLink, NewsSectionConfig} from "../../config/newsSectionConfig.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store/store.ts";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchNews} from "../../store/slice/newsSlice.ts";
import {newsDetailHref} from "../../utils/newsDetailURL.ts";

export interface NewsSameCategoryProps {
    section: NewsSectionConfig | NavLink,
}

export default function NewsSameCategory({section}: NewsSameCategoryProps) {
    const dispatch = useDispatch<AppDispatch>();
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

    return (
        <div>
            <div>
                <p className={'same-category-title-type-1'}>TIN MỚI CÙNG CHUYÊN MỤC</p>
                <div className={'category-news-by-date'}></div>
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