import React, { useState } from 'react'

function Form() {
    const [value, setValue] = useState('')

    const handleChenge = (e) => {
        setValue(e.target.value)
    }
    


    return(
        <div>
            <h1>{}</h1>
            <form action="">
            <input value={value} onChange={(handleChenge) } type="text" placeholder="Your" />
            </form>
            <button onClick={(handleChenge)}>Enter</button>
            
        </div>
    )
}

    
        
    


export default Form