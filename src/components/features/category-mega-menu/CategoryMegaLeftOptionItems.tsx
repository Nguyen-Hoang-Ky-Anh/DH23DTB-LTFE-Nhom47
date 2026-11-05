import CategoryMegaMenuCard from "./CategoryMegaMenuCard.tsx";

export default function CategoryMegaLeftOptionItems() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 d-flex flex-column gap-5">
                    <CategoryMegaMenuCard
                        title="Thời sự"
                        categoryItems={["Chính trị", "Xã hội", "Đô thị"]}
                    />

                    <CategoryMegaMenuCard
                        title="Net Zero"
                        categoryItems={["Tin tức & Xu hướng", "Chuyển đổi xanh", "Sống xanh", "Cẩm nang"]}
                    />

                    <CategoryMegaMenuCard
                        title="Pháp luật"
                        categoryItems={["Luật sư của bạn", "Truy nã", "Chuyện pháp đình"]}
                    />

                    <CategoryMegaMenuCard
                        title="AI 365"
                        categoryItems={["Công nghệ số", "Bảo mật", "Mạng xã hội"]}
                    />

                    <CategoryMegaMenuCard
                        title="Địa ốc"
                        categoryItems={["Dự án", "Thị trường", "Nhà đẹp", "Doanh nhân"]}
                    />

                    <CategoryMegaMenuCard
                        title="Khoa học"
                        categoryItems={[]}
                    />

                    <CategoryMegaMenuCard
                        title="Dành cho bạn đọc VIP"
                        categoryItems={["Tiêu điểm quốc tế", "Chuyện thương trường", "Bí quyết cuộc sống", "Hồ sơ \"nóng\""]}
                    />
                </div>

                <div className="col-lg-3 col-md-6 d-flex flex-column gap-5">
                    <CategoryMegaMenuCard
                        title="Quốc tế"
                        categoryItems={["Người Việt đó đây", "Hay - lạ", "Vấn đề nóng", "Hồ sơ"]}
                    />

                    <CategoryMegaMenuCard
                        title="Kinh tế"
                        categoryItems={["Kinh doanh", "Tiêu dùng", "Ôtô - Xe - Điện máy", "Bất động sản"]}
                    />

                    <CategoryMegaMenuCard
                        title="Văn hóa - Văn nghệ"
                        categoryItems={["Âm nhạc", "Văn học", "Sân khấu"]}
                    />

                    <CategoryMegaMenuCard
                        title="Du lịch xanh"
                        categoryItems={["Tiêu điểm", "Điểm đến", "Ẩm thực", "Đừng bỏ lỡ"]}
                    />

                    <CategoryMegaMenuCard
                        title="Truy vết mạng xã hội"
                        categoryItems={[]}
                    />

                    <CategoryMegaMenuCard
                        title="Giải mai vàng"
                        categoryItems={[]}
                    />

                    <CategoryMegaMenuCard
                        title="World Cup 2026"
                        categoryItems={[]}
                    />
                </div>

                <div className="col-lg-3 col-md-6 d-flex flex-column gap-5">
                    <CategoryMegaMenuCard
                        title="Lao động"
                        categoryItems={["Công đoàn - Công nhân", "An sinh xã hội", "Chính sách"]}
                    />

                    <CategoryMegaMenuCard
                        title="Sức khỏe"
                        categoryItems={["Chuyển động y học", "Giới tính", "Bác sĩ của bạn", "Khỏe & đẹp"]}
                    />

                    <CategoryMegaMenuCard
                        title="Giải trí"
                        categoryItems={["Hậu trường showbiz", "Chuyện của sao"]}
                    />

                    <CategoryMegaMenuCard
                        title="Phụ nữ"
                        categoryItems={["Khỏe - đẹp", "Tâm sự", "Chuyện của Sao", "Món ngon"]}
                    />

                    <CategoryMegaMenuCard
                        title="Hỏi nóng đáp nhanh"
                        categoryItems={[]}
                    />

                    <CategoryMegaMenuCard
                        title="Vùng miền"
                        categoryItems={[]}
                    />
                </div>

                <div className="col-lg-3 col-md-6 d-flex flex-column gap-5">
                    <CategoryMegaMenuCard
                        title="Bạn đọc"
                        categoryItems={["Cuộc sống nhân ái", "Tôi lên tiếng", "Góc ảnh bạn đọc", "Thư bạn đọc"]}
                    />

                    <CategoryMegaMenuCard
                        title="Giáo dục"
                        categoryItems={["Du học", "Tuyển sinh", "Sau bục giảng"]}
                    />

                    <CategoryMegaMenuCard
                        title="Thể thao"
                        categoryItems={["Bóng đá", "Golf", "Hậu trường", "Các môn khác"]}
                    />

                    <CategoryMegaMenuCard
                        title="Gia đình"
                        categoryItems={["Bí quyết làm đẹp", "Cha mẹ và con cái", "Không gian sống"]}
                    />

                    <CategoryMegaMenuCard
                        title="Đời sống"
                        categoryItems={[]}
                    />

                    <CategoryMegaMenuCard
                        title="Người Việt yêu sử Việt"
                        categoryItems={[]}
                    />
                </div>
            </div>
        </div>
    );
}
