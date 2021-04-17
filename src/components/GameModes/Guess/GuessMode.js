import React, { useEffect, useState } from 'react'
import ImageCard1 from '../../../common/Cards/ImageCard1';
import { MAX_STAGE, TIME_LIMIT } from '../../../constants';
import classes from './GuessMode.module.css'
import { getImages, getRandomObject, getQuotes } from './GuessModeUtils';

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
  const [finished, setFinished] = useState(false)

  const checkImage = (index) => {
    if (index === keyword.index) {
      setScore(s => s + 10);
      setCheck({ show: true, match: true });
    }
    else {
      setCheck({ show: true, match: false });
    }
    clearInterval(stopWatch);
  }

  const countDown = () => {
    let stopwatch = setInterval(() => {
      setTimer(t => t - 1)
    }, 1000);

    setStopWatch(stopwatch);
  }

  /**
 * Sets the stage to the immediate next or 0.
 * @param {Function} setStage - hook to set the value of 'Stage' in state
 * @param {Integer} current - value of current stage
 * @returns - none
 */
  const nextStage = () => {
    clearInterval(stopWatch);
    if (stage === MAX_STAGE - 2) {
      setFinished(true)
    }
    else {
      // MAX_STAGE will be one more than final stage
      // It is so we get the same stage number(or 0 when game ends) after doing modulus.
      setKeyword(null);
      setTimer(TIME_LIMIT);
      setCheck({ show: false, match: false });
      setQuotes(getQuotes(4))
      getImages(setImages, (keyObject, i) => {
        setKeyword({ key: keyObject, index: i })
        countDown();
      });
      
    }
    setStage((stage + 1) % MAX_STAGE);
  }

  // Clear interval when the time runs out.
  if (timer <= 0 && !check.show) {
    setCheck({ show: true, match: false });
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
      getImages(setImages, (keyObject, i) => {
        setKeyword({ key: keyObject, index: i })
        countDown();
      });
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
      <div className={classes.screenContainer}>
        <h1 className="text-center display-4">Guess the object</h1>
        {
          finished ? (
            <div className={`text-center`}>
              <h3 className="text-dark">Very Nice!</h3>
              <p className="text-dark">Clapps &#128079; &#128079; &#128079;</p>
              <h5 className="text-dark">You scored</h5>
              <h5 className="text-danger">&#127937; {score}/100 &#127937;</h5>
              <p className="text-muted">
                <small>
                  <i>Probably you're highest achievment in life, so take a printout.</i> &#128522;
                </small>
              </p>
            </div>
          ) : (
            <span>
              <p className="text-center text-muted">If you score a perfect 100, you'll get a
                <strong>
                  {word.word ? (
                    <span>&nbsp;{word.word.split(" ")[0]} &#128079;</span>
                  ) : ' umm..'}
                </strong>!
              </p>
              <div className={`${classes.objectText} my-4 text-center`}>
                {keyword ? keyword.key : '...'}
              </div>

              <div className={`row ${classes.optionContainer}`}>
                {
                  images.images ? (
                    images.images.map((image, i) => (
                      <ImageCard1 i={i} image={image} checkImage={checkImage} quotes={quotes} key={`image_card_${i}`} />
                    ))
                  ) : null
                }
                {
                  check.show ? (
                    <div className={`col-lg-12 col-md-12 col-12 ${classes.stageResult}`}>
                      {
                        check.match ? (
                          <div style={{ color: '#2ecc71' }} className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            <p>Damn son!</p>
                          </div>
                        ) : (
                          <div style={{ color: '#c45858' }} className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                            </svg>
                            <p>Thats a shame!</p>
                          </div>
                        )
                      }
                    </div>
                  ) : null
                }
              </div>

              <div className="text-center mt-2">
                <button onClick={nextStage} className={` ${classes.btn}`}>Next</button>
              </div>

              <div className={`${classes.status}`}>
                <div className={`${classes.stage}`} data-toggle="tooltip" data-placement="bottom" title="You're still on this stage?!">
                  {stage === MAX_STAGE - 2 ? (<span>&#127937;</span>) : (<span>&#128645;</span>)}{stage}
                </div>
                <div className={`${classes.timer}`} data-toggle="tooltip" data-placement="left" title="Yes, am busy. I dont have all day!">
                  &#8987;{timer}s
                </div>
                <div className={`${classes.scoreBoard}`} data-toggle="tooltip" data-placement="left" title="*In kratos voice*: Boy! Thats a low score.">
                  {score}&#128142;
                </div>
              </div>

              <div className="text-center">
                <p className="text-muted">{timer < 10 ? timer === 0 ? "Loser!" : "Hurry Up!" : "Beware of the options! They're intimidating."}</p>
              </div>

              <p className="text-muted" style={{ paddingLeft: '12px' }}>
                <small>
                  <i>You're French is probably trash. &#128078;</i>
                </small>
              </p>
            </span>
          )
        }
      </div>
    </div>
  )
}

export default GuessMode
