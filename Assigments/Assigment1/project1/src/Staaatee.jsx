import React, { useState } from 'react'

const State = () => {
    let animal = "Lion"
    let changeText = ()  => {
      animal = "Tiger"
    }
  
  return (
    <div>
    <h1>{animal}</h1>
   

    <button onClick={changeText}>change</button>
    </div>
  )
}


export default State
