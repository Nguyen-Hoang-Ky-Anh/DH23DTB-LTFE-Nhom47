import NewsSection from "../news/NewsSection.tsx";

export default function BottomNews() {
    return (
      <div
        className="bottom-news container my-5 text-start"
        style={{ letterSpacing: "normal" }}
      >
        <div className="row">
          <div className="col-12 d-flex flex-column gap-4">
            {/*
            Thi Truong, Van Hoa Van Nghe, Phu Nu
            */}

            <NewsSection section="thiTruong" layout="columns" embedded />
            <NewsSection section="vanHoaVanNghe" layout="columns" embedded />
            <div className="p-3" style={{ backgroundColor: "#fff5f7" }}>
              <NewsSection section="phuNu" layout="columns" embedded />
            </div>

            {/*
            Khoa hoc, doi song, moi truong
            */}
            <div className="row g-4 border-top mt-3">
              <div className="col-12 col-md-4">
                <NewsSection section="khoaHoc" layout="compact" embedded />
              </div>
              <div className="col-12 col-md-4 border-start">
                <NewsSection section="doiSong" layout="compact" embedded />
              </div>
              <div className="col-12 col-md-4 border-start">
                <NewsSection section="moiTruong" layout="compact" embedded />
              </div>
            </div>
            {/*
              Dia oc, Gia Dinh, Du lich xanh
            */}
            <div className="row g-4 border-top mt-3">
              <div className="col-12 col-md-4">
                <NewsSection section="diaOc" layout="compact" embedded />
              </div>
              <div className="col-12 col-md-4 border-start">
                <NewsSection section="giaDinh" layout="compact" embedded />
              </div>
              <div className="col-12 col-md-4 border-start">
                <NewsSection section="duLichXanh" layout="compact" embedded />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
