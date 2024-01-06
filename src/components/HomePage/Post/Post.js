import React from "react";

import classes from "./Post.module.scss";
import Header from "./Header/Header";
function Post() {
  return (
    <div data-theme={false ? "dark" : "light"} className={classes.Post}>
      <Header />
    </div>
  );
}

export default Post;
