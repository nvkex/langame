import React from 'react'
import { Link } from 'react-router-dom'
import AppInfo from '../../common/AppInfo/AppInfo'
import classes from './LandingPage.module.css'

const LandingPage = () => {
    return (
        <div style={{marginTop:'4px'}} className={classes.pageContainer}>
            <div className={`container`}>
                <AppInfo />
                <div className={`row align-items-center ${classes.cardContainer}`}>
                    <div className="col-12 col-md-12 col-lg-6">
                        <Link to="/guess">
                            <div className={`my-2 ${classes.card}`}>
                                Guess
                            </div>
                        </Link>

                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <Link to="/learn">
                            <div className={`my-2 ${classes.disabled} ${classes.card}`}>
                                Learn
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
