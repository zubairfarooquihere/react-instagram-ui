import React from "react";
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
} from "../../ui/svg/Nav";
import Logo from "../../ui/Logoa.svg";

import IconItem from "./IconItem";

import classes from "./IconList.module.scss";

const IconItemList = [
  { svg: home, svgSelect: homeSelect, title: "Home" },
  { svg: search, svgSelect: searchSelect, title: "Search" },
  { svg: explore, svgSelect: exploreSelect, title: "Explore" },
  { svg: reel, svgSelect: reelSelect, title: "Reel" },
  { svg: messages, svgSelect: messagesSelect, title: "Messages" },
  { svg: notification, svgSelect: notificationSelect, title: "Notifications" },
  { svg: create, svgSelect: create, title: "Create" },
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

  const animateShowHideText = () => {
    hideToggleListItem = !hideToggleListItem;
    animateInnerNav(hideToggleListItem);
    if (hideToggleListItem) {
      //Text in front of svg
      animate("ul li ." + classes.list__text, { display: "none" });
    } else {
      animate("ul li ." + classes.list__text, { display: "block" });
    }
  };

  const controlNotificationSlider = () => {
    letNotificationSlider = !letNotificationSlider;
    if (letSearchSlider === false) {
      animateShowHideText();
    }
    animateNotificationSlider(letNotificationSlider);
    letSearchSlider = false;
    animateSearchSlider(false);
  };

  const controlSearchSlider = () => {
    letSearchSlider = !letSearchSlider;
    if (letNotificationSlider === false) {
      animateShowHideText();
    }
    animateSearchSlider(letSearchSlider);
    letNotificationSlider = false;
    animateNotificationSlider(false);
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
      />
    );
  });

  return (
    <>
      {tooltip}
      <ul className={classes.list} ref={scope}>
        {list}
        <li
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Profile"
          className={classes.list__item}
        >
          <img className={classes.list__img} alt="" src={Logo} />
          <span className={classes.list__text}>Profile</span>
        </li>
      </ul>
    </>
  );
}

export default IconList;
