import React, { useContext } from 'react'
import styled from 'styled-components'
import LanguageContext from '../containers/LanguageContext';
import TextCard1 from './Cards/TextCard1'

const Container = styled.div`
margin: 0 20px;
`;
const CardHead = styled.div`
color: ${({ theme }) => theme.primary};
font-weight: 700;
`;

const H3 = styled.h3`
color: ${({ theme }) => theme.head};
`;


const RoundStats = (props) => {

  const avgResponse = (props.stats.responseTime.reduce((a, b) => a + b) / props.stats.responseTime.length).toFixed(2);
  const totalScore = props.stats.stageScore.reduce((a, b) => a + b);
  const lan = useContext(LanguageContext);
  return (
    <Container>
      <H3 className="text-center my-2">Stats</H3>
      <div className="row">
        <div className="col-6 col-md-6 col-lg-4">
          <CardHead className="text-center">Language</CardHead>
          <TextCard1 text={lan.lang} textSize="30px" bg="#FD7272" textColor="white"/>
        </div>
        <div className="col-6 col-md-6 col-lg-4">
          <CardHead className="text-center">Average Response</CardHead>
          <TextCard1 text={`${avgResponse}s`} textSize="30px" bg="#FD7272" textColor="white"/>
        </div>
        <div className="col-6 col-md-6 col-lg-4">
          <CardHead className="text-center">Total Score</CardHead>
          <TextCard1 text={totalScore} textSize="30px" bg="#FD7272" textColor="white"/>
        </div>

      </div>
    </Container>
  )
}

export default RoundStats
