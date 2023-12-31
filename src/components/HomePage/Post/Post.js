import React,{useState} from "react";

import classes from "./Post.module.scss";
import Header from "./Header/Header";
import Picture from "./Picture/Picture";
import ActionButtons from "./ActionButtons/ActionButtons";
import Caption from "./Caption/Caption";
import ViewComments from "./ViewComments/ViewComments";
import AddComment from "./AddComment/AddComment";
import CommentModal from "./ActionButtons/CommentModal/CommentModal";

function Post(props) {
  const { PostObj} = props;
  const [CmtModal, showCmtModal] = useState(false);
  const [comments, setComments] = useState(PostObj.commentsArr);
  //console.log(comments);
  const newComment = (allcomments) => {
    setComments((prev)=>{
      return [...allcomments]
    });
  }


  return (
    <div className={classes.Post}>
      {CmtModal && <CommentModal PostObj={PostObj} comments={comments} img={PostObj.img} showCmtModal={showCmtModal} />}
      <Header name={PostObj.name} profileImg={PostObj.profileImg} time={PostObj.time} place={PostObj.place} />
      <Picture img={PostObj.img} />
      <div className={classes.secondPart}>
        <ActionButtons showCmtModal={showCmtModal} />
        <div className={classes.Post__likes}> {PostObj.likes} likes </div>
        <Caption name={PostObj.name} caption={PostObj.caption} />
        <ViewComments showCmtModal={showCmtModal} commentsCount={comments.length} />
        <AddComment comments={comments} newComment={newComment} />
      </div>
      <div className={classes.linebreakLight} />
    </div>
  );
}

export default Post;
