import './App.css'
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";
import TestRSS from "./testRSS.tsx"
function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header/>
        <TestRSS/>
        <main className="flex-grow-1"></main>
      <Footer/>
    </div>
  )
}

export default App
