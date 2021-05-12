import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Home = styled(Link)`
    font-weight: 600;
    transition: 0.4s;
    cursor: pointer;
    z-index:10;
    position: fixed;
    top: 10px;
    left: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0 4px 4px 0;
    padding: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.color};
    :hover{
      background-color: rgba(255, 255, 255, 0.4);
      color: black;
    }

    @media (max-width: 400px){
      width: 100%;
      position: relative !important;
      bottom: 0px;
      padding: 0px !important;
      backdrop-filter: unset !important;
      background-color: unset !important;
      top: 0px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
`

const Text = styled.span`
display: inline;
@media (max-width: 400px){
  display: none !important
}

`

const HomeTab = () => {
  return (
    <Home to="/">
      &#127968;
      <Text>Home</Text>
    </Home>
  )
}

export default HomeTab
