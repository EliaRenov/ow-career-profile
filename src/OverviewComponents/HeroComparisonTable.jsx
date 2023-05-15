import { useContext } from "react"
import Heroes from "../Heroes"
import HeroComparisonCell from "./HeroComparisonCell"
import OverfastAPIContext from '../OverfastAPIContext';

const HeroComparisonTable = ({stat}) => {
    const {data, currentMode, platform} = useContext(OverfastAPIContext)

    const comparison = data.heroComparisonStats[stat][currentMode === 'unranked' ? 'quickplay' : currentMode]

    const mostPlayed = comparison[0]

    return (
        <div className="hero-comparison-table">
            {comparison.map(hero => {
                return <HeroComparisonCell data={hero} heroes={Heroes} mostPlayed={mostPlayed} key={hero.hero} type={stat} />
                
            })}
        </div>
    )

}

export default HeroComparisonTable