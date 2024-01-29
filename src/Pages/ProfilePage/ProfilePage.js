import React from "react";
import classes from "./ProfilePage.module.scss";

import Profile from "../../components/ProfilePage/Profile/Profile";
function ProfilePage() {
  return (
    <div className={classes.profilePage}>
      <Profile />
    </div>
  );
}

export default ProfilePage;
