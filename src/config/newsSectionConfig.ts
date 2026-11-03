import { RSS_FEEDS } from "../services/rssConfig.ts";
import type {FeedName} from "../store/slice/newsSlice.ts";

export interface NavLink {
    label: string;
    href: string;
}

export interface NewsSectionConfig {
    title: string;
    href: string;
    icon: string;
    feed: FeedName;
    links: NavLink[];
    moreLinks?: NavLink[];
}

export const SECTIONS = {
  thiTruong: {
    title: "Thị trường",
    href: `/${RSS_FEEDS.categories.thiTruong}`,
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
    href: `/${RSS_FEEDS.categories.vanHoaVanNghe}`,
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
    href: `/${RSS_FEEDS.categories.phuNu}`,
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
    href: `/${RSS_FEEDS.categories.khoaHoc}`,
    icon: "fa-solid fa-flask",
    feed: "khoaHoc",
    links: [],
  },
  doiSong: {
    title: "Đời sống",
    href: `/${RSS_FEEDS.categories.doiSong}`,
    icon: "fa-solid fa-person",
    feed: "doiSong",
    links: [],
  },
  moiTruong: {
    title: "Môi trường",
    href: `/${RSS_FEEDS.categories.moiTruong}`,
    icon: "fa-solid fa-seedling",
    feed: "moiTruong",
    links: [],
  },
  diaOc: {
    title: "Địa ốc",
    href: `/${RSS_FEEDS.categories.diaOc}`,
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
    href: `/${RSS_FEEDS.categories.giaDinh}`,
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
    href: `/${RSS_FEEDS.categories.duLichXanh}`,
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
    href: `/${RSS_FEEDS.categories.thoiSu}`,
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
    href: `/${RSS_FEEDS.categories.quocTe}`,
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
    href: `/${RSS_FEEDS.categories.kinhTe}`,
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
    href: `/${RSS_FEEDS.categories.netZero}`,
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
    href: `/${RSS_FEEDS.categories.ai365}`,
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
    href: `/${RSS_FEEDS.categories.laoDong}`,
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
    href: `/${RSS_FEEDS.categories.phapLuat}`,
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
        href: `/${RSS_FEEDS.categories.banDoc}`,
        icon: "fa-solid fa-book",
        feed: "banDoc",
        links: [
            { label: "Những câu chuyện nhỏ", href: "/ban-doc/nhung-cau-chuyen-nho" },
            { label: "Nhà ở xã hội", href: "/ban-doc/nha-o-xa-hoi" },
            { label: "Tôi lên tiếng", href: "/ban-doc/toi-len-tieng" },
        ],
        moreLinks: [
            {
                label: "Góc ảnh bạn đọc",
                href: "/ban-doc/goc-anh-ban-doc",
            },
            {
                label: "Cuộc sống nhân ái",
                href: "/ban-doc/cuoc-song-nhan-ai",
            },
            {
                label: "Thư bạn đọc",
                href: "/ban-doc/thu-ban-doc",
            },
        ],
    },
}  satisfies Record<string, NewsSectionConfig>;

export type SectionKey = keyof typeof SECTIONS;
