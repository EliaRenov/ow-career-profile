import { useContext } from "react";
import TimePlayedBars from "./TimePlayedBars";
import './TimePlayed.css'
import OverfastAPIContext from '../OverfastAPIContext'

const TimePlayed = () => {
    
    const {data, modesHrs, platform} = useContext(OverfastAPIContext)
    const competitive = data.stats[platform].competitive.career_stats['all-heroes'][2].stats[1].value
    const quickplay = data.stats[platform].quickplay.career_stats['all-heroes'][2].stats[0].value
    const hoursPlayed = Math.floor((competitive + quickplay) / 3600 + modesHrs.arcadeHrs + modesHrs.gamebrowserHrs + modesHrs.experimentalHrs)

    return (
        <div className="overview_time-played">
                <div className="overview_overall-hours-circle">
                    <h5 className="overview_overall-hours-text">
                        TIME PLAYED
                    </h5>
                    <h3 className="overview_overall-hours">
                    {hoursPlayed.toLocaleString()} HRS
                    </h3>
                </div>
                <TimePlayedBars />
            </div>
    )

}

export default TimePlayed