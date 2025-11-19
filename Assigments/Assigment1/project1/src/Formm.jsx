import React, { useState } from 'react'

const Formm = () => {
    const [text,setText]=useState("")
    const textValue=(e) =>{
        setText(e.target.value)
    }
    const captialMode=()=>{
        setText(text.toUpperCase())
    }
     const smallMode=()=>{
        setText(text.toLowerCase())
    }

  return (
    <div>
      <h1 >{text}</h1>
      <input type="text" name="" id="" onChange={textValue} /><br/>
      <button onClick={captialMode}>UpperCase </button>
      <button onClick={smallMode}>LowerCase</button>

    </div>
  )
}

export default Formm
