import React from "react";
import classes from "./Post.module.scss";

import { camera } from "../../../ui/svg/ProfilePage";
import NoData from "./NoData/NoData";
function Post() {
  let isDataPresent = false;
  return (
    <div className={classes.Post}>
      {!isDataPresent && (
        <NoData
          svg={camera}
          title={"Share Photos"}
          description={"When you share photos, they will appear on your profile."}
          actionTxt={"Share your first photo"}
        />
      )}
    </div>
  );
}

export default Post;
