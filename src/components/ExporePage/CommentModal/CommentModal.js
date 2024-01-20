import React, { useState } from "react";
import classes from "./CommentModal.module.scss";

import { AnimatePresence } from "framer-motion";

import { useDispatch } from "react-redux";
import { ExploreObjectsActions } from '../../../redux/Explore/ExploreObjects.js'

import Modal from "../../../ui/Modal/Modal";
import HeartAnimation from "../../../ui/animation/HeartAnimation";
import Header from "../../HomePage/Post/Header/Header.js";
import CommentSection from "./CommentSection";
import ActionButtons from "./ActionButtons.js";
import AddComment from "../../HomePage/Post/AddComment/AddComment";

function CommentModal(props) {
  const dispatch = useDispatch();
  const { ExploreObj, url, showCmtModal } = props;
  const { commentsArr } = ExploreObj;
  //console.log(ExploreObj);
  const [heart, showHeart] = useState(false);

  const Liked = () => {
    if (heart) {
      return;
    }
    showHeart(true);
    dispatch(ExploreObjectsActions.postLike({ExploreObj, like: true}));
    let timer = setTimeout(() => {
      showHeart(false);
      clearInterval(timer);
    }, 750);
  };

  return (
    <>
      <Modal
        onClose={() => {
          showCmtModal(false);
        }}
      />
      <div className={classes.cmtModal}>
        <div onDoubleClick={Liked} className={classes.cmtModal__image}>
          <AnimatePresence mode="wait">
            {heart && (<HeartAnimation />)}
          </AnimatePresence>
          <img src={url} alt="" />
        </div>
        <div className={`${classes['cmtModal__comments']} ${classes['addPadding']}`}>
          <div className={`${classes['addPadding']} ${classes['Header']}`}>
            <Header PostObj={{name: 'Abc', profileImg: 111, time: '15m', place: 'xyz'}} />
          </div>
          <div className={classes.linebreakLight} />
          <div className={classes.cmtModal__section}>
            <CommentSection ExploreObj={ExploreObj} commentsArr={commentsArr} />
            <div className={classes.linebreakLight} />
            <div className={classes["cmtModal__section--info"]}>
              <ActionButtons ExploreObj={ExploreObj} />
              <div className={classes.likes}> {ExploreObj.likes} likes </div>
              <div className={classes.time}>{15} ago</div>
            </div>
            <div className={classes.linebreakLight} />
            <div className={classes.addcomment}>
              <AddComment Obj={ExploreObj} Action={ExploreObjectsActions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentModal;
