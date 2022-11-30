import React, { useState } from 'react'

function Form() {
    const [value, setValue] = useState('')
    const[title, setTitle] = useState('')

    const handleChenge = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setTitle(value)
        setValue('')
    }
    


    return(
        <div>
            <h2>{title}</h2>
            <form action="">
            <input value={value} onChange={(handleChenge) } type="text" placeholder="Your" />
            </form>
            <button onClick={handleSubmit}>Enter</button>
            
        </div>
    )
}

    
        
    


export default Form