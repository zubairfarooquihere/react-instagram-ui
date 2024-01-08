import React, { useState, useEffect, useCallback } from "react";

import { motion, useAnimate, AnimatePresence } from "framer-motion";

import classes from "./Nav.module.scss";

import { instagram, instagramShort } from "../../ui/svg/Nav";
import { more, moreSelect } from "../../ui/svg/Nav";

import DropDown from "./DropDown/DropDown";
import IconList from "./IconList";
import NotificationSlider from "../Notification/NotificationSlider";
import { useSelector } from "react-redux";

import { Tooltip } from "react-tooltip";

import { webinfoActions } from "../../redux/webinfo";
import { useDispatch } from "react-redux";
let opendropdown = false;
function Nav() {
  const dispatch = useDispatch();
  const weninfo = useSelector((state) => state.weninfo);
  const [scope, animate] = useAnimate();
  const [dropdown, setDropdown] = useState(false);
  const [navInnerFull, setNavInnerFull] = useState(true);
  const [openNotification, setOpenNotification] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

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

  const animateOuterNav = useCallback(
    (open) => {
      if (open) {
        animate("#navOuter", { width: '70px' });
      } else {
        animate("#navOuter", { width: '245px' });
      }
    },
    [animate]
  );

  const animateInnerNav = useCallback(
    (shortLogo) => {
      if (shortLogo) {
        // Logo Bottom
        setNavInnerFull(false);
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
        if (window.innerWidth <= weninfo.minOuterNav) {
          return;
        }
        setNavInnerFull(true);
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
    },
    [animate, weninfo.minOuterNav]
  );

  const animateNotificationSlider = (open) => {
    setOpenNotification(!openNotification);
  };

  const animateSearchSlider = (open) => {
    setOpenSearch(!openSearch);
  };

  const animateBottomNav = useCallback((open, option) => {
    if (open) {
      animate("#navOuter", { position: 'fixed', zIndex: 500, bottom: 0, height: 47, width: '100%', display: 'flex', justifyContent: 'space-evenly' })
      animate("#navInner header", { display: 'none' });
      animate("#navInner footer", { display: 'none' });
      animate("#navInner", { borderTop: '1px solid grey',position: 'absolute', display: 'flex', flexDirection: 'row', width: '100%' });
    } else {
      animate("#navOuter", { position: '', bottom: '', height: '', display: '', justifyContent: ''})
      animate("#navInner footer", { display: '' });
      animate("#navInner header", { display: '' });
      animate("#navInner", { position: '', borderTop: '', display: '', flexDirection: '', width: option === 'second' ? 70 : '' });
    }
  },[animate]);

  useEffect(() => {
    const handleResize = () => {
      if (weninfo.minOuterNav < window.innerWidth) {
        animateOuterNav(false);
        animateBottomNav(false);
        dispatch(webinfoActions.resize(weninfo.minOuterNav + 1));
      } else if (
        weninfo.minOuterNav >= window.innerWidth &&
        window.innerWidth > weninfo.minBottomNav
      ) {
        animateOuterNav(true);
        animateBottomNav(false, 'second');
        dispatch(webinfoActions.resize(weninfo.minBottomNav + 10));
      } else if (window.innerWidth < weninfo.minBottomNav) {
        animateBottomNav(true);
        dispatch(webinfoActions.resize(weninfo.minBottomNav-1));
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    animateOuterNav,
    dispatch,
    weninfo.minOuterNav,
    weninfo.minBottomNav,
    animate,
    animateBottomNav,
  ]);

  const tooltip = (
    <Tooltip
      id="my-tooltip"
      place="right"
      style={{
        fontSize: "13px",
        padding: "3px 6px",
        paddingBottom: "5px",
        borderRadius: "5px",
        display: navInnerFull ? "none" : "block",
      }}
      render={({ content, activeAnchor }) => <span>{content}</span>}
    />
  );

  return (
    <>
      <span ref={scope}>
        <div
          className={classes.navOutter}
          data-theme={false ? "dark" : "light"}
          id="navOuter"
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
            {openSearch && <NotificationSlider />}
          </AnimatePresence>

          <AnimatePresence>
            {openNotification && (
              <NotificationSlider setOpenNotification={setOpenNotification} />
            )}
          </AnimatePresence>

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
            {/* ------------------------------------------------------ */}
            <IconList
              tooltip={tooltip}
              animateInnerNav={animateInnerNav}
              animateNotificationSlider={animateNotificationSlider}
              animateSearchSlider={animateSearchSlider}
              animateSvg={animateSvg}
            />
            {/* ------------------------------------------------------ */}
            <motion.footer
              id="navFooter"
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
      </span>
    </>
  );
}

export default Nav;
