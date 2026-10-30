import CategoryCard from "./CategoryCard";

export default function CategoryLeftOptionItems() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 d-flex flex-column gap-5">
                    <CategoryCard
                        title="Thời sự"
                        categoryItems={["Chính trị", "Xã hội", "Đô thị"]}
                    />

                    <CategoryCard
                        title="Net Zero"
                        categoryItems={["Tin tức & Xu hướng", "Chuyển đổi xanh", "Sống xanh", "Cẩm nang"]}
                    />

                    <CategoryCard
                        title="Pháp luật"
                        categoryItems={["Luật sư của bạn", "Truy nã", "Chuyện pháp đình"]}
                    />

                    <CategoryCard
                        title="AI 365"
                        categoryItems={["Công nghệ số", "Bảo mật", "Mạng xã hội"]}
                    />

                    <CategoryCard
                        title="Địa ốc"
                        categoryItems={["Dự án", "Thị trường", "Nhà đẹp", "Doanh nhân"]}
                    />

                    <CategoryCard
                        title="Khoa học"
                        categoryItems={[]}
                    />

                    <CategoryCard
                        title="Dành cho bạn đọc VIP"
                        categoryItems={["Tiêu điểm quốc tế", "Chuyện thương trường", "Bí quyết cộng sống", "Hồ sơ \"nóng\""]}
                    />
                </div>

                <div className="col-lg-3 col-md-6 d-flex flex-column gap-5">
                    <CategoryCard
                        title="Quốc tế"
                        categoryItems={["Người Việt đó đây", "Hay - lạ", "Vấn đề nóng", "Hồ sơ"]}
                    />

                    <CategoryCard
                        title="Kinh tế"
                        categoryItems={["Kinh doanh", "Tiêu dùng", "Ôtô - Xe - Điện máy", "Bất động sản"]}
                    />

                    <CategoryCard
                        title="Văn hóa - Văn nghệ"
                        categoryItems={["Âm nhạc", "Văn học", "Sân khấu"]}
                    />

                    <CategoryCard
                        title="Du lịch xanh"
                        categoryItems={["Tiêu điểm", "Điểm đến", "Ẩm thực", "Đừng bỏ lỡ"]}
                    />

                    <CategoryCard
                        title="Truy vết mạng xã hội"
                        categoryItems={[]}
                    />

                    <CategoryCard
                        title="Giải mai vàng"
                        categoryItems={[]}
                    />

                    <CategoryCard
                        title="World Cup 2026"
                        categoryItems={[]}
                    />
                </div>

                <div className="col-lg-3 col-md-6 d-flex flex-column gap-5">
                    <CategoryCard
                        title="Lao động"
                        categoryItems={["Công đoàn - Công nhân", "An sinh xã hội", "Chính sách"]}
                    />

                    <CategoryCard
                        title="Sức khỏe"
                        categoryItems={["Chuyển động y học", "Giới tính", "Bác sĩ của bạn", "Khỏe & đẹp"]}
                    />

                    <CategoryCard
                        title="Giải trí"
                        categoryItems={["Hậu trường showbiz", "Chuyện của sao"]}
                    />

                    <CategoryCard
                        title="Phụ nữ"
                        categoryItems={["Khỏe - đẹp", "Tâm sự", "Chuyện của Sao", "Món ngon"]}
                    />

                    <CategoryCard
                        title="Hỏi nóng đáp nhanh"
                        categoryItems={[]}
                    />

                    <CategoryCard
                        title="Vùng miền"
                        categoryItems={[]}
                    />
                </div>

                <div className="col-lg-3 col-md-6 d-flex flex-column gap-5">
                    <CategoryCard
                        title="Bạn đọc"
                        categoryItems={["Cuộc sống nhân ái", "Tôi lên miếng", "Góc ảnh bạn đọc", "Thư bạn đọc"]}
                    />

                    <CategoryCard
                        title="Giáo dục"
                        categoryItems={["Du học", "Tuyển sinh", "Sau bục giảng"]}
                    />

                    <CategoryCard
                        title="Thể thao"
                        categoryItems={["Bóng đá", "Golf", "Hậu trường", "Các môn khác"]}
                    />

                    <CategoryCard
                        title="Gia đình"
                        categoryItems={["Bí quyết làm đẹp", "Cha mẹ và con cái", "Không gian sống"]}
                    />

                    <CategoryCard
                        title="Đời sống"
                        categoryItems={[]}
                    />

                    <CategoryCard
                        title="Người Việt yêu sử Việt"
                        categoryItems={[]}
                    />
                </div>
            </div>
        </div>
    );
}