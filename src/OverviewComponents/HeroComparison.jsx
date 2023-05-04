import './HeroComparison.css'
import HeroComparisonTable from './HeroComparisonTable'
import OverfastAPIContext from '../OverfastAPIContext';
import Dropdown from '../Dropdown'
import '../Dropdown.css'
import { useContext, useState } from 'react'

const HeroComparison = () => {

    const {data, platform } = useContext(OverfastAPIContext)
    const [stat, setStat] = useState('time_played')
    const options = ['time_played', 'games_won', 'objective_kills', 'multikill_best', 'eliminations_per_life', 'critical_hit_accuracy', 'weapon_accuracy', 'win_percentage'].filter(option => {
        return data.stats[platform].quickplay.heroes_comparisons[option] && data.stats[platform].competitive.heroes_comparisons[option]
    }
        )


    return (            
        <div className="hero-comparison">
            <Dropdown className="overview_mode_dropdown hero-comparison-dropdown" options={options} state={stat} setState={setStat} />
            <h4 className="hero-comparison_title" >
                HERO COMPARISON
            </h4>
            <HeroComparisonTable stat={stat}/>

        </div>
    )

}

export default HeroComparison