import React, { useState } from 'react'
import { MAX_STAGE } from '../../../constants/URLs';
import classes from './GuessMode.module.css'
import { getImages, getRandomObject } from './GuessModeUtils';

const GuessMode = () => {

  const [word, setWord] = useState({ loading: true, word: null });
  const [stage, setStage] = useState(1);
  const [images, setImages] = useState({ loading: true, images: null });

  /**
 * Sets the stage to the immediate next or 0.
 * @param {Function} setStage - hook to set the value of 'Stage' in state
 * @param {Integer} current - value of current stage
 * @returns - none
 */
  const nextStage = () => {
    // MAX_STAGE will be one more than final stage
    // It is so we get the same stage number(or 0 when game ends) after doing modulus.
    setStage((stage + 1) % MAX_STAGE);
    getImages(images, setImages, stage * 4 + 1);
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
                  </div>
                </div>
              ))
            ) : null
          }
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
