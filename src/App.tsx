import './App.css'
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";
import Multimedia from "./components/Multimedia.tsx";
import NewsSection from "./components/NewsSection.tsx";

function App() {

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

export default App
