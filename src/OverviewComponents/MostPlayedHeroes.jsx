import { useContext } from 'react'
import DataContext from '../DataContext'
import Heroes from '../Heroes'


const MostPlayedHeroes = () => {
    const allData = useContext(DataContext);
    const data = allData.timePlayedHeroesData[allData.states.current];
    
    return (
        <div className="most-played-heroes">
            {data.slice(0, 3).map(card => {
                return <div style={{
                    backgroundImage: `url(${Heroes[card.hero].logo})`}} key={card.hero} className="most-played-heroes-card">
                    <h4 className="most-played-heroes-card-hero">
                            {card.hero.toUpperCase()}
                    </h4>
                    <h3 className="most-played-heroes-card-hours">
                            {card.hours} HRS
                    </h3>

                </div>
            })}



        </div>
    )
}

export default MostPlayedHeroes