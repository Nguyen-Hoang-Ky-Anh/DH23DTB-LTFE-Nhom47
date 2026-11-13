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
                <p className="fw-bold main-title fs-5" style={{color: "white"}}>MULTIMEDIA</p>
            </div>
            <div className="d-flex multimedia-options-container align-items-center">
                <ul className="list-inline mb-0 d-flex gap-3">
                    {multimediaHeaderItems.map(item => (
                        <li className="list-inline-item multimedia-option border-end pe-3" key={item.title}>
                            <Link to={item.href} style={{color: "white"}}>
                                <i className={`fa ${item.icon} multimedia-icon`}></i> {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
