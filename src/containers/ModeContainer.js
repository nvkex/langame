import React from 'react'
import DevMsg from '../components/SmallComponents/DevMsg'
import HomeTab from '../components/SmallComponents/HomeTab'

const ModeContainer = (props) => {
  return (
    <div style={{height: '100%'}}>
      <HomeTab />
      {props.children}
      <DevMsg />
    </div>
  )
}

export default ModeContainer
