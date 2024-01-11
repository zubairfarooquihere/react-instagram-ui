import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import classes from "./Picture.module.scss";

import { useDispatch } from "react-redux";
import { PostObjectsActions } from "../../../../redux/PostObjects";
import HeartAnimation from "../../../../ui/animation/HeartAnimation";

function Picture(props) {
  const dispatch = useDispatch();
  const { PostObj } = props;
  const { id, img } = PostObj;
  const [heart, showHeart] = useState(false);

  const Liked = () => {
    if (heart) {
      return;
    }
    showHeart(true);
    dispatch(PostObjectsActions.postLike({ id, like: true }));
    let timer = setTimeout(() => {
      showHeart(false);
      clearInterval(timer);
    }, 750);
  };
  return (
    <div onDoubleClick={Liked} className={classes.Picture}>
      <AnimatePresence mode="wait">
        {heart && <HeartAnimation />}
      </AnimatePresence>
      <img src={`https://picsum.photos/500/${img}`} alt="" />
    </div>
  );
}

export default Picture;
