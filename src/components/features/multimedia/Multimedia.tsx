import MultimediaHeader from "./MultimediaHeader.tsx";
import {MultimediaContent} from "./MultimediaContent.tsx";

export default function Multimedia() {
    return (
        <section style={{
            minHeight: "400px",
            background: "url(https://static.mediacdn.vn/nld.com.vn/images/bg-multi.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
            <div className="container">
                <MultimediaHeader/>
                <MultimediaContent/>
            </div>
        </section>
    )
}