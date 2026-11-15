import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    type match,
    type soccerCompetitions
} from "../../../services/soccerCompetitionService.ts";
import {
    fetchNearestSoccerMatches,
    fetchSoccerMatchesCompetitionsFromDateToDate
} from "../../../store/slice/soccerMatchesCompetitionSlice.ts";
import {fetchSoccerStandingCompetitions} from "../../../store/slice/soccerStandingsCompetitionSlice.ts";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import SoccerCarousel from "../../ui/SoccerCarousel.tsx";

const competitions: {title: string; value: soccerCompetitions}[] = [
    {title: "Premier League", value: "PL"},
    {title: "UEFA Champions League", value: "CL"},
    {title: "Serie A", value: "SA"},
    {title: "Primera Division", value: "PD"},
    {title: "Bundesliga", value: "BL1"},
    {title: "Ligue 1", value: "FL1"},
    {title: "World Cup", value: "WC"},
    {title: "Eredivisie", value: "DED"},
    {title: "Championship", value: "ELC"},
    {title: "Primeira Liga", value: "PPL"},
    {title: "European Championship", value: "EC"},
    {title: "Campeonato Brasileiro Série A", value: "BSA"},
];

interface SportsDropdownProps {
    value: string;
    options: {title: string; value: string}[];
    onChange: (value: string) => void;
    className?: string;
}

function SportsDropdown({value, options, onChange, className = ""}: SportsDropdownProps) {
    const dropdownRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        const closeOutside = (event: PointerEvent) => {
            const dropdown = dropdownRef.current;
            if (dropdown && !dropdown.contains(event.target as Node)) dropdown.open = false;
        };
        document.addEventListener("pointerdown", closeOutside);
        return () => document.removeEventListener("pointerdown", closeOutside);
    }, []);

    return (
        <details ref={dropdownRef} name="sports-selection" className={`sports-competition ${className}`}
                 onKeyDown={event => {
                     if (event.key === "Escape") event.currentTarget.open = false;
                 }}>
            <summary className="d-flex align-items-center justify-content-between gap-2 fw-bold "
                     style={{fontSize: 15}}
            >
                {options.find(option => option.value === value)?.title ?? value}
                <i className="fa-solid fa-caret-down" style={{fontSize: 22}}/>
            </summary>
            <div className="sports-competition-menu bg-white border rounded shadow-sm">
                {options.map(option => (
                    <button key={option.value} type="button"
                            className={`d-block w-100 border-0 bg-white text-start px-3 py-3 ${option.value === value ? "sports-option-selected" : ""}`}
                            onClick={event => {
                                onChange(option.value);
                                event.currentTarget.closest("details")!.open = false;
                            }}>
                        {option.title}
                    </button>
                ))}
            </div>
        </details>
    );
}

function matchDay(item: match) {
    return new Date(item.utcDate).toLocaleDateString("vi-VN", {timeZone: "Asia/Ho_Chi_Minh"});
}

function SportsMatch({item, sidebar = false}: {item: match; sidebar?: boolean}) {
    const score = item.score;
    const teams = [
        {side: "home", team: item.homeTeam, score: score.fullTime.home},
        {side: "away", team: item.awayTeam, score: score.fullTime.away},
    ];

    return (
        <div className={`sports-match text-start ${sidebar ? "sports-schedule-match d-flex align-items-center gap-3" : ""}`}>
            {!sidebar && <div className="text-secondary mb-2">
                {new Date(item.utcDate).toLocaleString("vi-VN", {
                    day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit",
                    timeZone: "Asia/Ho_Chi_Minh",
                })}
            </div>}
            <div className="flex-grow-1" style={{minWidth: 0}}>
            {teams.map(({side, team, score}) => (
                <div key={side} className="d-flex align-items-center gap-2 py-1">
                    {team.crest && <img src={team.crest} alt="" width={sidebar ? 28 : 22} height={sidebar ? 28 : 22}/>}
                    <span className={`flex-grow-1 ${sidebar ? "" : "text-truncate"}`} title={team.name}>
                        {(sidebar ? team.name : team.shortName || team.name) || "Chưa xác định"}
                    </span>
                    {!sidebar && <span>{score}</span>}
                </div>
            ))}
            </div>
            {sidebar && <span className="flex-shrink-0">
                {new Date(item.utcDate).toLocaleTimeString("vi-VN", {
                    hour: "2-digit", minute: "2-digit", timeZone: "Asia/Ho_Chi_Minh",
                })}
            </span>}
        </div>
    );
}

export default function SportsScores({sidebar = false}: {sidebar?: boolean}) {
    const dispatch = useDispatch<AppDispatch>();
    const [competition, setCompetition] = useState<soccerCompetitions>("PL");
    const [tab, setTab] = useState("standings");
    const [date, setDate] = useState("");
    const matchesState = useSelector((state: RootState) => state.soccerMatches);
    const standingsState = useSelector((state: RootState) => state.soccerStanding);
    const matches = [...(matchesState.feeds[competition] ?? [])]
        .sort((first, second) => Date.parse(first.utcDate) - Date.parse(second.utcDate));
    const groups = (standingsState.feeds[competition] ?? []).filter(group => group.type === "TOTAL");
    const today = new Date().setHours(0, 0, 0, 0);
    const carouselMatches = matchesState.nearestFeeds[competition] ?? [];
    const upcomingMatches = matches.filter(
        item => new Date(item.utcDate).getTime() >= today);
    const dates = [...new Set(upcomingMatches.map(matchDay))];
    const selectedDate = date || dates[0] || "";

    useEffect(() => {
        dispatch(fetchSoccerMatchesCompetitionsFromDateToDate({type: competition}));
        dispatch(fetchNearestSoccerMatches(competition));
        if (sidebar && tab === "standings") {
            dispatch(fetchSoccerStandingCompetitions(competition));
        }
    }, [dispatch, competition, sidebar, tab]);

    const competitionSelect = (
        <SportsDropdown value={competition} options={competitions}
                        className={sidebar ? "flex-grow-1" : "sports-league"}
                        onChange={value => {
                            setCompetition(value as soccerCompetitions);
                            setDate("");
                        }}/>
    );
    const matchStatus = matchesState.states[competition];
    const matchMessage = matchStatus === "error" ? "Không tải được lịch thi đấu." :
        matchStatus === "succeeded" ? "Chưa có lịch thi đấu." : "Đang tải lịch thi đấu...";

    if (!sidebar) {
        return (
            <section className="sports-fixtures align-items-start d-flex flex-column flex-md-row gap-3 mt-3">
                {competitionSelect}
                <div className="d-flex align-items-center" style={{minWidth: 0}}>
                    {carouselMatches.length > 0 ? (
                        <SoccerCarousel soccerMatchesData={carouselMatches}/>
                    ) : <p className="small mb-0">{matchMessage}</p>}
                </div>
            </section>
        );
    }

    const standingStatus = standingsState.states[competition];
    return (
        <aside className="sports-scoreboard border rounded text-start">
            <div className="d-flex border-bottom">
                <button type="button" className={`sports-tab main-title flex-fill ${tab === "standings" ? "active" : ""}`}
                        onClick={() => setTab("standings")}>Bảng xếp hạng</button>
                <button type="button" className={`sports-tab main-title flex-fill ${tab === "schedule" ? "active" : ""}`}
                        onClick={() => setTab("schedule")}>Lịch thi đấu</button>
            </div>
            <div className="p-3">
                <div className="sports-ranking-header d-flex align-items-center">
                    {competitionSelect}
                    {tab === "standings" && <><span>Trận</span><span>Điểm</span></>}
                    {tab === "schedule" && dates.length > 0 && (
                        <SportsDropdown className="sports-date" value={selectedDate} onChange={setDate}
                                        options={dates.map(day => ({title: day, value: day}))}/>
                    )}
                </div>
                {tab === "standings" ? (
                    groups.some(group => group.table.length > 0) ? groups.map((group, groupIndex) => (
                        <table key={groupIndex} className="table align-middle mb-0">
                            <colgroup>
                                <col style={{width: 40}}/><col/>
                                <col style={{width: 48}}/><col style={{width: 48}}/>
                            </colgroup>
                            <tbody>
                                {group.table.slice(0, 5).map((row, index) => (
                                    <tr key={row.team.id}>
                                        <td>
                                            <span className={`sports-position d-inline-flex align-items-center justify-content-center rounded-1 ${index < 4 ? "sports-rank" : ""}`}>
                                                {index + 1}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={row.team.crest} alt="" width={28} height={28}/>
                                                <span>{row.team.name}</span>
                                            </div>
                                        </td>
                                        <td className="text-end">{row.won + row.draw + row.lost}</td>
                                        <td className="text-end">{row.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )) : (
                        <p className="small mt-3 mb-0">
                            {standingStatus === "error" ? "Không tải được bảng xếp hạng." :
                                standingStatus === "succeeded" ? "Chưa có bảng xếp hạng." : "Đang tải bảng xếp hạng..."}
                        </p>
                    )
                ) : (
                    <div className="d-flex flex-column gap-3 mt-3">
                        {upcomingMatches.filter(item => matchDay(item) === selectedDate).map(item => (
                            <SportsMatch key={item.id} item={item} sidebar/>
                        ))}
                        {matches.length === 0 && <p className="small mb-0">{matchMessage}</p>}
                    </div>
                )}
            </div>
        </aside>
    );
}
