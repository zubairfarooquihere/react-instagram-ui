import React, { useCallback, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

import {
  home,
  homeSelect,
  search,
  searchSelect,
  explore,
  exploreSelect,
  reel,
  reelSelect,
  messages,
  messagesSelect,
  notification,
  notificationSelect,
  create,
  profile,
  profileSelected,
} from "../../ui/svg/Nav";
import Logo from "../../ui/Logoa.svg";

import IconItem from "./IconItem";
import { useSelector } from "react-redux";
import classes from "./IconList.module.scss";

const IconItemList = [
  { svg: home, svgSelect: homeSelect, title: "Home", path: '/' },
  { svg: search, svgSelect: searchSelect, title: "Search", path: null },
  { svg: explore, svgSelect: exploreSelect, title: "Explore", path: '/explore' },
  { svg: reel, svgSelect: reelSelect, title: "Reel", path: '/reel' },
  { svg: messages, svgSelect: messagesSelect, title: "Messages", path: '/messages' },
  { svg: notification, svgSelect: notificationSelect, title: "Notifications", path: null },
  { svg: create, svgSelect: create, title: "Create", path: null },
  { svg: profile, svgSelect: profileSelected, title: "Profile", path: '/profile' },
];

let letSelectedSvgId = "";
let hideToggleListItem = false;
let letNotificationSlider = false;
let letSearchSlider = false;

function IconList(props) {
  const {
    animateInnerNav,
    animateNotificationSlider,
    animateSearchSlider,
    tooltip,
  } = props;
  const weninfo = useSelector((state) => state.weninfo);
  const [scope, animate] = useAnimate();

  const animateRemoveHoldLi = (liId, svgId, selectedSvgId) => {
    // Remove Selected style to all
    if (letSelectedSvgId) {
      //storing the previous selected svg to remove
      animate("#" + letSelectedSvgId, { display: "none" }); //p => SelectSvg
    }
    letSelectedSvgId = selectedSvgId;
    animate("li span", { display: "block" }); //add ALL non-selected svg and text
    animate("ul li ." + classes.list__text, { fontWeight: 500 }); //back to normal text

    // Add style to Selected item.
    animate("#" + liId, { opacity: 1 });
    animate("#" + liId + " span", { fontWeight: 700 });

    animate("#" + svgId, { scale: 1, display: "none" });

    animate("#" + selectedSvgId, { scale: 1, display: "block" });
    if (hideToggleListItem) {
      animate("ul li ." + classes.list__text, { display: "none" });
    }
  };

  const animateShowHideText = useCallback(
    (hideToggleListItem) => {
      hideToggleListItem = weninfo.short === true && !(window.innerWidth <= weninfo.minOuterNav) ? true : hideToggleListItem;
      animateInnerNav(hideToggleListItem);
      if (hideToggleListItem) {
        //Text in front of svg
        animate("ul li ." + classes.list__text, { display: "none" });
      } else {
        animate("ul li ." + classes.list__text, {
          display: window.innerWidth <= weninfo.minOuterNav ? "none" : "block",
        });
      }
    },
    [animateInnerNav, animate, weninfo.minOuterNav, weninfo.short]
  );

  const controlSearchSlider = () => {
    letSearchSlider = !letSearchSlider;
    if (letSearchSlider) {
      if (letNotificationSlider) {
        animateNotificationSlider(false);
      }
      animateShowHideText(true);
    } else {
      animateShowHideText(false);
    }
    animateSearchSlider(letSearchSlider);
    letNotificationSlider = false;
  };

  const controlNotificationSlider = (open) => {
    letNotificationSlider = !letNotificationSlider;
    if (letNotificationSlider) {
      if (letSearchSlider) {
        animateSearchSlider(false);
      }
      animateShowHideText(true);
    } else {
      animateShowHideText(false);
    }
    animateNotificationSlider(letNotificationSlider);
    letSearchSlider = false;
  };

  const closeSlider = () => {
    if (letNotificationSlider) {
      animateNotificationSlider(false);
      letNotificationSlider = false;
    }
    if (letSearchSlider) {
      animateSearchSlider(false);
      letSearchSlider = false;
    }
  };

  const list = IconItemList.map((obj, index) => {
    return (
      <IconItem
        key={index}
        animateRemoveHoldLi={animateRemoveHoldLi}
        animate={animate}
        classes={classes}
        motion={motion}
        svg={obj.svg}
        svgSelect={obj.svgSelect}
        title={obj.title}
        controlNotificationSlider={controlNotificationSlider}
        controlSearchSlider={controlSearchSlider}
        animateShowHideText={animateShowHideText}
        closeSlider={closeSlider}
        path={obj.path}
      />
    );
  });

  const animateBottomNav = useCallback(
    (open) => {
      if (open) {
        animate("#ulNavID", {
          flexDirection: "row",
          paddingTop: 0,
          justifyContent: "space-evenly",
          left: 0,
          width: "100%",
        });
      } else {
        animate("#ulNavID", {
          flexDirection: "",
          paddingTop: "",
          justifyContent: "",
          left: "",
          width: "",
        });
      }
    },
    [animate]
  );

  useEffect(() => {
    if (weninfo.screenSize > weninfo.minOuterNav) {
      animateShowHideText(false);
      animateBottomNav(false);
    } else if (
      weninfo.screenSize <= weninfo.minOuterNav &&
      weninfo.screenSize > weninfo.minBottomNav
    ) {
      animateBottomNav(false);
      animateShowHideText(true);
    } else {
      animateBottomNav(true);
      animateShowHideText(false);
    }
  }, [
    weninfo.screenSize,
    animateShowHideText,
    animate,
    weninfo.minBottomNav,
    weninfo.minOuterNav,
    animateBottomNav,
  ]);

  return (
    <>
      {tooltip}
      <span style={{ width: "100%" }} ref={scope}>
        <ul id="ulNavID" className={classes.list} ref={scope}>
          {list}
          <li
            style={{ display: "none" }}
            id="profileLi"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Profile"
            className={classes.list__item}
          >
            <img className={classes.list__img} alt="" src={Logo} />
            <span className={classes.list__text}>Profile</span>
          </li>
        </ul>
      </span>
    </>
  );
}

export default IconList;
