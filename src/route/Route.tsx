import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout.tsx";
import HomePage from "../components/HomePage.tsx";
import CategoryPage from "../components/CategoryPage.tsx"
import Error from "./Error.tsx";
import { SECTIONS } from "../config/newsSectionConfig.ts";
import WorldCupPage from "../components/WorldCupPage.tsx";

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
        path: `${SECTIONS.WorldCup2026.href}/:subcategory?`,
        element: <WorldCupPage />,
        loader: ({ params }) => {
          const section = SECTIONS.WorldCup2026;
          const links = [...section.links, ...section.moreLinks];
          const path = `${section.href}/${params.subcategory}`;
          if (params.subcategory && !links.some(link => link.href === path)) {
            throw new Response("Not Found", { status: 404 });
          }
          return null;
        },
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
          return null;
        },
      },
      { path: "*", element: <Error /> },
    ],
  },
]);




