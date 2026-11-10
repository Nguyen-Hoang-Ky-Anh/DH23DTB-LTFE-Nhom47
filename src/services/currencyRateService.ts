export interface ExchangeRate {
    buy: number;
    sell: number;
}

const parser = new DOMParser();
export default async function getVNDBidAsk(targetCode: string): Promise<ExchangeRate> {
    const response = await fetch("/vcb-api/Usercontrols/TVPortal.TyGia/pXML.aspx");

    if(!response.ok) {
        throw new Error("ExchangeRateAPI Error: " + response.status);
    }

    const xml = await response.text();
    const doc = parser.parseFromString(xml, "text/xml");

    const currencyList = Array.from(doc.querySelectorAll('Exrate'));
    const target = currencyList.find(exrate =>
        exrate.getAttribute("CurrencyCode") === targetCode
    )

    if(!target) {
        throw new Error("Not found: " + targetCode);
    }

    return {
        buy : Number(target.getAttribute("Buy")?.replace(/,/g, "")),
        sell : Number(target.getAttribute("Sell")?.replace(/,/g, ""))
    };
}
