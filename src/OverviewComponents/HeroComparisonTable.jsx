import { useContext } from "react"
import DataContext from '../DataContext'
import Heroes from "../Heroes"
import HeroComparisonCell from "./HeroComparisonCell"
import OverfastAPIContext from '../OverfastAPIContext';

const HeroComparisonTable = () => {
    const {data, currentMode, platform, unrankedHeroComparison, compHeroComparison, allHeroComparison} = useContext(OverfastAPIContext)

    let sortedPlayTime;

    if (currentMode === 'unranked') {
        sortedPlayTime = unrankedHeroComparison
    } else if (currentMode === 'all') {
        sortedPlayTime = allHeroComparison
    } else if (currentMode === 'competitive') {
        sortedPlayTime = compHeroComparison
    }

    console.log(sortedPlayTime)

    const allData = useContext(DataContext)
    const mode = currentMode
    const oldData = sortedPlayTime
    console.log(oldData)
    const mostPlayed = sortedPlayTime[0]

    return (
        <div className="hero-comparison-table">
            {oldData.map(hero => {
                return <HeroComparisonCell data={hero} heroes={Heroes} mostPlayed={mostPlayed} key={hero.hero} />
                
            })}
        </div>
    )

}

export default HeroComparisonTable