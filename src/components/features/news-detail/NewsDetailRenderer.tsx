import {Fragment, type ReactNode} from "react";
import type {NewsContent} from "../../../config/newsStructure.ts";
import SeeNowCard from "./detail-components/SeeNowCard.tsx";

export default function NewsDetailRenderer({content, size}: { content: NewsContent[], size: number }) {
    const elements: ReactNode[] = [];

    for (let i = 0; i < content.length; i++) {
        const block = content[i];
        const index = block.index;

        let element: ReactNode;

        switch (block.type) {
            case "paragraph":
                element = <p className={'news-detail-paragraph mb-3'} style={{fontSize: size}}>{block.content}</p>;
                break;

            case "image":
                element = (
                    <figure className={'mt-2'}>
                        <img src={block.src} alt={block.caption ?? ""}
                             style={{
                                 width: "100%"
                             }}/>
                        <figcaption className={"news-detail-img-caption"}>{block.caption}</figcaption>
                    </figure>
                );
                break;

            case "callOutUl":
                element = (
                    <aside className="news-callout">
                        <SeeNowCard variant={block.variant} li={block.li} liImg={block.liImg}/>
                    </aside>
                );
                break;

            case "contentWrap":
                element = (
                    <div className="content-wrap">
                        <strong>{block.title}</strong>
                        <p>{block.paragraph}</p>
                    </div>
                );
                break;

            default:
                continue;
        }

        if (elements[index] === undefined) {
            elements[index] = element;
        } else {
            elements[index] = (
                <Fragment>
                    {elements[index]}
                    {element}
                </Fragment>
            );
        }
    }

    return (
        <div className="news-detail-content">
            {elements.map((element, index) => (
                <Fragment key={index}>
                    {element}
                </Fragment>
            ))}
        </div>
    );
}