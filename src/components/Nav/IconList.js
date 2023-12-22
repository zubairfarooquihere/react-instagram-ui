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

import classes from "./IconList.module.scss";

import Logo from "../../ui/Logoa.svg";

let letSelectedSvgId = '';
let hideToggleListItem = false;
let letNotificationSlider = false;
let letSearchSlider = false;

function IconList(props) {
  const { animateInnerNav, animateNotificationSlider, animateSearchSlider } = props;
  const [scope, animate] = useAnimate();

  const animateSvg = (svgId) => {
    animate("#" + svgId, { scale: [1, 1.1, 1] }, { duration: 0.3 });
  };

  const animateHoldLi = (liId, svgId) => {
    animate("#" + liId, { opacity: 0.7 });
    animate("#" + svgId, { scale: 0.9 });
  };

  const animateRemoveHoldLi = (liId, svgId, selectedSvgId) => {
    // Remove Selected style to all
    if(letSelectedSvgId){ //storing the previous selected svg to remove
        animate("#"+letSelectedSvgId, { display: 'none' });//p => SelectSvg
    }
    letSelectedSvgId = selectedSvgId;
    animate("li span", { display: "block" }); //add ALL non-selected svg and text
    animate("ul li ." + classes.list__text, { fontWeight: 500 }); //back to normal text

    // Add style to Selected item.
    animate("#" + liId, { opacity: 1 });
    animate("#" + liId + " span", { fontWeight: 700 });

    animate("#" + svgId, { scale: 1, display: "none" });

    animate("#" + selectedSvgId, { scale: 1, display: "block" });
    if(hideToggleListItem){
      animate("ul li ." + classes.list__text, { display: 'none' });
    }
  };
  
  const animateToggleListItem = () => {
    hideToggleListItem = !hideToggleListItem;
    animateInnerNav(hideToggleListItem);
    if(hideToggleListItem){ //Text in front of svg
      animate("ul li ." + classes.list__text, { display: 'none' });
    }else{
      animate("ul li ." + classes.list__text, { display: 'block' });
    }
  };

  const controlNotificationSlider = () => {
    letNotificationSlider = !letNotificationSlider;
    if(letSearchSlider === false) {
      animateToggleListItem();
    }
    animateNotificationSlider(letNotificationSlider);
    letSearchSlider = false;
    animateSearchSlider(false);
  }

  const controlSearchSlider = () => {
    letSearchSlider = !letSearchSlider;
    if(letNotificationSlider === false) {
      animateToggleListItem();
    }
    animateSearchSlider(letSearchSlider);
    letNotificationSlider = false;
    animateNotificationSlider(false);
  }

  return (
    <ul className={classes.list} ref={scope}>
      <motion.li
        className={classes.list__item}
        id="homeLiId"
        onHoverStart={() => {
          animateSvg("homeSvg");
        }}
        onMouseUp={() => {
          animateRemoveHoldLi("homeLiId", "homeSvg", "homeSelectSvg");
        }}
        onMouseDown={() => {
          animateHoldLi("homeLiId", "homeSvg", "homeSelectSvg");
        }}
      >
        <span id="homeSvg" className={classes.list__svg}>
          {home}
        </span>
        <p id="homeSelectSvg" className={`${classes.list__svgSelected} `}>
          {homeSelect}
        </p>
        <span className={classes.list__text}>Home</span>
      </motion.li>

      <motion.li
        className={classes.list__item}
        id="searchLiId"
        onHoverStart={() => {
          animateSvg("searchSvg");
        }}
        onMouseUp={() => {
          animateRemoveHoldLi("searchLiId", "searchSvg", "searchSelectSvg");
        }}
        onMouseDown={() => {
          animateHoldLi("searchLiId", "searchSvg", "searchSelectSvg");
        }}
        onClick={()=>{ controlSearchSlider() }}
      >
        <span id="searchSvg" className={classes.list__svg}>
          {search}
        </span>
        <p id="searchSelectSvg" className={`${classes.list__svgSelected} `}>
          {searchSelect}
        </p>
        <span className={classes.list__text}>Search</span>
      </motion.li>

      <motion.li
        className={classes.list__item}
        id="exploreLiId"
        onHoverStart={() => {
          animateSvg("exploreSvg");
        }}
        onMouseUp={() => {
          animateRemoveHoldLi("exploreLiId", "exploreSvg", "exploreSelectSvg");
        }}
        onMouseDown={() => {
          animateHoldLi("exploreLiId", "exploreSvg", "exploreSelectSvg");
        }}
      >
        <span id="exploreSvg" className={classes.list__svg}>
          {explore}
        </span>
        <p id="exploreSelectSvg" className={`${classes.list__svgSelected} `}>
          {exploreSelect}
        </p>
        <span className={classes.list__text}>Explore</span>
      </motion.li>

      <motion.li
        className={classes.list__item}
        id="reelLiId"
        onHoverStart={() => {
          animateSvg("reelSvg");
        }}
        onMouseUp={() => {
          animateRemoveHoldLi("reelLiId", "reelSvg", "reelSelectSvg");
        }}
        onMouseDown={() => {
          animateHoldLi("reelLiId", "reelSvg", "reelSelectSvg");
        }}
      >
        <span id="reelSvg" className={classes.list__svg}>
          {reel}
        </span>
        <p id="reelSelectSvg" className={`${classes.list__svgSelected} `}>
          {reelSelect}
        </p>
        <span className={classes.list__text}>Reel</span>
      </motion.li>

      <motion.li
        className={classes.list__item}
        id="messagesLiId"
        onHoverStart={() => {
          animateSvg("messagesSvg");
        }}
        onMouseUp={() => {
          animateRemoveHoldLi(
            "messagesLiId",
            "messagesSvg",
            "messagesSelectSvg"
          );
        }}
        onMouseDown={() => {
          animateHoldLi("messagesLiId", "messagesSvg", "messagesSelectSvg");
        }}
      >
        <span id="messagesSvg" className={classes.list__svg}>
          {messages}
        </span>
        <p id="messagesSelectSvg" className={`${classes.list__svgSelected} `}>
          {messagesSelect}
        </p>
        <span className={classes.list__text}>Messages</span>
      </motion.li>

      <motion.li
        className={classes.list__item}
        id="notificationLiId"
        onHoverStart={() => {
          animateSvg("notificationSvg");
        }}
        onMouseUp={() => {
          animateRemoveHoldLi(
            "notificationLiId",
            "notificationSvg",
            "notificationSelectSvg"
          );
        }}
        onMouseDown={() => {
          animateHoldLi(
            "notificationLiId",
            "notificationSvg",
            "notificationSelectSvg"
          );
        }}
        onClick={()=>{ controlNotificationSlider() }}
      >
        <span id="notificationSvg" className={classes.list__svg}>
          {notification}
        </span>
        <p
          id="notificationSelectSvg"
          className={`${classes.list__svgSelected} `}
        >
          {notificationSelect}
        </p>
        <span className={classes.list__text}>Notification</span>
      </motion.li>

      <motion.li
        className={classes.list__item}
        id="createLiId"
        onHoverStart={() => {
          animateSvg("createSvg");
        }}
        // onMouseUp={()=>{
        //   animateRemoveHoldLi('createLiId', 'createSvg');
        // }}
        // onMouseDown={() => {
        //   animateHoldLi('createLiId', 'createSvg');
        // }}
      >
        <span id="createSvg" className={classes.list__svg}>
          {create}
        </span>
        <span className={classes.list__text}>Create</span>
      </motion.li>
      <li className={classes.list__item}>
        <img className={classes.list__img} alt="" src={Logo} />
        <span className={classes.list__text}>Profile</span>
      </li>
    </ul>
  );
}

export default IconList;
