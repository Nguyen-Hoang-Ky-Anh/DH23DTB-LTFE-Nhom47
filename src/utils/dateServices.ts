export function formatDate(date: Date, time?: boolean){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    if(!time) {
        return `${year}-${month}-${day}`;
    } else {
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const GTM = getGTM(date);

        return `${year}-${month}-${day} ${hours}:${minutes} ${GTM}`;
    }
}

function getGTM(date: Date) {
    const offset = date.getTimezoneOffset();

    const GTM = -offset / 60;
    return String(`GTM${GTM > 0? "+" : "-"}${GTM}`);

}

export function soccerVNDateFormat(date: Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth()+1).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");

    return day + "/" + month + " lúc " + hour + ":" + minute;
}