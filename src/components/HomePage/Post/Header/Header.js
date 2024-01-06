import React from "react";
import classes from "./Header.module.scss";
import { More } from "../../../../ui/svg/HomePage";
function Header() {
  let circleId = "circleId";
  return (
    <div className={classes.header}>
      <span className={classes.header__profile}>
        <img src={`https://picsum.photos/500/111`} alt="" />
        <span id={circleId} className={classes.circle}></span>
      </span>
      <div className={classes.header__info}>
        <span className={classes["header__info--name"]}>
          Isabella's Post{" "}
          <span className={classes["header__info--time"]}>• 15m</span>
        </span>
        <span className={classes["header__info--location"]}>
          Bhopal, Madhya Pradesh
        </span>
      </div>
      <span className={classes.header__menu}>{More}</span>
    </div>
  );
}

export default Header;
