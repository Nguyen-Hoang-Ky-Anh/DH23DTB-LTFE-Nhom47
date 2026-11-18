import {Link} from "react-router-dom";
import type {VideoNavigationItem} from "../../features/video/videoNavigationConfig.ts";

interface VideoNavigationBarProps {
    items: VideoNavigationItem[];
}

export default function VideoNavigationBar({items}: VideoNavigationBarProps) {
    return (
        <div className={'shadow p-2 mb-4'} style={{background: "white"}}>
            <div className="container ">
                <div className={'row'}>
                    <div className={'col px-0 mx-0'}>
                        <ul className="list-unstyled d-flex flex-row mb-0 align-items-center">
                            <div className={'d-flex flex-row align-items-center me-1'}>
                                <div className={'border-end pe-2 me-2'}>
                                    <Link to={"/"} title={'Tuổi trẻ'}>
                                        <img src={'https://static-tuoitre.tuoitre.vn/images/logo-tuoitre-2026-do.svg'}
                                             height={24}
                                             width={"100%"}
                                             alt={"Tuổi trẻ"}/>
                                    </Link>
                                </div>

                                <div>
                                    <Link to={"/video"}>
                                        <p style={{
                                            fontSize: 28,
                                            fontWeight: "bold",
                                            lineHeight: 1.5,
                                            color: "#005bb2"
                                        }}>VIDEO</p>
                                    </Link>
                                </div>
                            </div>

                            <div className={"ms-2 d-flex flex-row justify-content-between gap-3"}>
                                {items.map((item) => {
                                    const isActive = location.pathname === item.href;
                                    return (
                                        <li key={item.href}>
                                            <Link
                                                to={item.href}
                                                className="d-block text-decoration-none"
                                                style={{
                                                    fontSize: "12px",
                                                    fontFamily: "Inter, sans-serif",
                                                    fontWeight: 700,
                                                    backgroundColor: isActive ? "#0a3d7d" : "transparent",
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className={'col d-flex flex-row flex-row justify-content-end'}>
                        <div className={'border-start d-flex ps-3 gap-2'}>
                            <div className="d-inline-flex gap-1 search-bar align-items-center py-0 px-2 search-box">
                                <input
                                    className="search-input-2"
                                    placeholder="Nhập nội dung cần tìm"
                                    autoFocus
                                />

                                <button
                                    type="button"
                                    className="search-btn-2"
                                >
                                    <i className="fa fa-magnifying-glass"></i>
                                </button>
                            </div>

                            <div className={"account-icon"} style={{
                                height: "100%",
                            }}>
                                <Link to={"#"} title={"Đăng nhập"}><i className="fa-solid fa-user"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}