import React from 'react'
import { MAX_SCORE } from '../../constants';
import classes from './Overlay1.module.css'

const Overlay1 = (props) => {
    var msg = null;
    if(props.score === MAX_SCORE){
        msg = (<span>Alright! Alright! Nothing fancy. &#128530;</span>)
    }
    else{
        msg = (<span>Wow! Isn't this embarassing. &#128518; &#128518;</span>)
    }

    return (
        <div className={`text-center ${classes.overlayContainer}`}>
            <h3 className="text-dark">Hmmm...</h3>
            <p className="text-success">{msg}</p>
            <div className={`${classes.scoreBox}`}>
                <h5 className="text-dark">You scored</h5>
                <h5 className="text-danger">
                    {
                        props.score === MAX_SCORE ? 
                        <span>&#128561; {props.score}/{MAX_SCORE} &#128561;</span>
                        : 
                        <span>&#128169; {props.score}/{MAX_SCORE} &#128169;</span>
                    }                    
                </h5>
            </div>

            <p className={`text-muted mt-4`}>
                <small>
                    <i className= {classes.rudeMsg}>Probably your highest achievment in life, so take a printout.</i> &#128522;
                </small>
            </p>
        </div>
    )
}

export default Overlay1
