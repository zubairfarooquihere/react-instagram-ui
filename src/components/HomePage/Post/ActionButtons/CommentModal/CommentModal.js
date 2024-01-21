import React, { useState } from "react";
import classes from "./CommentModal.module.scss";

import { AnimatePresence } from "framer-motion";

import { useDispatch } from "react-redux";
import { PostObjectsActions } from '../../../../../redux/PostObjects'

import Modal from "../../../../../ui/Modal/Modal";
import Header from "../../Header/Header";
import CommentSection from "./CommentSection";
import ActionButtons from "../ActionButtons";
import AddComment from "../../AddComment/AddComment";
import HeartAnimation from "../../../../../ui/animation/HeartAnimation";

function CommentModal(props) {
  const dispatch = useDispatch();
  const { PostObj, showCmtModal } = props;
  const [heart, showHeart] = useState(false);

  const Liked = () => {
    if (heart) {
      return;
    }
    showHeart(true);
    let id = PostObj.id
    dispatch(PostObjectsActions.postLike({id, like: true}));
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
          <img src={`https://picsum.photos/500/${PostObj.img}`} alt="" />
        </div>
        <div className={`${classes['cmtModal__comments']} ${classes['addPadding']}`}>
          <div className={`${classes['addPadding']}`}>
            <Header PostObj={PostObj} />
          </div>
          <div className={classes.linebreakLight} />
          <div className={classes.cmtModal__section}>
            <CommentSection id={PostObj.id} />
            <div className={classes.linebreakLight} />
            <div className={classes["cmtModal__section--info"]}>
              <ActionButtons PostObj={PostObj} showCmtModal={()=>{}} />
              <div className={classes.likes}> {PostObj.likes} likes </div>
              <div className={classes.time}>{PostObj.time} ago</div>
            </div>
            <div className={classes.linebreakLight} />
            <div className={classes.addcomment}>
              <AddComment Obj={PostObj} Action={PostObjectsActions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentModal;
