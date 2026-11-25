import {parseNewsDetail} from "./parseNewsDetail.ts";
import {useState} from "react";

export async function fetchNewsDetails(proxyUrl: string) {
    const response = await fetch(proxyUrl);
    if (!response.ok) {
        throw new Error(`Fetch error: ${response.status}`);
    }
    const html = await response.text();
    const doc =  new DOMParser().parseFromString(html, "text/html");
    return parseNewsDetail(doc);
}

export default function useUpdateParagraphSize() {
    const [value, setValue] = useState(17);
    const [direction, setDirection] = useState<"increase" | "decrease">("increase");

    const max = 36;
    const min = 11;

    const increaseValue = () => {
        setValue(prev => {
            if (prev >= max) return prev;
            setDirection("increase");
            return Math.min(prev + 3, max)
        })
    }

    const decreaseValue = () => {
        setValue(prev => {
            if (prev <= min) return prev;
            setDirection("decrease");
            return Math.max(prev - 3, min)
        })
    }

    const resetValue = () => {
        setValue(17)
    }

    return {
        value,
        direction,
        increaseValue,
        decreaseValue,
        resetValue,
    }
}