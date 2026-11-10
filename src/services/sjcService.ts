export interface GoldPrice {
    buy: number;
    sell: number;
}

interface GoldAPIResponse {
    success: boolean;
    timestamp: number;
    time: string;
    date: string;
    type: string;
    name: string;
    buy: number;
    sell: number;
    change_buy: number;
    change_sell: number;
}

export default async function getSJCBidAsk(targetCode: string): Promise<GoldPrice> {
    const url = `https://www.vang.today/api/prices?type=${encodeURIComponent(targetCode)}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Gold API Error: ${response.status}`);
    }

    const result: GoldAPIResponse = await response.json();

    if (!result.success) {
        throw new Error("Không thể lấy dữ liệu");
    }

    if (result.type !== targetCode) {
        throw new Error(`Không tìm thấy ${targetCode}`);
    }

    if (!Number.isFinite(result.buy) || !Number.isFinite(result.sell)) {
        throw new Error("Dữ liệu không hợp lệ");
    }

    return { buy: result.buy, sell: result.sell };
}