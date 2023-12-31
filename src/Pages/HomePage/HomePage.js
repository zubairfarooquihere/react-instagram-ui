import React from 'react'

import classes from './HomePage.module.scss';

import Stories from '../../components/HomePage/Stories/Stories';
function HomePage() {
  return (
    <div data-theme={false ? "dark" : "light"} className={classes.homepage}>
      <div className={classes.homepage__main}>
          <div className={classes['homepage__main--partOne']}>
            <Stories />
          </div>
          <div className={classes['homepage__main--partTwo']}>

          </div>          
      </div>
    </div>
  )
}

export default HomePage