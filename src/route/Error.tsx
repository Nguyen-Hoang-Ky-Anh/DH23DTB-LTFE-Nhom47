import { isRouteErrorResponse, Link, useRouteError} from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    
    let status = -1

    if (isRouteErrorResponse(error)) {
     status =  error.status;
    }


    return (
        <div className="container text-center my-5 py-5">
            <p className="fs-1 fw-bold text-primary mb-3">{status}</p>
            <h1 className="fw-bold my-3" style={{fontSize: 28, lineHeight: 1.4, letterSpacing: "normal", color:'black'}}>
                 "Không tìm thấy trang"
            </h1>

            <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/" className="btn btn-primary">Về trang chủ</Link>
                <button className="btn btn-outline-secondary" onClick={() => window.location.reload()}>
                    Tải lại trang
                </button>
            </div>
        </div>
    );
}
