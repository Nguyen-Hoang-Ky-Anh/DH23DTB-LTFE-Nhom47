import {formatDate} from "../utils/dateServices.ts";

const API_KEY = import.meta.env.VITE_SOCCER_API_KEY;

export type soccerCompetitions = "WC" | "CL" | "BL1" |
    "DED" | "BSA" | "PD" | "FL1" | "ELC" | "PPL" | "EC" | "SA"
    | "PL";

export interface referee {
    id: number,
    name: string,
    type: string,
    nationality: string,
}

export interface team {
    id: number,
    name: string,
    shortName: string,
    tla: string,
    crest: string
}

export interface match {
    area: {
        id: number,
        name: string,
        code: string,
        flag: string,
    }
    competition: {
        id: number,
        name: string,
        code: string,
        type: string,
        emblem: string,
    },
    season: {
        id: string,
        startDate: string,
        endData: string,
        currentMatchday: number,
        winner: string
    },
    id: number,
    utcDate: string,
    status: string,
    matchday: number,
    stage: string,
    group: string,
    lastUpdated: string,
    homeTeam: team,
    awayTeam: team,
    score: {
        fullTime: {
            home: number,
            away: number
        },
        halfTime: {
            home: number,
            away: number
        }
    },
    odds: {
        msg: string
    },
    referees: referee[]
}

export interface soccerCompetitionAPIResponseHeader {
    filters: {
        season: string
    },
    area?: {
        id: number,
        name: string,
        code: string,
        flag: string,
    },

    resultSet: {
        count: number,
        first: string,
        last: string,
        played: number
    },
    competitions: {
        id: number,
        name: string,
        code: string,
        type: string,
        emblem: string
    }
}

export interface soccerMatchesCompetitionAPIResponse {
    soccerAPIHeader: soccerCompetitionAPIResponseHeader,
    matches: match[],
}

export interface table {
    positions: number,
    team: team,
    playedGame: number,
    form: string,
    won: number,
    draw: number,
    lost: number,
    points: number,
    goalsFor: number,
    goalsAgainst: number,
    goalDifference: number
}

export interface standing {
    state: string,
    type: string,
    group: string,
    table: table[]
}

export interface soccerStandingsCompetitionAPIResponse {
    soccerAPIHeader: soccerCompetitionAPIResponseHeader,
    standings: standing[]
}

export async function getMatchesCompetitionsFromDateToDate(competition: soccerCompetitions,
                                                           dateFrom?: string, dateTo?: string) {
    const url = new URL(
        `api/competitions/competitions/${competition}/matches`,
        window.location.origin
    );
    if (dateFrom) url.searchParams.set("dateFrom", dateFrom);
    if (dateTo) url.searchParams.set("dateTo", dateTo);

    const response = await fetch(url.toString(), {
        headers: {
            "X-Auth-Token": API_KEY
        }
    });

    if (!response.ok) {
        throw new Error(`Football API Error: ${response.status}`);
    }
    const raw: soccerMatchesCompetitionAPIResponse = await response.json();
    if (!raw.matches || raw.matches.length === 0) {
        return null;
    }
    return raw.matches;
}

export async function getStandingsCompetitions(competition: soccerCompetitions) {
    const url = new URL(
        `/api/competitions/competitions/${competition}/standings`,
        window.location.origin
    );

    const response = await fetch(url.toString(), {
        headers: {
            "X-Auth-Token": API_KEY
        }
    });

    if (!response.ok) {
        throw new Error(`Football API Error: ${response.status}`);
    }
    const raw: soccerStandingsCompetitionAPIResponse = await response.json();
    if (!raw.standings || raw.standings.length === 0) {
        return null;
    }
    return raw.standings;
}

export async function getNearestMatchesCompetition(competition: soccerCompetitions) {
    const today = new Date();

    const dateFrom = new Date(today);
    dateFrom.setDate(today.getDate() - 7);

    const dateTo = new Date(today);
    dateTo.setDate(today.getDate() + 14);

    return getMatchesCompetitionsFromDateToDate(
        competition,
        formatDate(dateFrom),
        formatDate(dateTo)
    );
}