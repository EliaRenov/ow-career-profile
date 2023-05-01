import { useContext } from "react"
import DataContext from '../DataContext'
import Heroes from "../Heroes"
import HeroComparisonCell from "./HeroComparisonCell"


const HeroComparisonTable = () => {
    const allData = useContext(DataContext)
    const mode = allData.states.current
    const data = allData.timePlayedHeroesData[mode]
    const mostPlayed = allData.timePlayedHeroesData[mode][0]

    return (
        <div className="hero-comparison-table">
            {data.map(hero => {
                return <HeroComparisonCell data={hero} heroes={Heroes} mostPlayed={mostPlayed} key={hero.hero} />
                
            })}
        </div>
    )

}

export default HeroComparisonTable