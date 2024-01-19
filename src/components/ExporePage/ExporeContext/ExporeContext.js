import React from "react";
import { useSelector } from "react-redux";

import classes from "./ExporeContext.module.scss";
import Picture from "../Picture/Picture";
function ExporeContext(props) {
  const { id, gifPosition } = props;
  const ExploreObj = useSelector(
    (state) => state.ExploreObjects.ExploreObjects[id]
  );
  console.log(ExploreObj);
  const pic = ExploreObj.img.map((ele, index) => {
    return <Picture key={ele} img={ele} />;
  });

  return (
    <div className={classes.exporeContext}>
      <div style={{ ...gifPosition }} className={classes.block}>
        <img src={ExploreObj.gifUrl} alt="" />
      </div>
      {pic}
    </div>
  );
}

export default ExporeContext;
