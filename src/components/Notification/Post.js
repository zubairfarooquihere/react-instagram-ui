import React, { useState } from "react";
import { useAnimate } from "framer-motion";

import classes from "./Post.module.scss";

import Spinner from "../../ui/Spinner/Spinner";

function Post(props) {
  const [scopePost, animate] = useAnimate();
  const [btnText, setBtnText] = useState("Follow");
  const [loading, setLoading] = useState(false);
  const { name, img } = props;

  const btnClicked = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setBtnText("Following");
      animate(`.${classes["post__button--btn"]}`, {
        paddingLeft: 20,
        paddingRight: 20,
        color: "black",
        backgroundColor: "#efefef",
        fontWeight: 599,
      }, {duration: .1});
    }, 1000);
  };

  return (
    <div className={classes.post} ref={scopePost}>
      <div className={classes["post__image"]}>
        <img src={`https://picsum.photos/500/${99 + img}`} alt="Post" loading="lazy" />
      </div>
      <div className={classes["post__details"]}>
        <span className={classes["post__details--name"]}>{name}</span>{" "}
        <span className={classes["post__details--info"]}>
          started following you.
        </span>
        <span className={classes["post__details--time"]}>{img}w</span>
      </div>
      <div className={classes["post__button"]}>
        <button className={classes["post__button--btn"]} onClick={btnClicked}>
          {loading && <Spinner />}
          {!loading && btnText}
        </button>
      </div>
    </div>
  );
}

export default Post;
