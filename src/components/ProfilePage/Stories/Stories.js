import React from 'react'
import classes from './Stories.module.scss';

function Stories() {
  return (
    <div className={classes.Stories}>
        <span className={classes.Story}>
            <span className={classes.Story__img}>
                <span className={classes['Story__img--image']}>+</span>
            </span>
            <span className={classes.Story__name}>New</span>
        </span>
    </div>
  )
}

export default Stories