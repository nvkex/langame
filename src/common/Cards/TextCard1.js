import React from 'react'
import styled from 'styled-components'

const TextCard = styled.div`
background-color: white;
color: black;
padding: 16px 10px;
border-radius: 10px;
margin: 4px 0;
cursor: pointer;
font-weight: 700;
`;

const TextCard1 = (props) => {
  return (
    <TextCard className={`text-center`}>
      {props.text}
    </TextCard>
  )
}

export default TextCard1
