import {SECTIONS} from "../../../config/newsSectionConfig.ts";
import Card from "../../ui/Card.tsx";
import {useEffect} from "react";
import {fetchNews} from "../../../store/slice/newsSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {Link} from "react-router-dom";
import {formatDate} from "../../../utils/dateServices.ts";
import HorizontalCard from "../../ui/HorizontalCard.tsx";
import CommentBlock from "../../ui/CommentBlock.tsx";

export default function VideoFirstHalf() {
    const video_section = SECTIONS.video;
    const video_feed = video_section.feed;
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchNews(video_feed));
    }, [dispatch, video_feed]);

    const news = useSelector((s: RootState) => s.news.feeds[video_feed]) ?? [];
    const state = useSelector((s: RootState) => s.news.states[video_feed] ?? false);
    const isLoading = state === 'loading';
    const numberOfNewsInBelowContent = news.slice(3, 7);

    if (isLoading) {
        return (<div className={'text-center'}>
            <p>Đang tải...</p>
        </div>);
    } else if (state === 'succeeded') {
        return (
            <div className={'container my-3'}>
                <div className={'row border-bottom pb-4 mb-3'}>
                    <div className={'col-8 border-end'}>
                        <div className={'video'}>
                            <video controls height={"100%"} width={'100%'}>
                                <source
                                    src="https://cdn2.tuoitre.vn/nld/291774122806476800/2026/6/29/rao-bao-ngay-30-6-2026-17827485721831077358452.mp4?"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className={'main-video-content text-start'}>
                            <Link to={video_section.href}
                                  className={'main-title'}
                                  style={{
                                      fontSize: 20,
                                      color: "silver"
                                  }}
                            >Video</Link>

                            <p className={'main-title'}
                               style={{
                                   fontSize: 26
                               }}>{news[1].title}</p>

                            <div className={'mt-2 d-flex justify-content-between'}>
                                <p className={'description author'}
                                   style={{
                                       fontWeight: 600,
                                       lineHeight: "20px",
                                       color: "#727272"
                                   }}
                                >Đỗ thông - Quốc thắng -
                                    <span style={{
                                        fontWeight: 400,
                                    }}>
                                         {" " + formatDate(new Date(news[1].pubDate), true)}
                                    </span>
                                </p>

                                <div className={'d-flex video-share gap-3'}>
                                    <Link to={'#'}><i className="fa-solid fa-link"></i></Link>
                                    <Link to={'#'}><i className="fa-brands fa-facebook"></i></Link>
                                    <Link to={'#'}><i className="fa-brands fa-twitter"></i></Link>
                                    <Link to={'#'}><i className="fa-solid fa-bookmark"></i></Link>
                                </div>
                            </div>

                            <p className={'description mt-2'}>{news[1].description}</p>
                            <CommentBlock/>
                        </div>
                    </div>

                    <div className={'col-4'}>
                        <div className={'d-grid border-bottom pb-3 mb-4'}>
                            <button type={'button'} className={'btn main-title border'}>MAI VÀNG</button>
                        </div>

                        <div className={'text-start'}>
                            <p className={'description'}
                               style={{
                                   fontSize: 16,
                                   fontWeight: 600
                               }}>
                                VIDEO TIẾP THEO</p>
                            <div className={'pt-3 px-3 mt-2'}
                                 style={{
                                     background: "#f5f6f8"
                                 }}
                            >
                                <HorizontalCard image={news[1].image} title={news[1].title} borderBottom={false}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'row'}>
                    {numberOfNewsInBelowContent.map(item => (
                        <div key={item.link} className="col-3">
                            <Card
                                image={item.image}
                                title={item.title}
                                isVideo
                                date={new Date(item.pubDate).toLocaleDateString("vi-VN")}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}