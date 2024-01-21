import React, { useState } from "react";
import classes from "./CommentModal.module.scss";

import { AnimatePresence } from "framer-motion";

import { useDispatch } from "react-redux";
import { ExploreObjectsActions } from "../../../redux/Explore/ExploreObjects.js";
import { Left, Right } from "../../../ui/svg/ExplorePage.js";

import Modal from "../../../ui/Modal/Modal";
import HeartAnimation from "../../../ui/animation/HeartAnimation";
import Header from "../../HomePage/Post/Header/Header.js";
import CommentSection from "./CommentSection";
import ActionButtons from "./ActionButtons.js";
import AddComment from "../../HomePage/Post/AddComment/AddComment";

let demoUrl = "";
function CommentModal(props) {
  const dispatch = useDispatch();
  const { showCmtModal, temp, indexArr, currentIndex } = props;
  const [tempState, setTempState] = useState({...temp[currentIndex]});
  const [currentIndexState, setCurrentIndexState] = useState(currentIndex);
  let ExploreObj = tempState;
  //console.log(tempState);
  let { commentsArr, likes, type, img } = tempState;
  const [heart, showHeart] = useState(false);
  if (type === "Image") {
    demoUrl = `https://picsum.photos/${img}/${img}`;
  } else {
    demoUrl = img;
  }
  const Liked = () => {
    if (heart) {
      return;
    }
    showHeart(true);
    let ob = {...tempState};
    if(ob.selfLikes === false) {
      ob.likes = ob.likes + 1;
      ob.selfLikes = true;
      setTempState({...ob});
    }
    dispatch(ExploreObjectsActions.postLike({ ExploreObj, like: true }));
    let timer = setTimeout(() => {
      showHeart(false);
      clearInterval(timer);
    }, 750);
  };

  const move = (direction) => {
    let getIndex = indexArr.indexOf(currentIndexState);
    let getNewObj = ''
    if(direction === 'right'){
      //let getIndex = indexArr.indexOf(currentIndexState);
      setCurrentIndexState(indexArr[getIndex + 1])
      getNewObj = temp[indexArr[getIndex + 1]];
      //setTempState(getNewObj);
    } else {
      //let getIndex = indexArr.indexOf(currentIndexState);
      setCurrentIndexState(indexArr[getIndex - 1])
      getNewObj = temp[indexArr[getIndex - 1]];
      //setTempState(getNewObj);
    }
    setTempState(getNewObj);
  };

  return (
    <>
      <Modal
        onClose={() => {
          showCmtModal(false);
        }}
      />
      <div className={classes.cmtModal}>
        {indexArr[0] !== currentIndexState && <div onClick={()=>{move('left')}} className={`${classes.left} ${classes.move}`}>{Left}</div>}
        {indexArr[indexArr.length-1] !== currentIndexState && <div onClick={()=>{move('right')}} className={`${classes.right} ${classes.move}`}>{Right}</div>}
        <div onDoubleClick={Liked} className={classes.cmtModal__image}>
          <AnimatePresence mode="wait">
            {heart && <HeartAnimation />}
          </AnimatePresence>
          <img src={demoUrl} alt="" />
        </div>
        <div
          className={`${classes["cmtModal__comments"]} ${classes["addPadding"]}`}
        >
          <div className={`${classes["addPadding"]} ${classes["Header"]}`}>
            <Header
              PostObj={{
                name: "Abc",
                profileImg: 111,
                time: "15m",
                place: "xyz",
              }}
            />
          </div>
          <div className={classes.linebreakLight} />
          <div className={classes.cmtModal__section}>
            <CommentSection ExploreObj={ExploreObj} commentsArr={commentsArr} />
            <div className={classes.linebreakLight} />
            <div className={classes["cmtModal__section--info"]}>
              <ActionButtons tempState={tempState} setTempState={setTempState} ExploreObj={ExploreObj} showCmtModal={() => {}} />
              <div className={classes.likes}> {likes} likes </div>
              <div className={classes.time}>{15}m ago</div>
            </div>
            <div className={classes.linebreakLight} />
            <div className={classes.addcomment}>
              <AddComment tempState={tempState} setTempState={setTempState} Obj={ExploreObj} Action={ExploreObjectsActions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentModal;
