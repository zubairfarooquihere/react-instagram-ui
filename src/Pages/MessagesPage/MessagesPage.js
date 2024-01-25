import React from "react";
import classes from "./MessagesPage.module.scss";

import MessageList from "../../components/MessagesPage/MessageList/MessageList";
function MessagesPage() {
  const showMessage = (breedName, url) => {};

  return (
    <div className={classes.messagesPage}>
      <MessageList showMessage={showMessage} />
    </div>
  );
}

export default MessagesPage;
