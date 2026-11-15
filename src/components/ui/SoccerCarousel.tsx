import DragCarousel from "./DragCarousel.tsx";
import type {match} from "../../services/soccerCompetitionService.ts";
import {soccerVNDateFormat} from "../../utils/dateServices.ts";
import {getScore} from "../../utils/soccerScoreCheckService.ts";

export interface SoccerCarouselProps {
    soccerMatchesData: match[],
}


export default function SoccerCarousel({soccerMatchesData}:SoccerCarouselProps){
    return (
        <DragCarousel showControlsStartEnd>
            {soccerMatchesData
                .slice(0, 10)
                .map(match => (
                    <div key={match.id} className={'border-end pe-3 ' +
                        'align-items-center py-1 '
                    }>
                        <p className={'description'}
                           style={{
                               fontSize: 13,
                               color: "#9f9f9f"
                           }}
                        >
                            {soccerVNDateFormat(new Date(match.utcDate))}
                        </p>
                        <div className={'d-flex flex-column gap-2 justify-content-between my-1'}>
                            <div className={'row description align-items-center p-0'}
                                 style={{
                                     fontSize: 12
                                 }}>
                                <div className={'col-1 image-wrapper'}>
                                    <img src={match.homeTeam.crest} alt={match.homeTeam.name}
                                         height={20} width={20}/>
                                </div>
                                <p className={'col mb-0'}>{match.homeTeam.name}</p>
                                <p className={'col-1 mb-0'}>{getScore(match, true)}</p>
                            </div>

                            <div className={'row align-items-center p-0 description'}
                                 style={{
                                     fontSize: 12
                                 }}>
                                <div className={'col-1 image-wrapper'}>
                                    <img src={match.awayTeam.crest} alt={match.awayTeam.name}
                                         height={20} width={20}/>
                                </div>
                                <p className={'col mb-0'}>{match.awayTeam.name}</p>
                                <p className={'col-1 score mb-0'}>{getScore(match, false)}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </DragCarousel>
    )
}