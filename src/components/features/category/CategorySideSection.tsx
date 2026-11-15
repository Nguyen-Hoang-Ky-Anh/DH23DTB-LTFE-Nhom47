import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {NavLink} from "../../../config/newsSectionConfig.ts";
import {fetchNews} from "../../../store/slice/newsSlice.ts";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import SideGroupCard from "./SideGroupCard.tsx";

export default function CategorySideSection({link}: {link: NavLink}) {
    const dispatch = useDispatch<AppDispatch>();
    const news = useSelector((state: RootState) => state.news.feeds[link.feed]) ?? [];

    useEffect(() => {
        dispatch(fetchNews(link.feed));
    }, [dispatch, link.feed]);

    return <SideGroupCard title={link.label} href={link.href} feature={news[0]} items={news.slice(1, 3)}/>;
}
