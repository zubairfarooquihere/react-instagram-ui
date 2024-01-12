import React, { useEffect } from "react";

import classes from "./HomePage.module.scss";

import Header from "../../components/Header/Header";
import Stories from "../../components/HomePage/Stories/Stories";
import Post from "../../components/HomePage/Post/Post";
import Aside from "../../components/HomePage/Aside/Aside";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsData } from '../../redux/PostObjects-action';

function HomePage() {
  const dispatch = useDispatch();
  const weninfo = useSelector((state) => state.weninfo);
  const PostObjectsArr = useSelector((state) => state.PostObjects.PostObjectsArr);

  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch]);

  return (
    <div data-theme={weninfo.darkMode ? "dark" : "light"} className={classes.homepage}>
      <Header />
      <div className={classes.homepage__main}>
        <div className={classes["homepage__main--partOne"]}>
          <Stories />
          {PostObjectsArr.map((id)=>{ return (<Post key={id} id={id} />) })} 
        </div>
        <div className={classes["homepage__main--partTwo"]}>
          <Aside />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
