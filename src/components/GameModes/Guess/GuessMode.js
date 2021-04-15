import React, { useEffect, useState } from 'react'
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

  const checkImage = (index) => {
    if (index === keyword.index) {
      setScore(s => s + 10);
    }
  }

  /**
 * Sets the stage to the immediate next or 0.
 * @param {Function} setStage - hook to set the value of 'Stage' in state
 * @param {Integer} current - value of current stage
 * @returns - none
 */
  const nextStage = () => {
    if (stage === MAX_STAGE-1)
      window.location.href = '/'
    // MAX_STAGE will be one more than final stage
    // It is so we get the same stage number(or 0 when game ends) after doing modulus.
    clearInterval(stopWatch);
    setStage((stage + 1) % MAX_STAGE);
    getImages(images, setImages, (keyObject, i) => {
      setKeyword({ key: keyObject, index: i })
    });
    setTimer(TIME_LIMIT);
    setQuotes(getQuotes(4))
  }

  // Get random word
  if (word.loading && !word.word) {
    getRandomObject(word, setWord);
    setWord({ ...word, loading: false });
  }

  // Get the images
  if (images.loading && !images.images) {
    setImages({ ...images, loading: false })
    getImages(images, setImages, (keyObject, i) => {
      setKeyword({ key: keyObject, index: i })
    });
  }

  // Clear interval when the time runs out.
  if (timer <= 0) {
    clearInterval(stopWatch);
  }

  useEffect(() => {

    // Start Timer
    if (timer === TIME_LIMIT) {
      let stopwatch = setInterval(() => {
        setTimer(t => t - 1)
      }, 1000);

      setStopWatch(stopwatch);
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
                <div className="col-lg-3 col-md-6" key={`image_card_${i}`}>
                  <div className={`${classes.card}`} onClick={() => checkImage(i)}>
                    <img src={image} alt={`option_${i}`} className={`img-fluid`} />
                    <span className={`text-center ${classes.cardQuote}`}>{quotes[i]}</span>
                  </div>
                </div>
              ))
            ) : null
          }
        </div>

        <div className="text-center">
          <button onClick={nextStage} className={` ${classes.btn}`}>Next</button>
        </div>

        <div className={`${classes.status}`}>
          <div className={`${classes.stage}`} data-toggle="tooltip" data-placement="bottom" title="You're still on this stage?!">
            {stage === MAX_STAGE - 1 ? (<span>&#127937;</span>) : (<span>&#127969;</span>)}{stage}
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
            <i>You're French is probably trash.</i>
          </small>
        </p>
      </div>
    </div>
  )
}

export default GuessMode
