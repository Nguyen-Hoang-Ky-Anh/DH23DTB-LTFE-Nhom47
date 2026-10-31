import TopHeaderLink from "./TopHeaderLink.tsx";
import TopHeaderLogoNav from "./TopHeaderLogoNav.tsx";

export default function TopHeader() {
    return (
        <div style={{ backgroundColor: "#c90009" }}>
            <div className="container">
                <div className="d-flex flex-column p-1">
                    <div className="d-flex flex-row justify-content-between align-items-center p-1">
                        <TopHeaderLogoNav/>
                        <TopHeaderLink/>
                    </div>
                </div>
            </div>
        </div>
    )
}