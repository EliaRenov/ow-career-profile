import { useContext } from 'react'
import DataContext from '../DataContext'
import './CurrentMode.css'
import MostPlayedHeroes from './MostPlayedHeroes'
import RoleData from './RoleData'

const CurrentMode = () => {
    const data = useContext(DataContext)
    const mode = data.states.current

    return (
        <div className="current-mode">
            <h4 className="current-mode_title" >
                MOST PLAYED HEROES
            </h4>
            <MostPlayedHeroes />
            <RoleData />
        </div>
    )
}

export default CurrentMode