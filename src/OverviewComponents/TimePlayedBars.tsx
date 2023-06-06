import TimePlayedBar from "./TimePlayedBar";

import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolKit/app/store';

type mode = {
    mode: 'competitive' | 'unranked' | 'arcade' | 'gameBrowser' | 'experimental'
    hours: number
}

const TimePlayedBars = () => {
    const { data } = useSelector((state: RootState) => state.PlayerData)
    
    let modes: mode[] = [
        {mode: 'competitive' as const, hours: data.timePlayedGamemodes?.timePlayedCompetitive
        },
        {mode: 'unranked' as const, hours: data.timePlayedGamemodes?.timePlayedQuickplay
        }
    ].sort((a, b) => b.hours - a.hours)

    let mostPlayed = modes[0];

    return (
        <div className='overview_time-played-bars'>
            {modes.map((barData) => {
                return <TimePlayedBar mode={barData.mode} hours={barData.hours} key={barData.mode} mostPlayed={mostPlayed} />
            })}
        </div>
    )

}

export default TimePlayedBars