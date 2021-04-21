import classes from './ModeContainer.module.css'
import React, { useState } from 'react'
import DevMsg from '../components/SmallComponents/DevMsg'
import HomeTab from '../components/SmallComponents/HomeTab'
import SelectLanguage from '../components/SmallComponents/SelectLanguage'

const ModeContainer = (props) => {

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
