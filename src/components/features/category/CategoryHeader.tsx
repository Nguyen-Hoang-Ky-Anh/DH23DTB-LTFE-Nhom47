
import type { NewsSectionConfig } from "../../../config/newsSectionConfig.ts";
import { Link, useLocation } from "react-router-dom";

interface CategoryHeaderProps {
    section: NewsSectionConfig;
}

export default function CategoryHeader({ section }: CategoryHeaderProps) {
    if (!section) return null;

    const links = [...section.links, ...section.moreLinks];

    const { pathname } = useLocation();

    const normalizePath = (path: string) =>
        path.endsWith("/")
            ? path.slice(0, -1) || "/"
            : path;

    const currentPath = normalizePath(pathname);

    return (
        <div className="container pt-3 pb-0 border-bottom">
            <ul className="d-flex flex-wrap gap-3 list-inline align-items-baseline mb-0">
                <li className="list-inline-item first-category-item">
                    <Link
                        to={section.href}
                        className="main-title"
                        style={{ fontSize: "28px" }}
                    >
                        {section.title}
                    </Link>
                </li>

                {links.map((link) => (
                    <li
                        key={link.href}
                        className="list-inline-item second-category-item"
                        style={{ fontSize: "16px" }}
                    >
                        <Link
                            to={link.href}
                            className={
                                normalizePath(link.href) === currentPath
                                    ? "category-header-active"
                                    : ""
                            }
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}

                {section.feed === "WorldCup2026" && (
                    <li className="list-inline-item second-category-item">
                        <a href="#lich-thi-dau">Lịch thi đấu</a>
                    </li>
                )}
            </ul>
        </div>
    );
}
