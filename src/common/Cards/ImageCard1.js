import React from 'react'
import classes from './ImageCard1.module.css'

const ImageCard1 = (props) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className={`${classes.card}`} onClick={() => props.checkImage(props.i)}>
                <img src={props.image} alt={`option_${props.i}`} className={`img-fluid`} />
                <span className={`text-center ${classes.cardQuote}`}>{props.quotes[props.i]}</span>
            </div>
        </div>
    )
}

export default ImageCard1
