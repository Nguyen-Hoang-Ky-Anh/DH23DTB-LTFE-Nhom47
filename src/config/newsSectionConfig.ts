import type {FeedName} from "../store/slice/newsSlice.ts";
export interface NavLink {
    label: string;
    href: string;
}

export interface NewsSectionConfig {
    title: string;
    icon: string;
    feed: FeedName;
    links: NavLink[];
    moreLinks?: NavLink[];
}

export const SECTIONS = {
  thiTruong: {
    title: "Thị trường",
    icon: "fa-solid fa-store",
    feed: "thiTruong",
    links: [
      { label: "Tiêu dùng", href: "#" },
      { label: "Nhịp sống", href: "#" },
      { label: "Doanh nghiệp", href: "#" },
    ],
    moreLinks: [
      { label: "Việc làm", href: "#" },
      { label: "Tài chính", href: "#" },
      { label: "Bất động sản", href: "#" },
    ],
  },
  vanHoaVanNghe: {
    title: "Văn hóa - Văn nghệ",
    icon: "fa-solid fa-masks-theater",
    feed: "vanHoaVanNghe",
    links: [
      { label: "Âm nhạc", href: "#" },
      { label: "Văn học", href: "#" },
      { label: "Sân khấu", href: "#" },
    ],
    moreLinks: [
      { label: "Điện ảnh", href: "#" },
      { label: "Nghe - Xem - Đọc gì?", href: "#" },
    ],
  },
  phuNu: {
    title: "Phụ nữ",
    icon: "fa-solid fa-venus",
    feed: "phuNu",
    links: [
      { label: "Khỏe - Đẹp", href: "#" },
      { label: "Tâm sự", href: "#" },
      { label: "Chuyện của Sao", href: "#" },
    ],
    moreLinks: [
      { label: "Món ngon", href: "#" },
      { label: "Điểm đến", href: "#" },
      { label: "Tiêu dùng thông minh", href: "#" },
      { label: "Video", href: "#" },
      { label: "Bản lĩnh sống", href: "#" },
    ],
  },
  khoaHoc: {
    title: "Khoa học",
    icon: "fa-solid fa-flask",
    feed: "khoaHoc",
    links: [],
  },
  doiSong: {
    title: "Đời sống",
    icon: "fa-solid fa-person",
    feed: "doiSong",
    links: [],
  },
  moiTruong: {
    title: "Môi trường",
    icon: "fa-solid fa-seedling",
    feed: "moiTruong",
    links: [],
  },
  diaOc: {
    title: "Địa ốc",
    icon: "fa-solid fa-building",
    feed: "diaOc",
    links: [
      { label: "Dự án", href: "#" },
      { label: "Thị trường", href: "#" },
    ],
    moreLinks: [
      { label: "Nhà đẹp", href: "#" },
      { label: "Tài chính", href: "#" },
      { label: "Tư vấn doanh nhân", href: "#" },
      { label: "Số hoá", href: "#" },
      { label: "Vật tư", href: "#" },
    ],
  },
  giaDinh: {
    title: "Gia đình",
    icon: "fa-solid fa-house",
    feed: "giaDinh",
    links: [
      { label: "Không gian sống", href: "#" },
      { label: "Cha mẹ và con cái", href: "#" },
    ],
    moreLinks: [{ label: "Bí quyết làm đẹp", href: "#" }],
  },
  duLichXanh: {
    title: "Du lịch xanh",
    icon: "fa-solid fa-plane",
    feed: "duLichXanh",
    links: [
      { label: "Tiêu điểm", href: "#" },
      { label: "Điểm đến", href: "#" },
    ],
    moreLinks: [
      { label: "Ẩm thực", href: "#" },
      { label: "Đừng bỏ lỡ", href: "#" },
    ],
  },

  thoiSu: {
    title: "Thời sự",
    icon: "fa fa-newspaper",
    feed: "thoiSu",
    links: [
      { label: "Chính trị", href: "/thoi-su/chinh-tri" },
      { label: "Xã hội", href: "/thoi-su/xa-hoi" },
      { label: "Đô thị", href: "/thoi-su/do-thi" },
    ],
    moreLinks: [
      {
        label: "Chuyện thường ngày ở phường, xã",
        href: "/chuyen-thuong-ngay-o-phuong-xa",
      },
    ],
  },

  quocTe: {
    title: "Quốc tế",
    icon: "fa-solid fa-globe",
    feed: "quocTe",
    links: [
      { label: "Người Việt đó đây", href: "#" },
      { label: "Hay - lạ", href: "#" },
      { label: "Vấn đề nóng", href: "#" },
    ],
    moreLinks: [
      {
        label: "Hồ sơ",
        href: "#",
      },
      {
        label: "Quân sự - Quốc phòng",
        href: "#",
      },
    ],
  },

  kinhTe: {
    title: "Kinh tế",
    icon: "fa-solid fa-chart-line",
    feed: "kinhTe",
    links: [
      { label: "Kinh doanh", href: "#" },
      { label: "Tiêu dùng", href: "#" },
      { label: "Ôtô - Xe - Điện máy", href: "#" },
    ],
    moreLinks: [
      {
        label: "Bất động sản",
        href: "#",
      },
      {
        label: "Tài chính - Chứng khoán",
        href: "#",
      },
      {
        label: "Diễn đàn kinh tế",
        href: "#",
      },
    ],
  },

  netZero: {
    title: "Net Zero",
    icon: "fa-solid fa-leaf",
    feed: "netZero",
    links: [
      { label: "Tin tức & Xu hướng", href: "#" },
      { label: "Chuyển đổi xanh", href: "#" },
      { label: "Sống xanh", href: "#" },
    ],
    moreLinks: [
      {
        label: "Cẩm nang",
        href: "#",
      },
    ],
  },

  ai365: {
    title: "AI 365",
    icon: "fa-solid fa-microchip",
    feed: "ai365",
    links: [
      { label: "Công nghệ số", href: "#" },
      { label: "Bảo mật", href: "#" },
      { label: "Mạng xã hội", href: "#" },
    ],
    moreLinks: [
      {
        label: "Giải trí cùng AI",
        href: "#",
      },
    ],
  },

  laoDong: {
    title: "Lao động",
    icon: "fa-solid fa-person-digging",
    feed: "laoDong",
    links: [
      { label: "Công đoàn - Công nhân", href: "#" },
      { label: "Việc làm", href: "#" },
      { label: "An sinh xã hội", href: "#" },
    ],
    moreLinks: [
      {
        label: "Chính sách",
        href: "#",
      },
      {
        label: "Xuất khẩu lao động",
        href: "#",
      },
    ],
  },

  phapLuat: {
    title: "Pháp luật",
    icon: "fa-solid fa-scale-balanced",
    feed: "phapLuat",
    links: [
      { label: "Luật sư của bạn", href: "#" },
      { label: "Truy nã", href: "#" },
      { label: "Chuyện pháp đình", href: "#" },
    ],
    moreLinks: [],
  },

  banDoc: {
    title: "Bạn đọc",
    icon: "fa-solid fa-book",
    feed: "banDoc",
    links: [
      { label: "Những câu chuyện nhỏ", href: "#" },
      { label: "Nhà ở xã hội", href: "#" },
      { label: "Tôi lên tiếng", href: "#" },
    ],
    moreLinks: [
      {
        label: "Góc ảnh bạn đọc",
        href: "#",
      },
      {
        label: "Cuộc sống nhân ái",
        href: "#",
      },
      {
        label: "Thư bạn đọc",
        href: "#",
      },
    ],
  },
} satisfies Record<string, NewsSectionConfig>;

export type SectionKey = keyof typeof SECTIONS;
