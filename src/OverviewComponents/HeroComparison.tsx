import '../styling/OverviewStyling/HeroComparison.css'
import HeroComparisonTable from './HeroComparisonTable'
import Dropdown from '../miscComponents/Dropdown'
import '../styling/Dropdown.css'
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolKit/app/store';
import { setStat } from '../ReduxToolKit/features/UISlice';


const HeroComparison = () => {
    const { stat } = useSelector((state: RootState) => state.UI)

    const options = ['time_played', 'games_won', 'objective_kills', 'multikill_best', 'eliminations_per_life', 'critical_hit_accuracy', 'weapon_accuracy']

    return (            
        <div className="hero-comparison">
            <Dropdown class="overview_mode_dropdown hero-comparison-dropdown" options={options} state={stat} setState={setStat} />
            <h4 className="hero-comparison_title" >
                HERO COMPARISON
            </h4>
            <HeroComparisonTable stat={stat}/>

        </div>
    )
}

export default HeroComparison