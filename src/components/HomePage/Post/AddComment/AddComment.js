import React, { useState } from "react";
import classes from "./AddComment.module.scss";
import { useDispatch } from "react-redux";
import { PostObjectsActions } from "../../../../redux/PostObjects";
import { emoji } from "../../../../ui/svg/HomePage";
import Emoji from "../../../../ui/Emoji/Emoji";
function AddComment(props) {
  const dispatch = useDispatch();
  const { id } = props;
  const [commentPresent, setCommentPresent] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentObj = {
      id: commentPresent + "i" + Math.floor(Math.random() * 100),
      name: "Classic._.Here",
      comment: commentPresent,
      likes: 0,
      selfLike: false,
    };
    dispatch(PostObjectsActions.addComment({id, commentObj}));
    setCommentPresent("");
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      handleSubmit(e);
    }
  };

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
        <span
          onClick={() => {
            setShowEmoji(true);
          }}
          className={classes["AddComment__react--emoji"]}
        >
          {emoji}
          {showEmoji && (
            <Emoji emojiClose={setShowEmoji} emojiMessage={setCommentPresent} />
          )}
        </span>
      </div>
    </div>
  );
}

export default AddComment;
