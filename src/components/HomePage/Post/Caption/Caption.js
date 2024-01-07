import React, { useState } from "react";

import classes from "./Caption.module.scss";

function Caption() {
  const [more, showMore] = useState(false);
  return (
    <>
      <div className={classes.caption}>
        <span className={classes.caption__username}>Isabella </span>
        <span className={classes.caption__text}>
          List of 18+ HTML Input Types
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
