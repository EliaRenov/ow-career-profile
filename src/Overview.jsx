import './Overview.css'
import TimePlayedBars from './OverviewComponents/TimePlayedBars'

const Overview = (props) => {
    return (
        <main className="overview">
            <div className="overview_time-played">
                <TimePlayedBars data={props.timePlayedData} />
            </div>



        </main>
    )


}

export default Overview