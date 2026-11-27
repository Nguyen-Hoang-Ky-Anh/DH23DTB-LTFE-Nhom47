import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {megaStory} from "../config/megaStoryConfig.ts";
import {chapters, featuredArticles, megaStoryImagePath, type MegaStoryBlock, type MegaStoryComparison, type MegaStoryPhoto} from "../config/megaStoryContent.ts";
import fetchRSS, {type NewsItem} from "../services/rssService.ts";
import {newsDetailHref} from "../utils/newsDetailURL.ts";
import MegaStoryAlbum, {MediaCaption, MegaStoryText} from "./MegaStoryAlbum.tsx";
import MegaStoryLightbox from "./MegaStoryLightbox.tsx";
import MagazineHeader from "./layout/header/MagazineHeader.tsx";
import MegaStoryTimeline, {MegaStoryMilestones, MegaStoryVideo} from "./MegaStoryTimeline.tsx";
import DragCarousel from "./ui/DragCarousel.tsx";
import Footer from "./layout/footer/Footer.tsx";

function Photo({image: [file, width, height], alt = "", reveal, caption, captionSpace, layout, italicTitle, captionReading}: Omit<MegaStoryPhoto, "type">) {
    return (
        <figure className={`mega-story-media mega-story-photo mega-story-${layout}${captionReading ? " mega-story-caption-reading" : ""}`}>
            <button type="button" title="Phóng to ảnh" data-mega-story-photo={megaStoryImagePath(file)}
                    className={`mega-story-photo-trigger${reveal ? " mega-story-scroll-quote" : ""}`}>
                <img src={megaStoryImagePath(file)} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
            </button>
            <MediaCaption caption={caption} captionSpace={captionSpace} italicTitle={italicTitle} />
        </figure>
    );
}

function Comparison({images: [before, after], caption, captionSpace, italicTitle}: MegaStoryComparison) {
    const [position, setPosition] = useState(50);
    return (
        <figure className="mega-story-media mega-story-comparison">
            <div className="mega-story-comparison-images">
                <img src={megaStoryImagePath(after[0])} width={520} height={316} alt="Ảnh sau" loading="lazy" />
                <img src={megaStoryImagePath(before[0])} width={520} height={316} alt="Ảnh trước" loading="lazy"
                     className="mega-story-comparison-before" style={{clipPath: `inset(0 ${100 - position}% 0 0)`}} />
                <span className="mega-story-comparison-divider" style={{left: `${position}%`}} aria-hidden="true">↔</span>
                <input type="range" min={0} max={100} value={position}
                       aria-label="So sánh ảnh trước và sau" onChange={event => setPosition(event.target.valueAsNumber)} />
            </div>
            <MediaCaption caption={caption} captionSpace={captionSpace} italicTitle={italicTitle} />
        </figure>
    );
}

function StoryBlock({block}: {block: MegaStoryBlock}) {
    switch (block.type) {
        case "photo":
            if (block.image[0] === "cot-moc") {
                return <><Photo {...block} /><MegaStoryMilestones /></>;
            }
            return <Photo {...block} />;
        case "album":
            return <MegaStoryAlbum {...block} />;
        case "compare":
            return <Comparison {...block} />;
        case "video":
            return <MegaStoryVideo path={block.path} caption={block.caption} italicTitle={block.italicTitle} />;
        case "timeline":
            return <MegaStoryTimeline images={block.images} />;
        case "featured-articles":
            return (
                <section className="mega-story-featured theme-fixed-light">
                    <h3 className="text-center text-uppercase mb-4 fw-bold">Các bài báo tiêu biểu</h3>
                    <DragCarousel showProgress>
                        {featuredArticles.map(({title, image}) => (
                            <article key={image} className="mega-story-featured-card">
                                <img src={megaStoryImagePath(image)} width={640} height={335}
                                     alt="" loading="lazy" decoding="async" draggable={false} />
                                <h4 className="mb-0 mt-2">{title}</h4>
                            </article>
                        ))}
                    </DragCarousel>
                </section>
            );
        case "text":
            return (
                <div className="mega-story-reading mega-story-prose">
                    {block.aside && <Photo {...block.aside} />}
                    {block.paragraphs.map(paragraph => <p key={paragraph}><MegaStoryText text={paragraph} /></p>)}
                </div>
            );
        case "group":
            return (
                <details className="mega-story-people">
                    <summary>{block.title}</summary>
                    {block.blocks.map((media, index) => <StoryBlock key={index} block={media} />)}
                </details>
            );
    }
}

function Opening() {
    return (
        <>
            <Photo image={["mo-dau", 1920, 1081]} layout="full" />
            <div className="mega-story-reading mega-story-opening">
                <p>Từ số báo đầu tiên phát hành ngày 28-07-1975 đến những sản phẩm báo chí cuối cùng trong năm 2026, Báo <em>Người Lao Động</em> đã đi qua hơn nửa thế kỷ đồng hành với thành phố và đất nước. Gần 11.000 số báo in, hàng triệu tin, bài trên báo điện tử, hàng ngàn chương trình xã hội, văn hóa, cộng đồng cùng biết bao thế hệ người làm báo đã góp phần tạo nên một thương hiệu báo chí giàu bản sắc và trách nhiệm.</p>
                <p>51 năm là một hành trình đủ dài để một tờ báo trở thành một phần ký ức của nhiều thế hệ bạn đọc; đủ dài để chứng kiến những đổi thay lớn lao của đất nước; đủ dài để những người làm báo gửi lại thanh xuân, tâm huyết và niềm tin nghề nghiệp của mình trên từng trang báo.</p>
                <p>Hành trình ấy khép lại nhưng những giá trị mà Báo <em>Người Lao Động</em> góp phần tạo dựng cho xã hội vẫn còn ở lại.</p>
                <p>Và, đó chính là điều chúng tôi muốn kể trong câu chuyện này.</p>
            </div>
        </>
    );
}

export default function MegaStoryPage() {
    const [articles, setArticles] = useState<NewsItem[]>([]);
    const {pathname} = useLocation();

    useEffect(() => {
        let active = true;
        fetchRSS("emagazine")
            .catch(() => [])
            .then(items => {
                if (active) setArticles(items.filter(({title}) => title !== megaStory.title).slice(0, 12));
            });
        return () => { active = false; };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="mega-story text-start">
            <title>{megaStory.title}</title>
            <MagazineHeader commentsId="mega-story-comments"/>
            <main>
                <MegaStoryLightbox>
                    <h1 className="visually-hidden">{megaStory.title}</h1>
                    <button type="button" className="mega-story-photo-trigger" title="Phóng to ảnh bìa"
                            data-mega-story-photo={megaStory.image}>
                        <img src={megaStory.image} srcSet={`${megaStory.thumbnail} 960w, ${megaStory.image} 1920w`}
                             sizes="100vw" alt="" width={1920} height={1202} className="img-fluid w-100 d-block"
                             fetchPriority="high" />
                    </button>

                    {chapters.map(chapter => (
                        <section key={chapter.id} id={chapter.id} className="mega-story-chapter">
                            <h2 className="visually-hidden">{chapter.title}</h2>
                            {chapter.id === "so-bao-dau-tien" && <Opening />}
                            {chapter.blocks.map((block, index) => <StoryBlock key={index} block={block} />)}
                        </section>
                    ))}
                </MegaStoryLightbox>
                <section id="mega-story-comments" className="mega-story-comments">
                    <label htmlFor="mega-story-comment-input" className="form-label main-title">Bình luận (1)</label>
                    <textarea id="mega-story-comment-input" className="form-control description" rows={3}
                              placeholder="Chia sẻ ý kiến của bạn" readOnly />
                    <div className="d-flex justify-content-end mt-3">
                        <button type="button" className="btn btn-primary px-3" disabled>Gửi bình luận</button>
                    </div>
                    <div className="mega-story-comment-sort">
                        <span>Quan tâm nhất</span>
                        <span>Mới nhất</span>
                    </div>
                    <article className="mega-story-comment-entry">
                        <span className="mega-story-comment-avatar" aria-hidden="true">CX</span>
                        <div>
                            <strong>cxuon**@gmail.com</strong>
                            <p>Xin tạm biệt báo Người Lao Động - Sẽ rất nhớ và luôn nhớ mãi những dòng tin tức, những thông tin, những dòng thời sự trong và ngoài nước mà báo đã mang đến trong suốt hành trình 51 năm qua - Kính chúc Ban biên Tập, toàn thể các phóng viên, cộng tác viên ..... của báo mạnh giỏi, hạnh phúc cùng gia đình. Hy vọng và mong rằng sẽ lại được đọc những dòng tin tức mà quý báo sẽ lại mang đến trong thời gian sớm nhất</p>
                            <div className="mega-story-comment-actions">
                                <span><i className="fa-regular fa-thumbs-up me-1" aria-hidden="true" />18</span>
                                <span>Trả lời 0</span>
                                <span>5 tháng trước</span>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="mega-story-see-more">
                    <h2 className="main-title">Xem thêm</h2>
                    <div className="mega-story-more-grid">
                        {articles.map(({guid, title, image, link}) => (
                            <article key={guid || title}>
                                <Link to={newsDetailHref(link)}>
                                    <img src={image} alt="" loading="lazy" decoding="async" />
                                    <h3 className="main-title mb-0">{title}</h3>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
