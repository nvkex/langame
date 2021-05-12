import React from 'react'
import { MAX_SCORE } from '../../constants';
import styled from 'styled-components'


const OverlayContainer = styled.div`
width: 100%;
position: relative;
`;

const ScoreBox = styled.div`
border-radius: 10px;
padding: 10px;
width: 200px;
margin: auto;
box-shadow: ${({theme}) => `0px 0px 14px ${theme.secondaryRed}`};
`;

const RudeMsg = styled.i`
color: ${({theme}) => theme.secondary};
border-bottom: ${({theme}) => `2px solid ${theme.secondary}`};
`;

const Btn = styled.button`
transition: 0.5s;
border: 2px solid white;
outline: none;
border-radius: 4px;
padding: 4px 10px;
color: white;
background-color:#5ac988;
:hover{
    background-color: #18bb5c;
}
`;

const Max = styled.h5`
font-weight: 700;
color: ${({theme}) => theme.primaryGreen};
`;

const Norm = styled.h5`
font-weight: 700;
color: ${({theme}) => theme.primaryRed}
`;

const Restart = styled.div`
width: 100%;
position: absolute;
`;

const Msg = styled.p`
color: ${({theme}) => theme.primaryGreen};
`;

const Overlay1 = (props) => {
    var msg = null;
    if(props.score === MAX_SCORE){
        msg = (<span>Alright! Alright! Nothing fancy. &#128530;</span>)
    }
    else{
        msg = (<span>Wow! Isn't this embarassing. &#128518; &#128518;</span>)
    }

    return (
        <OverlayContainer className={`text-center`}>
            <h3 className="text-dark">
                in <i><span style={{textDecoration: 'underline'}}>{props.language.lang}</span></i>
            </h3>
            <Msg>{msg}</Msg>
            <ScoreBox>
                <h5 className="text-dark">You scored</h5>
                {props.score === MAX_SCORE ? 
                    (
                        <Max>
                            {
                                props.score === MAX_SCORE ? 
                                <span>&#128561; {props.score}/{MAX_SCORE} &#128561;</span>
                                : 
                                <span>&#128169; {props.score}/{MAX_SCORE} &#128169;</span>
                            }                    
                        </Max>
                    )
                    : (
                        <Norm>
                            {
                                props.score === MAX_SCORE ? 
                                <span>&#128561; {props.score}/{MAX_SCORE} &#128561;</span>
                                : 
                                <span>&#128169; {props.score}/{MAX_SCORE} &#128169;</span>
                            }                    
                        </Norm>
                    )
                }
            </ScoreBox>

            <p className={`mt-4`}>
                <small>
                    <RudeMsg>Probably your highest achievment in life, so take a printout.</RudeMsg> &#128522;
                </small>
            </p>

            <Restart className={`text-center`}>
                <p className="mt-4 text-dark">Embarass yourself again??</p>
                <Btn to="/guess" onClick={props.restart}>Let's Go!!</Btn>
            </Restart>
        </OverlayContainer>
    )
}

export default Overlay1
