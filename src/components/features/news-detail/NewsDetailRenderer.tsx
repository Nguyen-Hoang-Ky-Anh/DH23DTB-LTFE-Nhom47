import {createElement, Fragment, type CSSProperties, type ReactNode} from "react";
import type {NewsContent, TextContent} from "../../../config/newsStructure.ts";
import SeeNowCard from "./detail-components/SeeNowCard.tsx";

function renderText(content: TextContent, className?: string, style?: CSSProperties): ReactNode {
    if (typeof content === "string") {
        return content;
    }

    if (content.tag === "br") {
        return <br/>;
    }

    return createElement(
        content.tag,
        {
            className, style, href: content.tag === "a" ? content.href: undefined,
        },
        content.children.map(child =>
            renderText(child)
        )
    );
}

export default function NewsDetailRenderer({content, size}: { content: NewsContent[], size: number }) {
    const elements: ReactNode[] = [];

    for (let i = 0; i < content.length; i++) {
        const block = content[i];
        const index = block.index;

        let element: ReactNode;

        switch (block.type) {
            case "text":
                element = renderText(block.content, "news-detail-text mb-3",
                    {fontSize: typeof block.content !== "string" && block.content.tag === "p" ?
                    size : undefined});
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
                    <SeeNowCard variant={block.variant} li={block.li} liImg={block.liImg}/>
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
            case "table":
                element = (
                    <div className="table-responsive">
                        {renderText(block.content,"table table-bordered")}
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