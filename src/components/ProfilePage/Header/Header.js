import React from "react";
import classes from "./Header.module.scss";

//import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Info from "./ProfileInfo/Info/Info";
function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.ProfileInfo}>
        <div className={classes.ProfileImg}>
          <img src={`https://picsum.photos/500/${500}`} alt="" />
        </div>
        <Info />
      </div>
    </div>
  );
}

export default Header;
