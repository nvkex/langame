import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({

    cardQuote: {
        fontWeight: 600,
        color: 'black',
        borderRadius: '4px 4px 0 0',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: '100%',
        width: '100%',
        height: 0,
        transition: '0.4s ease',
        overflow: 'hidden',
        paddingTop: '6px',
    },
    card: {
        position: 'relative',
        height: '200px',
        margin: '8px 0',
        '& img': {
            cursor: 'pointer',
            boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important',
            borderRadius: '4px',
            width: '100%',
            height: '100%',
        },
        '&:hover': {
            '& $cardQuote': {
                bottom: 0,
                height: '20%',
                backgroundColor: 'rgba(255, 255, 255, 0.4)'
            }
        }

    }
});

const ImageCard1 = (props) => {
    const classes = useStyles();
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
