import React, { useState } from "react";

import { motion, useAnimate, AnimatePresence } from "framer-motion";

import classes from "./Nav.module.scss";

import { instagram, instagramShort } from "../../ui/svg/Nav";
import { more, moreSelect } from "../../ui/svg/Nav";
import DropDown from "./DropDown/DropDown";
import IconList from "./IconList";

let moreToggle = true;
let navInnerFull = true;
function Nav() {
  const [scope, animate] = useAnimate();
  const [dropdown, setDropdown] = useState(false);

  const animateSvg = (svgId) => {
    animate("#" + svgId, { scale: [1, 1.1, 1] }, { duration: 0.3 });
  };

  const animateHoldLi = (liId, svgId) => {
    animate("#" + liId, { opacity: 0.7 });
    animate("#" + svgId, { scale: 0.9 });
    animate("#moreSelectSvg", { scale: 0.9 });
  };

  const animateRemoveHoldLi = (liId) => {
    if (moreToggle) {
      animate("#" + liId, { opacity: 1 });
      animate("#moreSvg", { display: "none" });
      animate("#" + liId + " span", { fontWeight: 700 });
      animate("#moreSelectSvg", { scale: 1, display: "block" });
    } else {
      animate("#" + liId, { opacity: 1 });
      animate("#moreSelectSvg", { display: "none" });
      animate("#" + liId + " span", { fontWeight: 500 });
      animate("#moreSvg", { scale: 1, display: "block" });
    }
    moreToggle = !moreToggle;
  };

  const animateInnerNav = (shortLogo) => {
    navInnerFull = !navInnerFull;
    if (shortLogo) {
      // Logo Bottom
      animate("#logofull", { display: "none", opacity: 0, scale: 0 });
      animate(
        "#logoshort",
        { display: "block", opacity: 1, scale: 1 },
        { duration: 0.3 }
      );
      // Footer Bottom
      animate("#footerText", { display: "none" });
      animate("#moreLiId", { width: 50 }, { type: "tween", stiffness: 1 });
      //navInner
      animate("#navInner", { width: 70 }, { type: "tween", stiffness: 1 });
    } else {
      // Logo Bottom
      animate(
        "#logofull",
        { display: "block", opacity: 1, scale: 1 },
        { duration: 0.3 }
      );
      animate("#logoshort", { display: "none", opacity: 0, scale: 0 });
      // Footer Bottom
      animate("#footerText", { display: "block" });
      animate("#moreLiId", { width: "" }, { type: "tween", stiffness: 1 });
      //navInner
      animate("#navInner", { width: "" }, { duration: 0.2 });
    }
  };

  const animateNotificationSlider = (open) => {
    if (open) {
      //sidebar Open
      animate(
        "#notificationSlider",
        { left: 70, width: 405 },
        { duration: 0.35 }
      );
    } else {
      //sidebar Close
      animate(
        "#notificationSlider",
        { left: "", width: "" },
        { duration: 0.5 }
      );
    }
  };

  const animateSearchSlider = (open) => {
    if (open) {
      //sidebar Open
      animate("#searchSlider", { left: 70, width: 405 }, { duration: 0.35 });
    } else {
      //sidebar Close
      animate("#searchSlider", { left: "", width: "" }, { duration: 0.5 });
    }
  };

  const handleClick = (event) => {
    //console.log("close");
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={classes.navOutter}
        data-theme={false ? "dark" : "light"}
        ref={scope}
      >
        <AnimatePresence>{dropdown && <DropDown setDropdown={setDropdown} />}</AnimatePresence>
        <motion.div
          id="notificationSlider"
          className={classes.notificationSlider}
        >
          <h1>Notification Slider</h1>
        </motion.div>

        <motion.div id="searchSlider" className={classes.searchSlider}>
          <h1>Search Slider</h1>
        </motion.div>

        <motion.div className={classes.navInner} id="navInner">
          <header className={classes.header}>
            <span id="logofull" className={classes.header__logofull}>
              {instagram}
            </span>
            <span id="logoshort" className={classes.header__logoshort}>
              {instagramShort}
            </span>
          </header>

          <IconList
            animateInnerNav={animateInnerNav}
            animateNotificationSlider={animateNotificationSlider}
            animateSearchSlider={animateSearchSlider}
            animateSvg={animateSvg}
          />
          <motion.footer
            className={classes.footer}
            onHoverStart={() => {
              animateSvg("moreSvg");
            }}
            onMouseUp={() => {
              animateRemoveHoldLi("moreLiId");
            }}
            onMouseDown={() => {
              animateHoldLi("moreLiId", "moreSvg", "moreSelectSvg");
            }}
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            <div id="moreLiId" className={classes.footer__inner}>
              <span id="moreSvg" className={classes.footer__svg}>
                {more}
              </span>
              <p id="moreSelectSvg" className={classes.footer__svgSelected}>
                {moreSelect}
              </p>
              <span id="footerText" className={classes.footer__text}>
                More
              </span>
            </div>
          </motion.footer>
        </motion.div>
      </div>
    </>
  );
}

export default Nav;
