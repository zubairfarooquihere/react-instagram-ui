import React, { useState, useEffect} from "react";
import classes from "./Reels.module.scss";
import { animate } from "framer-motion";
import Reel from "../Reel/Reel";
let currentIndex = 0;
function Reels(props) {
  const { ReelsObjectsArr } = props;
  const divId = ["reel10", "reel1", "reel2", "reel4"];
  const [reel10, setreel10] = useState(null);
  const [reel1, setreel1] = useState(null);
  const [reel2, setreel2] = useState(null);
  const [reel4, setreel4] = useState(null);
  const [reelInfo, setReelInfo] = useState({
    reelTop: { id: "reel1", show: false, func: setreel1, },
    reelCenter: { id: "reel2", show: true, func: setreel2, },
    reelBottom: { id: "reel10", show: true, func: setreel10, },
    reelOverflow: { id: "reel4", show: false, func: setreel4, },
  });

  const topPos = { top: "-42%" };
  const centerPos = { top: "50%" };
  const bottomPos = { top: "142%" };
  const overFlowPos = { up: { top: "-70%" }, down: { top: "170%" } };

  const animatePlaceReel = (reelName, position, data) => {
    if (reelName !== null && position !== null) {
      animate("#" + classes[reelName.id], { ...position });
      if(data) {
        console.log(data);
        reelName.func(data);
      }
    }
  };

  const showNewReel = (down) => {
    let topR = reelInfo.reelTop;
    let centerR = reelInfo.reelCenter;
    let bottomR = reelInfo.reelBottom;
    let overflowR = reelInfo.reelOverflow;

    if(down){
      if(ReelsObjectsArr.length > currentIndex+1) {
        currentIndex = currentIndex + 1;
      }
      animatePlaceReel(centerR, topPos);
      animatePlaceReel(bottomR, centerPos);
      animatePlaceReel(overflowR, bottomPos, ReelsObjectsArr[currentIndex+1]);
      animatePlaceReel(topR, overFlowPos.up);
      animatePlaceReel(topR, { opacity: 0 });
      animate("#" + classes[overflowR.id], { opacity: 1 }, { delay: "0.2" });
      setReelInfo({
        reelTop: { ...centerR },
        reelCenter: { ...bottomR },
        reelBottom: { ...overflowR },
        reelOverflow: { ...topR },
      });
    }else{
      if(0 !== currentIndex) {
        currentIndex = currentIndex - 1;
      }
      animatePlaceReel(overflowR, topPos, ReelsObjectsArr[currentIndex-1]);
      animatePlaceReel(topR, centerPos);
      animatePlaceReel(centerR, bottomPos);
      animatePlaceReel(bottomR, overFlowPos.down);
      animatePlaceReel(bottomR, { opacity: 0 });
      animate("#" + classes[overflowR.id], { opacity: 1 }, { delay: "0.2" }); 
      setReelInfo({
        reelTop: { ...overflowR },
        reelCenter: { ...topR },
        reelBottom: { ...centerR },
        reelOverflow: { ...bottomR },
      });     
    } 
  };
  

  useEffect(()=>{
    if(reel2 === null) {
      setreel2(ReelsObjectsArr[currentIndex]);
    }
    if(reel10 === null) {
      setreel10(ReelsObjectsArr[currentIndex+1]);
    }
  },[reel2, reel10, ReelsObjectsArr]);


  return (
    <div className={classes.reels}>
      <div className={classes.newReelBtn}>
        <div className={classes.newReelBtn__top} onClick={()=>{showNewReel(false)}} />
        <div className={classes.newReelBtn__bottom} onClick={()=>{showNewReel(true)}} />
      </div>
      <div key={divId[0]} id={classes[divId[0]]} className={classes.reels__reel}>
        <Reel key={reel10+' reel'} reelId={reel10} />
      </div>
      <div key={divId[1]} id={classes[divId[1]]} className={classes.reels__reel}>
        <Reel key={reel1+' reel'} reelId={reel1} />
      </div>
      <div key={divId[2]} id={classes[divId[2]]} className={classes.reels__reel}>
        <Reel key={reel2+' reel'} reelId={reel2} />
      </div>
      <div key={divId[3]} id={classes[divId[3]]} className={classes.reels__reel}>
        <Reel key={reel4+' reel'} reelId={reel4} />
      </div>
    </div>
  );
}

export default Reels;
