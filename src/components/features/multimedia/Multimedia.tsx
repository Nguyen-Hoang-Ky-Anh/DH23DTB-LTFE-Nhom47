import Card from "../../ui/Card.tsx";

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
                <div className="d-flex align-items-center justify-content-between w-100" style={{paddingTop: "40px", paddingBottom: "40px"}}>
                    <div className="multimedia-title-container">
                        <p className="fw-bold" style={{color: "white"}}>MULTIMEDIA</p>
                    </div>
                    <div className="d-flex multimedia-options-container align-items-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item multimedia-option" style={{color: "white"}}><i
                                className="fa fa-video multimedia-icon"></i> Video
                            </li>
                            <li className="list-inline-item multimedia-option" style={{color: "white"}}><i
                                className="fa fa-photo-film multimedia-icon"></i> Photo
                            </li>
                            <li className="list-inline-item multimedia-option" style={{color: "white"}}><i
                                className="fa fa-newspaper multimedia-icon"></i> Longform
                            </li>
                            <li className="list-inline-item multimedia-option" style={{color: "white"}}><i
                                className="fa fa-chart-column multimedia-icon"></i> Infographic
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row g-4 text-white pb-5">
                    <div className="col-12 col-lg-4">
                        <Card
                            image={"https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/29/covermoi-17827273420151847590979-0-0-1600-2560-crop-1782734752711336860096.png"}
                            title={"MEGA STORY: Điều còn lại - Hành trình 51 năm của Báo Người Lao Động (1975-2026)"}
                            description={"(NLĐO) - Một tờ báo có thể khép lại hành trình của mình nhưng những giá trị mà tờ báo góp phần tạo dựng cho xã hội sẽ còn ở lại"}
                            feature/>
                    </div>

                    <div className="col-12 col-lg-8">
                        <div className="row g-4">
                            <div className="col-12 col-lg-4 col-sm-6">
                                <Card
                                    image={"https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/30/n-bay-thu-hai-van-chuyen-hang-hoa-ho-tro-cua-viet-nam-toi-venezuela-nham-giup-do-nuoc-ban-vuot-qua-tham-hoa-dong-dat-178278-57-0-1657-2560-crop-1782784592202820797981.jpg"}
                                    title={"Chuyến bay đặc biệt thứ hai từ Việt Nam tới Venezuela"}/>
                            </div>
                            <div className="col-12 col-lg-4 col-sm-6">
                                <Card
                                    image={"https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/29/bia-30-6-2026-17827486228422113875852-8-0-624-986-crop-17827486482752069849836.png"}
                                    title={"Báo in ngày 30-6: Những điều còn lại sau một tờ báo"}/>
                            </div>
                            <div className="col-12 col-lg-4 col-sm-6">
                                <Card
                                    image={"https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/28/dsc3331-1782611226498334312533-94-0-1694-2560-crop-1782612051617209849937.jpg"}
                                    title={"Khám phá trang trại nuôi chồn hương đặc biệt ở TP Đồng Nai"}/>
                            </div>
                            <div className="col-12 col-lg-4 col-sm-6">
                                <Card
                                    image={"https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/27/vlcsnap-2026-06-26-13h30m54s831-178255081670887815549-340-0-790-720-crop-17825510442191864636461.png"}
                                    title={"Diễn biến mới vụ clip trúng độc đắc xổ số miền Nam gây “bão” mạng xã hội"}/>
                            </div>
                            <div className="col-12 col-lg-4 col-sm-6">
                                <Card
                                    image={"https://tse2.mm.bing.net/th/id/OIP.dVdxpDE0kw__xCip0E-YTgAAAA?r=0&pid=Api&h=220&P=0"}
                                    title={"VIDEO: Thánh đường Tắc Sậy trước lễ Tuyên phong Chân phước linh mục Phanxicô Xaviê Trương Bửu Diệp"}/>
                            </div>
                            <div className="col-12 col-lg-4 col-sm-6">
                                <Card
                                    image={"https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/26/non-la-1782455949613371909120-74-0-880-1290-crop-17824561043221155653294.jpg"}
                                    title={"Đồng diễn dân vũ thể thao chào mừng 50 năm thành phố mang tên Bác"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}