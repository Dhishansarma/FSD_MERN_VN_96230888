import React, { useEffect, useState } from 'react'

const Sam4 = () => {
    const [count,setCount] = useState(0)

    const funCount = () =>{
        setCount(()=>{
            return count+1;
        });
    }

    useEffect(() =>{
        console.log("The count value has been updated:");    
    });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={funCount} >Increment</button>
    </div>
  )
}

export default Sam4
