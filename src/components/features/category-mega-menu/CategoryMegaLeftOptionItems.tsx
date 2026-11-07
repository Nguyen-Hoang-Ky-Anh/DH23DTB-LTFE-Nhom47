import CategoryMegaMenuCard from "./CategoryMegaMenuCard.tsx";
import {MEGA_MENU_COLUMNS_LEFT} from "./megaMenuLeftItems.ts";
import {SECTIONS} from "../../../config/newsSectionConfig.ts";

export default function CategoryMegaLeftOptionItems() {
    return (
        <div className="container">
            <div className="row">
                {MEGA_MENU_COLUMNS_LEFT.map((column, index) => (
                    <div
                        key={index}
                        className="col-lg-3 col-md-6 d-flex flex-column gap-5"
                    >
                        {column.map((sectionKey) => (
                            <CategoryMegaMenuCard
                                key={sectionKey}
                                section={SECTIONS[sectionKey]}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
