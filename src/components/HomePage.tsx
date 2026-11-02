import Header from "./layout/header/Header.tsx";
import Footer from "./layout/footer/Footer.tsx";
import Multimedia from "./features/multimedia/Multimedia.tsx";
import NewsSection from "./features/news/NewsSection.tsx";
import TopNews from "./features/top-news/TopNews.tsx";

export default function HomePage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header/>
            <main className="flex-grow-1">
                <TopNews/>
                <Multimedia/>
                <NewsSection section="thoiSu"/>
                <NewsSection section="quocTe"/>
                <NewsSection section="kinhTe"/>
                <NewsSection section="netZero"/>
                <NewsSection section="ai365"/>
                <NewsSection section="laoDong"/>
                <NewsSection section="phapLuat"/>
                <NewsSection section="banDoc"/>
            </main>
            <Footer/>
        </div>
    )
}
