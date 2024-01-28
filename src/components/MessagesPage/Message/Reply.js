import React from "react";

import { cancelsvg } from "../../../ui/svg/Message.js";

import classes from "./Reply.module.scss";

function Reply(props) {
  const { replyDetails, setShowReply } = props;
  console.log(replyDetails);
  let replyTo = replyDetails.replyTo;
  let message = replyDetails.message;

  return (
    <div className={classes.replybox}>
      <div className={classes["replybox--one"]}>
        <p>Replying to {replyTo}</p>
        <span onClick={()=>{setShowReply(false)}}>{cancelsvg}</span>
      </div>
      <div className={classes["replybox--two"]}>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Reply;
