import type {callOutVariant, NewsCallOutLink} from "../../../../config/newsStructure.ts";
import {Link} from "react-router-dom";
import {newsDetailHref} from "../../../../utils/newsDetailURL.ts";

interface SeeNowCardProps {
    variant: callOutVariant;
    liImg?: string[];
    li: NewsCallOutLink[];
}

export default function SeeNowCard({variant, liImg, li}: SeeNowCardProps) {
    switch (variant) {
        case "type-1":
            return (
                <div className="card" style={{
                    width: "100%", fontFamily: "Merriweather, serif",
                    backgroundColor: "#EAEAEA"
                }}>
                    <Link to={newsDetailHref(li[1].src)}>
                        <img className={'w-100'}
                             src={liImg ? liImg[0] : ""}
                             alt={li[0].title}
                        />
                    </Link>
                    <div className=" card-body p-2">
                        <Link to={newsDetailHref(li[1].src)}>
                            <h5 className=" card-title text-start fw-bold" style={{fontSize: 16, lineHeight: "30px"}}>
                                {li[1].title}
                            </h5>
                        </Link>

                        <div className="d-flex justify-content-end mt-2">
                            <Link to={newsDetailHref(li[1].src)}
                                  className="see-now-btn">
                                <span>XEM NGAY</span>
                                <span className="see-now-icon">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        case "type-2":
            return (
                <div className={'see-now-type-2 pt-3'}>
                    <ul className={'d-flex flex-column gap-4'}>
                        {li.map((item, index) =>
                            <li style={{color: "#0959ab"}}>
                                <div className={`${index !== (li.length - 1) ? "border-bottom pb-3" : ""}`}>
                                    <Link to={newsDetailHref(item.src)}
                                          className={`main-title`}>{item.title}</Link>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            );
        case "type-3":
            return (
                <div className="see-now-type-3" style={{
                    width: "100%", fontFamily: "Merriweather, serif",
                }}>
                    <div className="p-2">
                        <Link to={newsDetailHref(li[0].src)}>
                            <p className="see-now-type-3-title text-start fw-bold">
                                {li[0].title}
                            </p>
                        </Link>

                        <div className="d-flex justify-content-end mt-2">
                            <Link to={newsDetailHref(li[0].src)}
                                  className="see-now-type-3-btn">
                                <span>ĐỌC NGAY</span>
                                <span className="see-now-icon">
                                    <i className="fa-solid fa-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        case "type-6":
            return (
                <div>
                    {li && li.map((item, index) => (
                        (index % 2 === 0) && (
                            <div key={index} className={'mb-3'}>
                                <p className="tham-khao-them">Tham khảo thêm</p>
                                <div className="see-now-ref">
                                    <div className="row">
                                        <div className="col-10 align-self-center">
                                            <div className={'main-title ms-2'}>
                                                <Link to={newsDetailHref(item.src)}>
                                                    {item.title} <i
                                                    className="fa-regular fa-clone coppy-icon fa-2xs"></i>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-2">
                                            <Link to={newsDetailHref(item.src)}>
                                                <img style={{width: "100%", height: "100%"}}
                                                     src={liImg?.[Math.floor(index / 2)]}
                                                     alt={item.title}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            )
    }
}