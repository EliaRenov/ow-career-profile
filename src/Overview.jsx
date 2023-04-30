import './Overview.css'

import TimePlayed from './OverviewComponents/TimePlayed'
import CurrentMode from './OverviewComponents/CurrentMode'
import Dropdown from './Dropdown'

const Overview = () => {
    return (
        <main className="overview">
            <Dropdown options={['all', 'competitive', 'unranked']} class="overview_mode_dropdown" />
            <TimePlayed />
            <CurrentMode />
        </main>
    )


}

export default Overview