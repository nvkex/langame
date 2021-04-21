import classes from './AppInfo.module.css'
import React from 'react'
import Logo from '../Logo'

const AppInfo = () => {
    return (
        <div className="container">
            <Logo width={'60px'} />
            <h4 className="display-3 text-center text-light">The Langame</h4>
            <p className={`text-center text-light ${classes.appDescription}`}>A very offensive way to learn and boost language skills</p>
        </div>
    )
}

export default AppInfo
