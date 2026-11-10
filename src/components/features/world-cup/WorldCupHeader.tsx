import {Link} from "react-router-dom";
import type {NewsSectionConfig} from "../../../config/newsSectionConfig.ts";

interface WorldCupHeaderProps {
    section: NewsSectionConfig;
    currentPath: string;
}

export default function WorldCupHeader({section, currentPath}: WorldCupHeaderProps) {
    const links = [...section.links, ...section.moreLinks];

    return (
        <div className="container pt-4">
            <nav className="d-flex flex-wrap align-items-center gap-4 border-bottom pb-3 mb-4">
                <h1 className="wc-page-title main-title m-0"><Link to={section.href}>{section.title}</Link></h1>
                {links.map(link => (
                    <Link key={link.href} to={link.href} className={link.href === currentPath ? "text-primary" : ""}>
                        {link.label}
                    </Link>
                ))}
                <a href="#lich-thi-dau">Lịch thi đấu</a>
            </nav>
        </div>
    );
}
