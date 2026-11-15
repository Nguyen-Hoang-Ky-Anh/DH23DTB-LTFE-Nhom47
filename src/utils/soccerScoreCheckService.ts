import type {match} from "../services/soccerCompetitionService.ts";

export function getScore(match: match, isHome: boolean) {
    const today = new Date();
    const matchDate = new Date(match.utcDate);
    const score = isHome? match.score.fullTime.home : match.score.fullTime.away;
    if(score <= 0) {
        return today > matchDate ? 0 : "-";
    } else {
        return score;
    }
}