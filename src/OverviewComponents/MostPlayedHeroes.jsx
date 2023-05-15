import { useContext } from 'react'
import Heroes from '../Heroes'
import OverfastAPIContext from '../OverfastAPIContext'

const MostPlayedHeroes = () => {
    const {data, currentMode, platform} = useContext(OverfastAPIContext)
    
    const mostPlayed = [data.mostPlayedHeroes[currentMode][0], data.mostPlayedHeroes[currentMode][1], data.mostPlayedHeroes[currentMode][2]]
    
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