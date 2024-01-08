import React, { useState } from "react";
import { motion } from "framer-motion";
import classes from "./ActionButtons.module.scss";

import {
  Like,
  Comment,
  Share,
  Save,
  LikeActive,
} from "../../../../ui/svg/HomePage";
function ActionButtons(props) {
  const { showCmtModal } = props;
  const [like, setLike] = useState(false);
  const likeFunc = () => {
    setLike(!like);
  };
  return (
    <>
      <div className={classes.AtBtn}>
        {!like && (
          <span
            onClick={likeFunc}
            className={`${classes.AtBtn__Like} ${classes.AtBtn__btn}`}
          >
            {Like}
          </span>
        )}
        {like && (
          <motion.span
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            onClick={likeFunc}
            className={`${classes.AtBtn__Like} ${classes.AtBtn__btn}`}
          >
            {LikeActive}
          </motion.span>
        )}
        <span onClick={()=>{showCmtModal(true)}} className={`${classes.AtBtn__Comment} ${classes.AtBtn__btn}`}>
          {Comment}
        </span>
        <span className={`${classes.AtBtn__Share} ${classes.AtBtn__btn}`}>
          {Share}
        </span>
        <span className={`${classes.AtBtn__Save} ${classes.AtBtn__btn}`}>
          {Save}
        </span>
      </div>
    </>
  );
}

export default ActionButtons;
