export default function EPaperHeader() {
    return (
        <section>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="mb-4 main-title text-start" style={{color: "#0c63e4", fontSize:"22px"}}>DANH SÁCH E-PAPER</h1>
                <div className="d-flex align-items-center gap-4">
                    <input type="text" id="e-paper-title" placeholder="Nhập tiêu đề báo" style={{width: "225px", height: "42px", padding: "0 12px", fontSize: "16px", backgroundColor: "white", color: "black", border: "1px solid #d0d0d0", borderRadius: "10px", outline: "none"}}/>
                    <input type="date" id="date" style={{width: "225px", height: "42px", padding: "0 12px", fontSize: "16px", backgroundColor: "white", color: "black", border: "1px solid #d0d0d0", borderRadius: "10px", outline: "none"}}/>
                    <button className="btn" style={{height: "42px", padding: "0 16px", fontSize: "16px", fontWeight: 500, backgroundColor: "#0b4a9e", color: "white", border: "none", borderRadius: "8px"}}>Tìm kiếm</button>
                </div>
            </div>
        </section>
    )
}