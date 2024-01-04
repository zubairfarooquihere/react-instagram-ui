import React from "react";
import classes from "./Aside.module.scss";

import UserInfoBox from "./UserInfoBox/UserInfoBox";
import Footer from "./Footer";
import { generateRandomNames } from "../../../Data/Name/Name";

function Aside() {
  const names = generateRandomNames(8);
  const data = [
    { name: names[0], info: "Suggested for you" },
    { name: names[1], info: `Followed by ${names[7]}` },
    { name: names[2], info: `Follows you` },
    { name: names[3], info: `Followed by ${names[6]}` },
    { name: names[4], info: `Followed by ${names[5]}` },
  ];
  const context = data.map((obj, index)=>{
    return (
      <UserInfoBox
        infoMain={obj.name}
        infoSub={obj.info}
        button={"Follow"}
        img={index+1}
        temp={names[4]}
      />
    );
  })
  return (
    <div className={classes.Aside}>
      <UserInfoBox
        infoMain={"Classic._.Here"}
        infoSub={"Classic Here"}
        button={"Switch"}
        img={500}
      />
      <div className={classes.Aside__suggest}>
        <p className={classes["Aside__suggest--p"]}>Suggested for you</p>
        <button className={classes["Aside__suggest--btn"]}>See All</button>
      </div>
      <main className={classes.Aside__main}>
        {context}
      </main>
      <Footer />
    </div>
  );
}

export default Aside;
