import classes from './Logo.module.css'
import React from 'react'
import { DEFAULT_LOGO_WIDTH } from '../constants'

const Logo = (props) => {
  return (
    <div style={{width: props.width ? props.width : DEFAULT_LOGO_WIDTH, paddingTop:'6px'}} className={classes.logoContainer}>
        <img style={{width: props.width ? props.width : DEFAULT_LOGO_WIDTH}} className={`img-fluid ${classes.logo}`}src="./assets/images/logo.png" alt="logo"/>
    </div>
  )
}

export default Logo
