import Header from "./layout/Header.tsx";
import Footer from "./layout/Footer.tsx";
import Multimedia from "./Multimedia.tsx";
import NewsSection from "./NewsSection.tsx";

export default function Home() {
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