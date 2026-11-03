import CategoryHeader from "./features/category/CategoryHeader.tsx";
import NewsSection from "./features/news/NewsSection.tsx";

export default function CategoryPage() {
    return (
        <>
            <main className="flex-grow-1">
                <CategoryHeader/>
                <NewsSection layout={"vertical"} section={"thoiSu"}/>
            </main>
        </>
    )
}