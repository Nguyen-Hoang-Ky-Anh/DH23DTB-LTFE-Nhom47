import type {NavLink} from "../../../config/newsSectionConfig.ts";
import {Link} from "react-router-dom";

interface NewsSectionHeaderProps {
    title: string;
    href?: string;
    icon: string;
    color?: string;
    links: readonly NavLink[];
    moreLinks?: readonly NavLink[];
    compact?: boolean;
}

export default function NewsSectionHeader({title, href, icon, color, links, moreLinks, compact=false}: NewsSectionHeaderProps) {
    const linkStyle = {fontFamily: "Inter", fontSize: 14};
    const visibleLinks = compact ? links.slice(0, 2) : links;
    const dropdownLinks = [...links.slice(visibleLinks.length), ...(moreLinks ?? [])];
        return (
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-auto text-start mb-2">
                <div>
                    <h5 className="mb-0 title">
                        <i className={icon} style={{color: color ?? "#0959ab"}}></i>
                        {href ?
                            <Link to={href} className={`fw-bold news-section-title ${compact ? "compact-title" : ""}`}>{title}</Link> :
                            <span className={`main-title ${compact ? "compact-title" : ""}`}>{title}</span>
                        }
                    </h5>
                </div>
                <div className="d-flex align-items-center">
                    <ul className="list-inline mb-0">
                        {visibleLinks.map(link => (
                            <li key={link.label} className={compact ? "list-inline-item" : "list-inline-item fs-6"}>
                                <Link to={link.href} style={{color: "#3e3e3e", ...linkStyle}}>{link.label}</Link>
                            </li>
                        ))}
                        {dropdownLinks.length > 0 && (
                            <li className="list-inline-item category-dropdown" style={{color: "#3e3e3e", ...linkStyle}}>
                                <i className="fa fa-angle-down"></i>
                                <div className="category-box">
                                    {dropdownLinks.map(link => (
                                        <Link key={link.label} to={link.href} title={link.label}>{link.label}</Link>
                                    ))}
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
}
