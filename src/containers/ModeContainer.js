import React, { useState } from 'react'
import DevMsg from '../components/SmallComponents/DevMsg'
import HomeTab from '../components/SmallComponents/HomeTab'
import SelectLanguage from '../components/SmallComponents/SelectLanguage'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  '@media (max-width: 400px)': {
    fixedComponents: {
      position: 'fixed !important',
      bottom: '0px',
      width: '100%',
      height: '40px',
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      padding: '0 !important'
    },
    children: {
      paddingBottom: '50px !important'
    }
  },
  fixedComponents: {
    position: 'relative'
  },
  children: {
    position: 'relative'
  }
});

const ModeContainer = (props) => {
  const classes = useStyles();
  const [language, setLanguage] = useState(null);
  return (
    <div>
      {
        language ? (
          <div className={classes.children}>{props.children}</div>
        ) : <SelectLanguage setLanguage={setLanguage} />
      }

      <div className={classes.fixedComponents}>
        <HomeTab />
        <DevMsg />
      </div>

    </div>
  )
}

export default ModeContainer
