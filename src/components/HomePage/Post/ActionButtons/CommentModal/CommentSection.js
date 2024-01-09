import React from "react";
import classes from "./CommentSection.module.scss";
import Comment from "./Comment";

function CommentSection(props) {
  const { comments } = props;
  console.log(comments);
  return (
    <>
      <div className={classes.CmtSec}>
        {comments.map((commentObj, index) => {
          return (
            <Comment
              key={index}
              name={commentObj.name}
              comment={commentObj.comment}
              likes={commentObj.likes}
              img={index}
              classes={classes}
            />
          );
        })}
      </div>
    </>
  );
}

export default CommentSection;
