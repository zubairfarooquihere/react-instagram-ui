import React from "react";
import classes from "./CommentSection.module.scss";
import Comment from "./Comment";

function CommentSection(props) {
  const {comments, commentsName} = props;

  return (
    <>
      <div className={classes.CmtSec}>
        {comments.map((comment, index)=>{
          return <Comment key={index} name={commentsName[index]} comment={comment} img={index} classes={classes} />
        })}
        {/* <Comment classes={classes} />
        <Comment classes={classes} />
        <Comment classes={classes} /> */}

      </div>
    </>
  );
}

export default CommentSection;
