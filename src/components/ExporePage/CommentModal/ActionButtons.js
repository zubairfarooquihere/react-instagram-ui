import React from "react";
import { motion } from "framer-motion";
import classes from "./ActionButtons.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { ExploreObjectsActions } from '../../../redux/Explore/ExploreObjects.js'
import {
  Like,
  Comment,
  Share,
  Save,
  LikeActive,
} from "../../../ui/svg/HomePage";
function ActionButtons(props) {
  const dispatch = useDispatch();
  const { ExploreObj, showCmtModal } = props;
  
  const like = useSelector((state) => state.ExploreObjects.ExploreObjects[ExploreObj.mainObjId][ExploreObj.id].selfLikes);
  
  const likeFunc = () => {
    dispatch(ExploreObjectsActions.postLike({ExploreObj, like: !like}));
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
