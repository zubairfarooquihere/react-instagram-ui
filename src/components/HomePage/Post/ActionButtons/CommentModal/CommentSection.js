import React from "react";
import classes from "./CommentSection.module.scss";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { PostObjectsActions } from '../../../../../redux/PostObjects'

function CommentSection(props) {
  const dispatch = useDispatch();
  const { id } = props; //comments
  const comments = useSelector((state) => state.PostObjects.PostObjects[id].commentsArr);

  const changeObj = (index, like) => {
    dispatch(PostObjectsActions.likeComment({id, index, like}));
  }

  return (
    <>
      <div className={classes.CmtSec}>
        {comments.map((commentObj, index) => {
          return (
            <Comment
              key={commentObj.id}
              index={index}
              name={commentObj.name}
              comment={commentObj.comment}
              likes={commentObj.likes}
              selfLike={commentObj.selfLike}
              img={index}
              changeObj={changeObj}
              classes={classes}
            />
          );
        })}
      </div>
    </>
  );
}

export default CommentSection;
