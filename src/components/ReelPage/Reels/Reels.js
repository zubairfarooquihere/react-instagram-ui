import React, { useState } from "react";
import classes from "./Reels.module.scss";
import { animate } from "framer-motion";
import Reel from "../Reel/Reel";
function Reels() {
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
    animate("#" + classes[overflowR.id], { opacity: 1 }, { delay: '0.2' });

    setReelInfo({
      reelTop: { id: centerR.id },
      reelCenter: { id: bottomR.id },
      reelBottom: { id: overflowR.id },
      reelOverflow: { id: topR.id },
    });
  };

  return (
    <div onClick={showNewReel} className={classes.reels}>
      <div id={classes.reel10} className={classes.reels__reel}>
        <Reel />
      </div>
      <div id={classes.reel1} className={classes.reels__reel}>
        <Reel />
      </div>

      <div id={classes.reel2} className={classes.reels__reel}>
        <Reel />
      </div>

      <div id={classes.reel4} className={classes.reels__reel}>
        <Reel />
      </div>
    </div>
  );
}

export default Reels;
