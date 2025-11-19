import React, { useEffect } from 'react'

const UseeeFectt = () => {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("JavaScript");
    useEffect(() => {
        // setTimeout(() => {
        //     setCount((prevCount) => prevCount + 1);
        // }, 1000);
    },[count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{name}</h1>
      {/* <button onClick={() => setName("ReactJS")}>Change Name</button> */}
    </div>
  )
}

export default UseeeFectt
