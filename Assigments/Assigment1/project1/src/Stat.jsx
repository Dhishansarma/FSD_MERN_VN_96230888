import { useState } from "react";
import React from 'react'

const Stat = () => {
    const [show,setShow]=useState(true);
    const handleClick=() =>{
        setShow(!show);
    }
  return (
    <div>
     
      <h1>{ show ? " i am visible":""}</h1>
      <button onClick={handleClick}>{show ?"Hide" :"Show"}</button>
    </div>
  )
}

export default Stat
