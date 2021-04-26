import React from 'react'
import TextCard1 from '../../common/Cards/TextCard1'
import { SUPPORTED_LANGUAGES } from '../../data'
import AppInfo from '../../common/AppInfo/AppInfo'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    width: '50%',
    minWidth: '320px',
    margin: '20px auto',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: '4px',
    padding: '10px'
  }
});

const SelectLanguage = (props) => {
  const classes = useStyles();
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
