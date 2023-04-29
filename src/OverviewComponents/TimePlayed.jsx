import DataContext from "../DataContext";
import { useContext } from "react";
import TimePlayedBars from "./TimePlayedBars";
import './TimePlayed.css'

const TimePlayed = () => {
    const allData = useContext(DataContext)
    const data = allData.timePlayedModesData

    const overallHoursPlayed = data.reduce((total, item) => total + item.hours, 0)

    return (
        <div className="overview_time-played">
                <div className="overview_overall-hours-circle">
                    <h5 className="overview_overall-hours-text">
                        TIME PLAYED
                    </h5>
                    <h3 className="overview_overall-hours">
                    {overallHoursPlayed.toLocaleString()} HRS
                    </h3>
                </div>
                <TimePlayedBars />
            </div>
    )

}

export default TimePlayed