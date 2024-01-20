import React from "react";
import classes from "./CommentSection.module.scss";
import Comment from "./Comment";
import { useDispatch } from "react-redux";
import { ExploreObjectsActions } from '../../../redux/Explore/ExploreObjects.js'

function CommentSection(props) {
  const dispatch = useDispatch();
  const { ExploreObj, commentsArr } = props; //comments

  const changeObj = (index, like) => {
    dispatch(ExploreObjectsActions.likeComment({ExploreObj, index, like}));
  }

  return (
    <>
      <div className={classes.CmtSec}>
        {commentsArr.map((commentObj, index) => {
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
