import React from "react";
import classes from './Spinner.module.scss'

function Spinner() {
  return (
    <svg className={classes.frame} viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  );
}

export default Spinner;
