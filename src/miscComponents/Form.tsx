import React, { useRef } from 'react';
import '../styling/Form.css'
import { useDispatch } from 'react-redux'
import { setIsFormOpen, setUsername } from '../ReduxToolKit/features/UISlice';
import { AppDispatch } from '../ReduxToolKit/app/store';



const Form = () => {
    const dispatch = useDispatch<AppDispatch>();
    const usernameInput = useRef<HTMLInputElement>(null!)

    const closeForm = () => dispatch(setIsFormOpen(false))
    const handleUsernameChange = () => dispatch(setUsername(usernameInput.current.value.replace('#', '-')))
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        handleUsernameChange()
        closeForm()
    }

    return (
        <>
        
        <div className="form-overlay" onClick={closeForm} />
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="btag"></label>
            <input id="btag" type="text" placeholder="super#12850" ref={usernameInput}/>
            <button type="submit" className="submit-btn">Continue</button>
        </form>
        </>
    )
}

export default Form