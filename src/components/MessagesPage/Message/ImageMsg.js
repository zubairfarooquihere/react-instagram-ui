import React from "react";

import MoreOption from "./MoreOption";
import DataReaction from "./DataReaction";

function ImageMsg(props) {
  const {
    classes,
    data,
    msgBlock,
    index,
    setSendMessage,
    isReactionPresent,
    addReaction,
    setShowReply,
    setReplyDetails,
    sendMessage
  } = props;

  let marginBottom = "";
  if (data.reaction) {
    marginBottom = "1.75rem";
  }
  return (
    <div
      className={`${classes["messageLayout__body--send"]} ${classes[msgBlock]}`}
      style={{
        whiteSpace: "pre-wrap",
        padding: "0rem",
        background: "transparent",
        marginBottom,
      }}
    >
      <img
        style={{
          cursor: "pointer",
          width: "25rem",
          height: "20rem",
          objectFit: "fill",
          borderRadius: "3rem",
        }}
        onClick={() => {
          //showPicture(data.dataURL);
        }}
        src={data.dataURL}
        alt={`Uploaded file ${index}`}
      />
      <MoreOption
        key={index+'MoreOption'}
        classes={classes}
        setSendMessage={setSendMessage}
        index={index}
        setShowReply={setShowReply}
        setReplyDetails={setReplyDetails}
        sendMessage={sendMessage}
      />

      {data.reaction && (
        <DataReaction
          key={index+'DataReaction'}
          isReactionPresent={isReactionPresent}
          classes={classes}
          addReaction={addReaction}
          setSendMessage={setSendMessage}
          index={index}
          data={data}
        />
      )}
    </div>
  );
}

export default ImageMsg;
