import React,{ useEffect, useState } from "react";
import classes from "./MessagesPage.module.scss";

import MessageList from "../../components/MessagesPage/MessageList/MessageList";
import Message from "../../components/MessagesPage/Message/Message";

import { webinfoActions } from "../../redux/webinfo";
import { useDispatch, useSelector } from "react-redux";
const catBreeds = [
  "Abyssinian",
  "Bengal",
  "British Shorthair",
  "Maine Coon",
  "Persian",
  "Ragdoll",
  "Russian Blue",
  "Siamese",
  "Sphynx",
];
function MessagesPage() {
  const dispatch = useDispatch();
  const weninfo = useSelector((state) => state.weninfo);
  const [catMsg, setCatMsg] = useState({});
  const [sendMessageObj, setSendMessageObj] = useState([]);
  const [curentIndex, setCurrentIndex] = useState(0);
  
  const showMessage = (breedName, url, index) => {
    setCurrentIndex(index);
    setCatMsg({breedName, url});
  };
  console.log(sendMessageObj);

  useEffect(()=>{
    dispatch(webinfoActions.isShort(true));
    const newSendMessage = catBreeds.map((name) => ({ name, sendMessage: [{message: "", reaction: "" }], recieveMessage: [] }));
    setSendMessageObj([...newSendMessage]);
    return () => {
      dispatch(webinfoActions.isShort(false));
    };
  },[dispatch]);

  return (
    <div data-theme={weninfo.darkMode ? "dark" : "light"} className={classes.messagesPage}>
      <MessageList catBreeds={catBreeds} showMessage={showMessage} />
      <Message sendMessageObj={sendMessageObj} setSendMessageObj={setSendMessageObj} curentIndex={curentIndex} breedName={catMsg.breedName} url={catMsg.url} />
    </div>
  );
}

export default MessagesPage;
