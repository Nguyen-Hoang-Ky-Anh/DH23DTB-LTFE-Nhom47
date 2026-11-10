import {useEffect, useState} from "react";
import {fetchWorldCupGroups, fetchWorldCupMatches, type WorldCupGroup, type WorldCupMatch} from "../../../services/worldCupService.ts";

const MATCHES_PER_PAGE = 6;

export default function WorldCupScores() {
    const [schedule, setSchedule] = useState<WorldCupMatch[] | string>("Đang tải lịch thi đấu...");
    const [standings, setStandings] = useState<WorldCupGroup[] | string>("Đang tải bảng xếp hạng...");
    const [page, setPage] = useState(0);
    const [group, setGroup] = useState(0);
    const allMatches = Array.isArray(schedule) ? schedule : [];
    const firstMatch = page * MATCHES_PER_PAGE;
    const matches = allMatches.slice(firstMatch, firstMatch + MATCHES_PER_PAGE);
    const hasNextPage = firstMatch + MATCHES_PER_PAGE < allMatches.length;
    const groups = Array.isArray(standings) ? standings : [];
    const selectedGroup = groups[group];

    useEffect(() => {
        fetchWorldCupMatches()
            .then(setSchedule)
            .catch(() => setSchedule("Không tải được lịch thi đấu."));
        fetchWorldCupGroups()
            .then(setStandings)
            .catch(() => setStandings("Không tải được bảng xếp hạng."));
    }, []);

    return (
        <section id="lich-thi-dau" className="wc-scores py-4 my-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-lg-8">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="wc-score-title mb-0">Lịch thi đấu</h2>
                            <div className="d-flex gap-2">
                                <button className="btn btn-sm btn-outline-light rounded-pill" title="Lịch trước"
                                        disabled={page === 0} onClick={() => setPage(page - 1)}>
                                    <i className="fa-solid fa-angle-left"/>
                                </button>
                                <button className="btn btn-sm btn-outline-light rounded-pill" title="Lịch tiếp theo"
                                        disabled={!hasNextPage} onClick={() => setPage(page + 1)}>
                                    <i className="fa-solid fa-angle-right"/>
                                </button>
                            </div>
                        </div>
                        {!allMatches.length && (
                            <p>{typeof schedule === "string" ? schedule : "Chưa có lịch thi đấu."}</p>
                        )}
                        <div className="row g-3">
                            {matches.map(match => (
                                <div className="col-12 col-sm-6" key={match.KeyId}>
                                    <div className="wc-match p-3 rounded">
                                        <div className="d-flex gap-2 mb-2 wc-match-date">
                                            <span>{match.MatchDateString}</span>
                                            {match.GroupName && <span>Bảng {match.GroupName}</span>}
                                        </div>
                                        {[
                                            {name: match.HomeName, flag: match.HomeFlag, score: match.HomeScore},
                                            {name: match.AwayName, flag: match.AwayFlag, score: match.AwayScore},
                                        ].map(team => (
                                            <div className="d-flex align-items-center gap-2 py-1 fw-bold" key={team.name}>
                                                <img src={team.flag} alt="" className="wc-flag" loading="lazy"/>
                                                <span className="flex-grow-1">{team.name}</span>
                                                <span>{Number(team.score) < 0 ? "–" : team.score}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <h2 className="wc-score-title mb-3">Bảng xếp hạng</h2>
                        {!groups.length && (
                            <p>{typeof standings === "string" ? standings : "Chưa có bảng xếp hạng."}</p>
                        )}
                        {selectedGroup && (
                            <div className="bg-white text-dark rounded p-3">
                                <select className="form-select fw-bold mb-3" title="Chọn bảng đấu" value={group}
                                        onChange={event => setGroup(Number(event.target.value))}>
                                    {groups.map((item, index) => (
                                        <option key={item.GroupName} value={index}>Bảng {item.GroupName}</option>
                                    ))}
                                </select>
                                <table className="table table-sm table-borderless align-middle mb-0 wc-standings">
                                    <thead><tr><th>Thứ hạng</th><th>T</th><th>H</th><th>B</th><th>Điểm</th></tr></thead>
                                    <tbody>
                                        {selectedGroup.ClubRanking.map(team => (
                                            <tr key={team.TeamName}>
                                                <td><img src={team.TeamFlag} alt="" className="wc-flag me-2" loading="lazy"/>{team.TeamName}</td>
                                                <td>{team.Wins}</td><td>{team.Draws}</td><td>{team.Losses}</td><td className="fw-bold">{team.Points}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
