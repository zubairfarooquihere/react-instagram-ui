import React,{ useState, useEffect, useRef } from "react";
import classes from "./Comments.module.scss";
import { Like, LikeActive } from "../../../ui/svg/HomePage";
import { emoji } from "../../../ui/svg/HomePage";
import Emoji from "../../../ui/Emoji/Emoji";
import { useDispatch } from "react-redux";
import { ReelsObjectsActions } from "../../../redux/Reels/ReelsObjects";
function Comments(props) {
  const dispatch = useDispatch();
  let { reelId, comments, setCommentModal } = props;
  const newRef = useRef(null);
  const [commentPresent, setCommentPresent] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const LikedFunc = (id, index, like) => {
    dispatch(ReelsObjectsActions.likeComment({id, index, like}));
  };

  const comment = comments.map((cmt, index)=>{
    return (<div key={cmt.id} id={cmt.id} className={classes.header}>
      <span className={classes.header__profile}>
        <img src={`https://picsum.photos/500/${111+index}`} alt="" />
        <span className={classes.circle}></span>
      </span>
      <div className={classes.header__info}>
        <span className={classes["header__info--name"]}>{cmt.name}</span>
        <span className={classes["header__info--comment"]}>
          {cmt.comment}
        </span>
        <span className={classes["header__info--details"]}>
          <span className={classes["header__info--details--like"]}>
            {cmt.likes} likes
          </span>
          <span className={classes["header__info--details--reply"]}>Reply</span>
        </span>
      </div>
      <span onClick={()=>{LikedFunc(reelId, index, !cmt.selfLike)}} className={classes.header__like}>
        {!cmt.selfLike && <div>{Like}</div>}
        {cmt.selfLike && <div>{LikeActive}</div>}
      </span>
    </div>)
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentObj = {
      id: commentPresent + "i" + Math.floor(Math.random() * 100),
      name: "Classic._.Here",
      comment: commentPresent,
      likes: 0,
      selfLike: false,
    };

    dispatch(ReelsObjectsActions.addComment({id: reelId, commentObj}));
    setCommentPresent("");
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      handleSubmit(e);
    }
  };

  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setCommentModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <div key={reelId} className={classes.modal} ref={newRef}>
      <div className={classes.headerCmt}>
        <span onClick={()=>{setCommentModal(false)}} className={classes.headerCmt__closeBtn}>X</span>
        <span className={classes.headerCmt__text}>Comments</span>
      </div>
      <div className={classes.comments}>
        {comment}
      </div>
      <div className={classes.addcmt}>
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
                <Emoji
                  emojiClose={setShowEmoji}
                  emojiMessage={setCommentPresent}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
