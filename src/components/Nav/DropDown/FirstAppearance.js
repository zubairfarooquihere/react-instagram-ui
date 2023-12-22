import React from "react";

import {
  settings,
  youractivity,
  saved,
  switchappear,
  report,
} from "../../../ui/svg/NavDropDown";

import classes from "./DropDown.module.scss";

function FirstAppearance(props) {
  const { setAppearance } = props;
  
  return (
    <>
      <ul>
        <li>
          <span>{settings}</span>
          <p>Settings</p>
        </li>
        <li>
          <span>{youractivity}</span>
          <p>Your activity</p>
        </li>
        <li>
          <span>{saved}</span>
          <p>Saved</p>
        </li>
        <li onClick={()=>{setAppearance(true)}}>
          <span>{switchappear}</span>
          <p>Switch appearance</p>
        </li>
        <li>
          <span>{report}</span>
          <p>Report a problem</p>
        </li>
      </ul>
      <div className={classes.dropdown__linebreakDark} />
      <div className={classes.dropdown__btndiv}>
        <button className={classes["dropdown__btndiv--btn"]}>
          Switch accounts
        </button>
      </div>
      <div className={classes.dropdown__linebreakLight} />
      <div className={classes.dropdown__btndiv}>
        <button className={classes["dropdown__btndiv--btn"]}>Log out</button>
      </div>
    </>
  );
}

export default FirstAppearance;
