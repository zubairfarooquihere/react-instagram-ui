import React from "react";
import classes from "./CommentSection.module.scss";
import Comment from "./Comment";

function CommentSection() {



  return (
    <>
      <div className={classes.CmtSec}>
        <Comment classes={classes} />
        <Comment classes={classes} />
        <Comment classes={classes} />
        <Comment classes={classes} />
        <Comment classes={classes} />
        <Comment classes={classes} />

      </div>
    </>
  );
}

export default CommentSection;
