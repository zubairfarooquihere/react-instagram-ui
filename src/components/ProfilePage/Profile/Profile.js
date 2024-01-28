import React from 'react'
import classes from './Profile.module.scss';

import Header from '../Header/Header';
function Profile() {
  return (
    <div className={classes.profile}>
        <Header />
    </div>
  )
}

export default Profile