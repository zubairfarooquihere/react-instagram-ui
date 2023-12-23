import React, { useState } from "react";

import { motion, useAnimate, AnimatePresence } from "framer-motion";

import classes from "./Nav.module.scss";

import { instagram, instagramShort } from "../../ui/svg/Nav";
import { more, moreSelect } from "../../ui/svg/Nav";

import DropDown from "./DropDown/DropDown";
import IconList from "./IconList";
import NotificationSlider from "./Slider/NotificationSlider";
import SearchSlider from "./Slider/SearchSlider";

import { Tooltip } from "react-tooltip";

let opendropdown = false;
function Nav() {
  const [scope, animate] = useAnimate();
  const [dropdown, setDropdown] = useState(false);
  const [navInnerFull, setNavInnerFull] = useState(true);
  const [openNotification, setOpenNotification] = useState(false);

  const animateSvg = (svgId) => {
    animate("#" + svgId, { scale: [1, 1.1, 1] }, { duration: 0.3 });
  };

  const animateHoldLi = (liId, svgId) => {
    animate("#" + liId, { opacity: 0.7 });
    animate("#" + svgId, { scale: 0.9 });
    animate("#moreSelectSvg", { scale: 0.9 });
  };

  const animateRemoveHoldLi = (moreToggle) => {
    if (moreToggle) {
      animate("#moreLiId", { opacity: 1 });
      animate("#moreSvg", { display: "none" });
      animate("#moreLiId span", { fontWeight: 700 });
      animate("#moreSelectSvg", { scale: 1, display: "block" });
    } else {
      animate("#moreLiId", { opacity: 1 });
      animate("#moreSelectSvg", { display: "none" });
      animate("#moreLiId span", { fontWeight: 500 });
      animate("#moreSvg", { scale: 1, display: "block" });
    }
    opendropdown = moreToggle;
  };

  const animateInnerNav = (shortLogo) => {
    setNavInnerFull(!navInnerFull);
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
    // if (open) {
    //   //sidebar Open
    //   animate(
    //     "#notificationSlider",
    //     { left: 70, width: 405 },
    //     { duration: 0.35 }
    //   );
    //   setOpenNotification(true);
    // } else {
    //   //sidebar Close
    //   animate(
    //     "#notificationSlider",
    //     { left: "", width: "" },
    //     { duration: 0.5 }
    //   );
    //   setOpenNotification(false);
    // }
    setOpenNotification(!openNotification);
  };

  const animateSearchSlider = (open) => {
    // if (open) {
    //   //sidebar Open
    //   animate("#searchSlider", { left: 70, width: 405 }, { duration: 0.35 });
    // } else {
    //   //sidebar Close
    //   animate("#searchSlider", { left: "", width: "" }, { duration: 0.5 });
    // }
  };

  const tooltip = (
    <Tooltip
      id="my-tooltip"
      place="right"
      style={{
        fontSize: "13px",
        padding: "3px 6px",
        paddingBottom: "5px",
        borderRadius: "5px",
        transition: "all .3s",
        display: navInnerFull ? "none" : "block",
      }}
      render={({ content, activeAnchor }) => <span>{content}</span>}
    />
  );

  return (
    <>
      <div
        className={classes.navOutter}
        data-theme={false ? "dark" : "light"}
        ref={scope}
      >
        <AnimatePresence>
          {dropdown && (
            <DropDown
              setDropdown={setDropdown}
              animateRemoveHoldLi={animateRemoveHoldLi}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {false && (
            <SearchSlider />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {openNotification && (
            <NotificationSlider setOpenNotification={setOpenNotification} />
          )}
        </AnimatePresence>

        {/* <motion.div id="searchSlider" className={classes.searchSlider}>
          <h1>Search Slider</h1>
        </motion.div> */}

        <motion.div className={classes.navInner} id="navInner">
          <header
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Instagram"
            className={classes.header}
          >
            <span id="logofull" className={classes.header__logofull}>
              {instagram}
            </span>
            <span id="logoshort" className={classes.header__logoshort}>
              {instagramShort}
            </span>
          </header>
          {/* --------------------------- */}
          <IconList
            tooltip={tooltip}
            animateInnerNav={animateInnerNav}
            animateNotificationSlider={animateNotificationSlider}
            animateSearchSlider={animateSearchSlider}
            animateSvg={animateSvg}
          />
          {/* --------------------------- */}
          <motion.footer
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Footer"
            className={classes.footer}
            onHoverStart={() => {
              animateSvg("moreSvg");
            }}
            onMouseUp={() => {
              animateRemoveHoldLi(!opendropdown);
            }}
            onMouseDown={() => {
              animateHoldLi("moreLiId", "moreSvg", "moreSelectSvg");
            }}
            onClick={() => {
              setDropdown(opendropdown);
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
