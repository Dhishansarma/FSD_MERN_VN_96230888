import {React,useState} from 'react'

const Sta = () => {
    const [animal,setAnimal] = useState("Lion");
    const changeText= () =>{
        setAnimal("Tiger");
    }

  return (
    <div>
       <h1>{animal}</h1>
   

    <button onClick={changeText} >change</button>
    </div>
  )
}

export default Sta
