import { Link } from "react-router-dom";

export default function TopHeaderLogoNav() {
    return (
      <div className="d-flex flex-row px-1 my-2 align-items-center ">
        <Link to="/">
          <img
            src="https://static-tuoitre.tuoitre.vn/images/logo-tuoitre-2026v1.svg"
            alt="Tuổi trẻ VN"
            style={{ borderRight: "1px solid white", paddingRight: "10px" }}
          ></img>
          <img
            src="https://static-tuoitre.tuoitre.vn/tuoitre/images/logo_nld_white.png"
            alt="Người lao động"
            style={{
              borderRight: "1px solid white",
              paddingRight: "15px",
              paddingLeft: "10px",
              width: "150px",
              height: "40px",
            }}
          ></img>
        </Link>
        <p
          className="mb-0 ms-2 justify-content-center"
          style={{ color: "white", fontSize: "14px", fontWeight: "500" }}
        >
          Thứ Ba, 27/10/2026
        </p>
      </div>
    );
}