import BottomNews from "./features/bottom-news/BottomNews.tsx";
import Multimedia from "./features/multimedia/Multimedia.tsx";
import NewsSection from "./features/news/NewsSection.tsx";
import TopNews from "./features/top-news/TopNews.tsx";
import HomeContent from "./features/home-content/HomeContent.tsx";

export default function HomePage() {
    return (
        <>
            <TopNews />
            <HomeContent/>
            <Multimedia />
            <NewsSection section="thoiSu" />
            <NewsSection section="quocTe" />
            <NewsSection section="kinhTe" />
            <NewsSection section="netZero" />
            <NewsSection section="ai365" />
            <NewsSection section="laoDong" />
            <NewsSection section="phapLuat" />
            <NewsSection section="banDoc" />
            <BottomNews/>
        </>
    );
}
