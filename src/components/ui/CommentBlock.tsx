export default function CommentBlock() {
    return (
        <div className="form-text mt-3">
            <label className="form-label main-title"
                   style={{color: "black"}}>
                Hãy là người đầu tiên bình luận bài viết!
            </label>
            <textarea className="form-control description" rows={3}
                      placeholder={'Chia sẻ ý kiến của bạn'}
                      style={{
                          height: 100,
                          borderLeft: "2.5px solid #005bb2",
                          resize: "none",
                          background: "#fafafa",
                          color: "#8c8c8c",
                          fontSize: 16,
                          lineHeight: "26px"
                      }}
            />
            <div className={'d-flex flex-row justify-content-end mt-3'}>
                <button className={'btn btn-primary description py-2 px-3'}
                        style={{
                            fontSize: 14,
                            fontWeight: 600,
                            lineHeight: "20px"
                        }}>
                    Gửi bình luận
                </button>
            </div>
        </div>
    )
}