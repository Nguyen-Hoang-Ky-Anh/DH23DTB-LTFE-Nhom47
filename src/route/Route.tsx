import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout.tsx";
import HomePage from "../components/HomePage.tsx";
import CategoryPage from "../components/CategoryPage.tsx"
import Error from "./Error.tsx";
import { SECTIONS } from "../config/newsSectionConfig.ts";
import TrendingPage from "../components/TrendingPage.tsx";
import {TRENDING_TOPICS} from "../config/trendingConfig.ts";
import fetchRSS from "../services/rssService.ts";

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
        path: "dong-su-kien/:topic",
        element: <TrendingPage />,
        loader: async ({params}) => {
          const path = `/dong-su-kien/${params.topic}`;
          const topic = TRENDING_TOPICS.find(topic => topic.href === path);
          if (!topic?.feed) {
            throw new Response("Not Found", {status: 404});
          }
          return {title: topic.title, news: await fetchRSS(topic.feed)};
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
      {
        path: "*",
        loader: () => {
          throw new Response("Not Found", {status: 404});
        },
        errorElement: <Error />
      },
    ],
  },
]);




