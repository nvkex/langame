import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  textCard: {
    backgroundColor: 'white',
    color: 'black',
    padding: '16px 10px',
    borderRadius: '10px',
    margin: '4px 0',
    cursor: 'pointer',
    fontWeight: 700,
  }
});

const TextCard1 = (props) => {
  const classes = useStyles();
  return (
    <div className={`text-center ${classes.textCard}`}>
      {props.text}
    </div>
  )
}

export default TextCard1
