import React, { useState } from "react";

import Dialog from "../../../Aside/UserInfoBox/Dialog";
import { More, Like } from "../../../../../ui/svg/HomePage";

function Comment(props) {
  const { classes } = props;

  const [timer, setTimer] = useState(null);
  const [dialog, setDialog] = useState(false);

  let circleId = "circleId";

  const handleHoverAction = () => {
    //setDialog(true);
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      handleHoverAction();
    }, 3000);

    setTimer(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    setDialog(false);
  };
  return (
    <div className={classes.header}>
      <span className={classes.header__profile}>
        <img src={`https://picsum.photos/500/111`} alt="" />
        <span id={circleId} className={classes.circle}></span>
      </span>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={classes.header__info}
      >
        {dialog && <Dialog infoMain={"Isabella"} img={3} following={true} />}
        <span className={classes["header__info--name"]}>
          Isabella{" "}
          <span className={classes["header__info--comment"]}>Nice Picture</span>
        </span>
        <span className={classes["header__info--details"]}>
          <span className={classes["header__info--details--time"]}>15m</span>
          <span className={classes["header__info--details--like"]}>
            11 likes
          </span>
          <span className={classes["header__info--details--reply"]}>Reply</span>
          <span className={classes["header__info--details--more"]}>{More}</span>
        </span>
      </div>
      <span onClick={() => {}} className={classes.header__like}>
        {Like}
      </span>
    </div>
  );
}

export default Comment;
