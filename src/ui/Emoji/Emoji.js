import React, { useEffect, useRef } from "react";
import classes from "./Emoji.module.scss";

import Picker from "emoji-picker-react";
function Emoji(props) {
  const { emojiMessage, emojiClose } = props;
  const newRef = useRef(null);

  const onEmojiClick = (event, emojiObject) => {
    emojiMessage((prevInput) => prevInput + "" + event.emoji);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      emojiClose(false);
    }
  };

  return (
    <div ref={newRef} className={classes.emoji}>
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
}

export default Emoji;
