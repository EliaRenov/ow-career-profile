import './CurrentMode.css'
import MostPlayedHeroes from './MostPlayedHeroes'

const CurrentMode = (props) => {

    return (
        <div className="current-mode">
            <h4 className="current-mode_title" >
                MOST PLAYED HEROES
            </h4>
            <MostPlayedHeroes data={props.timePlayedHeroesData} />

        </div>
    )
}

export default CurrentMode