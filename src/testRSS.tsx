import fetchRSS from "./services/rssService.ts"

export default function TestRSS(){
    fetchRSS("home");
    return (
        <div>
            <h1>test</h1>
        </div>
    )
}