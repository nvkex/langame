import classes from './HomeTab.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeTab = () => {
  return (
    <Link to="/" className={classes.hometab}>
      &#127968; 
      <span className={classes.text}>Home</span>
    </Link>
  )
}

export default HomeTab
