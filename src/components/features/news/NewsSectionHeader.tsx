import type {NavLink} from "../../../config/newsSectionConfig.ts";
import {Link} from "react-router-dom";

interface NewsSectionHeaderProps {
    title: string;
    href?: string;
    icon: string;
    links: readonly NavLink[];
    moreLinks?: readonly NavLink[];
    compact?: boolean;
}

export default function NewsSectionHeader({title, href, icon, links, moreLinks, compact=false}: NewsSectionHeaderProps) {
        return (
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 text-start mb-2">
                <div>
                    <h5 className="mb-0" style={compact ? {fontSize: 18, lineHeight: 1.4} : undefined}>
                        <i className={icon} style={{color: "#0959ab"}}></i> {href ? <Link to={href}>{title}</Link> : title}
                    </h5>
                </div>
                <div className="d-flex align-items-center">
                    <ul className="list-inline mb-0">
                        {links.map(link => (
                            <li key={link.label} className={compact ? "list-inline-item" : "list-inline-item fs-6"}>
                                <Link to={link.href} style={{color: "#3e3e3e"}}>{link.label}</Link>
                            </li>
                        ))}
                        {moreLinks && moreLinks.length > 0 && (
                            <li className="list-inline-item fs-6 category-dropdown" style={{color: "#3e3e3e"}}>
                                <i className="fa fa-angle-down"></i>
                                <div className="category-box">
                                    {moreLinks.map(link => (
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
