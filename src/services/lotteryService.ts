export type VietLottType = "mega" | "power";


export interface VietLottPrize {
    prize: string;
    match: string;
    count: number;
    value: string;
}

export interface VietLott {
    date: string;
    title: string;
    day: string;
    type: string;
    data: {
        jackpot: string;
        jackpot2?: string;
        numbers: string[];
        prizes: VietLottPrize[];
    };
    cityName: string;
}

interface VietLottAPIResponse {
    data: VietLott[] | null;
}

export default async function getVietLott(type: VietLottType): Promise<VietLott | null> {
    const url = `https://api.xosovnm.net/api/vietlott/${type}?limit=1`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`VietLott API Error: ${response.status}`);
    }

    const raw: VietLottAPIResponse = await response.json();

    if (!raw.data || raw.data.length === 0) {
        return null;
    }

    return raw.data[0];
}