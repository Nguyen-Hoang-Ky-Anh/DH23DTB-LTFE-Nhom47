import Card from "./Card.tsx";
import HorizontalCard from "./HorizontalCard.tsx";

export default function NewsSectionContent() {
    return (
        <div className="row pt-3 pb-3"
             style={{borderBottom: "1px solid #ddd", borderTop: "1px solid #ddd"}}>
            <div className="col-lg-4">
                <Card
                    image={"https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/30/img6663-1782792726843377818898-0-0-1250-2000-crop-1782792926539360014909.jpeg"}
                    title={"Từ khóa của cuộc đời"}
                    description={"Nếu phải chọn ra những từ khóa để nói về cuộc đời của mình, ..."}
                    feature
                />
            </div>
            <div className="d-flex flex-column col-lg-5 gap-3">
                <HorizontalCard
                    image={"https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/30/z78281231845051eb1a0d66845ad92e3c4cb6b131b76c8-17788238468751965554048-131-0-931-1280-crop-1782828116814710037662.jpg"}
                    title={"Cựu cán bộ xót xa khi mộ con bị di dời: Đà Nẵng giao thanh tra vào cuộc"}/>
                <HorizontalCard
                    image={"https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/30/edit-z7992339568877499231b998076726c71b3bf0df03d1f7-17828152608421126762093-397-0-764-587-crop-17828152724641354640933.jpeg"}
                    title={"Phát hiện thi thể người đàn ông sau khi khống chế vụ cháy rừng"}/>
                <HorizontalCard
                    image={"https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/30/img5731-1772863870862547878690-0-0-1250-2000-crop-1782814107203154883056.jpeg"}
                    title={"Trốn tránh phạt nguội, người vi phạm có thể chịu nhiều chế tài"}/>
            </div>
            <div className="d-flex flex-column col-lg-3 w-25" style={{borderLeft: "1px solid #ddd"}}>
                <h6 className="text-start mb-2"
                    style={{borderBottom: "3px solid #0959ab", width: "fit-content"}}>Xã hội</h6>
                <Card
                    image={"https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/30/z79765648736711493682e017b84e8c923a45a7d9008a9-17824110333181707698926-0-256-1440-2560-crop-17828102076271115402565.jpg"}
                    title={"Miễn phí 134 tuyến xe buýt từ 1 - 7: Hỏi đáp đầy đủ"}
                    description={"(NLĐO) - Từ ngày 1-7, TPHCM miễn phí vé trên 134 tuyến xe buýt. Dưới đây là những câu hỏi, đáp người dân cần biết..."}/>
            </div>
        </div>
    )
}