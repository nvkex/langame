import React from 'react'
import { createUseStyles } from 'react-jss';
import { MAX_SCORE } from '../../constants';

const useStyles = createUseStyles({
    overlayContainer: {
        width: '100%',
        position: 'relative'
      },      
    scoreBox : {
        borderRadius: '10px',
        padding: '10px',
        width: '200px',
        margin: 'auto',
        boxShadow: '0px 0px 14px #c45858'
      },      
    rudeMsg : {
        borderBottom: '2px solid #6c757d5d'
      },
    btn : {
        transition: '0.5s',
        border: '2px solid white',
        outline: 'none',
        borderRadius: '4px',
        padding: '4px 10px',
        color: 'white',
        backgroundColor:'#5ac988',
        '&:hover' : {
            backgroundColor: '#18bb5c'
          }
      },
      max:{
        fontWeight: 700,
        color: '#18bb5c'
      },
      norm:{
        fontWeight: 700,
        color: '#c02626'
      },
      restart:{
          width: '100%',
          position: 'absolute'
      }
})

const Overlay1 = (props) => {
    const classes = useStyles();
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
                <h5 className={props.score === MAX_SCORE ? classes.max : classes.norm}>
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

            <div className={` text-center ${classes.restart}`}>
                <p className="mt-4 text-dark">Embarass yourself again??</p>
                <button to="/guess" className={classes.btn} onClick={props.restart}>Let's Go!!</button>
            </div>
        </div>
    )
}

export default Overlay1
