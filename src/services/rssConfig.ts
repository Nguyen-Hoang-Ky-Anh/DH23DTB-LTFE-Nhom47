export interface RSSFeed {
    title: string;
    feed: string;
}

export interface RSSCategory extends RSSFeed {
    children: Record<string, RSSFeed>;
    extraChildren: Record<string, RSSFeed>;
}

export const RSS_FEEDS = {
    categories: {
        thoiSu: {
            title: "Thời sự",
            feed: "thoi-su",
            children: {
                chinhTri: {title: "Chính trị", feed: "nld/thoi-su/chinh-tri"},
                xaHoi: {title: "Xã hội", feed: "nld/thoi-su/xa-hoi"},
                doThi: {title: "Đô thị", feed: "nld/thoi-su/do-thi"},
            },
            extraChildren: {
                chuyenThuongNgayOPhuongXa: {title: "Chuyện thường ngày ở phường, xã", feed: "nld/thoi-su/chuyen-thuong-ngay-o-phuong-xa"},
            },
        },
        quocTe: {
            title: "Quốc tế",
            feed: "quoc-te",
            children: {
                nguoiVietDoDay: {title: "Người Việt đó đây", feed: "nld/quoc-te/nguoi-viet-do-day"},
                hayLa: {title: "Hay - lạ", feed: "nld/quoc-te/hay-la"},
                vanDeNong: {title: "Vấn đề nóng", feed: "nld/quoc-te/van-de-nong"},
                hoSo: {title: "Hồ sơ", feed: "nld/quoc-te/ho-so"},
            },
            extraChildren: {
                quanSuQuocPhong: {title: "Quân sự - Quốc phòng", feed: "nld/quoc-te/quan-su-quoc-phong"},
            },
        },
        laoDong: {
            title: "Lao động",
            feed: "lao-dong",
            children: {
                congDoanCongNhan: {title: "Công đoàn - Công nhân", feed: "nld/lao-dong/cong-doan-cong-nhan"},
                anSinhXaHoi: {title: "An sinh xã hội", feed: "nld/lao-dong/an-sinh-xa-hoi"},
                chinhSach: {title: "Chính sách", feed: "nld/lao-dong/chinh-sach"},
            },
            extraChildren: {
                viecLam: {title: "Việc làm", feed: "nld/lao-dong/viec-lam"},
                xuatKhauLaoDong: {title: "Xuất khẩu lao động", feed: "nld/lao-dong/xuat-khau-lao-dong"},
            },
        },
        banDoc: {
            title: "Bạn đọc",
            feed: "ban-doc",
            children: {
                cuocSongNhanAi: {title: "Cuộc sống nhân ái", feed: "nld/ban-doc/cuoc-song-nhan-ai"},
                toiLenTieng: {title: "Tôi lên tiếng", feed: "nld/ban-doc/toi-len-tieng"},
                gocAnhBanDoc: {title: "Góc ảnh bạn đọc", feed: "nld/ban-doc/goc-anh-ban-doc"},
                thuBanDoc: {title: "Thư bạn đọc", feed: "nld/ban-doc/thu-ban-doc"},
            },
            extraChildren: {
                nhungCauChuyenNho: {title: "Những câu chuyện nhỏ", feed: "nld/ban-doc/nhung-cau-chuyen-nho"},
                nhaOXaHoi: {title: "Nhà ở xã hội", feed: "nld/ban-doc/nha-o-xa-hoi"},
            },
        },
        netZero: {
            title: "Net Zero",
            feed: "net-zero",
            children: {
                tinTucXuHuong: {title: "Tin tức & Xu hướng", feed: "nld/net-zero/tin-tuc-xu-huong"},
                chuyenDoiXanh: {title: "Chuyển đổi xanh", feed: "nld/net-zero/chuyen-doi-xanh"},
                songXanh: {title: "Sống xanh", feed: "nld/net-zero/song-xanh"},
                camNang: {title: "Cẩm nang", feed: "nld/net-zero/cam-nang"},
            },
            extraChildren: {},
        },
        kinhTe: {
            title: "Kinh tế",
            feed: "kinh-te",
            children: {
                kinhDoanh: {title: "Kinh doanh", feed: "nld/kinh-te/kinh-doanh"},
                tieuDung: {title: "Tiêu dùng", feed: "nld/kinh-te/tieu-dung"},
                otoXeDienMay: {title: "Ôtô - Xe - Điện máy", feed: "nld/kinh-te/oto-xe-dien-may"},
                batDongSan: {title: "Bất động sản", feed: "nld/kinh-te/bat-dong-san"},
            },
            extraChildren: {
                taiChinhChungKhoan: {title: "Tài chính – Chứng khoán", feed: "nld/kinh-te/tai-chinh-chung-khoan"},
                dienDanKinhTe: {title: "Diễn đàn kinh tế", feed: "nld/kinh-te/dien-dan-kinh-te"},
            },
        },
        sucKhoe: {
            title: "Sức khỏe",
            feed: "suc-khoe",
            children: {
                chuyenDongYHoc: {title: "Chuyển động y học", feed: "nld/suc-khoe/chuyen-dong-y-hoc"},
                gioiTinh: {title: "Giới tính", feed: "nld/suc-khoe/gioi-tinh"},
                bacSiCuaBan: {title: "Bác sĩ của bạn", feed: "nld/suc-khoe/bac-si-cua-ban"},
                khoeVaDep: {title: "Khỏe & đẹp", feed: "nld/suc-khoe/khoe-va-dep"},
            },
            extraChildren: {},
        },
        giaoDuc: {
            title: "Giáo dục",
            feed: "giao-duc-khoa-hoc",
            children: {
                duHoc: {title: "Du học", feed: "nld/giao-duc-khoa-hoc/du-hoc"},
                tuyenSinh: {title: "Tuyển sinh", feed: "nld/giao-duc-khoa-hoc/tuyen-sinh"},
                sauBucGiang: {title: "Sau bục giảng", feed: "nld/giao-duc-khoa-hoc/sau-buc-giang"},
            },
            extraChildren: {},
        },
        phapLuat: {
            title: "Pháp luật",
            feed: "phap-luat",
            children: {
                luatSuCuaBan: {title: "Luật sư của bạn", feed: "nld/phap-luat/luat-su-cua-ban"},
                truyNa: {title: "Truy nã", feed: "nld/phap-luat/truy-na"},
                chuyenPhapDinh: {title: "Chuyện pháp đình", feed: "nld/phap-luat/chuyen-phap-dinh"},
            },
            extraChildren: {},
        },
        vanHoaVanNghe: {
            title: "Văn hóa - Văn nghệ",
            feed: "van-hoa-van-nghe",
            children: {
                amNhac: {title: "Âm nhạc", feed: "nld/van-hoa-van-nghe/am-nhac"},
                vanHoc: {title: "Văn học", feed: "nld/van-hoa-van-nghe/van-hoc"},
                sanKhau: {title: "Sân khấu", feed: "nld/van-hoa-van-nghe/san-khau"},
            },
            extraChildren: {
                dienAnh: {title: "Điện ảnh", feed: "nld/van-hoa-van-nghe/dien-anh"},
                ngheXemDocGi: {title: "Nghe - Xem – Đọc gì?", feed: "nld/van-hoa-van-nghe/nghe-xem-doc-gi"},
            },
        },
        giaiTri: {
            title: "Giải trí",
            feed: "giai-tri",
            children: {
                hauTruongShowbiz: {title: "Hậu trường showbiz", feed: "nld/giai-tri/hau-truong-showbiz"},
                chuyenCuaSao: {title: "Chuyện của sao", feed: "nld/giai-tri/chuyen-cua-sao"},
            },
            extraChildren: {},
        },
        theThao: {
            title: "Thể thao",
            feed: "the-thao",
            children: {
                bongDa: {title: "Bóng đá", feed: "nld/the-thao/bong-da"},
                golf: {title: "Golf", feed: "nld/the-thao/golf"},
                hauTruong: {title: "Hậu trường", feed: "nld/the-thao/hau-truong"},
                cacMonKhac: {title: "Các môn khác", feed: "nld/the-thao/cac-mon-khac"},
            },
            extraChildren: {
                tennis: {title: "Tennis", feed: "nld/the-thao/tennis"},
                marathon: {title: "Marathon", feed: "nld/the-thao/marathon"},
            },
        },
        ai365: {
            title: "AI 365",
            feed: "ai-365",
            children: {
                congNgheSo: {title: "Công nghệ số", feed: "nld/ai-365/cong-nghe-so"},
                baoMat: {title: "Bảo mật", feed: "nld/ai-365/bao-mat"},
                mangXaHoi: {title: "Mạng xã hội", feed: "nld/ai-365/mang-xa-hoi"},
            },
            extraChildren: {
                giaiTriCungAi: {title: "Giải trí cùng AI", feed: "nld/ai-365/giai-tri-cung-ai"},
            },
        },
        duLichXanh: {
            title: "Du lịch xanh",
            feed: "du-lich-xanh",
            children: {
                tieuDiem: {title: "Tiêu điểm", feed: "nld/du-lich-xanh/tieu-diem"},
                diemDen: {title: "Điểm đến", feed: "nld/du-lich-xanh/diem-den"},
                amThuc: {title: "Ẩm thực", feed: "nld/du-lich-xanh/am-thuc"},
                dungBoLo: {title: "Đừng bỏ lỡ", feed: "nld/du-lich-xanh/dung-bo-lo"},
            },
            extraChildren: {},
        },
        phuNu: {
            title: "Phụ nữ",
            feed: "chuyen-trang-phu-nu",
            children: {
                lamDep: {title: "Khỏe - đẹp", feed: "nld/chuyen-trang-phu-nu/lam-dep"},
                tamSu: {title: "Tâm sự", feed: "nld/chuyen-trang-phu-nu/tam-su"},
                chuyenCuaSao: {title: "Chuyện của Sao", feed: "nld/chuyen-trang-phu-nu/chuyen-cua-sao"},
                monNgon: {title: "Món ngon", feed: "nld/chuyen-trang-phu-nu/mon-ngon"},
            },
            extraChildren: {
                diemDen: {title: "Điểm đến", feed: "nld/chuyen-trang-phu-nu/diem-den"},
                tieuDungThongMinh: {title: "Tiêu dùng thông minh", feed: "nld/chuyen-trang-phu-nu/tieu-dung-thong-minh"},
                videoClip: {title: "Video", feed: "nld/chuyen-trang-phu-nu/video-clip"},
                banLinhSong: {title: "Bản lĩnh sống", feed: "nld/chuyen-trang-phu-nu/ban-linh-song"},
            },
        },
        giaDinh: {
            title: "Gia đình",
            feed: "gia-dinh",
            children: {
                biQuyetLamDep: {title: "Bí quyết làm đẹp", feed: "nld/gia-dinh/bi-quyet-lam-dep"},
                chaMeVaConCai: {title: "Cha mẹ và con cái", feed: "nld/gia-dinh/cha-me-va-con-cai"},
                khongGianSong: {title: "Không gian sống", feed: "nld/gia-dinh/khong-gian-song"},
            },
            extraChildren: {},
        },
        diaOc: {
            title: "Địa ốc",
            feed: "dia-oc",
            children: {
                duAn: {title: "Dự án", feed: "nld/dia-oc/du-an"},
                thiTruongNhaDat: {title: "Thị trường", feed: "nld/dia-oc/thi-truong-nha-dat"},
                nhaDep: {title: "Nhà đẹp", feed: "nld/dia-oc/nha-dep"},
                doanhNghiepDoanhNhan: {title: "Doanh nhân", feed: "nld/dia-oc/doanh-nghiep-doanh-nhan"},
            },
            extraChildren: {
                taiChinhBds: {title: "Tài chính", feed: "nld/dia-oc/tai-chinh-bds"},
                tuVan: {title: "Tư vấn", feed: "nld/dia-oc/tu-van"},
                soHoa: {title: "Số hóa", feed: "nld/dia-oc/so-hoa"},
                vatTu: {title: "Vật tư", feed: "nld/dia-oc/vat-tu"},
            },
        },
        truyVetMXH: {
            title: "Truy vết mạng xã hội",
            feed: "truy-vet-mang-xa-hoi",
            children: {},
            extraChildren: {},
        },
        hoiNongDapNhanh: {
            title: "Hỏi nóng đáp nhanh",
            feed: "hoi-nong-dap-nhanh",
            children: {},
            extraChildren: {},
        },
        doiSong: {
            title: "Đời sống",
            feed: "doi-song",
            children: {},
            extraChildren: {},
        },
        khoaHoc: {
            title: "Khoa học",
            feed: "khoa-hoc",
            children: {},
            extraChildren: {},
        },
        maiVang: {
            title: "Giải mai vàng",
            feed: "mai-vang",
            children: {},
            extraChildren: {
                tinTuc: {title: "Tin tức", feed: "nld/mai-vang/tin-tuc"},
                guongMatUngVien: {title: "Gương mặt ứng viên", feed: "nld/mai-vang/guong-mat-ung-vien"},
                guongMatUngVien2023: {title: "Gương mặt ứng viên 2023", feed: "nld/mai-vang/guong-mat-ung-vien-2023"},
                maiVangKetNoi: {title: "Mai vàng kết nối", feed: "nld/mai-vang/mai-vang-ket-noi"},
                albumAnh: {title: "Album ảnh", feed: "nld/mai-vang/album-anh"},
                video: {title: "Video", feed: "nld/mai-vang/video"},
                lichSu: {title: "Lịch sử", feed: "nld/mai-vang/lich-su"},
                hangMuc: {title: "Hạng mục", feed: "nld/mai-vang/hang-muc"},
            },
        },
        vungMien: {
            title: "Vùng miền",
            feed: "vung-mien",
            children: {},
            extraChildren: {
                dongBangKetNoi: {title: "Đồng bằng kết nối", feed: "nld/vung-mien/dong-bang-ket-noi"},
                mienTrungTayNguyen: {title: "Miền Trung - Tây Nguyên", feed: "nld/vung-mien/mien-trung-tay-nguyen"},
                haNoi: {title: "Hà Nội", feed: "nld/vung-mien/ha-noi"},
                dongNamBo: {title: "Đông Nam Bộ", feed: "nld/vung-mien/dong-nam-bo"},
            },
        },
        vip: {
            title: "Dành cho bạn đọc VIP",
            feed: "danh-cho-ban-doc-vip",
            children: {
                tieuDiemQuocTe: {title: "Tiêu điểm quốc tế", feed: "nld/danh-cho-ban-doc-vip/tieu-diem-quoc-te"},
                chuyenThuongTruong: {title: "Chuyện thương trường", feed: "nld/danh-cho-ban-doc-vip/chuyen-thuong-truong"},
                biQuyetCuocSong: {title: "Bí quyết cuộc sống", feed: "nld/danh-cho-ban-doc-vip/bi-quyet-cuoc-song"},
                hoSoNong: {title: "Hồ sơ \"nóng\"", feed: "nld/danh-cho-ban-doc-vip/ho-so-nong"},
            },
            extraChildren: {
                docLaDoDay: {title: "\"Độc\", lạ đó đây", feed: "nld/danh-cho-ban-doc-vip/doc-la-do-day"},
            },
        },
        nguoiVietYeuSuViet: {
            title: "Người Việt yêu sử Việt",
            feed: "nguoi-viet-yeu-su-viet",
            children: {},
            extraChildren: {},
        },
        WorldCup2026: {
            title: "World Cup 2026",
            feed: "world-cup-2026",
            children: {},
            extraChildren: {
                tinTuc: {title: "Tin tức", feed: "nld/world-cup-2026/tin-tuc"},
                benLe: {title: "Bên lề", feed: "nld/world-cup-2026/ben-le"},
                nguoiVietVoiWorldCup: {title: "Người Việt với World Cup", feed: "nld/world-cup-2026/nguoi-viet-voi-world-cup"},
            },
        },
    },
    otherCategories: {
        home: {
            title: "Trang chủ",
            feed: "home",
            children: {},
            extraChildren: {},
        },
        noiThang: {
            title: "Nói thẳng",
            feed: "noi-thang",
            children: {},
            extraChildren: {},
        },
        gocNhin: {
            title: "Góc nhìn",
            feed: "goc-nhin",
            children: {},
            extraChildren: {},
        },
        docQuyen: {
            title: "Độc quyền",
            feed: "doc-quyen",
            children: {},
            extraChildren: {},
        },
        trichDanNong: {
            title: "Trích dẫn nóng",
            feed: "trich-dan-nong",
            children: {},
            extraChildren: {},
        },
        viTuyenDauChongDich: {
            title: "Vì tuyến đầu chống dịch",
            feed: "vi-tuyen-dau-chong-dich",
            children: {},
            extraChildren: {},
        },
        tuHaoCoToQuoc: {
            title: "Tự hào cờ Tổ quốc",
            feed: "tu-hao-co-to-quoc",
            children: {
                trieuLaCoCungNguDanBamBien: {title: "Triệu lá cờ Tổ quốc cùng ngư dân bám biển", feed: "nld/tu-hao-co-to-quoc/trieu-la-co-cung-ngu-dan-bam-bien"},
                coToQuocBienCuong: {title: "Cờ Tổ quốc biên cương", feed: "nld/tu-hao-co-to-quoc/co-to-quoc-bien-cuong"},
                duongCoToQuoc: {title: "Đường cờ Tổ quốc", feed: "nld/tu-hao-co-to-quoc/duong-co-to-quoc"},
                hocBong: {title: "Học bổng", feed: "nld/tu-hao-co-to-quoc/hoc-bong"},
            },
            extraChildren: {},
        },
        duLich: {
            title: "Du lịch",
            feed: "du-lich",
            children: {
                giaiTri: {title: "Giải trí", feed: "nld/du-lich/giai-tri"},
                amThuc: {title: "Ẩm thực", feed: "nld/du-lich/am-thuc"},
                khachSan: {title: "Khách sạn", feed: "nld/du-lich/khach-san"},
            },
            extraChildren: {},
        },
        chuyenTuNoiCachLy: {
            title: "Chuyện từ nơi cách ly",
            feed: "chuyen-tu-noi-cach-ly",
            children: {},
            extraChildren: {},
        },
        bienDao: {
            title: "Biển đảo",
            feed: "bien-dao",
            children: {},
            extraChildren: {},
        },
        video: {
            title: "Video",
            feed: "video",
            children: {
                banTinNld: {title: "Bản tin NLĐ", feed: "nld/video/ban-tin-nld"},
                thoiSuTrongNuoc: {title: "Thời sự trong nước", feed: "nld/video/thoi-su-trong-nuoc"},
                thoiSuQuocTe: {title: "Thời sự quốc tế", feed: "nld/video/thoi-su-quoc-te"},
                kinhTe: {title: "Kinh tế", feed: "nld/video/kinh-te"},
                phongSuGhiNhanh: {title: "Phóng sự - Ghi nhanh", feed: "nld/video/phong-su-ghi-nhanh"},
                maiVang: {title: "Mai vàng", feed: "nld/video/mai-vang"},
            },
            extraChildren: {},
        },
        thiTruong: {
            title: "Thị trường",
            feed: "thi-truong",
            children: {
                tieuDung: {title: "Tiêu dùng", feed: "nld/thi-truong/tieu-dung"},
                nhipSong: {title: "Nhịp sống", feed: "nld/thi-truong/nhip-song"},
                doanhNghiep: {title: "Doanh nghiệp", feed: "nld/thi-truong/doanh-nghiep"},
                viecLam: {title: "Việc làm", feed: "nld/thi-truong/viec-lam"},
                taiChinh: {title: "Tài chính", feed: "nld/thi-truong/tai-chinh"},
                batDongSan: {title: "Bất động sản", feed: "nld/thi-truong/bat-dong-san"},
            },
            extraChildren: {},
        },
        lyTuongSong: {
            title: "Lý tưởng sống",
            feed: "ly-tuong-song",
            children: {},
            extraChildren: {},
        },
        dongTienThongMinh: {
            title: "Đồng tiền Thông minh",
            feed: "dong-tien-thong-minh",
            children: {
                quanLyChiTieu: {title: "Quản lý chi tiêu", feed: "nld/dong-tien-thong-minh/quan-ly-chi-tieu"},
                camNangDauTu: {title: "Cẩm nang đầu tư", feed: "nld/dong-tien-thong-minh/cam-nang-dau-tu"},
                chuyenLamAn: {title: "Chuyện làm ăn", feed: "nld/dong-tien-thong-minh/chuyen-lam-an"},
                luaDaoTaiChinh: {title: "Lừa đảo Tài chính", feed: "nld/dong-tien-thong-minh/lua-dao-tai-chinh"},
            },
            extraChildren: {},
        },
        moiTruong: {
            title: "Môi trường",
            feed: "moi-truong",
            children: {},
            extraChildren: {},
        },
        tuHaoHangViet: {
            title: "Tự hào hàng Việt",
            feed: "tu-hao-hang-viet",
            children: {},
            extraChildren: {},
        },
        ketQuaXoSo: {
            title: "Kết quả xổ số",
            feed: "ket-qua-xo-so",
            children: {},
            extraChildren: {},
        },
        podcast: {
            title: "Podcast",
            feed: "podcast",
            children: {
                "11Gio30": {title: "11 giờ 30", feed: "nld/podcast/11-gio-30"},
                gioiTre: {title: "Giới trẻ", feed: "nld/podcast/gioi-tre"},
                banTronPhaiDep: {title: "Bàn tròn phái đẹp", feed: "nld/podcast/ban-tron-phai-dep"},
                cauVongHanhPhuc: {title: "Cầu vồng hạnh phúc", feed: "nld/podcast/cau-vong-hanh-phuc"},
                sauGioLam: {title: "Sau giờ làm", feed: "nld/podcast/sau-gio-lam"},
                doanhNghiepTuGioiThieu: {title: "Doanh nghiệp tự giới thiệu", feed: "nld/podcast/doanh-nghiep-tu-gioi-thieu"},
                sucKhoeCuaBan: {title: "Sức khỏe của bạn", feed: "nld/podcast/suc-khoe-cua-ban"},
                sangTacCaKhucDatNuocTronNiemVui: {title: "Sáng tác ca khúc Đất nước trọn niềm vui", feed: "nld/podcast/sang-tac-ca-khuc-dat-nuoc-tron-niem-vui"},
            },
            extraChildren: {},
        },
        cuocVanDongSangTacCaKhuc: {
            title: "Cuộc vận động sáng tác ca khúc: Đất nước trọn niềm vui",
            feed: "cuoc-van-dong-sang-tac-ca-khuc-dat-nuoc-tron-niem-vui",
            children: {
                tacGia: {title: "Tác giả", feed: "nld/cuoc-van-dong-sang-tac-ca-khuc-dat-nuoc-tron-niem-vui/tac-gia"},
                tacPham: {title: "Tác phẩm", feed: "nld/cuoc-van-dong-sang-tac-ca-khuc-dat-nuoc-tron-niem-vui/tac-pham"},
                theLe: {title: "Thể lệ", feed: "nld/cuoc-van-dong-sang-tac-ca-khuc-dat-nuoc-tron-niem-vui/the-le"},
                talkshow: {title: "Talkshow", feed: "nld/cuoc-van-dong-sang-tac-ca-khuc-dat-nuoc-tron-niem-vui/talkshow"},
            },
            extraChildren: {},
        },
        toanCanhDaiHoiXIV: {
            title: "Toàn cảnh Đại hội XIV",
            feed: "toan-canh-dai-hoi-xiv",
            children: {
                nhanSuChanDung: {title: "Nhân sự", feed: "nld/toan-canh-dai-hoi-xiv/nhan-su-chan-dung"},
                vanKienNghiQuyet: {title: "Văn kiện - Nghị quyết", feed: "nld/toan-canh-dai-hoi-xiv/van-kien-nghi-quyet"},
                thongDiepTuLanhDao: {title: "Thông điệp từ lãnh đạo", feed: "nld/toan-canh-dai-hoi-xiv/thong-diep-tu-lanh-dao"},
                tinTuc: {title: "Tin tức", feed: "nld/toan-canh-dai-hoi-xiv/tin-tuc"},
            },
            extraChildren: {},
        },
        NamMuoiNamThanhPhoMangTenBac: {
            title: "50 năm Thành phố mang tên Bác",
            feed: "50-nam-thanh-pho-mang-ten-bac",
            children: {
                thongTinHoatDong: {title: "Thông tin – hoạt động", feed: "nld/50-nam-thanh-pho-mang-ten-bac/thong-tin-hoat-dong"},
                xuaVaNay: {title: "Xưa và nay", feed: "nld/50-nam-thanh-pho-mang-ten-bac/xua-va-nay"},
                chuyenDe: {title: "Chuyên đề", feed: "nld/50-nam-thanh-pho-mang-ten-bac/chuyen-de"},
                cuocThiViet: {title: "Cuộc thi viết", feed: "nld/50-nam-thanh-pho-mang-ten-bac/cuoc-thi-viet"},
            },
            extraChildren: {},
        },
        bauCuDaiBieuQuocHoi: {
            title: "Bầu cử Đại biểu Quốc hội và HĐND các cấp",
            feed: "bau-cu-dai-bieu-quoc-hoi-va-hdnd-cac-cap",
            children: {
                thongTinBauCu: {title: "Thông tin bầu cử", feed: "nld/bau-cu-dai-bieu-quoc-hoi-va-hdnd-cac-cap/thong-tin-bau-cu"},
                ungVienDaiBieuQuocHoi: {title: "Ứng viên Đại biểu Quốc hội", feed: "nld/bau-cu-dai-bieu-quoc-hoi-va-hdnd-cac-cap/ung-vien-dai-bieu-quoc-hoi"},
                ungVienDaiBieuHoiDongNhanDan: {title: "Ứng viên Đại biểu Hội đồng nhân dân", feed: "nld/bau-cu-dai-bieu-quoc-hoi-va-hdnd-cac-cap/ung-vien-dai-bieu-hoi-dong-nhan-dan"},
            },
            extraChildren: {},
        },
        NLDNEWS: {
            title: "Nguoi Lao Dong NEWS",
            feed: "nguoi-lao-dong-news",
            children: {
                policies: {title: "Politics", feed: "nld/nguoi-lao-dong-news/policies"},
                hoChiMinhCity: {title: "Ho Chi Minh City", feed: "nld/nguoi-lao-dong-news/ho-chi-minh-city"},
                bizlive: {title: "BizLIVE", feed: "nld/nguoi-lao-dong-news/bizlive"},
                lifeTravel: {title: "Life & Travel", feed: "nld/nguoi-lao-dong-news/life-travel"},
            },
            extraChildren: {},
        },
        SEAGame33: {
            title: "SEA Games 33",
            feed: "sea-games-33",
            children: {
                chuyenDongSeaGames: {title: "Chuyển động SEA Games", feed: "nld/sea-games-33/chuyen-dong-sea-games"},
                lichThiDau: {title: "Lịch thi đấu", feed: "nld/sea-games-33/lich-thi-dau"},
                guongMatNoiBat: {title: "Gương mặt nổi bật", feed: "nld/sea-games-33/guong-mat-noi-bat"},
                bangTongSapHuyChuong: {title: "Bảng tổng sắp huy chương", feed: "nld/sea-games-33/bang-tong-sap-huy-chuong"},
                bongDa: {title: "Bóng đá", feed: "nld/sea-games-33/bong-da"},
            },
            extraChildren: {},
        },
    },
} as const satisfies Record<string, Record<string, RSSCategory>>;

export const RSS_CATEGORIES = {...RSS_FEEDS.categories, ...RSS_FEEDS.otherCategories};

console.log(RSS_CATEGORIES);

export type CategoryName = keyof typeof RSS_CATEGORIES;


export type FeedName = CategoryName | `nld/${string}`;

export const FEED_PATHS: Record<string, string> = {};

for (const [key, value] of Object.entries(RSS_CATEGORIES)) {
    const category: RSSCategory = value;
    FEED_PATHS[key] = category.feed;

    
    console.log(category)
    console.log(key)
    console.log(FEED_PATHS[key]);

    for (const child of Object.values(category.children)) {
        FEED_PATHS[child.feed] = child.feed;
    }

    for (const child of Object.values(category.extraChildren)) {
        FEED_PATHS[child.feed] = child.feed;
    }
}

console.log(FEED_PATHS)
