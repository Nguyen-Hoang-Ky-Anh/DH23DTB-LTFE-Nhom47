import CategoryMegaRightOptionItems from "./CategoryMegaRightOptionItems.tsx";
import CategoryMegaLeftOptionItems from "./CategoryMegaLeftOptionItems.tsx";

export function CategoryMegaMenu() {
    return (
        <div style={{backgroundColor: "#fafafa"}}>
            <div className="container p-3 mh-100">
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