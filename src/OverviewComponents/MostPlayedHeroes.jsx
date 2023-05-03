import { useContext } from 'react'
import DataContext from '../DataContext'
import Heroes from '../Heroes'
import OverfastAPIContext from '../OverfastAPIContext'

const MostPlayedHeroes = () => {
    const {data, currentMode, platform, unrankedHeroComparison, compHeroComparison, allHeroComparison} = useContext(OverfastAPIContext)
    let sortedPlayTime;

    if (currentMode === 'unranked') {
        sortedPlayTime = unrankedHeroComparison
    } else if (currentMode === 'all') {
        sortedPlayTime = allHeroComparison
    } else if (currentMode === 'competitive') {
        sortedPlayTime = compHeroComparison
    }


    const mostPlayed = [sortedPlayTime[0], sortedPlayTime[1], sortedPlayTime[2]]

    const allData = useContext(DataContext);
    const oldData = allData.timePlayedHeroesData[allData.states.current];
    
    return (
        <div className="most-played-heroes">
            {mostPlayed.map(card => {
                return <div style={{
                    backgroundImage: `url(${Heroes[card.hero].logo})`}} key={card.hero} className="most-played-heroes-card">
                    <h4 className="most-played-heroes-card-hero">
                            {card.hero.toUpperCase()}
                    </h4>
                    <h3 className="most-played-heroes-card-hours">
                            {Math.floor(card.value / 3600)} HRS
                    </h3>

                </div>
            })}



        </div>
    )
}

export default MostPlayedHeroes