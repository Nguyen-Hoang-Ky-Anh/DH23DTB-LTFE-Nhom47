import type {RelativeBox} from "../../../../config/newsStructure.ts";
import {Link} from "react-router-dom";

export interface NewsDetailRelatedProps {
    relativeBox: RelativeBox;
}

export default function NewsDetailRelated({relativeBox}: NewsDetailRelatedProps) {
    return (
        <div className={'relative-box border rounded p-2'}>
            <div className={`relative-box-title border-bottom pb-2 mb-3`}>
                Tin liên quan
            </div>
            <div className={`first-related ${relativeBox.relatedLinks[2] && 'border-bottom'} pb-3 mb-3`}>
                <div className={'row'}>
                    <div className={'col-4 justify-content-between align-items-center'}>
                        <Link
                            to={`/news-detail?${new URLSearchParams({url: relativeBox.relatedLinks[0].src}).toString()}`}>
                            <img src={relativeBox.firstRelatedImg} alt={relativeBox.relatedLinks[0].title}
                                 className={'first-related-img'}
                            />
                        </Link>
                    </div>
                    <div className={'col-8'}>
                        <div className={'d-flex flex-column justify-content-between gap-2'}>
                            <Link
                                to={`/news-detail?${new URLSearchParams({url: relativeBox.relatedLinks[1].src}).toString()}`}>
                                <p className={'related-title'}>{relativeBox.relatedLinks[1].title}</p>
                            </Link>
                            <p className={'first-related-description'}>{relativeBox.firstRelatedDescription}</p>
                        </div>
                    </div>
                </div>
            </div>

            {relativeBox.relatedLinks[2] && (
                <div className={'second-related border-bottom pb-3 mb-3 px-0 '}>
                    <ul className={'m-0'}>
                        <li>
                            <Link
                                to={`/news-detail?${new URLSearchParams({url: relativeBox.relatedLinks[2].src}).toString()}`}
                                title={relativeBox.relatedLinks[2].title}
                            >
                                <p className={'related-title'}>{relativeBox.relatedLinks[2].title}</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            {relativeBox.relatedLinks[3] && (
                <div className={'third-related px-0 mb-2'}>
                    <ul className={'m-0'}>
                        <li>
                            <Link
                                to={`/news-detail?${new URLSearchParams({url: relativeBox.relatedLinks[3].src}).toString()}`}
                                title={relativeBox.relatedLinks[3].title}
                            >
                                <p className={'related-title'}>{relativeBox.relatedLinks[3].title}</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

        </div>
    )
}