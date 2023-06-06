import './styling/OverviewStyling/Overview.css'
import TimePlayed from './OverviewComponents/TimePlayed'
import CurrentMode from './OverviewComponents/CurrentMode'
import Dropdown from './miscComponents/Dropdown'
import HeroComparison from './OverviewComponents/HeroComparison'


import { useSelector } from 'react-redux'
import { RootState } from './ReduxToolKit/app/store';
import { setCurrentMode } from './ReduxToolKit/features/UISlice';

const Overview = () => {
    const { currentMode } = useSelector((state: RootState) => state.UI)
    const { data } = useSelector((state: RootState) => state.PlayerData)

    return (
        <main className="overview">
            <Dropdown state={currentMode} setState={setCurrentMode} options={data.modes} class="overview_mode_dropdown" />
            <TimePlayed />
            <CurrentMode />
            <HeroComparison />
        </main>
    )


}

export default Overview