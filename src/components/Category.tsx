import CategoryRightOptionItems from "./CategoryRightOptionItems.tsx";
import CategoryLeftOptionItems from "./CategoryLeftOptionItems.tsx";

export function Category() {
    return (
        <div style={{backgroundColor: "#fafafa"}}>
            <div className="container p-3">
                <div className="row">
                    <div className="col-lg-9">
                        <CategoryLeftOptionItems/>
                    </div>
                    <div className="col-lg-3">
                        <CategoryRightOptionItems/>
                    </div>
                </div>
            </div>
        </div>
    )
}