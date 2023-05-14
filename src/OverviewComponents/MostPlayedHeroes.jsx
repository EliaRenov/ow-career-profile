import { useContext } from 'react'
import Heroes from '../Heroes'
import OverfastAPIContext from '../OverfastAPIContext'

const MostPlayedHeroes = () => {
    const {data, currentMode, platform} = useContext(OverfastAPIContext)
    const unrankedHeroComparison = structuredClone(data.stats[platform].quickplay.heroes_comparisons.time_played.values);
    const compHeroComparison = structuredClone(data.stats[platform].competitive.heroes_comparisons.time_played.values);
    let allHeroComparison = structuredClone(unrankedHeroComparison)

    for (let hero of compHeroComparison) {
        let element = allHeroComparison.find(playTimeHero =>                        playTimeHero.hero  === hero.hero);
        if (element) {
            element.value += hero.value
        } else {
            allHeroComparison.push(hero)
        }
    } 
  allHeroComparison = allHeroComparison.sort((a, b) => b.value - a.value)

    let sortedPlayTime;

    if (currentMode === 'unranked') {
        sortedPlayTime = unrankedHeroComparison
    } else if (currentMode === 'all') {
        sortedPlayTime = allHeroComparison
    } else if (currentMode === 'competitive') {
        sortedPlayTime = compHeroComparison
    }


    const mostPlayed = [sortedPlayTime[0], sortedPlayTime[1], sortedPlayTime[2]]
    
    return (
        <div className="most-played-heroes">
            {mostPlayed.map(card => {
                return <div style={{
                    backgroundImage: `url(${Heroes[card.hero].logo})`}} key={card.hero} className="most-played-heroes-card">
                    <h4 className="most-played-heroes-card-hero">
                            {card.hero.toUpperCase().replace('-', ' ').replace('DVA', 'D.VA')}
                    </h4>
                    <h3 className="most-played-heroes-card-hours">
                            {Math.round(card.value / 3600)} HRS
                    </h3>

                </div>
            })}



        </div>
    )
}

export default MostPlayedHeroes