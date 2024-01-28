import React from "react";

import classes from "./Info.module.scss";

function Info(props) {
  return (
    <div className={classes.info}>
      <div className={classes.info__boxLayout}>
        <h3>Details</h3>
      </div>
      <div className={`${classes.info__boxLayout} ${classes.onerow}`}>
        <p>Mute messages</p>
        <label className={classes.switch}>
          <input type="checkbox" />
          <span className={classes.slider}></span>
        </label>
      </div>
      <div
        className={`${classes.info__boxLayout} ${classes["info__boxLayout--lineBreak"]}`}
      ></div>
      <div className={`${classes.info__boxLayout}`}>
        <h2>Members</h2>
        <div className={`${classes["info__boxLayout__profile"]}`}>
          <div className={classes["info__boxLayout__profile--imageHolder"]}>
            <img src={props.url} alt="pro" />
          </div>
          <div className={classes["info__boxLayout__profile--name"]}>
            <span>{props.breedName}</span>
            <p>{props.breedName}</p>
          </div>
        </div>
      </div>
      <div
        className={`${classes.info__boxLayout} ${classes["info__boxLayout--lineBreak"]} ${classes["info__boxLayout--lineBreak--2"]}`}
      ></div>
      <div className={`${classes.info__boxLayout} ${classes["info__boxLayout__btnsection"]}`}>
        <span>Report</span>
        <span>Block</span>
        <span>Delete chat</span>
      </div>
    </div>
  );
}

export default Info;
