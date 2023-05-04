import OverfastAPIContext from '../OverfastAPIContext';
import { useContext } from 'react';
import { useRef } from 'react';
import './Form.css'



const Form = () => {
    const { isFormOpen, setIsFormOpen, setUsername } = useContext(OverfastAPIContext)
    if (!isFormOpen) return;

    const userInput = useRef('')

    const handleSubmit = (event) => {
        event.preventDefault()

        setUsername(userInput.current.value)
        setIsFormOpen(false)
    }

    return (
        <>
        
        <div className="form-overlay" onClick={() => setIsFormOpen(false)} />
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="btag"></label>
            <input id="btag" type="text" placeholder="super#12850" ref={userInput}/>
            <button type="submit" className="submit-btn">Continue</button>
        </form>
        </>
    )
}

export default Form