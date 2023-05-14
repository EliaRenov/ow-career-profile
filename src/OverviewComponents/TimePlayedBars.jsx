import { useContext } from "react";
import TimePlayedBar from "./TimePlayedBar";
import OverfastAPIContext from '../OverfastAPIContext'

const TimePlayedBars = () => {
    const {data, modesHrs, platform} = useContext(OverfastAPIContext)
    
    const competitive = data.stats[platform].competitive.career_stats['all-heroes'][2].stats[1].value
    const quickplay = data.stats[platform].quickplay.career_stats['all-heroes'][2].stats[0].value

    let modes = [
        {mode: 'competitive', hours: competitive
        },
        {mode: 'unranked', hours: Math.floor(quickplay / 3600)
        },
        // Data is not provided by API:
        // {mode: 'arcade', hours: modesHrs.arcadeHrs
        // },
        // {mode: 'gameBrowser', hours: modesHrs.gamebrowserHrs
        // },
        // {mode: 'experimental', hours: modesHrs.experimentalHrs
        // },
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