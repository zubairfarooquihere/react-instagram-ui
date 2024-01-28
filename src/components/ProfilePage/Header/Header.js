import React from 'react';
import classes from './Header.module.scss';

import ProfileInfo from './ProfileInfo/ProfileInfo';
function Header() {
  return (
    <div className={classes.header}>
      <ProfileInfo />
    </div>
  )
}

export default Header