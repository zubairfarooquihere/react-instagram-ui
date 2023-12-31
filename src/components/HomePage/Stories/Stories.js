import React from "react";
import classes from "./Stories.module.scss";

import StoryPost from "./StoryPost";
import { generateRandomNames } from '../../../Data/Name/Name';
function Stories() {
  const names = generateRandomNames(9);
  return (
    <div className={classes.Stories}>
      {names.map((data, index) => {
        return <StoryPost key={data} data={names} name={data} img={index+1} />
      })}
    </div>
  );
}

export default Stories;
