import React from 'react'
import classes from './Profile.module.scss';

import Header from '../Header/Header';
import Stories from '../Stories/Stories';
import Navigation from '../Navigation/Navigation';

function Profile() {
  return (
    <div className={classes.profile}>
        <Header />
        <Stories />
        <Navigation />
    </div>
  )
}

export default Profile