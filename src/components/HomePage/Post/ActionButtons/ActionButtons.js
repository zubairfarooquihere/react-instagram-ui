import React from "react";
import classes from "./ActionButtons.module.scss";

import {Like, Comment, Share, Save } from '../../../../ui/svg/HomePage'
function ActionButtons() {
  return (
    <div className={classes.AtBtn}>
      <span className={`${classes.AtBtn__Like} ${classes.AtBtn__btn}`}>{Like}</span>
      <span className={`${classes.AtBtn__Comment} ${classes.AtBtn__btn}`}>{Comment}</span>
      <span className={`${classes.AtBtn__Share} ${classes.AtBtn__btn}`}>{Share}</span>
      <span className={`${classes.AtBtn__Save} ${classes.AtBtn__btn}`}>{Save}</span>
    </div>
  );
}

export default ActionButtons;
