import { useContext, useEffect, useState } from "react"
import Heroes from "../Heroes"
import HeroComparisonCell from "./HeroComparisonCell"
import OverfastAPIContext from '../OverfastAPIContext';

const HeroComparisonTable = ({stat}) => {
    const {data, currentMode, setCurrentTab, setCurrentHero} = useContext(OverfastAPIContext)

    const comparison = data.heroComparisonStats[stat][currentMode]
    const mostPlayed = comparison[0]
    

    return (
        <div className="hero-comparison-table">
            {comparison.map(hero => {
                return <HeroComparisonCell data={hero} heroes={Heroes} mostPlayed={mostPlayed} key={Math.random()} type={stat} setCurrentTab={setCurrentTab} setCurrentHero={setCurrentHero} />
                
            })}
        </div>
    )

}

export default HeroComparisonTable