import type {callOutVariant, NewsCallOutLink} from "../../../../config/newsStructure.ts";
import {Link} from "react-router-dom";
import {newsDetailHref} from "../../../../utils/newsDetailURL.ts";

interface SeeNowCardProps {
    variant: callOutVariant;
    liImg?: string;
    li: NewsCallOutLink[];
}

export default function SeeNowCard({variant, liImg, li}: SeeNowCardProps) {
    if (variant === 'type-1') {
        return (
            <div className="card" style={{
                width: "100%", fontFamily: "Merriweather, serif",
                backgroundColor: "#EAEAEA"
            }}>
                <Link to={newsDetailHref(li[1].src)}>
                    <img className={'w-100'}
                        src={liImg}
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
    }
}