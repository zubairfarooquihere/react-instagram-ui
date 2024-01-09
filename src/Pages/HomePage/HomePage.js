import React, { useState, useEffect } from "react";

import classes from "./HomePage.module.scss";

import Stories from "../../components/HomePage/Stories/Stories";
import Post from "../../components/HomePage/Post/Post";
import Aside from "../../components/HomePage/Aside/Aside";
import {
  generateRandomNames,
  generateRandomPlaces,
  generateRandomMotivationalQuotes,
  generateRandomComments,
  generateRandomNumbers,
  formatTime
} from "../../Data/Name/Name";
import { useSelector } from "react-redux";
const callData = 10;
function HomePage() {
  const [PostObjs, setPostObjs] = useState([]);
  const weninfo = useSelector((state) => state.weninfo);

  useEffect(() => {
    const namesArr = generateRandomNames(callData);
    const placesArr = generateRandomPlaces(callData);
    const captionsArr = generateRandomMotivationalQuotes(callData);
    const commentsArr = generateRandomComments(callData);
    const likesArr = generateRandomNumbers(callData);
    let arr = [];

    for (let i = 0; i < callData; i++) {
      let obj = {
        id: i+'ID',
        name: namesArr[i],
        place: placesArr[i],
        caption: captionsArr[i],
        commentsCount: commentsArr.length,
        comments: commentsArr,
        commentsName: namesArr,
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
            return (<Post key={PostObj.id} PostObj={PostObj} />)
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
