import Heroes from '../Heroes'

const MostPlayedHeroes = (props) => {
    return (
        <div className="overview__current-mode_most-played-heroes">
            {props.data.map(card => {
                return <div key={card.hero} className="
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