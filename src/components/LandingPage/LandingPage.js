import React from 'react'
import { Link } from 'react-router-dom'
import classes from './LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={classes.pageContainer}>
            <div className={`container`}>
                <div className="row">
                    <div className="col-12">
                        <h4 className="display-3 text-center">The Langame</h4>
                    </div>
                </div>
                <div className={`row align-items-center ${classes.cardContainer}`}>
                    <div className="col-6">
                        <Link to="/guess">
                            <div className={classes.card}>
                                Guess
                            </div>
                        </Link>

                    </div>
                    <div className="col-6">
                        <Link to="/learn">
                            <div className={`${classes.disabled} ${classes.card}`}>
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
