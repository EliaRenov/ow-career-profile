import { useState, useEffect } from 'react'
import DropdownIcon from '../assets/dropdown-icon.png'
import '../styling/Dropdown.css'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '../ReduxToolKit/app/store';

type DropdownProps = {
    state: string
    setState: (value: string) => {
        type: string
        payload: string
    }
    options: string[]
    class: string
}

const Dropdown = (props: DropdownProps) => {

    const dispatch = useDispatch<AppDispatch>();

    const [isDropdownOpen, setIsDropDownOpen] = useState(false)


    const matchOptionToMsg = (option: string) => {
        return option.toUpperCase().replaceAll("_", ' ').replace('KP', 'K P')
    }

    const handleDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
        if (event.target instanceof HTMLElement) {
            const id = event.target.getAttribute('id')
            
            if (id && id !== props.state) dispatch(props.setState(id));
            setIsDropDownOpen(prev => !prev)
        }
    }

    
    useEffect(() => { 
        const WindowEventListener = (event: MouseEvent) => {
            const { target } = event
            if (target instanceof HTMLElement) {
                if (target.className.includes('dropdown')) return;
                if ((target.parentNode as HTMLElement)?.className.includes('dropdown')) return;
            }
            
            setIsDropDownOpen(false)
        } 

        window.addEventListener('click', WindowEventListener)

        return () => window.removeEventListener('click', WindowEventListener)
    }, [])

    
    const dropdownOptions = 
            <div className="dropdown-options">
                {props.options.map(option => {
                    return <div key={option} id={option} className={`dropdown-option ${option === props.state && 'dropdown-option-current'}`}>
                        {matchOptionToMsg(option)}
                    </div>
                })}
            </div>

    return (
        <button onClick={handleDropdownClick} className={`dropdown ${props.class}`}>
            {matchOptionToMsg(props.state)}
            <img className="dropdown-icon" src={DropdownIcon} />
            {isDropdownOpen && dropdownOptions}
        </button>
    )
}

export default Dropdown