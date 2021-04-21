import React from 'react'
import classes from './TextCard1.module.css'

const TextCard1 = (props) => {
  return (
    <div className={`text-center ${classes.textCard}`}>
      {props.text}
    </div>
  )
}

export default TextCard1
