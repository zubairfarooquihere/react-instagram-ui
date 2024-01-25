import React from "react";

import classes from "./MessagePost.module.scss";

function MessagePost(props) {
  const { addClass } = props;
  return (
    <div
      onClick={() => {
        props.onClick(props.name, props.url, props.id);
      }}
      className={classes.MessagePostLayout}
    >
      <div className={`${classes.MessagePost} ${classes[addClass]}`}>
        <div className={classes.MessagePost__imgHolder}>
          <img src={props.url} alt="pro" />
        </div>
        <div className={classes.MessagePost__name}>
          <h3>{props.name}</h3>
          <p>
            {props.name} sent an attachment. · {props.time}h
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessagePost;
