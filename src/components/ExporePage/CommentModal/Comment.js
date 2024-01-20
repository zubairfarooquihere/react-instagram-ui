import React, { useState } from "react";

import Dialog from "../../../components/HomePage/Aside/UserInfoBox/Dialog";
import { More, Like, LikeActive } from "../../../ui/svg/HomePage";

function Comment(props) {
  const { classes, comment, img, name, likes, selfLike, changeObj, index } = props;
  const [liked, setLiked] = useState(selfLike);
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

  const LikedFunc = () => {
    setLiked(!liked);
    changeObj(index, !liked)
  };

  const CommentLikes = likes  + (liked ? 1 : 0);

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
            {CommentLikes} likes
          </span>
          <span className={classes["header__info--details--reply"]}>Reply</span>
          <span className={classes["header__info--details--more"]}>{More}</span>
        </span>
      </div>
      <span onClick={LikedFunc} className={classes.header__like}>
        {!liked && <div>{Like}</div>}
        {liked && <div>{LikeActive}</div>}
      </span>
    </div>
  );
}

export default Comment;
