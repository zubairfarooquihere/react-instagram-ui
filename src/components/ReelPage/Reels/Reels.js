import React, { useState } from "react";
import classes from "./Reels.module.scss";
import { animate } from "framer-motion";
import Reel from "../Reel/Reel";
function Reels(props) {
  const { ReelsObjectsArr } = props;
  const divId = ["reel10", "reel1", "reel2", "reel4"];
  const [reelInfo, setReelInfo] = useState({
    reelTop: { id: "reel1", show: false },
    reelCenter: { id: "reel2", show: true },
    reelBottom: { id: "reel10", show: true },
    reelOverflow: { id: "reel4", show: false },
  });

  const topPos = { top: "-42%" };
  const centerPos = { top: "50%" };
  const bottomPos = { top: "142%" };
  const overFlowPos = { up: { top: "-70%" }, down: { top: "170%" } };

  const animatePlaceReel = (reelName, position) => {
    if (reelName !== null && position !== null) {
      animate("#" + classes[reelName], { ...position });
    }
  };

  const showNewReel = () => {
    let topR = reelInfo.reelTop;
    let centerR = reelInfo.reelCenter;
    let bottomR = reelInfo.reelBottom;
    let overflowR = reelInfo.reelOverflow;

    animatePlaceReel(centerR.id, topPos);
    animatePlaceReel(bottomR.id, centerPos);
    animatePlaceReel(overflowR.id, bottomPos);
    animatePlaceReel(topR.id, overFlowPos.up);
    animatePlaceReel(topR.id, { opacity: 0 });
    animate("#" + classes[overflowR.id], { opacity: 1 }, { delay: "0.2" });

    setReelInfo({
      reelTop: { id: centerR.id },
      reelCenter: { id: bottomR.id },
      reelBottom: { id: overflowR.id },
      reelOverflow: { id: topR.id },
    });
  };

  // const render = divId.map((dID, index)=>{
  //   return (
  //     <div key={dID} id={classes[dID]} className={classes.reels__reel}>
  //       <Reel key={ReelsObjectsArr[index]+' reel'} reelId={ReelsObjectsArr[index]} />
  //     </div>
  //   );
  // })

  return (
    <div onClick={showNewReel} className={classes.reels}>
      {/* {render} */}
      <div key={divId[0]} id={classes[divId[0]]} className={classes.reels__reel}>
        <Reel key={ReelsObjectsArr[0]+' reel'} reelId={ReelsObjectsArr[0]} />
      </div>
      <div key={divId[1]} id={classes[divId[1]]} className={classes.reels__reel}>
        <Reel key={ReelsObjectsArr[1]+' reel'} reelId={ReelsObjectsArr[1]} />
      </div>
      <div key={divId[2]} id={classes[divId[2]]} className={classes.reels__reel}>
        <Reel key={ReelsObjectsArr[2]+' reel'} reelId={ReelsObjectsArr[2]} />
      </div>
      <div key={divId[3]} id={classes[divId[3]]} className={classes.reels__reel}>
        <Reel key={ReelsObjectsArr[3]+' reel'} reelId={ReelsObjectsArr[3]} />
      </div>
    </div>
  );
}

export default Reels;
