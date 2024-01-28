import React from "react";
import classes from "./ProfileInfo.module.scss";

import Info from "./Info/Info";
function ProfileInfo() {
  return (
    <div className={classes.ProfileInfo}>
      <div className={classes.ProfileImg}>
        <img src={`https://picsum.photos/500/${500}`} alt="" />
      </div>
      <Info />
    </div>
  );
}

export default ProfileInfo;
