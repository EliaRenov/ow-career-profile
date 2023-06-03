import OverfastAPIContext from '../OverfastAPIContext';
import { useContext, useState, useRef } from 'react';
import './Form.css'



const Form = () => {
    const { isFormOpen, setIsFormOpen, setUsername } = useContext(OverfastAPIContext)
    if (!isFormOpen) return;

    const usernameInput = useRef('')

    

    const handleSubmit = (event) => {
        event.preventDefault()

        setUsername(usernameInput.current.value.replace('#', '-'))
        setIsFormOpen(false)
    }

    return (
        <>
        
        <div className="form-overlay" onClick={() => setIsFormOpen(false)} />
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="btag"></label>
            <input id="btag" type="text" placeholder="super#12850" ref={usernameInput}/>
            <button type="submit" className="submit-btn">Continue</button>
        </form>
        </>
    )
}

export default Form