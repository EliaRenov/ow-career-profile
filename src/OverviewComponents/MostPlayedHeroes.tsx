import Heroes from '../data/Heroes'
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolKit/app/store';

type Hero = {
    hero: string
    value: number
}

const MostPlayedHeroes = () => {
    const { data } = useSelector((state: RootState) => state.PlayerData)
    const { currentMode } = useSelector((state: RootState) => state.UI)
    
    const mostPlayed: Hero[] = data.mostPlayedHeroes[currentMode]
    
    return (
        <div className="most-played-heroes">
            {mostPlayed.map((card: Hero) => {
                return <div style={{
                    backgroundImage: `url(${Heroes[card.hero].logo})`}} key={card.hero} className="most-played-heroes-card">
                    <h4 className="most-played-heroes-card-hero">
                            {card.hero.toUpperCase().replace('-', ' ').replace('DVA', 'D.VA')}
                    </h4>
                    <h3 className="most-played-heroes-card-hours">
                            {Math.ceil(card.value / 3600)} HRS
                    </h3>

                </div>
            })}



        </div>
    )
}

export default MostPlayedHeroes