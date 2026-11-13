import {Link} from "react-router-dom";
import {multimediaItems} from "../../../config/multimediaConfig.ts";

const multimediaHeaderItems = [
    {
        title: "Video",
        icon: "fa-video",
        href: "/video"
    },
    ...multimediaItems,
]

export default function MultimediaHeader() {
    return (
        <div className="d-flex align-items-center justify-content-between w-100"
             style={{paddingTop: "40px", paddingBottom: "40px"}}>
            <div className="multimedia-title-container">
                <p className="fw-bold" style={{color: "white"}}>MULTIMEDIA</p>
            </div>
            <div className="d-flex multimedia-options-container align-items-center">
                <ul className="list-inline mb-0">
                    {multimediaHeaderItems.map(item => (
                        <li key={item.href} className="list-inline-item multimedia-option">
                            <Link to={item.href} style={{color: "white"}}><i className={`fa ${item.icon} multimedia-icon`}></i> {item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
