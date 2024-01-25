import React from "react";
import classes from "./Reel.module.scss";
import { Like, LikeActive,Comment, Share, Save, More } from "../../../ui/svg/HomePage";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function Reel(props) {
  const { reelId } = props;
  const reelObj = useSelector(
    (state) => state.ReelsObjects.ReelsObjects[reelId]
  );
  const svg = (
    <svg
      aria-label="Audio image"
      className="x1lliihq x1n2onr6 x9bdzbf"
      fill="currentColor"
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
    >
      <title>Audio image</title>
      <path d="M21.002 16.972V2.044a.999.999 0 0 0-.36-.769 1.012 1.012 0 0 0-.823-.214L6.816 3.479A1 1 0 0 0 6 4.462v10.864A3.75 3.75 0 1 0 9 19V9.56l9.003-1.675v5.442A3.75 3.75 0 1 0 21.005 17c0-.01-.003-.02-.003-.029Z"></path>
    </svg>
  );
  return (
    <div className={classes.reel}>
      <img src={reelObj ? reelObj.gif : ""} alt="" />
      <div className={classes.profile}>
        <header className={classes.profile__header}>
          <span className={classes["profile__header--img"]}>
            <img src={reelObj ? reelObj.profileImg : ""} alt="" />
          </span>
          <span className={classes["profile__header--name"]}>
            {reelObj ? reelObj.name : ""}
          </span>
          <span className={classes["profile__header--button"]}>
            <span>•</span>
            <button className={classes["post__button--btn"]}>Follow</button>
          </span>
        </header>
        <main className={classes.profile__caption}>
          {reelObj ? reelObj.caption : ""}
        </main>
        <footer className={classes.profile__footer}>
          {svg} Danger Twins · Thing of Beauty
        </footer>
      </div>
      <div className={classes.details}>
        <div className={classes.details__action}>
          {true && <span className={classes["details__action--btn"]}>{Like}</span>}
          {false && <motion.span initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
            }} className={classes["details__action--btn"]}>{LikeActive}</motion.span>}
          <span className={classes["details__action--info"]}>{reelObj ? reelObj.likes : ""}</span>
        </div>
        <div className={classes.details__action}>
          <span className={classes["details__action--btn"]}>{Comment}</span>
          <span className={classes["details__action--info"]}>{reelObj ? reelObj.commentsArr.length : ""}</span>
        </div>
        <div className={classes.details__action}>
          <span className={classes["details__action--btn"]}>{Share}</span>
        </div>
        <div className={classes.details__action}>
          <span className={classes["details__action--btn"]}>{Save}</span>
        </div>
        <div className={classes.details__action}>
          <span className={classes["details__action--btn"]}>{More}</span>
        </div>
        <div className={classes.details__action}>
          <span className={classes["details__action--img"]}>
            <img src={reelObj ? reelObj.profileImg : ""} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Reel;
