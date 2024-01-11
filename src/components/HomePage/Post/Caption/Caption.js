import React, { useState } from "react";

import classes from "./Caption.module.scss";

function Caption(props) {
  const { PostObj } = props;
  const {name, caption} = PostObj;
  const [more, showMore] = useState(false);
  return (
    <>
      <div className={classes.caption}>
        <span className={classes.caption__username}>{name} </span>
        <span className={classes.caption__text}>
          {caption}
        </span>
      </div>
      {!more && (
        <div className={classes.more}>
          <span
            onClick={() => {
              showMore(true);
            }}
          >
            ... more
          </span>
        </div>
      )}
      {more && (
        <>
          <div className={classes.moreContent}>
            . . . <span>❤️LIKE | 😁 SAVE | 🧑🏻‍💻SHARE | 💬COMMENT</span> . . .
          </div>
        </>
      )}
    </>
  );
}

export default Caption;
