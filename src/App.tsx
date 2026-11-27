import './App.css'
import {useLayoutEffect} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "./store/store.ts";
import {THEME_STORAGE_KEY} from "./store/slice/themeSlice.ts";
import UpToTopBtn from "./components/ui/UpToTopBtn.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./route/Route.tsx";

function App() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  useLayoutEffect(() => {
      const theme = isDark ? "dark" : "light";
      document.documentElement.dataset.theme = theme;
      localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [isDark]);

  return (
      <>
          <RouterProvider router={router}/>
          <UpToTopBtn/>
      </>
  )
}

export default App
