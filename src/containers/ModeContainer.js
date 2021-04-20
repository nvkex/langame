import classes from './ModeContainer.module.css'
import React from 'react'
import DevMsg from '../components/SmallComponents/DevMsg'
import HomeTab from '../components/SmallComponents/HomeTab'

const ModeContainer = (props) => {
  return (
    <div>
      <div className={classes.children}>{props.children}</div>
      <div className={classes.fixedComponents}> 
        <HomeTab />
        <DevMsg />
      </div>

    </div>
  )
}

export default ModeContainer
