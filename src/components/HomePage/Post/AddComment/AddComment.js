import React from "react";
import classes from "./AddComment.module.scss";
import { emoji } from "../../../../ui/svg/HomePage";
function AddComment() {
  return (
    <div className={classes.AddComment}>
      <textarea
        placeholder="Add a comment..."
        className={classes.AddComment__txtarea}
        name="comment"
      ></textarea>
      <div className={classes.AddComment__react}>
        <span style={{ visibility: 'hidden' }} className={classes['AddComment__react--Post']}>Post</span><span className={classes['AddComment__react--emoji']}>{emoji}</span></div>
    </div>
  );
}

export default AddComment;
