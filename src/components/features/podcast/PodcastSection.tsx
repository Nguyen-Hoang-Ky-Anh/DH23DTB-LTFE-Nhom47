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

const menu = [
    {slug: "Tuần này có gì", icon: ""},
    {slug: "11 giờ 30", icon: "fa-clock"},
    {slug: "Giới trẻ", icon: "fa-face-smile"},
    {slug: "Bàn tròn phái đẹp", icon: "fa-seedling"},
    {slug: "Cầu vồng hạnh phúc", icon: "fa-rainbow"},
    {slug: "Sau giờ làm", icon: "fa-briefcase"},
    {slug: "Sức khỏe của bạn", icon: "fa-heart-pulse"},
    {slug: "Doanh nghiệp tự giới thiệu", icon: "fa-building"},
    {slug: "Sáng tác ca khúc Đất nước trọn niềm vui", icon: "fa-microphone"},
];

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

    const currentMenu = menu.find(
        (item) => item.slug === title
    )

    return (
        <section className={`podcast-section podcast-layout-${layout}`}>

            {!hideHeader && (
                <div className="podcast-section-header">
                    <i className={`fa-solid ${currentMenu?.icon ?? "fa-podcast"}`} style={{fontSize: "26px"}}></i>

                    <h2 style={{color: "#147ADE", fontSize: "26px"}}>
                        {title}
                    </h2>
                </div>
            )}

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