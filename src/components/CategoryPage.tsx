import Header from "./layout/header/Header.tsx";
import Footer from "./layout/footer/Footer.tsx";
import CategoryHeader from "./features/category/CategoryHeader.tsx";

export default function CategoryPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header/>
            <main className="flex-grow-1">
                <CategoryHeader/>
            </main>
            <Footer/>
        </div>
    )
}