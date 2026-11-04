import './App.css'
import HomePage from "./components/HomePage.tsx";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage.tsx";
import MainLayout from "./MainLayout.tsx";

function App() {

  return (
      <Routes>
          <Route element={<MainLayout/>}>
              <Route path="/" element={<HomePage />}/>
              <Route path="/:category/:subcategory?" element={<CategoryPage />}/>
          </Route>
      </Routes>
  )
}

export default App
