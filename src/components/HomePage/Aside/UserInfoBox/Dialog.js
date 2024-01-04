import React from "react";
import classes from "./Dialog.module.scss";

import { Follow } from "../../../../ui/svg/HomePage";
function Dialog(props) {
  const { infoMain, img, following } = props;
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

  const privateProfile = (
    <main className={classes.main}>
      <div className={classes.main}>
        <span className={classes.main__svg}>{svg}</span>
        <span className={classes.circle}></span>
      </div>
      <h3>The account is private</h3>
      <p>Follow this account to see their photos and videos.</p>
    </main>
  );

  const publicProfile = (
    <main className={classes.publicMain}>
      <span className={classes.publicMain__img}>
        <img src={`https://picsum.photos/450/${500 + img}`} alt="" />
      </span>
      <span className={classes.publicMain__img}>
        <img src={`https://picsum.photos/460/${500 + img}`} alt="" />
      </span>
      <span className={classes.publicMain__img}>
        <img src={`https://picsum.photos/470/${500 + img}`} alt="" />
      </span>
    </main>
  );
  return (
    <>
      <div className={classes.dialog}>
        <header className={classes.header}>
          <span className={classes.header__img}>
            <img src={`https://picsum.photos/400/${500 + img}`} alt="" />
          </span>
          <main className={classes.header__info}>
            <span className={classes["header__info--main"]}>{infoMain}</span>
            <span className={classes["header__info--sub"]}>{infoMain}</span>
          </main>
        </header>
        <div className={classes.posts}>
          <div className={classes.posts__post}>
            <span className={classes["posts__post--top"]}>
              {(img + 2) * img}
            </span>
            <span className={classes["posts__post--bottom"]}>posts</span>
          </div>
          <div className={classes.posts__post}>
            <span className={classes["posts__post--top"]}>
              {(img + 1) * img * 31}
            </span>
            <span className={classes["posts__post--bottom"]}>followers</span>
          </div>
          <div className={classes.posts__post}>
            <span className={classes["posts__post--top"]}>
              {(img + 1) * img * 3}
            </span>
            <span className={classes["posts__post--bottom"]}>following</span>
          </div>
        </div>
        {!following && <div className={classes.linebreakLight} />}
        {!following && privateProfile}
        {following && publicProfile}
        {!following && <div className={classes.linebreakLight} />}
        <div className={classes.btndiv}>
          {!following && <button className={classes.btndiv__follow}>
            <span className={classes['btndiv__follow--svg']}>{Follow}</span>
            <span className={classes['btndiv__follow--text']}>Follow</span>
          </button>}
         {following && <button className={classes.btndiv__message}>Message</button>}
         {following && <button className={classes.btndiv__following}>Following</button>}
        </div>
      </div>
    </>
  );
}

export default Dialog;
