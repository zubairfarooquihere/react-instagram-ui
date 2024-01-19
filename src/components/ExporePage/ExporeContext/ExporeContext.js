import React from "react";
import { useSelector } from "react-redux";

import classes from "./ExporeContext.module.scss";
import Picture from "../Picture/Picture";

function ExporeContext(props) {
  const { id, gifPosition } = props;
  const ExploreObj = useSelector(
    (state) => state.ExploreObjects.ExploreObjects[id]
  );
  //console.log(ExploreObj);
  const Images = ExploreObj.img.map((ele, index) => {
    return (
      <Picture
        key={id + ele + index}
        url={`https://picsum.photos/250/${ele}`}
        comments={ExploreObj.commentsArr[index]}
        likes={ExploreObj.likes[index]}
      />
    );
  });

  return (
    <div className={classes.exporeContext}>
      <div style={{ ...gifPosition }} className={classes.block}>
        <Picture
          key={id}
          url={ExploreObj.gifUrl}
          comments={ExploreObj.commentsArr[ExploreObj.commentsArr.length - 1]}
          likes={ExploreObj.likes[ExploreObj.likes.length - 1]}
        />
      </div>
      {Images}
    </div>
  );
}

export default ExporeContext;
