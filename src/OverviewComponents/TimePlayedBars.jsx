import { useContext } from "react";
import TimePlayedBar from "./TimePlayedBar";
import DataContext from '../DataContext'

const TimePlayedBars = () => {
    const allData = useContext(DataContext)
    const data = allData.timePlayedModesData

    const mostPlayed = data[0];

    return (
        <div className='overview_time-played-bars'>
            {data.map((barData) => {
                return <TimePlayedBar mode={barData.mode} hours={barData.hours} key={barData.mode} mostPlayed={mostPlayed} />
            })}
        </div>
    )

}

export default TimePlayedBars