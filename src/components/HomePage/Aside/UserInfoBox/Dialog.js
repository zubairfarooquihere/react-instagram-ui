import React from "react";
import classes from "./Dialog.module.scss";

function Dialog(props) {
  let svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      id="lock"
      viewBox="0 0 48 48"
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ffca14", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#d40ac7", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      <path
        d="M36 16h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V20c0-2.21-1.79-4-4-4zM24 5.8c3.42 0 6.2 2.78 6.2 6.2v4H18v-4h-.2c0-3.42 2.78-6.2 6.2-6.2zM36 40H12V20h24v20zm-12-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
        fill="url(#grad)"
      />
    </svg>
  );
  return (
    <>
      <div className={classes.dialog}>
        <header className={classes.header}>
          <span className={classes.header__img}>
            <img src={`https://picsum.photos/400/400`} alt="" />
          </span>
          <main className={classes.header__info}>
            <span className={classes["header__info--main"]}>Alice</span>
            <span className={classes["header__info--sub"]}>Alice</span>
          </main>
        </header>
        <div className={classes.posts}>
          <div className={classes.posts__post}>
            <span className={classes["posts__post--top"]}>0</span>
            <span className={classes["posts__post--bottom"]}>posts</span>
          </div>
          <div className={classes.posts__post}>
            <span className={classes["posts__post--top"]}>75</span>
            <span className={classes["posts__post--bottom"]}>followers</span>
          </div>
          <div className={classes.posts__post}>
            <span className={classes["posts__post--top"]}>134</span>
            <span className={classes["posts__post--bottom"]}>following</span>
          </div>
        </div>
        <div className={classes.linebreakLight} />
        <main className={classes.main}>
          <div className={classes.main}>
            <span className={classes.main__svg}>{svg}</span>
            <span className={classes.circle}></span>
          </div>
          <h3>The account is private</h3>
          <p>Follow this account to see their photos and videos.</p>
        </main>
        <div className={classes.linebreakLight} />
        <div className={classes.btndiv}>
        <button >
            Follow
        </button>
        </div>
      </div>
    </>
  );
}

export default Dialog;
