import React, { useState } from "react";

import classes from "./Post.module.scss";
import { useSelector } from "react-redux";

import { PostObjectsActions } from "../../../redux/PostObjects";

import Header from "./Header/Header";
import Picture from "./Picture/Picture";
import ActionButtons from "./ActionButtons/ActionButtons";
import Caption from "./Caption/Caption";
import ViewComments from "./ViewComments/ViewComments";
import AddComment from "./AddComment/AddComment";
import CommentModal from "./ActionButtons/CommentModal/CommentModal";

function Post(props) {
  const { id } = props;
  const PostObj = useSelector((state) => state.PostObjects.PostObjects[id]);
  const [CmtModal, showCmtModal] = useState(false);

  return (
    <div className={classes.Post}>
      {CmtModal && (
        <CommentModal PostObj={PostObj} showCmtModal={showCmtModal} />
      )}
      <Header PostObj={PostObj} />
      <Picture PostObj={PostObj} />
      <div className={classes.secondPart}>
        <ActionButtons PostObj={PostObj} showCmtModal={showCmtModal} />
        <div className={classes.Post__likes}>{PostObj.likes} likes </div>
        <Caption PostObj={PostObj} />
        <ViewComments
          showCmtModal={showCmtModal}
          commentsCount={PostObj.commentsArr.length}
        />
        <AddComment Obj={PostObj} Action={PostObjectsActions} />
      </div>
      <div className={classes.linebreakLight} />
    </div>
  );
}

export default Post;
