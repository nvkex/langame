import React, { useContext, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import RoundStats from '../../../common/RoundStats'
import ImageCard1 from '../../../common/Cards/ImageCard1';
import Overlay1 from '../../../common/Overlays/Overlay1';
import { MAX_SCORE, MAX_STAGE, TIME_LIMIT } from '../../../constants';
import LanguageContext from '../../../containers/LanguageContext';
import { getImages, getRandomObject, getQuotes } from './GuessModeUtils';

const bounce = keyframes`
0%{ width: 50px; height: 50px }
50%{ width: 80px; height: 80px }
100%{ width: 50px; height: 50px }
`;

const OptionContainer = styled.div`
position: relative;
margin: auto;
margin-top: 4rem;
padding: 0 4rem;
@media (max-width: 400px){
  padding: 0rem !important;
}
`;

const PStyled = styled.p`
color: ${({ theme }) => theme.secondary}
`;

const ScreenContainer = styled.div`
color: white;
min-height: 90vh;
background-color: rgba(255, 255, 255, 0.4);
border-radius: 0 0 10px 10px;
box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
h1{
  font-weight: 700 !important;
  text-shadow: 1px 1px 2px #343434, 2px 2px 10px rgba(0, 0, 0, 0.1);
}
p{
  font-weight: 600;
}
button{
  font-weight: 600;
}
`;

const ObjectText = styled.div`
font-weight: 600;
padding: 2px;
background-color: #c45858;
font-size: 24px;
text-transform: uppercase;
letter-spacing: 2px;
`;

const Status = styled.div`
font-size: 20px;
padding: 20px;
display: flex;
justify-content: space-between;
`;

const Stage = styled.div`
font-weight: 600;
color: black;
font-family: "Courier New", Courier, monospace;
border-bottom: 2px solid #c45858;
`;

const ScoreBoard = styled.div`
font-weight: 600;
color: black;
font-family: "Courier New", Courier, monospace;
border-bottom: 2px solid #c45858;
`;

const Timer = styled.div`
font-weight: 600;
color: black;
font-family: "Courier New", Courier, monospace;
border-bottom: 2px solid #c45858;
`;

const Btn = styled.button`
transition: 0.5s;
border: 2px solid white;
outline: none;
border-radius: 4px;
padding: 8px 20px;
color: white;
${({ btnFinal }) => btnFinal && `
    background-color: #5ac988;
    :hover{
      background-color: #18bb5c;
    }
`}
${({ btnNorm }) => btnNorm && `
    background-color: #c45858;
    :hover{
      background-color: #c02626;
    }
`}
${({ btnDisabled }) => btnDisabled && `
    cursor: no-drop;
`}

`;

const StageResult = styled.div`
margin: auto;
z-index: 10;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.9);
display: flex;
justify-content: center;
align-items: center;
svg{
  margin: 5px;
  width: 50px;
  height: 50px;
  animation-name: ${bounce};
  animation-duration: 0.6s;
}
p{
  font-size: 20px;
  text-shadow: 1px 0px 6px black;
}
`;

const WordShow = styled.span`
text-decoration: underline;
color: white;
text-transform: uppercase;
`;


const GuessMode = () => {

  const [keyword, setKeyword] = useState();
  const [word, setWord] = useState({ loading: true, word: null });
  const [images, setImages] = useState({ loading: true, images: null });
  const [quotes, setQuotes] = useState(getQuotes(4));
  const [stage, setStage] = useState(1);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(TIME_LIMIT);
  const [stopWatch, setStopWatch] = useState();
  const [check, setCheck] = useState({ show: false, match: false });
  const [finished, setFinished] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [stats, setStats] = useState({
    show: false,
    responseTime: [],
    stageScore: [],
    stageKeyword: []
  })
  const lan = useContext(LanguageContext);


  const updateStats = (score) => {
    setStats(stats => {
      return {
        stageScore: [...stats.stageScore, score],
        responseTime: [...stats.responseTime, TIME_LIMIT - timer],
        stageKeyword: [...stats.stageKeyword, [keyword.key, keyword.raw]]
      }
    })
  }

  /**
   * Stops the timer and checks if user has clicked on the correct image.
   * If true it increases the score and shows in an overlay.
   * @param {Integer} index - index of the correct image
   */
  const checkImage = (index) => {
    if (index === keyword.index) {
      setScore(s => s + (MAX_SCORE / (MAX_STAGE - 2)));
      updateStats(MAX_SCORE / (MAX_STAGE - 2));
      setCheck({ show: true, match: true });
    }
    else {
      updateStats(0);
      setCheck({ show: true, match: false });
    }

    clearInterval(stopWatch);
  }

  /**
   * Creates a setInterval and stores reference in state
   */
  const countDown = () => {
    let stopwatch = setInterval(() => {
      setTimer(t => t - 1)
    }, 1000);

    setStopWatch(stopwatch);
  }

  /**
 * Sets the stage to the immediate next or End-Stage.
 * Clears all setIntervals 
 * Refreshes all Game components
 */
  const nextStage = () => {
    if(!check.show){
      updateStats(-1);
    }
    clearInterval(stopWatch);
    if (stage === MAX_STAGE - 2) {
      setFinished(true)
    }
    else {
      setKeyword(null);
      setTimer(TIME_LIMIT);
      setCheck({ show: false, match: false });
      setQuotes(getQuotes(4))
      getImages(setImages, (keyObject, i, raw) => {
        setKeyword({ key: keyObject, index: i, raw: raw })
        countDown();
      }, lan);
      window.scrollTo(0, 0);
    }

    // MAX_STAGE will be two more than final stage
    // MAX_STAGE-1 will be result stage
    setStage((stage + 1) % (MAX_STAGE - 1));
  }

  /**
   * Restart the game and initialize game metrics
   */
  const restart = () => {
    setScore(0);
    setFinished(false);
    nextStage();
  }

  // Clear interval when the time runs out.
  if (timer <= 0 && !check.show) {
    setCheck({ show: true, match: false });
    updateStats(0);
    clearInterval(stopWatch);
  }


  useEffect(() => {
    // Get random word
    if (word.loading && !word.word) {
      getRandomObject(word, setWord);
      setWord({ ...word, loading: false });
    }

    // Get the images
    if (images.loading && !images.images) {
      getImages(setImages, (keyObject, i, raw) => {
        setKeyword({ key: keyObject, index: i, raw: raw })
        countDown();
      }, lan);
    }

    // Start Timer
    if (timer === TIME_LIMIT && stage < MAX_STAGE - 1 && keyword) {
      countDown();
    }

    return () => {
      clearInterval(stopWatch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])


  return (
    <div className="container">
      <ScreenContainer>
        <h1 className="text-center display-4">Guess the object</h1>
        {
          finished ?
            stats.show ? (
              <RoundStats stats={stats} />
            ) : (
              <Overlay1
                score={score}
                restart={restart}
                language={lan}
                showStats={() => setStats(stats => { return { ...stats, show: !stats.show } })}
              />
            ) : (
              <span>
                <PStyled className={`text-center`}>If you score a perfect 100, you'll get a
                <strong>
                    {word.word ? (
                      <span>&nbsp;{word.word.split(" ")[0]} &#128079;</span>
                    ) : ' umm..'}
                  </strong>!
              </PStyled>
                <ObjectText className={`my-4 text-center`}>
                  {keyword ? keyword.key : (<span style={{ color: '#ffb7b7' }}>Thinking...</span>)}
                </ObjectText>

                <OptionContainer className={`row`}>
                  {
                    images.images ? (
                      images.images.map((image, i) => (
                        <ImageCard1 i={i} image={image} checkImage={checkImage} quotes={quotes} key={`image_card_${i}`} />
                      ))
                    ) : null
                  }
                  {
                    check.show ? (
                      <StageResult className={`col-lg-12 col-md-12 col-12`}>
                        {
                          check.match ? (
                            <div style={{ color: '#2ecc71' }} className="text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              <p><small>{keyword.raw === keyword.key ? 'Well, this was obvious.' : 'Probably Luck!'}</small></p>
                              <p><WordShow>{keyword.raw}</WordShow> is <WordShow>{keyword.key}</WordShow> in {lan.lang}.</p>
                            </div>
                          ) : (
                            <div style={{ color: '#c02626' }} className="text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                              </svg>
                              <p>{timer === 0 ? (<span>You kept me waiting for too long! &#128148;</span>) : keyword.raw === keyword.key ? 'Really? You coudn\'t guess this.' : 'Thats a shame!'}</p>
                              <p><WordShow>{keyword.raw}</WordShow> is <WordShow>{keyword.key}</WordShow> in {lan.lang}.</p>
                            </div>
                          )
                        }
                      </StageResult>
                    ) : null
                  }
                </OptionContainer>

                <div className="text-center mt-2">
                  <Btn
                    onClick={nextStage}
                    btnFinal={stage === MAX_STAGE - 2}
                    btnNorm={stage !== MAX_STAGE - 2}
                    disabled={keyword ? false : true}
                    btnDisabled={keyword ? false : true}
                  >
                    {stage === MAX_STAGE - 2 ? 'Finish' : 'Next'}
                  </Btn>
                </div>

                <Status>
                  <Stage data-toggle="tooltip" data-placement="bottom" title="You're still on this stage?!">
                    {stage === MAX_STAGE - 2 ? (<span>&#127937;</span>) : (<span>&#128645;</span>)}{stage}
                  </Stage>
                  <Timer data-toggle="tooltip" data-placement="left" title="Yes, am busy. I dont have all day!">
                    &#8987;{timer}s
                </Timer>
                  <ScoreBoard data-toggle="tooltip" data-placement="left" title="*In kratos voice*: Boy! Thats a low score.">
                    {score}&#128142;
                </ScoreBoard>
                </Status>

                <div className="text-center">
                  <PStyled>{timer < 10 ? timer === 0 ? "Loser!" : "Hurry Up!" : "Beware of the options! They're intimidating."}</PStyled>
                </div>

                <PStyled style={{ paddingLeft: '12px' }}>
                  <small>
                    <i>Your {lan.lang} is probably trash.</i> &#128078;
                </small>
                </PStyled>
              </span>
            )
        }
      </ScreenContainer>
    </div>
  )
}

export default GuessMode
