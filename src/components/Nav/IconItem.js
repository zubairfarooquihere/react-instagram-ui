import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function IconItem(props) {
  const {
    svg,
    svgSelect,
    title,
    controlSearchSlider,
    controlNotificationSlider,
    animateRemoveHoldLi,
    classes,
    motion,
    animate,
    animateShowHideText,
    closeSlider,
    path,
  } = props;

  const weninfo = useSelector((state) => state.weninfo);

  const liId = `${title}LiId`;
  const svgId = `${title}Svg`;
  const svgSelectedId = `${title}SelectedSvg`;
  const wrapper = `${title}wrapper`;

  const animateHover = (svgId) => {
    animate("#" + wrapper, { scale: [1, 1.1, 1] }, { duration: 0.3 });
  };

  const animateMouseDown = () => {
    animate("#" + liId, { opacity: 0.7 });
    animate("#" + svgId, { scale: 0.9 });
  };

  const animateBottomNav = useCallback(
    (open) => {
      if (open) {
        animate("#SearchLiId", { display: "none" });
        animate("#MessagesLiId", { order: 5 });
        animate("#" + liId, {
          minHeight: "100%",
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          backgroundColor: "inherit",
        });
        animate("#ProfileLiId", {
          order: 6,
          minHeight: "100%",
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          backgroundColor: "inherit",
        });
        animate("#NotificationsLiId", { display: "none" });
      } else {
        animate("#SearchLiId", { display: "" });
        animate("#MessagesLiId", { order: "" });
        animate("#" + liId, {
          minHeight: "",
          marginRight: "",
          marginLeft: "",
          marginBottom: "",
          backgroundColor: "",
        });
        animate("#profileLi", {
          order: "",
          minHeight: "",
          marginRight: "",
          marginLeft: "",
          marginBottom: "",
          backgroundColor: "",
        });
        animate("#NotificationsLiId", { display: "" });
      }
    },
    [animate, liId]
  );

  useEffect(() => {
    if (weninfo.screenSize <= weninfo.minBottomNav) {
      animateBottomNav(true);
    } else {
      animateBottomNav(false);
    }
  }, [animate, liId, animateBottomNav, weninfo]);

  return (
    <motion.li
      data-tooltip-id="my-tooltip"
      data-tooltip-content={title}
      className={classes.list__item}
      id={liId}
      onHoverStart={animateHover}
      onMouseUp={() => {
        animateRemoveHoldLi(liId, svgId, svgSelectedId);
      }}
      onMouseDown={animateMouseDown}
      onClick={() => {
        if (svgId === `SearchSvg`) {
          controlSearchSlider();
        } else if (svgId === `NotificationsSvg`) {
          controlNotificationSlider();
        } else {
          animateShowHideText(false);
          closeSlider();
        }
      }}
    >
      <span id={wrapper}>
        <NavLink
          className={classes.NavLink}
          style={{ textDecoration: "none", color: 'none', backgroundColor: 'none' }}
          to={path}
        >
          <span id={svgId} className={classes.list__svg}>
            {svg}
          </span>
          <p id={svgSelectedId} className={`${classes.list__svgSelected} `}>
            {svgSelect}
          </p>
        </NavLink>
      </span>
      <span className={classes.list__text}>{title}</span>
    </motion.li>
  );
}

export default IconItem;
