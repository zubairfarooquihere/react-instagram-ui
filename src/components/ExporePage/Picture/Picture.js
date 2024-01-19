import React from "react";
import classes from "./Picture.module.scss";

function Picture(props) {
  const { img } = props;
  return (
    <div className={classes.picture}>
      <img src={`https://picsum.photos/250/${img}`} alt="" />
    </div>
  );
}

export default Picture;
