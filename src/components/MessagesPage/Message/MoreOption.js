import React, { useState, useRef, useEffect, useCallback } from "react";
import EmojiBox from "./EmojiBox";

import { Moresvg, Replysvg, Reactionsvg } from "../../../ui/svg/Message.js";

import classesHere from "./MoreOption.module.scss";

function MoreOption(props) {
  const {
    classes,
    setSendMessage,
    index,
    sendMessage,
    setShowReply,
    setReplyDetails,
    received,
    senderName,
    curentIndex,
    sendMessageObj,
    setSendMessageObj,
  } = props;

  const [moreOption, showMoreOption] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const yourDivRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (yourDivRef.current && !yourDivRef.current.contains(event.target)) {
        if (showEmoji) {
          setShowEmoji(false);
        }
        if (moreOption) {
          showMoreOption(false);
        }
      }
    },
    [showEmoji, moreOption]
  );

  // Event listener added to handle clicks outside the div
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const Forward = () => {};
  const Unsend = () => {
    setSendMessage((prev) => {
      let array = [...prev];
      array.splice(index, 1);
      return array;
    });
  };

  const reply = () => {
    setShowReply(true);
    let message = sendMessage[index];
    let name = received ? senderName : "yourself";
    setReplyDetails({ message: message.message, replyTo: name });
  };

  let options = received ? (
    <React.Fragment>
      <span onClick={Forward}>Forward</span>
      <span>Copy</span>
      <span>Report</span>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <span onClick={Forward}>Forward</span>
      <span onClick={Unsend}>Unsend</span>
    </React.Fragment>
  );

  return (
    <div
      className={classes["Boxreaction"]}
      style={
        received
          ? { right: "-17.5rem", flexDirection: "row-reverse" }
          : { left: "-7rem" }
      }
      ref={yourDivRef}
    >
      <span
        onClick={() => {
          showMoreOption((prev) => {
            showEmoji && setShowEmoji(false);
            return !prev;
          });
        }}
        style={{ position: "relative" }}
      >
        {moreOption && (
          <div
            className={classesHere.More}
            style={received ? { left: "12rem" } : { left: "-5rem" }}
          >
            {options}
            <div
              style={
                received
                  ? {
                      left: "-2rem",
                      transform:
                        "translate(50%, 50%) rotate(270deg) rotateX(180deg)",
                    }
                  : {
                      right: "2rem",
                      transform: "translate(50%, 50%) rotate(270deg)",
                    }
              }
            ></div>
          </div>
        )}
        {Moresvg}
      </span>
      <span onClick={reply}>{Replysvg}</span>
      <span
        style={{ position: "relative" }}
        onClick={() => {
          setShowEmoji((prev) => {
            moreOption && showMoreOption(false);
            return !prev;
          });
        }}
      >
        {showEmoji && (
          <span>
            <EmojiBox
              curentIndex={curentIndex}
              sendMessageObj={sendMessageObj}
              setSendMessageObj={setSendMessageObj}
              left={"-33rem"}
              reaction={true}
              setSendMessage={setSendMessage}
              index={index}
              received={received}
            />
          </span>
        )}
        {Reactionsvg}
      </span>
    </div>
  );
}

export default MoreOption;
