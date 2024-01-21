import React, { useState, useEffect } from "react";
import classes from "./Picture.module.scss";

import CommentModal from "../CommentModal/CommentModal";
let temp = {};
let indexArr = [];
function Picture(props) {
  const { ExploreObj, url, index } = props;
  const { commentsArr, likes } = ExploreObj;
  const [CmtModal, showCmtModal] = useState(false);

  const heart = (
    <svg
      aria-label="Unlike"
      className="x1lliihq x1n2onr6 xxk16z8"
      fill="white"
      height="20"
      role="img"
      viewBox="0 0 48 48"
      width="20"
    >
      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
    </svg>
  );
  const Comment = (
    <svg
      aria-label="Comment"
      className="x1lliihq x1n2onr6 x5n08af"
      fill="currentColor"
      height="20"
      role="img"
      viewBox="0 0 24 24"
      width="20"
    >
      <title>Comment</title>
      <path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="white"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );

  useEffect(() => {
    if (temp[index] === undefined) {
      temp = { ...temp, [index]: { ...ExploreObj } };
      indexArr.push(index);
    } else {
      temp[index] = { ...ExploreObj };
    }
  }, [ExploreObj, index]);

  return (
    <>
      {CmtModal && (
        <CommentModal
          url={url}
          showCmtModal={showCmtModal}
          temp={temp}
          indexArr={indexArr}
          currentIndex={index}
        />
      )}
      <div
        className={classes.picture}
        onClick={() => {
          showCmtModal(true);
        }}
      >
        <div className={classes.cover}>
          <div className={`${classes.cover__text} ${classes.cover__likes}`}>
            {heart}
            <span>{likes}</span>
          </div>
          <div className={`${classes.cover__text} ${classes.cover__comments}`}>
            {Comment}
            <span>{commentsArr.length}</span>
          </div>
        </div>
        <img src={url} alt="" />
      </div>
    </>
  );
}

export default Picture;
