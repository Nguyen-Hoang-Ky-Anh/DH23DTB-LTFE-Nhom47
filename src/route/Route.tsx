import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout.tsx";
import HomePage from "../components/HomePage.tsx";
import CategoryPage from "../components/CategoryPage.tsx"
import Error from "./Error.tsx";
import { SECTIONS } from "../config/newsSectionConfig.ts";
import TrendingPage from "../components/TrendingPage.tsx";
import {trendingTopics} from "../config/trendingConfig.ts";
import MultimediaItemPage from "../components/MultimediaItemPage.tsx";
import {VideoPage} from "../components/VideoPage.tsx";
import { multimediaItems } from "../config/multimediaConfig.ts";
import {FEED_PATHS, type FeedName} from "../services/rssConfig.ts";

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
        loader: ({params}) => {
          const path = `/dong-su-kien/${params.topic}`;
          const topic = trendingTopics.find(topic => topic.href === path);
          const feed = Object.keys(FEED_PATHS).find(key => FEED_PATHS[key] === topic?.feed) as FeedName | undefined;
          if (!topic || !feed) {
            throw new Response("Not Found", {status: 404});
          }

          return {title: topic.title, feed};
        },
      },
      {
        path: "multimedia/:item",
        element: <MultimediaItemPage />,
        loader: ({params}) => {
          const item = multimediaItems.find(item => item.href === `/multimedia/${params.item}`);
          if (!item) {
            throw new Response("Not Found", {status: 404});
          }
          return {title: item.title, feed: item.feed};
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
        path: "/video",
        element: <VideoPage />
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




