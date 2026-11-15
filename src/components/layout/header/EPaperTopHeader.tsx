import {Link} from "react-router-dom";

interface EPaperTopHeaderProps {
    hotline: string;
}

export default function EPaperTopHeader({ hotline }: EPaperTopHeaderProps) {
    return (
        <div style={{ backgroundColor: "white" }}>
            <div className="container">
                <div className="d-flex flex-row justify-content-between align-items-center py-3">
                    <div className="d-flex flex-row align-items-center">
                        <Link to={"/"}>
                            <img
                                src="https://static-tuoitre.tuoitre.vn/images/logo-tuoitre-2026-do.svg"
                                alt="Tuổi trẻ"
                                style={{ height: "55px", paddingRight: "15px", borderRight: "1px solid #e0e0e0" }}
                            />
                        </Link>
                        <Link to="/e-paper" className="d-flex flex-row align-items-center text-decoration-none">
                            <span
                                style={{
                                    marginLeft: "22px",
                                    color: "#0c4fa1",
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    fontFamily: "Georgia, 'Times New Roman', serif",
                                }}
                            >
                                E-PAPER
                            </span>
                        </Link>
                    </div>
                    <div className="d-flex flex-row align-items-center gap-3">
                        <a
                            href="#"
                            className="d-flex flex-row align-items-center gap-3 text-decoration-none"
                            style={{
                                backgroundColor: "#fdecec",
                                borderRadius: "30px",
                                padding: "8px 16px 8px 8px",
                                color: "black",
                                fontSize: "18px",
                            }}
                        >
                            <span
                                className="d-flex align-items-center justify-content-center"
                                style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#fff6f6", color: "#e30613" }}
                            >
                                <i className="fa-solid fa-phone"></i>
                            </span>
                            {hotline}
                        </a>

                        <div className="d-flex align-items-center justify-content-center"
                            style={{
                                width: "38px",
                                height: "38px",
                                borderRadius: "50%",
                                border: "1px solid #8bb8f0",
                                color: "#3b8be8",
                                cursor: "pointer",
                            }}
                        >
                            <i className="fa-solid fa-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}