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
import EPaperPage from "../components/EPaperPage.tsx";
import { multimediaItems } from "../config/multimediaConfig.ts";
import {FEED_PATHS, type FeedName} from "../services/rssConfig.ts";
import {searchPage} from "../services/searchConfig.ts";
import SearchPage from "../components/SearchPage.tsx";
import {megaStory} from "../config/megaStoryConfig.ts";
import MegaStoryPage from "../components/MegaStoryPage.tsx";
import NewsDetailPage from "../components/NewsDetailPage.tsx";
import PodcastPage from "../components/PodcastPage.tsx";
import PodcastSearchPage from "../components/PodcastSearchPage.tsx";
import RssPage from "../components/RssPage.tsx";
import {findPodcastSection} from "../config/podcastConfig.ts";

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
        path: "rss",
        element: <RssPage />,
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
        path: "search/:keyword",
        element: <SearchPage />,
        loader: ({ params }) => {
          const keyword = (params.keyword ?? "").trim();

          if (!keyword) {
            throw new Response("Not Found", { status: 404 });
          }

          return {
            title: searchPage.title,
            feed: searchPage.feed,
            keyword
          };
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
          if (!exists || path==="/podcast" ) {
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
        path: "/e-paper/:category?",
        element: <EPaperPage/>,
        loader: ({ params }) => {
          const valid = ["special-news", "e-card", "bao-xuan", "pack", "pay"];
          if (params.category && !valid.includes(params.category)) {
            throw new Response("Not Found", { status: 404 });
          }
          return null;
        },
      },
      {
        path: "news-detail/:detail?",
        element: <NewsDetailPage/>,
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
  
  {
    path: megaStory.href,
    element: <MegaStoryPage />,
    errorElement: <Error />,
  },
  
  {
        path: "/podcast/:category?",
        element: <PodcastPage/>,
        errorElement: <Error />,
        loader: ({params}) => {
            if (params.category && !findPodcastSection(params.category)) {
              throw new Response("Not Found", { status: 404 });
            }
            return null;
        }
  },
  {
    path: "podcast/search/:keyword",
    element: <PodcastSearchPage />,
    loader: ({params}) => {
      const keyword = (params.keyword ?? "").trim();
      if (!keyword) {
        throw new Response("Not Found", { status: 404 });
      }

      return {
        keyword
      };

    }
  },
  {
    path: "/news-detail",
    element: <NewsDetailPage/>,
    errorElement: <Error/>
  },
]);




