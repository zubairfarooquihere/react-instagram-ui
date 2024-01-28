import React from "react";

function DataReaction(props) {
  const {
    index,
    isReactionPresent,
    classes,
    addReaction,
    data,
    setSendMessage,
    received,
  } = props;

  return (
    <div
      style={
        received
          ? { display: isReactionPresent, left: "1rem" }
          : { display: isReactionPresent }
      }
      className={classes["messageLayout__body--send--reaction"]}
    >
      <span
        onClick={() => {
          addReaction(index, setSendMessage);
        }}
      >
        {data.reaction}
      </span>
    </div>
  );
}

export default DataReaction;
