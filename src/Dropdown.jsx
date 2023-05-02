import { useContext, useState } from 'react'
import DropdownIcon from './assets/dropdown-icon.png'
import OverfastAPIContext from './OverfastAPIContext'
import './Dropdown.css'


const Dropdown = (props) => {
    const {currentMode, setCurrentMode} = useContext(OverfastAPIContext)

    const [isDropdownOpen, setIsDropDownOpen] = useState(false)

    const matchOptionToMsg = (option) => {
        if (option === 'all') {
            return "ALL MODES"
        } else if (option === 'competitive') {
            return "COMPETITIVE"
        } else if (option === 'unranked') {
            return "QUICK PLAY"
        }
    }

    const handleDropdownClick = (event) => {
        setIsDropDownOpen(prev => !prev)
        if (!event.target.getAttribute('value')) return;
        if (event.target.getAttribute('value') === currentMode) return;
        setCurrentMode(event.target.getAttribute('value'));
    }

    document.querySelector('html').addEventListener('click', (event) => {
        if (event.target.className === 'dropdown') return;
        if (event.target.parentNode.className === 'dropdown') return;
        setIsDropDownOpen(false)
    } 
    )

    const dropdownOptions = 
            <div className="dropdown-options">
                {props.options.map(option => {
                    return <div key={option} value={option} className={`dropdown-option ${option === currentMode && 'dropdown-option-current'}`}>
                        {matchOptionToMsg(option)}
                    </div>
                })}
            </div>
    return (
        <button onClick={handleDropdownClick} name={props.name} className="dropdown">
            {matchOptionToMsg(currentMode)}
            <img className="dropdown-icon" src={DropdownIcon} />
            {isDropdownOpen && dropdownOptions}
        </button>
    )
}

export default Dropdown