import FooterNavigationBar from "./FooterNavigationBar.tsx";
import FooterRightContent from "./FooterRightContent.tsx";
import FooterLeftContent from "./FooterLeftContent.tsx";
import FooterCopyRightContent from "./FooterCopyRightContent.tsx";

export default function Footer() {
    return(
        <footer className="d-flex flex-column">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <FooterNavigationBar/>
                <div className="d-flex flex-row align-items-start justify-content-center gap-5 p-4" style={{borderTop: "3px solid #c90009", width: "100vw"}}>
                    <FooterLeftContent/>
                    <FooterRightContent/>
                </div>
                <FooterCopyRightContent/>
            </div>
        </footer>
    )
}