import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./route/Route.tsx";

function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App
