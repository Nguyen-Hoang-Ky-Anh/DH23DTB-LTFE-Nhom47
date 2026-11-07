import CategoryMegaRightOptionItems from "./CategoryMegaRightOptionItems.tsx";
import CategoryMegaLeftOptionItems from "./CategoryMegaLeftOptionItems.tsx";

export function CategoryMegaMenu() {
    return (
        <div className="category-mega-menu">
            <div className="container p-3">
                <div className="row">
                    <div className="col-lg-9">
                        <CategoryMegaLeftOptionItems/>
                    </div>
                    <div className="col-lg-3">
                        <CategoryMegaRightOptionItems/>
                    </div>
                </div>
            </div>
        </div>
    )
}