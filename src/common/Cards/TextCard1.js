import React from 'react'
import styled from 'styled-components'

const TextCard = styled.div`
background-color: ${props => props.bg || "white"};
color: ${props => props.textColor || "black"};
border: ${props => props.border || "none"};
padding: 16px 10px;
border-radius: 10px;
margin: 4px 0;
cursor: pointer;
font-weight: 700;
font-family: 'Roboto Condensed', sans-serif;
font-size: ${props => props.textSize || "1rem"};
`;

const TextCard1 = (props) => {
  return (
    <TextCard
      className={`text-center`}
      textSize={props.textSize}
      bg={props.bg}
      textColor={props.textColor}
      border={props.border}
      >
      {props.text}
    </TextCard>
  )
}

export default TextCard1
