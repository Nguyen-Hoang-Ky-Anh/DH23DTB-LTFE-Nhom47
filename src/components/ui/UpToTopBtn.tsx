import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store/store.ts";
import {toggleTheme} from "../../store/slice/themeSlice.ts";

export default function UpToTopBtn() {
    const [isVisible, setVisible] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const isDark = useSelector((state: RootState) => state.theme.isDark);

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
        <div className="floating-page-buttons">
            <button
                type="button"
                className="btn btn-outline-secondary floating-page-button theme-toggle-btn"
                title={isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"}
                onClick={() => dispatch(toggleTheme())}
            >
                <i className={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
            </button>
            {isVisible && (
                <button
                    type="button"
                    className="btn btn-outline-secondary floating-page-button up-to-top-btn"
                    title="Về đầu trang"
                    onClick={scrollToTop}
                >
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            )}
        </div>
    );
}