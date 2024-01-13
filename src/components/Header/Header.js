import React, { useState } from "react";
import classes from "./Header.module.scss";
import { motion, useAnimate } from "framer-motion";

import { instagram, notification, notificationSelect } from "../../ui/svg/Nav";

import NotificationSlider from "../Notification/NotificationSlider";
let toggle = false;
function Header() {
  const [notify, openNotification] = useState(false);
  const [scope, animate] = useAnimate();
  const animateRemoveHoldLi = (svgId, selectedSvgId) => {
    toggle = !toggle;
    openNotification(toggle);
    
    if (toggle === true) {
      animate("#" + svgId, { scale: 1, display: "none" });
      animate("#" + selectedSvgId, { scale: 1, display: "block" });
    } else {
      animate("#" + svgId, { scale: 1, display: "block" });
      animate("#" + selectedSvgId, { scale: 1, display: "none" });
    }
  };

  return (
    <>
      {notify && (
        <div className={classes.abc}>
          <NotificationSlider fullscreen={true} />
        </div>
      )}
      <div
        data-theme={false ? "dark" : "light"}
        className={classes.headerDiv}
        ref={scope}
      >
        <div className={classes.header}>
          <span className={classes.header__one}>{instagram}</span>
          <span className={classes.header__two}>
            <div className={classes.topnav}>
              <input type="text" placeholder={"Search"} />
            </div>
            <motion.span
              onMouseUp={() => {
                animateRemoveHoldLi("svgId", "svgSelectedId");
              }}
              id={"wrapper"}
            >
              <span id={"svgId"} className={classes.list__svg}>
                {notification}
              </span>
              <p
                id={"svgSelectedId"}
                className={`${classes.list__svgSelected} `}
              >
                {notificationSelect}
              </p>
            </motion.span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
