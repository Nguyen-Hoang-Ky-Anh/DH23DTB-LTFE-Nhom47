import CategoryHeader from "./features/category/CategoryHeader.tsx";
import NewsSection from "./features/news/NewsSection.tsx";

export default function CategoryPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <main className="flex-grow-1">
                <CategoryHeader/>
                <NewsSection layout={"vertical"} title={""}/>
            </main>
        </div>
    )
}