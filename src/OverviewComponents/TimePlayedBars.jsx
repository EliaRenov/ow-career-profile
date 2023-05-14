import { useContext } from "react";
import TimePlayedBar from "./TimePlayedBar";
import OverfastAPIContext from '../OverfastAPIContext'

const TimePlayedBars = () => {
    const {data} = useContext(OverfastAPIContext)
    
    let modes = [
        {mode: 'competitive', hours: data.timePlayedGamemodes?.timePlayedCompetitive
        },
        {mode: 'unranked', hours: data.timePlayedGamemodes?.timePlayedQuickplay
        }
    ]


    modes.sort((a, b) => {
        return b.hours - a.hours
    })

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