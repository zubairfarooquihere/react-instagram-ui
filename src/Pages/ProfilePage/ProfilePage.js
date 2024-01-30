import React from "react";
import classes from "./ProfilePage.module.scss";

import Profile from "../../components/ProfilePage/Profile/Profile";
import { useSelector } from "react-redux";
function ProfilePage() {
  const weninfo = useSelector((state) => state.weninfo);
  return (
    <div data-theme={weninfo.darkMode ? "dark" : "light"} className={classes.profilePage}>
      <Profile />
    </div>
  );
}

export default ProfilePage;
