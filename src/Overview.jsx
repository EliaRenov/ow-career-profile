import './Overview.css'

import TimePlayed from './OverviewComponents/TimePlayed'
import CurrentMode from './OverviewComponents/CurrentMode'

const Overview = (props) => {
   


    return (
        <main className="overview">
            <TimePlayed />
            <CurrentMode />
        </main>
    )


}

export default Overview