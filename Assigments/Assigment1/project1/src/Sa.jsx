import React from 'react'

function Sa() {
    const isDarkMode = true;

  return (
    <div
         style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        padding: "20px",
      }}
    >
      <h1>{isDarkMode ? "Dark Mode On" : "Light Mode On"}</h1>
    </div>
  )
}

export default Sa
