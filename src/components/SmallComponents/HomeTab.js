import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@media (max-width: 400px)': {
    hometab: {
      width: '100%',
      position: 'relative !important',
      bottom: '0px',
      padding: '0px !important',
      backdropFilter: 'unset !important',
      backgroundColor: 'unset !important',
      top: '0px !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    text: {
      display: 'none !important'
    }
  },
  text: {
    display: 'inline'
  },
  hometab: {
    fontWeight: 600,
    transition: '0.4s',
    cursor: 'pointer',
    zIndex: '10',
    position: 'fixed',
    top: '10px',
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '0 4px 4px 0',
    padding: '10px',
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      color: 'black'
    }
  }

});

const HomeTab = () => {
  const classes = useStyles();
  return (
    <Link to="/" className={classes.hometab}>
      &#127968;
      <span className={classes.text}>Home</span>
    </Link>
  )
}

export default HomeTab
