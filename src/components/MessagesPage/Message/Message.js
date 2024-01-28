import React, { useState, useRef, Fragment } from "react";

import classes from "./Message.module.scss";

import {
  phonecall,
  videocall,
  info,
  blackInfo,
  mike,
  gallery,
  heart,
  emoji,
  Messagesvg,
} from "../../../ui/svg/Message.js";

import Info from "./Info.js";
import EmojiBox from "./EmojiBox.js";
import ImageMsg from "./ImageMsg.js";
import FileMsg from "./FileMsg.js";
import MoreOption from "./MoreOption.js";
import DataReaction from "./DataReaction.js";
import Reply from "./Reply.js";
let globalCurrentIndex = null;
function Message(props) {
  const { sendMessageObj, setSendMessageObj, curentIndex } = props;
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState([]);
  //console.log(sendMessage);
  const [recieveMessage, setRecieveMessage] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [replyDetails, setReplyDetails] = useState({});
  const fileInputRef = useRef(null);

  if (props.breedName === undefined) {
    return (
      <div className={classes.messagePage}>
        <div className={classes.messagePage__content}>
          {Messagesvg}
          <h3>Your messages</h3>
          <p>Send private photos and messages to a friend or group</p>
          <div className={classes.btn}>Send message</div>
        </div>
      </div>
    );
  } else {
    if (recieveMessage.length === 0 || globalCurrentIndex !== curentIndex) {
      setSendMessage([...sendMessageObj[curentIndex].sendMessage]);
      if (sendMessageObj[curentIndex].recieveMessage.length === 0) {
        setRecieveMessage([
          {
            message: `Hi, My name is ${props.breedName}`,
            reaction: "",
            catName: props.breedName,
          },
        ]);
        sendMessageObj[curentIndex].recieveMessage.push(
          {
            message: `Hi, My name is ${props.breedName}`,
            reaction: "",
            catName: props.breedName,
          },
        );
      } else {
        setRecieveMessage([...sendMessageObj[curentIndex].recieveMessage]);
      }
      globalCurrentIndex = curentIndex;
    }
  }

  const handleKeyPress = (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      event.target.value.trim() !== ""
    ) {
      event.preventDefault(); // Prevents a new line in the textarea

      if (showReply) {
        setSendMessage((prev) => {
          return [
            ...prev,
            {
              message: event.target.value,
              reaction: "",
              reply: replyDetails.message,
              repliedTo: replyDetails.replyTo,
            },
          ];
        });
        let arr = sendMessageObj;
        arr[curentIndex].sendMessage.push({
          message: event.target.value,
          reaction: "",
          reply: replyDetails.message,
          repliedTo: replyDetails.replyTo,
        });
        //console.log(arr);
        setSendMessageObj([...arr]);
        setShowReply(false);
        setMessage("");
        return;
      }
      //console.log('Message Send');
      let arr = sendMessageObj;
      arr[curentIndex].sendMessage.push({
        message: event.target.value,
        reaction: "",
      });
      //console.log(arr);
      setSendMessageObj([...arr]);
      setSendMessage((prev) => {
        return [...prev, { message: event.target.value, reaction: "" }];
      });
      setMessage("");
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files; // Get selected files
    const filesArray = Array.from(files); // Convert FileList to an array

    // Read each file and add it to the sendMessage state
    filesArray.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataURL = e.target.result;
        let name = file.name;
        let type = file.type;
        setSendMessage((prev) => [...prev, { dataURL, type, name }]); // Add image data to the state
      };

      reader.readAsDataURL(file); // Read file as a data URL
    });
  };

  const addReaction = (index, setMsg) => {
    console.log("addReaction");
    if (index || index === 0) {
      setMsg((prev) => {
        const updatedMessages = [...prev]; // Create a copy of the previous array
        updatedMessages[index] = { ...updatedMessages[index], reaction: "" }; // Update the reaction of the specific message at the given index
        //----
        // let arr = sendMessageObj;
        // arr[curentIndex].sendMessage.push({ message: event.target.value, reaction: "" });
        // setSendMessageObj([...arr]);
        //----
        return updatedMessages; // Return the updated array
      });
      //console.log(sendMessage);
      return;
    }
  };

  //const showPicture = () => {};

  return (
    <Fragment>
      <div className={classes.messagePage}>
        <div className={classes.messageLayout}>
          <div className={classes.messageLayout__header}>
            <div className={classes["messageLayout__header__one"]}>
              <div
                className={classes["messageLayout__header__one--imageHolder"]}
              >
                <img src={props.url} alt="pro" />
              </div>
              <div className={classes["messageLayout__header__one--name"]}>
                {props.breedName}
              </div>
            </div>
            <div className={classes["messageLayout__header__two"]}>
              <span>{phonecall}</span>
              <span>{videocall}</span>
              <span
                onClick={() => {
                  setShowInfo((prev) => {
                    return !prev;
                  });
                }}
                className={classes["messageLayout__header__two--info"]}
              >
                {!showInfo && info}
                {showInfo && blackInfo}
              </span>
            </div>
          </div>
          <div className={classes.messageLayout__body}>
            {recieveMessage.map((data, index) => {
              let marginBottom = "";
              if (data.reaction) {
                marginBottom = "1.5rem";
              }

              return (
                <div
                  key={`${index}Received`}
                  className={`${classes["messageLayout__body--recieve"]} ${classes.msgBlock}`}
                  style={{ whiteSpace: "pre-wrap", marginBottom }}
                >
                  Hi, My name is {props.breedName}
                  <MoreOption
                    key={index + "MoreOptionReceived"}
                    classes={classes}
                    sendMessage={recieveMessage}
                    setSendMessage={setRecieveMessage}
                    index={index}
                    setShowReply={setShowReply}
                    setReplyDetails={setReplyDetails}
                    received={true}
                    senderName={props.breedName}
                    curentIndex={curentIndex}
                    sendMessageObj={sendMessageObj}
                    setSendMessageObj={setSendMessageObj}
                  />
                  {recieveMessage[0].reaction && (
                    <DataReaction
                      key={index + "DataReactionReceived"}
                      isReactionPresent={recieveMessage[0].reaction !== ""}
                      classes={classes}
                      setSendMessage={setRecieveMessage}
                      addReaction={addReaction}
                      index={index}
                      data={data}
                      received={true}
                    />
                  )}
                </div>
              );
            })}
            {sendMessage.map((data, index) => {
              if (data.type === "image/jpeg") {
                let isReactionPresent = "";
                if (data.reaction === "") {
                  isReactionPresent = "none";
                }
                return (
                  <ImageMsg
                    key={index + "ImageMsg"}
                    classes={classes}
                    data={data}
                    msgBlock={"msgBlock"}
                    index={index}
                    setSendMessage={setSendMessage}
                    isReactionPresent={isReactionPresent}
                    addReaction={addReaction}
                    setShowReply={setShowReply}
                    setReplyDetails={setReplyDetails}
                    sendMessage={sendMessage}
                  />
                );
              }
              if (data.type === "text/plain") {
                let isReactionPresent = "";
                if (data.reaction === "") {
                  isReactionPresent = "none";
                }
                return (
                  <FileMsg
                    key={index + "textFile"}
                    classes={classes}
                    data={data}
                    msgBlock={"msgBlock"}
                    index={index}
                    emoji={emoji}
                    setSendMessage={setSendMessage}
                    isReactionPresent={isReactionPresent}
                    addReaction={addReaction}
                    setShowReply={setShowReply}
                    setReplyDetails={setReplyDetails}
                  />
                );
              }
              if (data.message !== "") {
                let emojiClass = "";
                if (data.message === "❤️") {
                  emojiClass = "emoji";
                }
                let marginBottom = "";
                if (data.reaction) {
                  marginBottom = "1.5rem";
                }
                let isReactionPresent = "";
                if (data.reaction === "") {
                  isReactionPresent = "none";
                }
                return (
                  <React.Fragment>
                    {data.reply && (
                      <div className={classes.repliedTo}>
                        You replied to {data.repliedTo}
                      </div>
                    )}
                    {data.reply && (
                      <div
                        key={index + "replyMessage"}
                        className={`${classes["messageLayout__body--send"]} ${classes.repliedTo__message}`}
                      >
                        {data.reply}
                      </div>
                    )}
                    <div
                      key={index + "textMessage"}
                      className={`${classes["messageLayout__body--send"]} ${classes.msgBlock} ${classes[emojiClass]}`}
                      style={{
                        whiteSpace: "pre-wrap",
                        marginBottom: marginBottom,
                      }}
                    >
                      {data.message}
                      <MoreOption
                        key={index + "MoreOption"}
                        classes={classes}
                        sendMessage={sendMessage}
                        setSendMessage={setSendMessage}
                        index={index}
                        setShowReply={setShowReply}
                        setReplyDetails={setReplyDetails}
                        curentIndex={curentIndex}
                        sendMessageObj={sendMessageObj}
                        setSendMessageObj={setSendMessageObj}
                      />

                      {data.reaction && (
                        <DataReaction
                          key={index + "DataReaction"}
                          isReactionPresent={isReactionPresent}
                          classes={classes}
                          addReaction={addReaction}
                          setSendMessage={setSendMessage}
                          index={index}
                          data={data}
                        />
                      )}
                    </div>
                  </React.Fragment>
                );
              } else {
                return <></>;
              }
            })}
          </div>
          <div className={classes.messageLayout__textboxdiv}>
            {showReply && (
              <Reply replyDetails={replyDetails} setShowReply={setShowReply} />
            )}
            <div className={classes.messageLayout__textbox}>
              <div className={classes["messageLayout__textbox--one"]}>
                <div className={classes["messageLayout__textbox--one__svg"]}>
                  {showEmoji && <EmojiBox setMessage={setMessage} />}
                  <span
                    onClick={() => {
                      setShowEmoji((prev) => {
                        return !prev;
                      });
                    }}
                    className={classes["messageLayout__textbox--one--emoji"]}
                  >
                    {emoji}
                  </span>
                </div>
                <div className={classes["messageLayout__textbox--one__text"]}>
                  <textarea
                    placeholder="Message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                  ></textarea>
                </div>
              </div>
              {message === "" ? (
                <div className={classes["messageLayout__textbox--two"]}>
                  <span>{mike}</span>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <span onClick={() => fileInputRef.current.click()}>
                    {gallery}
                  </span>
                  <span
                    onClick={() => {
                      setSendMessage((prev) => {
                        return [...prev, { message: "❤️" }];
                      });
                      let arr = sendMessageObj;
                      arr[curentIndex].sendMessage.push({ message: "❤️",reaction: "" });
                      setSendMessageObj([...arr]);
                    }}
                  >
                    {heart}
                  </span>
                </div>
              ) : (
                <p className={classes.sendBtn}>Send</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {showInfo && <Info url={props.url} breedName={props.breedName} />}
    </Fragment>
  );
}

export default Message;
