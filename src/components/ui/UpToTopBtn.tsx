import { useEffect, useState } from "react";

export default function UpToTopBtn() {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 100);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            className="btn btn-outline-secondary up-to-top-btn"
            style={{ display: isVisible ? "block" : "none" }}
            onClick={scrollToTop}
        >
            <span className="up-to-top-icon"><i className="fa-solid fa-arrow-up"></i></span>
        </button>
    );
}