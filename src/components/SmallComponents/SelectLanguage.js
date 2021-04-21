import classes from './SelectLanguage.module.css'
import React from 'react'
import TextCard1 from '../../common/Cards/TextCard1'
import { SUPPORTED_LANGUAGES } from '../../data/Languages'
import AppInfo from '../../common/AppInfo/AppInfo'

const SelectLanguage = (props) => {
  return (
    <div className="container">
      <AppInfo />
      <div className={classes.container}>
        <h2 className="display-4 text-light text-center">Select a language.</h2>
        <div className={`row`}>
          {
            SUPPORTED_LANGUAGES.map(language => (
              <div className="col-6 col-lg-3" onClick={() => props.setLanguage(language)} key={language.code}>
                <TextCard1 text={language.lang} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SelectLanguage
