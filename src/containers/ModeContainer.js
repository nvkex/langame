import React, { useState } from 'react'
import DevMsg from '../components/SmallComponents/DevMsg'
import HomeTab from '../components/SmallComponents/HomeTab'
import SelectLanguage from '../components/SmallComponents/SelectLanguage'
import LanguageContext from './LanguageContext'
import ThemeSelector from '../components/SmallComponents/ThemeSelector'
import styled from 'styled-components'


const FixedComponents = styled.div`
position: relative;

@media (max-width: 400px){
  position: fixed !important;
  bottom: 0px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 1);
  padding: 0 !important;
}
`
const Children = styled.div`
position: relative;
@media (max-width: 400px){
  padding-bottom: 50px !important;
}
`

const ModeContainer = (props) => {
  const [language, setLanguage] = useState(null);
  return (
    <div>
      {
        language ? (
          <LanguageContext.Provider value={language}>
            <Children >{props.children}</Children>
          </LanguageContext.Provider>

        ) : <SelectLanguage setLanguage={setLanguage} />
      }

      <FixedComponents>
        <HomeTab />
        <ThemeSelector dark={props.dark} setDarkMode={props.setDarkMode} />
        <DevMsg />
      </FixedComponents>

    </div>
  )
}

export default ModeContainer
