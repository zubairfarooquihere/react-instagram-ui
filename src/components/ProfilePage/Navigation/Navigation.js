import React, { useState } from "react";
import classes from "./Navigation.module.scss";

import { Posts } from "../../../ui/svg/ProfilePage";
function Navigation() {
  const [liSelected, setLiSelected] = useState("POSTS");

  const selectLi = (section) => {
    setLiSelected(section);
  };
  
  return (
    <div className={classes.Navigation}>
      <div className={classes.border} />
      <ul>
        <li className={`${liSelected === "POSTS" ? classes.liSelected: ''}`} onClick={()=>{selectLi("POSTS")}} id="POSTS">
          <div className={`${classes.ULborder} ${liSelected === "POSTS" ? classes.ULborder__selected : ''}`} />
          <span>{Posts}POSTS</span>
        </li>
        <li className={`${liSelected === "SAVED" ? classes.liSelected: ''}`} onClick={()=>{selectLi("SAVED")}} id="SAVED">
          <div className={`${classes.ULborder} ${liSelected === "SAVED" ? classes.ULborder__selected : ''}`} />
          <span>{Posts}SAVED</span>
        </li>
        <li className={`${liSelected === "TAGGED" ? classes.liSelected: ''}`} onClick={()=>{selectLi("TAGGED")}} id="TAGGED">
          <div className={`${classes.ULborder} ${liSelected === "TAGGED" ? classes.ULborder__selected : ''}`} />
          <span>{Posts}TAGGED</span>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
