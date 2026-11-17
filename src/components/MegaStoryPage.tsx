import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {megaStory} from "../config/megaStoryConfig.ts";
import {chapters, megaStoryImagePath, type MegaStoryBlock, type MegaStoryComparison, type MegaStoryPhoto} from "../config/megaStoryContent.ts";
import MegaStoryAlbum, {MediaCaption} from "./MegaStoryAlbum.tsx";
import UpToTopBtn from "./ui/UpToTopBtn.tsx";
import "./MegaStoryPage.css";

function Photo({image: [file, width, height], caption, captionSpace, layout}: Omit<MegaStoryPhoto, "type">) {
    return (
        <figure className={`mega-story-media mega-story-photo mega-story-${layout}`}>
            <img src={megaStoryImagePath(file)} alt="" width={width} height={height} loading="lazy" decoding="async" />
            <MediaCaption caption={caption} captionSpace={captionSpace} />
        </figure>
    );
}

function Comparison({images: [before, after], caption, captionSpace}: MegaStoryComparison) {
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
            <MediaCaption caption={caption} captionSpace={captionSpace} />
        </figure>
    );
}

function StoryBlock({block}: {block: MegaStoryBlock}) {
    switch (block.type) {
        case "photo":
            return <Photo {...block} />;
        case "album":
            return <MegaStoryAlbum {...block} />;
        case "compare":
            return <Comparison {...block} />;
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
    useEffect(() => {
        if (window.location.hash) {
            document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="mega-story text-start">
            <title>{megaStory.title}</title>
            <header className="mega-story-bar px-3">
                <Link to="/" aria-label="Về trang chủ" className="mega-story-brand">
                    <span className="mega-story-back"><i className="fa-solid fa-arrow-left" aria-hidden="true" /></span>
                    <img src="/mega-story/tuoi-tre.webp" alt="Tuổi Trẻ" width={129} height={41} />
                </Link>
                <img className="mega-story-edition" src="/mega-story/emagazine.webp" alt="eMagazine" width={149} height={28} />
                <Link to="/multimedia/longform" className="mega-story-longform">Longform</Link>
            </header>
            <main>
                <article>
                    <h1 className="visually-hidden">{megaStory.title}</h1>
                    <img
                        src={megaStory.image}
                        srcSet={`${megaStory.thumbnail} 960w, ${megaStory.image} 1920w`}
                        sizes="100vw"
                        alt=""
                        width={1920}
                        height={1202}
                        className="img-fluid w-100 d-block"
                        fetchPriority="high"
                    />

                    {chapters.map(chapter => (
                        <section key={chapter.id} id={chapter.id} className="mega-story-chapter">
                            <h2 className="visually-hidden">{chapter.title}</h2>
                            {chapter.id === "so-bao-dau-tien" && <Opening />}
                            {chapter.blocks.map((block, index) => <StoryBlock key={index} block={block} />)}
                        </section>
                    ))}

                    <footer className="mega-story-reading mega-story-footer border-top">
                        <Link to="/" className="btn btn-outline-secondary">Về trang chủ</Link>
                    </footer>
                </article>
            </main>
            <UpToTopBtn />
        </div>
    );
}
