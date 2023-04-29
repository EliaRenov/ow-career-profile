import { useContext } from 'react'
import DataContext from './DataContext'
import DropdownIcon from './assets/dropdown-icon.png'
import './Dropdown.css'


const Dropdown = (props) => {
    const allData = useContext(DataContext)
    const mode = allData.states.current
    let modeMsg;
    if (mode === 'all') {
        modeMsg = "ALL MODES"
    } else if (mode === 'competitive') {
        modeMsg = "COMPETITIVE"
    } else if (mode === 'unranked') {
        modeMsg = "QUICK PLAY"
    }


    return (
        <button name={props.name} className="dropdown">
            {modeMsg}
            <img className="dropdown-icon" src={DropdownIcon} />
        </button>

       


    )
}
// style="display:block; padding:29px 0 0 0;"
export default Dropdown