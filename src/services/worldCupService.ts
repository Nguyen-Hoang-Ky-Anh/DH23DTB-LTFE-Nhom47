export interface WorldCupMatch {
    KeyId: string;
    SeasonName: string;
    MatchDateString: string;
    MatchTimestamp: number;
    GroupName: string | null;
    HomeName: string;
    HomeFlag: string;
    HomeScore: string;
    AwayName: string;
    AwayFlag: string;
    AwayScore: string;
}

export interface WorldCupGroup {
    GroupName: string;
    ClubRanking: {
        TeamName: string;
        TeamFlag: string;
        Wins: string;
        Draws: string;
        Losses: string;
        Points: string;
    }[];
}

interface WorldCupResponse {
    Success: boolean;
    Data?: {
        success: boolean;
        data: {data: WorldCupMatch[]}[] | {LisGroup: WorldCupGroup[]};
    };
}

async function fetchWorldCup(path: string) {
    const response = await fetch(`/api/world-cup/${path}`);
    if (!response.ok) {
        throw new Error(`World Cup API error: ${response.status}`);
    }

    const result: WorldCupResponse = await response.json();
    if (!result.Success || !result.Data?.success || !result.Data.data) {
        throw new Error("World Cup API không trả data");
    }

    return result.Data.data;
}

export async function fetchWorldCupMatches() {
    const seasons = await fetchWorldCup(
        "api-data-sport.htm?m=ltd-all&keyword=World_Cup&top=500&sdate=1779323109735&edate=&islast=false&isphantich=false",
    );
    if (!Array.isArray(seasons)) {
        throw new Error("World Cup API trả matches không hợp lệ");
    }

    const matches = seasons.flatMap(season => season.data);
    return matches
        .filter(match => match.SeasonName === "2026")
        .sort((first, second) => first.MatchTimestamp - second.MatchTimestamp);
}

export async function fetchWorldCupGroups() {
    const data = await fetchWorldCup(
        "sport5-api-data.htm?m=rank-topic&keyword=World_Cup&seasonname=2026",
    );
    if (Array.isArray(data) || !Array.isArray(data.LisGroup)) {
        throw new Error("World Cup API trả groups không hợp lệ");
    }

    const groups = data.LisGroup;
    if (groups.some(group => !Array.isArray(group?.ClubRanking))) {
        throw new Error("World Cup API trả rankings không hợp lệ");
    }

    return groups;
}
