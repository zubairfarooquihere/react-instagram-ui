import React from "react";

import classes from "./Post.module.scss";
import Header from "./Header/Header";
import Picture from "./Picture/Picture";
import ActionButtons from "./ActionButtons/ActionButtons";
import Caption from "./Caption/Caption";
import ViewComments from "./ViewComments/ViewComments";
import AddComment from "./AddComment/AddComment";

function Post() {
  return (
    <div data-theme={false ? "dark" : "light"} className={classes.Post}>
      <Header />
      <Picture />
      <ActionButtons />
      <div className={classes.Post__likes}> 147 likes </div>
      <Caption />
      <ViewComments />
      <AddComment />
      <div className={classes.linebreakLight}/>
    </div>
  );
}

export default Post;
