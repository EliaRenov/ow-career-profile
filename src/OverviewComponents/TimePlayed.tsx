import { useContext } from "react";
import TimePlayedBars from "./TimePlayedBars";
import './TimePlayed.css'
import OverfastAPIContext from '../OverfastAPIContext'

const TimePlayed = () => {
    
    const {data} = useContext(OverfastAPIContext)

    const hoursPlayed = data.timePlayedGamemodes?.timePlayedOverall.toLocaleString()

    return (
        <div className="overview_time-played">
                <div className="overview_overall-hours-circle">
                    <h5 className="overview_overall-hours-text">
                        TIME PLAYED
                    </h5>
                    <h3 className="overview_overall-hours">
                    {hoursPlayed} HRS
                    </h3>
                </div>
                <TimePlayedBars />
            </div>
    )

}

export default TimePlayed