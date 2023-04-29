import './Overview.css'

import TimePlayed from './OverviewComponents/TimePlayed'
import CurrentMode from './OverviewComponents/CurrentMode'

const Overview = (props) => {
   


    return (
        <main className="overview">
            <TimePlayed timePlayedModesData={props.timePlayedModesData} />
            <CurrentMode timePlayedHeroesData={props.timePlayedHeroesData.slice(0, 3)} />
        </main>
    )


}

export default Overview