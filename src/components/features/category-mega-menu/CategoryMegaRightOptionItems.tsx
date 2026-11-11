import {MEGA_MENU_COLUMNS_RIGHT} from "./megaMenuRightItems.tsx";
import {Link} from "react-router-dom";

export default function CategoryMegaRightOptionItems() {
    return (
        <div className="option-right-item d-flex flex-column ps-3 border-start">
            <div className="d-flex flex-column gap-3 mb-3">
                {MEGA_MENU_COLUMNS_RIGHT.map((group, index) => (
                    <div
                        key={index}
                        className={`d-flex flex-column gap-3 mb-3 ${index > 0 ? "pt-3 border-top" : ""}`}
                    >
                        {group.map(({label, href, icon}) => (
                            <Link
                                to={href}
                                className={`d-flex align-items-center gap-2 p-1 ${index === 0 ? "border rounded-1" : ""}`}
                            >
                                <span className={`pe-2 ps-2 ${index === 0 ? "border-end" : ""}`}>{icon}</span>
                                <p>{label}</p>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}