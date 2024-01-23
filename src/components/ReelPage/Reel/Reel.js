import React from 'react'

import classes from './Reel.module.scss';
function Reel() {
  return (
    <div className={classes.reel}>
        <img src={`https://picsum.photos/800/800`} alt="" />
    </div>
  )
}

export default Reel