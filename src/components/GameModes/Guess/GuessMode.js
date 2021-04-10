import React, { useEffect, useState } from 'react'
import { MAX_STAGE, TIME_LIMIT } from '../../../constants';
import classes from './GuessMode.module.css'
import { getImages, getRandomObject, getQuotes } from './GuessModeUtils';

const GuessMode = () => {

  const [word, setWord] = useState({ loading: true, word: null });
  const [images, setImages] = useState({ loading: true, images: null });
  const [quotes, setQuotes] = useState(getQuotes(4));
  const [stage, setStage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(TIME_LIMIT);
  const [stopWatch, setStopWatch] = useState();

  /**
 * Sets the stage to the immediate next or 0.
 * @param {Function} setStage - hook to set the value of 'Stage' in state
 * @param {Integer} current - value of current stage
 * @returns - none
 */
  const nextStage = () => {
    // MAX_STAGE will be one more than final stage
    // It is so we get the same stage number(or 0 when game ends) after doing modulus.
    clearInterval(stopWatch);
    setStage((stage + 1) % MAX_STAGE);
    getImages(images, setImages, stage * 4 + 1);
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
    getImages(images, setImages, stage);
    setImages({ ...images, loading: false });
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

    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])


  return (
    <div className="container">
      <div className={classes.screenContainer}>
        <h1 className="text-center display-4">Guess the object</h1>
        <p className="text-center text-muted">If you score a perfect 100, you'll get a <strong>{word.word ? word.word : 'umm..'}</strong>!</p>
        <div className={`${classes.objectText} my-4 text-center`}>
          River
        </div>

        <div className={`row ${classes.optionContainer}`}>
          {
            images.images ? (
              images.images.map((image, i) => (
                <div className="col-lg-3 col-md-6" key={`image_card_${i}`}>
                  <div className={`${classes.card}`}>
                    <img src={image} alt={`option_${i}`} className={`img-fluid`} />
                    <span className={`text-center ${classes.cardQuote}`}>{quotes[i]}</span>
                  </div>
                </div>
              ))
            ) : null
          }
        </div>

        <div className="text-center">
          <button onClick={() => nextStage(setStage, stage)} className={` ${classes.btn}`}>Next</button>
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
          <p className="text-muted">{timer < 10 ? timer === 0? "Loser!": "Hurry Up!" : "Beware of the options! They're intimidating."}</p>
        </div>
      </div>
    </div>
  )
}

export default GuessMode
