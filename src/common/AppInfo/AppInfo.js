import React from 'react'
import Logo from '../Logo'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    appDescription:{
        padding: '4px',
        backgroundColor: '#18bb5c',
        maxWidth: '500px',
        margin: 'auto',
        fontWeight: 700,
    }
});

const AppInfo = () => {
    const classes = useStyles();
        return (
            <div className="container">
                <Logo width={'60px'} />
                <h4 className="display-3 text-center text-light">The Langame</h4>
                <p className={`text-center text-light ${classes.appDescription}`}>A very offensive way to learn and boost language skills</p>
            </div>
        )
    }

export default AppInfo
