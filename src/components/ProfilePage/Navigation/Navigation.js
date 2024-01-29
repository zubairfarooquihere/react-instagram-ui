import React, { useState } from "react";
import classes from "./Navigation.module.scss";

import { Posts, save, tag } from "../../../ui/svg/ProfilePage";
import Post from "../Post/Post";
import Saved from "../Saved/Saved";
import Tagged from "../Tagged/Tagged";
import Footer from "../Footer/Footer";

function Navigation() {
  const [liSelected, setLiSelected] = useState("POSTS");

  const selectLi = (section) => {
    setLiSelected(section);
  };

  return (
    <>
    <div className={classes.Navigation}>
      <div className={classes.border} />
      <ul className={classes.ul}>
        <li
          className={`${liSelected === "POSTS" ? classes.liSelected : ""}`}
          onClick={() => {
            selectLi("POSTS");
          }}
          id="POSTS"
        >
          <div
            className={`${classes.ULborder} ${
              liSelected === "POSTS" ? classes.ULborder__selected : ""
            }`}
          />
          <span>{Posts}POSTS</span>
        </li>
        <li
          className={`${liSelected === "SAVED" ? classes.liSelected : ""}`}
          onClick={() => {
            selectLi("SAVED");
          }}
          id="SAVED"
        >
          <div
            className={`${classes.ULborder} ${
              liSelected === "SAVED" ? classes.ULborder__selected : ""
            }`}
          />
          <span>{save}SAVED</span>
        </li>
        <li
          className={`${liSelected === "TAGGED" ? classes.liSelected : ""}`}
          onClick={() => {
            selectLi("TAGGED");
          }}
          id="TAGGED"
        >
          <div
            className={`${classes.ULborder} ${
              liSelected === "TAGGED" ? classes.ULborder__selected : ""
            }`}
          />
          <span>{tag}TAGGED</span>
        </li>
      </ul>
      {liSelected === "POSTS" && <Post />}
      {liSelected === "SAVED" && <Saved />}
      {liSelected === "TAGGED" && <Tagged />}
    </div>
      <Footer />
    </>
  );
}

export default Navigation;
