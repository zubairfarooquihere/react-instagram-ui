import React from "react";
import classes from "./Profile.module.scss";

import Header from "../Header/Header";
import Stories from "../Stories/Stories";
import Navigation from '../Navigation/Navigation';
import Footer from "../Footer/Footer";

function Profile() {
  const ProfileInfo = (
    <div className={classes.profileInfo}>
      <div className={classes.profileInfo__box}>
        <span className={classes["profileInfo__box--number"]}>0</span>
        <span className={classes["profileInfo__box--text"]}>posts</span>
      </div>
      <div className={classes.profileInfo__box}>
        <span className={classes["profileInfo__box--number"]}>3340</span>
        <span className={classes["profileInfo__box--text"]}>followers</span>
      </div>
      <div className={classes.profileInfo__box}>
        <span className={classes["profileInfo__box--number"]}>380</span>
        <span className={classes["profileInfo__box--text"]}>following</span>
      </div>
    </div>
  );

  return (
    <div className={classes.profile}>
      <Header />
      <Stories />
      {ProfileInfo}
      <Navigation />
      <Footer />
    </div>
  );
}

export default Profile;
