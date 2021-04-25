import React from 'react'
import { createUseStyles,  useTheme } from 'react-jss'
import { Link } from 'react-router-dom'
import AppInfo from '../../common/AppInfo/AppInfo'

const useStyles = createUseStyles({
    pageContainer: {
        color: 'white',
        width: '100vw',
        height: '100vh'
    },
    appDescription: {
        padding: '4px',
        backgroundColor: '#18bb5c',
        maxWidth: '500px',
        margin: 'auto',
        fontWeight: 700
    },
    h4: {
        fontWeight: '900 !important',
        textShadow: '1px 1px 2px #343434, 2px 2px 10px rgba(0, 0, 0, 0.3)'
    },
    cardContainer: {
        margin: 'auto',
        maxWidth: '50vw',
        height: '50vh',
        '& a': {
            textDecoration: 'none',
            color: '#2C3A47'
        }
    },
    card: {
        fontWeight: 700,
        textShadow: '1px 1px 2px #343434,2px 2px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        textTransform: 'uppercase',
        transition: '0.3s',
        fontSize: '30px',
        height: '200px',
        borderRadius: '10px',
        boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(255,255,255, 0.4)',
        color: ({ theme }) => theme.color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            fontSize: '34px',
            letterSpacing: '2px'
        }
    }

});

const LandingPage = () => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
        <div className={classes.pageContainer}>
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
