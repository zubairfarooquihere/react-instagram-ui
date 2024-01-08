import React, { useState } from "react";
import classes from "./Header.module.scss";
import { AnimatePresence } from "framer-motion";
import { More } from "../../../../ui/svg/HomePage";
import Popup from "./Popup";
import Dialog from "../../Aside/UserInfoBox/Dialog";

function Header() {
  const [popup, showPopup] = useState(false);
  const [timer, setTimer] = useState(null);
  const [dialog, setDialog] = useState(false);
  const popupItems = [
    { text: "Report", warning: true },
    { text: "Unfollow", warning: true },
    { text: "Add to favorites", warning: false },
    { text: "Go to post", warning: false },
    { text: "Share to...", warning: false },
    { text: "Copy link", warning: false },
    { text: "Embed", warning: false },
    { text: "Abount this account", warning: false },
    {
      text: "Cancel",
      warning: false,
      onClick: () => {
        showPopup(false);
      },
    },
  ];
  let circleId = "circleId";

  const handleHoverAction = () => {
    setDialog(true);
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      handleHoverAction();
    }, 1000);

    setTimer(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    setDialog(false);
  };

  return (
    <>
      <AnimatePresence mode="popLayout">
        {popup && <Popup showPopup={showPopup} popupItems={popupItems} />}
      </AnimatePresence>
      <div className={classes.header}>
        <span className={classes.header__profile}>
          <img src={`https://picsum.photos/500/111`} alt="" />
          <span id={circleId} className={classes.circle}></span>
        </span>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={classes.header__info}
        >
          {dialog && <Dialog infoMain={"Isabella"} img={3} following={true} />}
          <span className={classes["header__info--name"]}>
            Isabella{" "}
            <span className={classes["header__info--time"]}>• 15m</span>
          </span>
          <span className={classes["header__info--location"]}>
            Bhopal, Madhya Pradesh
          </span>
        </div>
        <span
          onClick={() => {
            showPopup(true);
          }}
          className={classes.header__menu}
        >
          {More}
        </span>
      </div>
    </>
  );
}

export default Header;
