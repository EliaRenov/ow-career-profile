import TimePlayedBar from "./TimePlayedBar";

const TimePlayedBars = (props) => {
    const mostPlayed = props.data[0];

    return (
        <div className='overview_time-played-bars'>
            {props.data.map((barData) => {
                return <TimePlayedBar mode={barData.mode} hours={barData.hours} key={barData.mode} mostPlayed={mostPlayed} />
            })}
        </div>
    )

}

export default TimePlayedBars