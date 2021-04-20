import classes from './HomeTab.module.css'
import React from 'react'

const HomeTab = () => {
  return (
    <a href="/" className={classes.hometab}>
      &#127968; 
      <span className={classes.text}>Home</span>
    </a>
  )
}

export default HomeTab
