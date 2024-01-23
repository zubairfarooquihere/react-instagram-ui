import React from 'react'
import classes from './ReelPage.module.scss';

import Reels from '../../components/ReelPage/Reels/Reels';
function ReelPage() {
  return (
    <div className={classes.reelPage}>
      <Reels />
    </div>
  )
}

export default ReelPage