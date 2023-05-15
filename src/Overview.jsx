import './Overview.css'
import TimePlayed from './OverviewComponents/TimePlayed'
import CurrentMode from './OverviewComponents/CurrentMode'
import Dropdown from './Dropdown'
import HeroComparison from './OverviewComponents/HeroComparison'
import OverfastAPIContext from './OverfastAPIContext'
import { useContext } from 'react'


const Overview = () => {
    const {data, platform, currentMode, setCurrentMode} = useContext(OverfastAPIContext)
    let options = ['all', 'quickplay']

    if (data.summary.competitive && data.summary.competitive[platform]) {
        options = ['all', 'quickplay', 'competitive']
    }

    return (
        <main className="overview">
            <Dropdown state={currentMode} setState={setCurrentMode} options={options} class="overview_mode_dropdown" />
            <TimePlayed />
            <CurrentMode />
            <HeroComparison />
        </main>
    )


}

export default Overview