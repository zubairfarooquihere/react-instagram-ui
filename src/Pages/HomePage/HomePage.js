import React, { useEffect, useState, useRef, useCallback } from "react";

import classes from "./HomePage.module.scss";

import Header from "../../components/Header/Header";
import Stories from "../../components/HomePage/Stories/Stories";
import Post from "../../components/HomePage/Post/Post";
import Aside from "../../components/HomePage/Aside/Aside";
import { useSelector, useDispatch } from "react-redux";
import { PostObjectsActions } from "../../redux/PostObjects";
import { fetchPostsData } from "../../redux/PostObjects-action";
import Spinner from "../../ui/Spinner/Spinner";
import {
  generateRandomNames,
  generateRandomPlaces,
  generateRandomMotivationalQuotes,
  generateRandomNumbers,
  formatTime,
  generateRandomCommentsWithUser,
} from "../../Data/Name/Name";
let length = 0;
function HomePage() {
  const dispatch = useDispatch();
  const myRef = useRef();
  const [loading, setLoading] = useState(false);
  const weninfo = useSelector((state) => state.weninfo);
  const PostObjectsArr = useSelector(
    (state) => state.PostObjects.PostObjectsArr
  );

  const fetchData = useCallback((len) => {
    let callData = 10;
    const namesArr = generateRandomNames(callData);
    const placesArr = generateRandomPlaces(callData);
    const captionsArr = generateRandomMotivationalQuotes(callData);
    const commentsArr = generateRandomCommentsWithUser(callData);
    const likesArr = generateRandomNumbers(callData);
    let arr = [];
    for (let i = 0; i < callData; i++) {
      let obj = {
        id: "Post" + len + i,
        name: namesArr[i],
        place: placesArr[i],
        caption: captionsArr[i],
        commentsArr: commentsArr[i],
        likes: likesArr[i],
        selfLikes: false,
        time: formatTime(15 * (len + i + 1)),
        img: 511 + i + len + 1,
        profileImg: 110 + i + len,
      };
      arr.push(obj);
    }
    return arr;
  }, []);

  useEffect(() => {
    dispatch(fetchPostsData());

    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          console.log(length);
          let arr = fetchData(length + 1);
          dispatch(PostObjectsActions.addArray({ arr }));
        }, 2300);
      }
    });
    observer.observe(myRef.current);
  }, [dispatch, fetchData]);

  return (
    <div
      data-theme={weninfo.darkMode ? "dark" : "light"}
      className={classes.homepage}
    >
      <Header />
      <div className={classes.homepage__main}>
        <div className={classes["homepage__main--partOne"]}>
          <Stories />
          {PostObjectsArr.map((id, index) => {
            length = index;
            return <Post key={id} id={id} />;
          })}
          <div ref={myRef} className={classes.bottom} />
          <div className={classes.loader}>
            {loading && (
              <Spinner width={"5.5em"} color={"rgb(225, 225, 225)"} />
            )}
          </div>
        </div>
        <div className={classes["homepage__main--partTwo"]}>
          <Aside />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
