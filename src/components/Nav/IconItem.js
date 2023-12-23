import React from "react";

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
  } = props;

  const liId = `${title}LiId`;
  const svgId = `${title}Svg`;
  const svgSelectedId = `${title}SelectedSvg`;
  const wrapper = `${title}wrapper`;

  const animateHover = (svgId) => {
    animate("#"+wrapper, { scale: [1, 1.1, 1] }, { duration: 0.3 });
  };

  const animateMouseDown = () => {
    animate("#" + liId, { opacity: 0.7 });
    animate("#" + svgId, { scale: 0.9 });
  };

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
        }
      }}
    >
      <span id={wrapper}>
        <span id={svgId} className={classes.list__svg}>
          {svg}
        </span>
        <p id={svgSelectedId} className={`${classes.list__svgSelected} `}>
          {svgSelect}
        </p>
      </span>
      <span className={classes.list__text}>{title}</span>
    </motion.li>
  );
}

export default IconItem;
