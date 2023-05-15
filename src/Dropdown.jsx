import { useContext, useState } from 'react'
import DropdownIcon from './assets/dropdown-icon.png'
import './Dropdown.css'


const Dropdown = (props) => {
    const [isDropdownOpen, setIsDropDownOpen] = useState(false)


    const matchOptionToMsg = (option) => {
        if (option === 'all') {
            return "ALL MODES"
        } else if (option === 'competitive') {
            return "COMPETITIVE"
        } else if (option === 'unranked') {
            return "QUICK PLAY"
        } else if (option === 'quickplay') {
            return "QUICK PLAY"
        } else if (option === 'win_percentage') {
            return "WIN PERCENTAGE"
        } else if (option === 'objective_kills') {
            return 'OBJECTIVE KILLS'
        } else if (option === 'time_played') {
            return 'TIME PLAYED'
        } else if (option === 'weapon_accuracy') {
            return 'WEAPON ACCURACY'
        } else if (option === 'critical_hit_accuracy') {
            return 'CRITICAL HIT ACCURACY'
        } else if (option === 'eliminations_per_life') {
            return 'ELIMINATIONS PER LIFE'
        } else if (option === 'multikill_best') {
            return 'MULTIKILL - BEST'
        } else if (option === 'games_won') {
            return 'GAMES WON'
        } 
    }

    const handleDropdownClick = (event) => {
        setIsDropDownOpen(prev => !prev)
        if (!event.target.getAttribute('value')) return;
        if (event.target.getAttribute('value') === props.state) return;
        props.setState(event.target.getAttribute('value'));
    }

    document.querySelector('html').addEventListener('click', (event) => {
        if (event.target.className.includes('dropdown')) return;
        if (event.target?.parentNode?.className.includes('dropdown')) return;
        setIsDropDownOpen(false)
    } 
    )
    
    const dropdownOptions = 
            <div className="dropdown-options">
                {props.options.map(option => {
                    return <div key={option} value={option} className={`dropdown-option ${option === props.state && 'dropdown-option-current'}`}>
                        {matchOptionToMsg(option)}
                    </div>
                })}
            </div>
    return (
        <button onClick={handleDropdownClick} name={props.name} className={`dropdown ${props.className && props.className}`}>
            {matchOptionToMsg(props.state)}
            <img className="dropdown-icon" src={DropdownIcon} />
            {isDropdownOpen && dropdownOptions}
        </button>
    )
}

export default Dropdown