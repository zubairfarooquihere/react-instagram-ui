import React, { useState } from "react";
import { motion, animate } from "framer-motion";
import classes from "./StoryPost.module.scss";
import ModalStories from "../ModalStories/ModalStories";

function StoryPost(props) {
  const { name, img, data } = props;
  const [selected, setSelected] = useState(null);

  const id = name + "Id";
  const circleId = id + "Circle";

  const storyModal = async () => {
    await animate(
      "#" + circleId,
      { rotate: [0, 365] },
      { repeat: 3, duration: 1, type: "ease" }
    );
    setSelected(img);
  };
  return (
    <>
      {true && <ModalStories selected={selected} data={data} />}
      <div onClick={storyModal} className={classes["story-post"]}>
        <div className={classes["story-post__image"]}>
          <img src={`https://picsum.photos/500/${img + 100}`} alt="" />
          <motion.span id={circleId} className={classes.circle}></motion.span>
        </div>
        <div className={classes["story-post__name"]}>
          <span>{name}</span>
        </div>
      </div>
    </>
  );
}

export default StoryPost;
