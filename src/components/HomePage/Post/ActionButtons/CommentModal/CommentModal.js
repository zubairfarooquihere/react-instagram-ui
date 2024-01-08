import React from "react";
import classes from "./CommentModal.module.scss";
import Modal from "../../../../../ui/Modal/Modal";
import Header from "../../Header/Header";
import CommentSection from "./CommentSection";
import ActionButtons from "../ActionButtons";

function CommentModal(props) {
  const {showCmtModal, PostObj} = props;
  return (
    <>
      <Modal onClose={() => {showCmtModal(false)}} />
      <div className={classes.cmtModal}>
        <div className={classes.cmtModal__image}>
          <img src={`https://picsum.photos/500/${PostObj.img}`} alt="" />
        </div>
        <div className={classes.cmtModal__comments}>
          <Header name={PostObj.name} profileImg={PostObj.profileImg} time={PostObj.time} place={PostObj.place} />
          <div className={classes.linebreakLight} />
          <div className={classes.cmtModal__section}>
            <CommentSection commentsName={PostObj.commentsName} comments={PostObj.comments} />
            <div className={classes.linebreakLight} />
            <div className={classes["cmtModal__section--info"]}>
              <ActionButtons />
              <div className={classes.likes}> 147 likes </div>
              <div className={classes.time}>15m ago</div>
            </div>
            <div className={classes.linebreakLight} />
            <div className={classes.addcomment}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentModal;
