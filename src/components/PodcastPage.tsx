import {useLocation, useParams} from "react-router-dom";
import { useEffect } from "react";
import PodcastHeader from "./layout/header/PodcastHeader.tsx";
import PodcastContent from "./features/podcast/PodcastContent.tsx";
import {findPodcastSection} from "../config/podcastConfig.ts";

export default function PodcastPage() {
    const location = useLocation();
    const { category } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const section = findPodcastSection(category);

    return (
        <>
            <PodcastHeader />
            <main className="flex-grow-1">
                <PodcastContent section={section} />
            </main>
        </>
    );
}