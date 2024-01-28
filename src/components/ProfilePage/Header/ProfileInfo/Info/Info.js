import React from "react";
import classes from "./Info.module.scss";
import { Threads, Options } from "../../../../../ui/svg/ProfilePage";
function Info() {
  return (
    <div className={classes.Info}>
      <header className={classes.header}>
        <span className={classes.header__name}>Classic._.Here</span>
        <button className={`${classes.header__button} ${classes["header__button--editbtn"]}`}>Edit profile</button>
        <button className={classes.header__button}>View archive</button>
        <span className={classes.header__svg}>{Threads}</span>
        <span className={classes.header__svg}>{Options}</span>
      </header>
      <main className={classes.main}>
        <span className={`${classes.main__details} ${classes.main__posts}`}><span className={classes.main__number}>0</span> posts</span>
        <span className={`${classes.main__details} ${classes.main__followers}`}><span className={classes.main__number}>3340</span> followers</span>
        <span className={`${classes.main__details} ${classes.main__following}`}><span className={classes.main__number}>380</span> following</span>
      </main>
      <footer className={classes.footer}>
      <span className={classes.footer__name}>Classic Here</span>
      </footer>
    </div>
  );
}

export default Info;
