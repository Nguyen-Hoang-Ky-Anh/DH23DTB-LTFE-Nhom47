import CategoryHeader from "./features/category/CategoryHeader.tsx";
import CategoryContent from "./features/category/CategoryContent.tsx";
import {useParams} from "react-router-dom";
import {SECTIONS} from "../config/newsSectionConfig.ts";
import Error from "../route/Error.tsx";

export default function CategoryPage() {
    // Lấy params trên web (Ví dụ: /thoi-su/chinh-tri) trong đó thoi-su là category, chinh-tri là subCategory
    const {category, subcategory} = useParams();

    if (!category)  return <Error/>;

    // Xác định SECTIONS mà mình muốn tìm là gì
    const sectionPath = `/${category}`;

    // Xác định đường dẫn hiện tại: Kiểm tra xem có subCategory không, nếu không thì trả về luôn sectionPath là dường
    // dẫn chỉ có mỗi category
    const currentPath = subcategory ? `/${category}/${subcategory}` : sectionPath;

    // Vào trong values của SECTIONS tìm (find()) xem là có section nào có đường dẫn khớp với lại đường dẫn
    // của sectionPath hiện tại không ? (VD: sectionPath = '/thoi-su', hàm sẽ tìm trong tất cả thành phần trong SECTIONS
    // và tìm ra được section thoiSu là nơi chứa '/thoi-su')
    const currentSection = Object.values(SECTIONS).find(
        section => section.href === sectionPath
    );

    if (!currentSection) return <Error/>;

    // Dàn đều tất cả các links mà có trong section vừa tìm được thành 1 mảng allLinks
    const allLinks = [...currentSection.links, ...currentSection.moreLinks]

    // Tìm trong allLinks để kiểm tra xem là có link nào có href khớp với lại currentPath hiện tại
    const matchedLink = allLinks.find(link => link.href === currentPath)

    if (subcategory && !matchedLink) return <Error />;

    const currentFeed = subcategory
        ? matchedLink!.feed
        : currentSection.feed;

    return (
        <>
            <main className="flex-grow-1">
                <CategoryHeader section={currentSection}/>
                <CategoryContent feed={currentFeed} isWorldCup={currentSection.feed === "WorldCup2026"}/>
            </main>
        </>
    )
}
