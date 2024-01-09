import React, { useState } from "react";

import Dialog from "../../../Aside/UserInfoBox/Dialog";
import { More, Like } from "../../../../../ui/svg/HomePage";

function Comment(props) {
  const { classes, comment, img, name, likes } = props;

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
        <img src={`https://picsum.photos/500/${111+img}`} alt="" />
        <span id={circleId} className={classes.circle}></span>
      </span>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={classes.header__info}
      >
        {dialog && <Dialog infoMain={name} img={3} following={true} />}
        <span className={classes["header__info--name"]}>
          {name}{" "}
          <span className={classes["header__info--comment"]}>{comment}</span>
        </span>
        <span className={classes["header__info--details"]}>
          <span className={classes["header__info--details--time"]}>15m</span>
          <span className={classes["header__info--details--like"]}>
            {likes} likes
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
