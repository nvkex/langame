import React from 'react'
import { DEFAULT_LOGO_WIDTH } from '../constants'
import styled from 'styled-components'

const LogoContainer = styled.div`
margin: auto;
position: relative;
`;

const Logo = (props) => {
  return (
    <LogoContainer style={{width: props.width ? props.width : DEFAULT_LOGO_WIDTH, paddingTop:'6px'}}>
        <img style={{width: props.width ? props.width : DEFAULT_LOGO_WIDTH}} className={`img-fluid`}src="./assets/images/logo.png" alt="logo"/>
    </LogoContainer>
  )
}

export default Logo
