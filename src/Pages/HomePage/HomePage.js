import React, { useState, useEffect } from "react";

import classes from "./HomePage.module.scss";

import Stories from "../../components/HomePage/Stories/Stories";
import Post from "../../components/HomePage/Post/Post";
import Aside from "../../components/HomePage/Aside/Aside";
import { useSelector } from "react-redux";
import {
  generateRandomNames,
  generateRandomPlaces,
  generateRandomMotivationalQuotes,
  generateRandomNumbers,
  formatTime,
  generateRandomCommentsWithUser,
} from "../../Data/Name/Name";
const callData = 10;
function HomePage() {
  const weninfo = useSelector((state) => state.weninfo);
  const [PostObjs, setPostObjs] = useState([]);

  useEffect(() => {
    const namesArr = generateRandomNames(callData);
    const placesArr = generateRandomPlaces(callData);
    const captionsArr = generateRandomMotivationalQuotes(callData);
    const commentsArr = generateRandomCommentsWithUser(callData);
    const likesArr = generateRandomNumbers(callData);
    let arr = [];

    for (let i = 0; i < callData; i++) {
      let obj = {
        id: i+'ID',
        name: namesArr[i],
        place: placesArr[i],
        caption: captionsArr[i],
        commentsArr: commentsArr[i],
        likes: likesArr[i],
        time: formatTime(15 * (i+1)),
        img: 512 + i,
        profileImg: 111 + i,
      };
      arr.push(obj);
    }
    setPostObjs((prev) => {
      return [...prev, ...arr];
    });
  }, []);

  return (
    <div data-theme={weninfo.darkMode ? "dark" : "light"} className={classes.homepage}>
      <div className={classes.homepage__main}>
        <div className={classes["homepage__main--partOne"]}>
          <Stories />
          {PostObjs.map((PostObj)=>{
            return (<Post key={PostObj.id} PostObj={PostObj} setPostObjs={setPostObjs} />)
          })}
          {/* <Post PostObj={PostObjs[0]} /> */}
        </div>
        <div className={classes["homepage__main--partTwo"]}>
          <Aside />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
