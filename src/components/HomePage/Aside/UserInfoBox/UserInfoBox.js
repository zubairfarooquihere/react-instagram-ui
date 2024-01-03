import React from "react";
import classes from "./UserInfoBox.module.scss";

function UserInfoBox(props) {
  const {infoMain, infoSub, button, img} = props;
  return (
    <div className={classes.userInfo}>
      <div className={classes.firstPart}>
        <span className={classes.userInfo__img}>
          <img src={`https://picsum.photos/400/${500+img}`} alt="" />
        </span>
        <main className={classes.userInfo__info}>
          <span className={classes['userInfo__info--main']}>{infoMain}</span>
          <span className={classes['userInfo__info--sub']}>{infoSub}</span>
        </main>
      </div>
      <div  className={classes.secondPart}>
        <button className={classes.secondPart__btn}>{button}</button>
      </div>
    </div>
  );
}

export default UserInfoBox;
