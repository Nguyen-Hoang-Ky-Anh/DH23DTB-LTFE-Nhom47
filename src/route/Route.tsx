import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout.tsx";
import HomePage from "../components/HomePage.tsx";
import CategoryPage from "../components/CategoryPage.tsx"
import Error from "./Error.tsx";
import { SECTIONS } from "../config/newsSectionConfig.ts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":category/:subcategory?",
        element: <CategoryPage />,
        loader: ({ params }) => {
          let path = `/${params.category}`;
          if (params.subcategory) {
            path += `/${params.subcategory}`;
          }

          const exists = Object.values(SECTIONS).some(
            (section) =>
              section.href === path ||
              [...section.links, ...section.moreLinks].some(
                (link) => link.href === path,
              ),
          );
          if (!exists) {
            throw new Response("Not Found", { status: 404 });
          }
        },
      },
      { path: "*", element: <Error /> },
    ],
  },
]);




