import { useContext, useState } from 'react'
import DataContext from './DataContext'
import DropdownIcon from './assets/dropdown-icon.png'
import './Dropdown.css'


const Dropdown = (props) => {
    const [isDropdownOpen, setIsDropDownOpen] = useState(false)

    const allData = useContext(DataContext)
    const mode = allData.states.current
    const setMode = allData.states.setCurrent

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
        if (event.target.getAttribute('value') === mode) return;
        setMode(event.target.getAttribute('value'));
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
                    return <div key={option} value={option} className={`dropdown-option ${option === mode && 'dropdown-option-current'}`}>
                        {matchOptionToMsg(option)}
                    </div>
                })}
                
            </div>
        

    return (
        <button onClick={handleDropdownClick} name={props.name} className="dropdown">
            {matchOptionToMsg(mode)}
            <img className="dropdown-icon" src={DropdownIcon} />
            {isDropdownOpen && dropdownOptions}
        </button>

       


    )
}
// style="display:block; padding:29px 0 0 0;"
export default Dropdown