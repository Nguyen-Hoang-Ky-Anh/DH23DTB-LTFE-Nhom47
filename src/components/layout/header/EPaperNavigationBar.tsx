import type {EPaperNavigationBarItem} from "../../../config/ePaperHeaderConfig.ts";
import {Link} from "react-router-dom";

interface EPaperNavigationBarProps {
    items: EPaperNavigationBarItem[];
}

export default function EPaperNavigationBar({ items }: EPaperNavigationBarProps) {
    return (
        <div style={{ backgroundColor: "#0d4f9f" }}>
            <div className="container">
                <ul className="list-unstyled d-flex flex-row mb-0">
                    {items.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    to={item.href}
                                    className="d-block text-decoration-none"
                                    style={{
                                        padding: "14px 24px",
                                        color: "white",
                                        fontSize: "12px",
                                        fontFamily: "Inter, sans-serif",
                                        backgroundColor: isActive ? "#0a3d7d" : "transparent",
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}