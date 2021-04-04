import axios from 'axios'
import React, { useState } from 'react'
import { CORS_BYPASS_URL, RANDOM_WORD_URL } from '../../../constants/URLs'
import classes from './GuessMode.module.css'

// MAX_STAGE will be one more than final stage
// It is so we get the same stage number(or 0 when game ends) after doing modulus.
const MAX_STAGE = 11;

/**
 * Gets a random word using APIs and saves it in the state.
 * @param {Function} setWord - hook to set the value of 'word' in state
 * @returns - none
 */
const getRandomObject = (setWord) => {
  axios.get(`${CORS_BYPASS_URL}${RANDOM_WORD_URL}`)
  .then(res => {
    setWord(res.data[0].split("_").join(" "))
  }).catch(err => console.log(err))
}

/**
 * Sets the stage to the immediate next or 0.
 * @param {Function} setStage - hook to set the value of 'Stage' in state
 * @param {Integer} current - value of current stage
 * @returns - none
 */
const nextStage = (setStage, current) => {
  setStage((current+1)%MAX_STAGE)
}

const GuessMode = () => {

  const [word, setWord] = useState();
  const [loading, setLoading] = useState(true);
  const [stage, setStage] = useState(1);


  if(loading && !word){
    getRandomObject(setWord);
    setLoading(false);
  }
  

  return (
    <div className="container">
      <div className={classes.screenContainer}>
        <h1 className="text-center display-4">Guess the object</h1>
        <p className="text-center text-muted">If you score a perfect 100, you'll get a <strong>{word ? word : 'umm..'}</strong>!</p>
        <div className={`${classes.objectText} my-4 text-center`}>
          River
        </div>

        <div className={`row ${classes.optionContainer}`}>
          <div className="col-lg-3 col-md-6">
            <div className={`${classes.card}`}>
              <img src="https://picsum.photos/300/200?random=1" alt="option_1" className={` img-fluid`}/>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={`${classes.card}`}>
              <img src="https://picsum.photos/300/200?random=2" alt="option_1" className={` img-fluid`}/>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={`${classes.card}`}>
              <img src="https://picsum.photos/300/200?random=3" alt="option_1" className={` img-fluid`}/>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={`${classes.card}`}>
              <img src="https://picsum.photos/300/200?random=4" alt="option_1" className={` img-fluid`}/>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button onClick={() => nextStage(setStage, stage)}>Next</button>
        </div>

        <div className={`${classes.scoreBoard}`}>

        </div>
      </div>
    </div>
  )
}

export default GuessMode
