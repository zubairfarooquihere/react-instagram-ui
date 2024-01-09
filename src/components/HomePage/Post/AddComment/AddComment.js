import React, { useState } from "react";
import classes from "./AddComment.module.scss";
import { emoji } from "../../../../ui/svg/HomePage";
import Emoji from "../../../../ui/Emoji/Emoji";
function AddComment(props) {
  const { comments, newComment } = props;
  const [commentPresent, setCommentPresent] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let arr = [...comments];
    let obj = {name: 'Classic._.Here', comment: commentPresent, likes: 1};
    arr.unshift(obj)
    newComment(arr);
    setCommentPresent('');
  };

  const onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      handleSubmit(e);
    }
  }

  return (
    <div className={classes.AddComment}>
      <textarea
        placeholder="Add a comment..."
        className={classes.AddComment__txtarea}
        name="comment"
        value={commentPresent}
        onChange={(e) => setCommentPresent(e.target.value)}
        onKeyDown={(e) => onEnterPress(e)}
      ></textarea>
      <div className={classes.AddComment__react}>
        <span
          onClick={handleSubmit}
          style={{ visibility: commentPresent ? "visible" : "hidden" }}
          className={classes["AddComment__react--Post"]}
        >
          Post
        </span>
        <span onClick={()=>{setShowEmoji(true)}} className={classes["AddComment__react--emoji"]}>
          {emoji}
          {showEmoji && <Emoji emojiClose={setShowEmoji} emojiMessage={setCommentPresent} />}
        </span>
      </div>
    </div>
  );
}

export default AddComment;
