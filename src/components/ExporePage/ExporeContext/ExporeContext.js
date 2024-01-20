import React from "react";
import { useSelector } from "react-redux";

import classes from "./ExporeContext.module.scss";
import Picture from "../Picture/Picture";

function ExporeContext(props) {
  const { id, gifPosition } = props;
  const ExploreObj = useSelector(
    (state) => state.ExploreObjects.ExploreObjects[id]
  );
  const Images = ExploreObj.subObjArr.map((id) => {
    if (ExploreObj[id].type === "Image") {
      return (
        <Picture
          key={id}
          ExploreObj={ExploreObj[id]}
          url={`https://picsum.photos/${ExploreObj[id].img}/${ExploreObj[id].img}`}
        />
      );
    } else {
      return (
        <div key={'gif'+id} style={{ ...gifPosition }} className={classes.block}>
          <Picture
            key={id}
            ExploreObj={ExploreObj[id]}
            url={ExploreObj[id]['img']}
          />
        </div>
      );
    }
  });

  return <div className={classes.exporeContext}>{Images}</div>;
}

export default ExporeContext;
