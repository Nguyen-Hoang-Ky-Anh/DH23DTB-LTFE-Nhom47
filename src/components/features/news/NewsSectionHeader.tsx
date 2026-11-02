import type {NavLink} from "../../../config/newsSectionConfig.ts";

interface NewsSectionHeaderProps {
    title: string;
    icon: string;
    links: readonly NavLink[];
    moreLinks?: readonly NavLink[];
}

export default function NewsSectionHeader({title, icon, links, moreLinks}: NewsSectionHeaderProps) {
        return (
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h5><i className={icon} style={{color: "#0959ab"}}></i> {title}</h5>
                </div>
                <div className="d-flex align-items-center">
                    <ul className="list-inline mb-0">
                        {links.map(link => (
                            <li key={link.href} className="list-inline-item fs-6">
                                <a href={link.href} style={{color: "#3e3e3e"}}>{link.label}</a>
                            </li>
                        ))}
                        {moreLinks && moreLinks.length > 0 && (
                            <li className="list-inline-item fs-6 category-dropdown" style={{color: "#3e3e3e"}}>
                                <i className="fa fa-angle-down"></i>
                                <div className="category-box">
                                    {moreLinks.map(link => (
                                        <a key={link.href} href={link.href} title={link.label}>{link.label}</a>
                                    ))}
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
}