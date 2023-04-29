import { useContext } from 'react'
import Heroes from '../Heroes'
import DataContext from '../DataContext'


const MostPlayedHeroes = () => {
    const allData = useContext(DataContext);
    const data = allData.timePlayedHeroesData[allData.states.current];

    return (
        <div className="overview__current-mode_most-played-heroes">
            {data.map(card => {
                return <div style={{
                    backgroundImage: `url(${Heroes[card.hero].logo})`}} key={card.hero} className="
                overview__current-mode_most-played-heroes-card">
                    <h4 className="
                overview__current-mode_most-played-heroes-card-hero">
                            {card.hero.toUpperCase()}
                    </h4>
                    <h3 className="
                overview__current-mode_most-played-heroes-card-hours">
                            {card.hours} HRS
                    </h3>

                </div>
            })}



        </div>
    )
}

export default MostPlayedHeroes