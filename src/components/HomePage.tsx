import Header from "./layout/header/Header.tsx";
import Footer from "./layout/footer/Footer.tsx";
import Multimedia from "./features/multimedia/Multimedia.tsx";
import NewsSection from "./features/news/NewsSection.tsx";

export default function HomePage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header/>
            <main className="flex-grow-1">
                <Multimedia/>
                <NewsSection/>
            </main>
            <Footer/>
        </div>
    )
}