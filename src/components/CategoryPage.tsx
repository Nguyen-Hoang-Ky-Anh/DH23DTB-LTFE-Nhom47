import CategoryHeader from "./features/category/CategoryHeader.tsx";
import CategoryContent from "./features/category/CategoryContent.tsx";

export default function CategoryPage() {
    return (
        <>
            <main className="flex-grow-1">
                <CategoryHeader/>
                <CategoryContent/>
            </main>
        </>
    )
}