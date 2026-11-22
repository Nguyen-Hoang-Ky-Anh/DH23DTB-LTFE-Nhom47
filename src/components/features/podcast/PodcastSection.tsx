import PodcastCard from "./PodcastCard";

interface PodcastItem {
    guid: string;
    title: string;
    image: string;
    link: string;
    description: string;
}

type PodcastLayout = "grid" | "featured";

interface PodcastSectionProps {
    title: string;
    podcasts: PodcastItem[];
    layout?: PodcastLayout;
    hasSubContent?: boolean;
    subContentTitle?: string;
    rows?: number;
    showMore?: boolean;
    moreLink?: string;
    hideHeader?: boolean;
}

export default function PodcastSection({
                                           title,
                                           podcasts,
                                           layout = "featured",
                                           hasSubContent = true,
                                           subContentTitle,
                                           rows = 1,
                                           showMore = true,
                                           moreLink,
                                           hideHeader = false,
                                       }: PodcastSectionProps) {

    const featuredPodcast = podcasts[0];
    const subPodcasts = podcasts.slice(1, 1 + rows * 3);

    return (
        <section className={`podcast-section podcast-layout-${layout}`}>

            <div className="podcast-section-header">
                {!hideHeader && (
                    <div className="podcast-section-header">
                        <i className="fa-regular fa-clock"></i>
                        <h2>{title}</h2>
                    </div>
                )}
            </div>

            {layout === "featured" && featuredPodcast && (
                <div className="podcast-section-featured">
                    <PodcastCard
                        title={featuredPodcast.title}
                        image={featuredPodcast.image}
                        link={featuredPodcast.link}
                        description={featuredPodcast.description}
                        category={title}
                        style="horizontal"
                    />
                </div>
            )}

            {layout === "grid" && (
                <div className="container-fluid p-0">
                    <div className="row g-3 m-0">
                        {podcasts.slice(0, 8).map((podcast) => (
                            <div key={podcast.guid} className="col-4">
                                <PodcastCard
                                    title={podcast.title}
                                    image={podcast.image}
                                    link={podcast.link}
                                    style="vertical"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {layout === "featured" && hasSubContent && subPodcasts.length > 0 && (
                <div className="podcast-section-subcontent">

                    {subContentTitle && (
                        <h3 className="podcast-section-subtitle">
                            {subContentTitle}
                        </h3>
                    )}

                    <div className="podcast-section-grid">
                        {subPodcasts.map((podcast) => (
                            <PodcastCard
                                key={podcast.guid}
                                title={podcast.title}
                                image={podcast.image}
                                link={podcast.link}
                                style="vertical"
                            />
                        ))}
                    </div>
                </div>
            )}

            {showMore && moreLink && (
                <div className="podcast-section-footer">
                    <a href={moreLink}>
                        Xem thêm
                        <i className="fa-solid fa-angle-right"></i>
                    </a>
                </div>
            )}

        </section>
    );
}