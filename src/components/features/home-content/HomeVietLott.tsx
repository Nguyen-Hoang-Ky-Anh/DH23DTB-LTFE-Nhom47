import type {VietLott} from "../../../services/lotteryService.ts";
import {Link} from "react-router-dom";

export interface HomeVietLottProps {
    powerData: VietLott;
    megaData: VietLott;
}

export default function HomeVietLott({powerData, megaData}: HomeVietLottProps) {
    const powerDate = powerData.date;
    const powerNumbers: string[] = powerData.data.numbers;
    const powerJackpot1 = powerData.data.jackpot.replaceAll(',', '.').replace('đ', ' VND');
    const powerJackpot2 = powerData.data.jackpot2;

    const megaDate = megaData.date;
    const megaNumbers: string[] = megaData.data.numbers;
    const megaJackpot = powerData.data.jackpot;

    return (
        <div className={'row'}>
            <div className={'d-flex justify-content-between mb-1'}>
                <p className={'vietLott-title'}>Kết quả xổ số tự chọn</p>
                <img src={'https://static.mediacdn.vn/nld.com.vn/images/logo-vietlott.jpg'}
                     alt={'Vietlott'} height={30}/>
            </div>

            <div className={'vietLott-content'}>
                <table className={'table table-bordered table-sm'}>
                    <tbody>
                    <tr style={{height: 1}}>
                        <td className={'vietLott-table-text text-start'}>Power 6/55 - {powerDate}</td>
                        <td className={'vietLott-table-text text-start'}>Mega 6/45 - {megaDate}</td>
                        <td rowSpan={3}>
                            <div>
                                <img src={'https://static.mediacdn.vn/zoom/75_75/nld.com.vn/images/App-Vietlot.png'}
                                     alt={'Tải app VietLott'}
                                     height={75} width={75}/>
                                <p style={{fontSize: 11}}>Tải ứng dụng dò số VietLott</p>
                            </div>
                        </td>
                    </tr>
                    <tr style={{height: 1}}>
                        <td>
                            <div className={'d-flex flex-row gap-2 justify-content-center'}>
                                {powerNumbers.map((num, index) => (
                                    <div className={`${index === powerNumbers.length - 1 ? 'border-start border-dark ps-2' : ''}`}>
                                        <span
                                            className={`${index === powerNumbers.length - 1 ? 'special-vietLott-number'
                                                : 'vietLott-number'}`}
                                        >{num}</span>
                                    </div>
                                ))}
                            </div>
                        </td>
                        <td>
                            <div className={'d-flex flex-row gap-2 justify-content-center'}>
                                {megaNumbers.map((num) => (
                                    <div>
                                        <span
                                            className={`vietLott-number`}
                                        >{num}</span>
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                    <tr style={{height: 1}}>
                        <td>
                            <div className={'text-start'}>
                                <p className={'vietLott-table-text'}>Jackpot 1: <span style={{color: "red"}}>{powerJackpot1}</span></p>
                                <p className={'vietLott-table-text'}>Jackpot 2: <span style={{color: "red"}}>{powerJackpot2}</span></p>
                            </div>
                        </td>
                        <td>
                            <div className={'text-start'}>
                                <p className={'vietLott-table-text'}>Jackpot: <span style={{color: "red"}}>{megaJackpot}</span></p>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <Link className={'vietLott-table-text text-start'} to={'https://vietlott.vn/'} title={'Xem kết quả Max 3D, 3D PRO, KENO, BINGO 18, LOTTO 5/35'}>
                Xem kết quả Max 3D, 3D PRO, KENO, BINGO 18, LOTTO 5/35
            </Link>
        </div>
    )
}