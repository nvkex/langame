import React from 'react'
import TextCard1 from '../../common/Cards/TextCard1'
import { SUPPORTED_LANGUAGES } from '../../data'
import AppInfo from '../../common/AppInfo/AppInfo'
import styled from 'styled-components';


const Container = styled.div`
    width: 50%;
    min-width: 320px;
    margin: 20px auto;
    background-color: rgba(0,0,0,0.5);
    border-radius: 4px;
    padding: 10px;
`

const SelectLanguage = (props) => {
  return (
    <div className="container">
      <AppInfo />
      <Container>
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
      </Container>
    </div>
  )
}

export default SelectLanguage
