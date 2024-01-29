import React from "react";
import classes from "./NoData.module.scss";

function NoData(props) {
  const { svg, title, description, actionTxt } = props;
  return (
    <div className={classes.NoData}>
      <span className={classes.NoData__svg}>{svg}</span>
      <span className={classes.NoData__title}>{title}</span>
      <span className={classes.NoData__description}>{description}</span>
      <span className={classes.NoData__action}>{actionTxt}</span>
    </div>
  );
}

export default NoData;
