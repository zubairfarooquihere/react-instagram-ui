import React, { useEffect, useState, useCallback } from "react";
import { animate } from "framer-motion";
import classes from "./ModalStories.module.scss";

const DataTemp = [0, 1, 2, 3, 4, 5, 6];

function ModalStories(props) {
  const [selected, setSelected] = useState(3);
  const hideDiv = { fromRight: DataTemp.length - 2, fromLeft: 3 };
  const stopRight = {
    far: hideDiv.fromRight <= selected+1, //Add +1 in selected, because value is added in setSelected after moveRight func is completed in executing.
    next: hideDiv.fromRight < selected+1,
  };
  const stopLeft = {
    far: selected+1 <= 3,
    next: selected+1 < 3,
  };

  const [story1, setStory1] = useState(<div></div>);
  const [story2, setStory2] = useState(<div></div>);
  const [story3, setStory3] = useState(<div></div>);
  const [story4, setStory4] = useState(<div></div>);
  const [story5, setStory5] = useState(<div></div>);
  const [story6, setStory6] = useState(<div></div>);
  const [divsInfo, setDivsInfo] = useState({
    LeftFar: { id: "story1", show: true, func: setStory1 },
    LeftNext: { id: "story2", show: true, func: setStory2 },
    CenterDiv: { id: "story3", show: true, func: setStory3 },
    RightNext: { id: "story4", show: true, func: setStory4 },
    RightFar: { id: "story5", show: true, func: setStory5 },
    overFlowDiv: { id: "story6", show: true, func: setStory6 },
  });

  const mainStoryPos = 50;
  const moveNext = mainStoryPos + 25;
  const moveNextFar = moveNext + 15;

  const movePrevious = mainStoryPos - 25;
  const movePreviousFar = movePrevious - 15;

  const mainStory = { height: "89%", width: 384 };
  const normalStory = { height: "40%", width: 154.15 };
  const overFlow = { left: "-10%", right: "110%" };

  const showAllDiv = useCallback(() => {
    for (const prop in divsInfo) {
      animate("#" + divsInfo[prop]["id"], { display: "block" });
    }
  }, [divsInfo]);

  const selectedUp = async (up) => {
    if (up) {
      divsInfo.overFlowDiv.func(<div>{DataTemp[selected - 3]}</div>);
      setSelected(selected - 1);
    } else {
      const getValue = selected + 3;
      divsInfo.overFlowDiv.func(<div>{DataTemp[getValue]}</div>);
      setSelected(selected + 1);
    }
  };

  const moveRight = async (MR) => {
    const getCenterDiv = divsInfo.CenterDiv;
    const getLeftNext = divsInfo.LeftNext;
    const getRightNext = divsInfo.RightNext;
    const getLeftFar = divsInfo.LeftFar;
    const getRightFar = divsInfo.RightFar;
    const overFlowDiv = divsInfo.overFlowDiv;
    console.log('selected: '+ selected);
    if (selected + 1 === DataTemp.length && MR === false) {
      return;
    }
    if (selected === 0 && MR === true) {
      return;
    }  
    await animate("#" + overFlowDiv.id, {
      display: "none",
      left: MR ? overFlow.left : overFlow.right,
    });

    if (MR) {
      animate("#" + getRightFar.id, { left: overFlow.right });      
      if (!(hideDiv.fromRight <= selected - 1)) {
        animate("#" + getRightNext.id, { left: moveNextFar + "%" });
      }
      if(!stopLeft.next){
       animate("#" + getLeftFar.id, { left: movePrevious + "%" });
      }
    } else {
      animate("#" + getLeftFar.id, { left: overFlow.left });
      if (!stopRight.next) {
        animate("#" + getRightFar.id, { left: moveNext + "%" });
      }
      if (selected + 1 >= hideDiv.fromLeft-1) {
        animate("#" + getLeftNext.id, { left: movePreviousFar + "%" });
      }
    }

    const abc = MR ? moveNext + "%" : movePrevious + "%";
    animate("#" + getCenterDiv.id, {
      height: normalStory.height,
      width: normalStory.width,
      left: abc,
    });

    const xyz = MR ? getLeftNext.id : getRightNext.id;
    animate("#" + xyz, {
      height: mainStory.height,
      width: mainStory.width,
      left: mainStoryPos + "%",
    });
    
    if ((!stopRight.far || MR === true) && (!stopLeft.far || MR === false)) {
      const qty = MR ? movePreviousFar + "%" : moveNextFar + "%";
      animate("#" + overFlowDiv.id, {
        display: "block",
        left: qty,
      });
    }

    if (MR) {
      const newObj = {
        LeftFar: { ...overFlowDiv },
        LeftNext: { ...getLeftFar },
        CenterDiv: { ...getLeftNext },
        RightNext: { ...getCenterDiv },
        RightFar: { ...getRightNext },
        overFlowDiv: { ...getRightFar },
      };
      selectedUp(true);
      setDivsInfo(newObj);
    } else {
      const newObj = {
        LeftFar: { ...getLeftNext },
        LeftNext: { ...getCenterDiv },
        CenterDiv: { ...getRightNext },
        RightNext: { ...getRightFar },
        RightFar: { ...overFlowDiv },
        overFlowDiv: { ...getLeftFar },
      };
      selectedUp(false);
      setDivsInfo(newObj);
    }
  };

  // const moveRight = async (MR) => {
  //   const getCenterDiv = divsInfo.CenterDiv;
  //   const getLeftNext = divsInfo.LeftNext;
  //   const getRightNext = divsInfo.RightNext;
  //   const getLeftFar = divsInfo.LeftFar;
  //   const getRightFar = divsInfo.RightFar;
  //   const overFlowDiv = divsInfo.overFlowDiv;

  //   // if(rightHideOverflow) {
  //   //   animate("#" + overFlowDiv.id, {
  //   //     backgroundColor: 'transparent',
  //   //   });
  //   // }
  //   await animate("#" + overFlowDiv.id, {
  //     display: "none",
  //     left: MR ? overFlow.left : overFlow.right,
  //   });
  //   if (MR) {
  //     animate("#" + getRightFar.id, { left: overFlow.right });
  //     animate("#" + getRightNext.id, { left: moveNextFar + "%" });
  //     animate("#" + getLeftFar.id, { left: movePrevious + "%" });
  //   } else {
  //     animate("#" + getLeftFar.id, { left: overFlow.left });
  //     animate("#" + getLeftNext.id, { left: movePreviousFar + "%" });
  //     animate("#" + getRightFar.id, { left: moveNext + "%" });
  //   }

  //   const abc = MR ? moveNext + "%" : movePrevious + "%";
  //   animate("#" + getCenterDiv.id, {
  //     height: normalStory.height,
  //     width: normalStory.width,
  //     left: abc,
  //   });

  //   const xyz = MR ? getLeftNext.id : getRightNext.id;
  //   animate("#" + xyz, {
  //     height: mainStory.height,
  //     width: mainStory.width,
  //     left: mainStoryPos + "%",
  //   });

  //   const qty = MR ? movePreviousFar + "%" : moveNextFar + "%";
  //   animate("#" + overFlowDiv.id, {
  //     display: "block",
  //     left: qty,
  //   });

  //   if (MR) {
  //     const newObj = {
  //       LeftFar: { ...overFlowDiv },
  //       LeftNext: { ...getLeftFar },
  //       CenterDiv: { ...getLeftNext },
  //       RightNext: { ...getCenterDiv },
  //       RightFar: { ...getRightNext },
  //       overFlowDiv: { ...getRightFar },
  //     };
  //     selectedUp(true);
  //     setDivsInfo(newObj);
  //   } else {
  //     const newObj = {
  //       LeftFar: { ...getLeftNext },
  //       LeftNext: { ...getCenterDiv },
  //       CenterDiv: { ...getRightNext },
  //       RightNext: { ...getRightFar },
  //       RightFar: { ...overFlowDiv },
  //       overFlowDiv: { ...getLeftFar },
  //     };
  //     selectedUp(false);
  //     setDivsInfo(newObj);
  //   }
  // };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    showAllDiv();
    divsInfo.LeftFar.func(<div>{DataTemp[selected - 2]}</div>);
    divsInfo.LeftNext.func(<div>{DataTemp[selected - 1]}</div>);
    divsInfo.CenterDiv.func(<div>{DataTemp[selected]}</div>);
    divsInfo.RightNext.func(<div>{DataTemp[selected + 1]}</div>);
    divsInfo.RightFar.func(<div>{DataTemp[selected + 2]}</div>);
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [showAllDiv, divsInfo, selected]);

  return (
    <div className={classes.modal}>
      <button
        onClick={async () => {
          await moveRight(false);
        }}
      >
        Go Left
      </button>
      <button
        onClick={async () => {
          await moveRight(true);
        }}
      >
        Go Right
      </button>
      {story1 && (
        <div id="story1" className={classes.story1}>
          {story1}
        </div>
      )}
      {story2 && (
        <div id="story2" className={classes.story2}>
          {story2}
        </div>
      )}
      {story3 && (
        <div id="story3" className={classes.story3}>
          {story3}
        </div>
      )}
      {story4 && (
        <div id="story4" className={classes.story4}>
          {story4}
        </div>
      )}
      {story5 && (
        <div id="story5" className={classes.story5}>
          {story5}
        </div>
      )}
      {story6 && (
        <div id="story6" className={classes.story6}>
          {story6}
        </div>
      )}
    </div>
  );
}

export default ModalStories;
