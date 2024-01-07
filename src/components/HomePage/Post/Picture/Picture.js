import React from 'react'
import classes from './Picture.module.scss';

function Picture() {
  return (
    <div className={classes.Picture}>
        <img src={`https://picsum.photos/500/${512}`} alt="" />
    </div>
  )
}

export default Picture