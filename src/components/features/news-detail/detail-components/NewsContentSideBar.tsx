import {Link} from "react-router-dom";

export default function NewsContentSideBar() {
    return (
        <div className={'sticky-top d-flex flex-column gap-2 align-items-center mt-3'}>
            <Link to={"_"} className={'rounded-icon'}><i className="fa-brands fa-facebook"></i></Link>
            <Link to={"_"} className={'rounded-icon'}><i className="fa-solid fa-link"></i></Link>
            <Link to={"_"} className={'rounded-icon'}><i className="fa-solid fa-comment"></i></Link>
            <Link to={"_"} className={'rounded-icon'}><i className="fa-solid fa-print"></i></Link>
            <Link to={"_"} className={'rounded-icon'}><i className="fa-solid fa-bookmark"></i></Link>

            <div className={'fontsize-box d-flex flex-column align-items-center gap-3 p-2'}>
                <button type={'button'} className={'btn small-rounded-icon'}>
                    <i className="fa-solid fa-chevron-up"></i>
                </button>
                <i className="fa-solid fa-text-height"></i>
                <button type={'button'} className={'btn small-rounded-icon'}>
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
            </div>
        </div>
    )
}