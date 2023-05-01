import './Overview.css'

import TimePlayed from './OverviewComponents/TimePlayed'
import CurrentMode from './OverviewComponents/CurrentMode'
import Dropdown from './Dropdown'
import HeroComparison from './OverviewComponents/HeroComparison'

const Overview = () => {
    return (
        <main className="overview">
            <Dropdown options={['all', 'competitive', 'unranked']} class="overview_mode_dropdown" />
            <TimePlayed />
            <CurrentMode />
            <HeroComparison />
        </main>
    )


}

export default Overview