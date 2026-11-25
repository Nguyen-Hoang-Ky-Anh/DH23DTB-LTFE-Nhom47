import {Link} from "react-router-dom";

interface NewsContentSideBarProps {
    value: number;
    direction: "increase" | "decrease";
    increaseValue: () => void;
    decreaseValue: () => void;
    resetValue: () => void;
}

export default function NewsContentSideBar({value, direction, increaseValue, decreaseValue, resetValue}: NewsContentSideBarProps) {

    return (
        <div className={'d-flex flex-column gap-2 align-items-center news-content-side-bar'}>
            <Link to={"_"} className={'rounded-icon'}><i className="fa-brands fa-facebook"></i></Link>
            <Link to={"_"} className={'rounded-icon'}><i className="fa-solid fa-link"></i></Link>
            <Link to={"_"} className={'rounded-icon'}><i className="fa-solid fa-comment"></i></Link>
            <Link to={"_"} className={'rounded-icon'}><i className="fa-solid fa-print"></i></Link>
            <Link to={"_"} className={'rounded-icon'}><i className="fa-solid fa-bookmark"></i></Link>

            <div className={'fontsize-box d-flex flex-column align-items-center gap-3 p-2'}>
                <button type={'button'} className={'btn small-rounded-icon'} onClick={increaseValue}>
                    <i className="fa-solid fa-chevron-up"></i>
                </button>
                <span key={value} className={`fontsize-icon slide-${direction}`}>
                    <i className="fa-solid fa-text-height" style={{fontSize: value}}></i>
                </span>
                <button type={'button'} className={'btn small-rounded-icon'} onClick={resetValue} style={{fontSize: "12px"}}>
                    <i className="fa-solid fa-rotate"></i>
                </button>
                <button type={'button'} className={'btn small-rounded-icon'} onClick={decreaseValue}>
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
            </div>
        </div>
    )
}