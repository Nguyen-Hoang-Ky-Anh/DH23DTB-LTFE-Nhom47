import fetchRSS from "./services/rssService.ts"

export default function TestRSS(){
    fetchRSS();
    return (
        <div>
            <h1>test</h1>
        </div>
    )
}