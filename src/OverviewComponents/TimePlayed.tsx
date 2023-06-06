import React from 'react'
import TimePlayedBars from "./TimePlayedBars";
import '../styling/OverviewStyling/TimePlayed.css'

import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolKit/app/store';


const TimePlayed = () => {
    
    const { data } = useSelector((state: RootState) => state.PlayerData)


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