import {Link} from "react-router-dom";

export default function MagazineHeader({commentsId}: {commentsId: string}) {
    return (
        <header className="mega-story-bar px-3">
            <Link to="/" title="Về trang chủ" className="mega-story-brand">
                <span className="mega-story-back"><i className="fa-solid fa-arrow-left"/></span>
                <img src="/mega-story/tuoi-tre.webp" alt="Tuổi Trẻ" width={129} height={41}/>
            </Link>
            <img className="mega-story-edition" src="/mega-story/emagazine.webp" alt="eMagazine" width={149} height={28}/>
            <div className="mega-story-actions">
                <button type="button" onClick={() => document.getElementById(commentsId)?.scrollIntoView()}>
                    <i className="fa-regular fa-comment-dots"/>
                    Bình luận
                </button>
                <button type="button">
                    <i className="fa-brands fa-facebook-f"/>
                    Facebook
                </button>
                <button type="button">
                    <i className="fa-regular fa-paper-plane"/>
                    Góp ý
                </button>
            </div>
        </header>
    );
}
