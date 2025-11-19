import React from 'react'

import tiger from "./assets/download (1).jpeg"

import styles from "./button.module.css"

const sam2 = () => {
    let a=[1,2,3,4,5]
    
  return (
    <div>
  
    <img src="/images/download.jpeg" alt="" />
    <img src={tiger} alt="" />
    <button type="submit" className={styles.btn}>submit</button>

    </div>
  )
}

export default sam2
