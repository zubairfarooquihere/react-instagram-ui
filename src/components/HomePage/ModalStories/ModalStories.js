import React, { useEffect, useState, useCallback } from "react";
import Stories from "react-insta-stories";
import { animate } from "framer-motion";
import classes from "./ModalStories.module.scss";
import { instagram, closeModal } from "../../../ui/svg/Nav";
const DataTemp = [0, 1, 2, 3, 4, 5, 6];
function ModalStories(props) {
  const { name, setShowModal } = props;
  const [selected, setSelected] = useState(3);
  const hideDiv = { fromRight: DataTemp.length - 2, fromLeft: 3 };
  const stopRight = {
    far: hideDiv.fromRight <= selected + 1, //Add +1 in selected, because value is added in setSelected after moveRight func is completed in executing.
    next: hideDiv.fromRight < selected + 1,
  };
  const stopLeft = {
    far: selected + 1 <= 3,
    next: selected + 1 < 3,
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
  const [responsive, setResponsive] = useState(0);
  const [CenterHere, setCenterHere] = useState("story3");
  const mainStoryPos = 50;
  const moveNext = mainStoryPos + 25 + responsive;
  const moveNextFar = moveNext + 15 + responsive;

  const movePrevious = mainStoryPos - (25 + responsive);
  const movePreviousFar = movePrevious - (15 + responsive);

  const mainStory = { height: 89+(-responsive)+"%", width: 384+(-(responsive*2.35)) };
  const normalStory = { height: 40+(-(responsive-10))+"%", width: 154.15+(-responsive) };

  const overFlow = {
    left: -10 - responsive + "%",
    right: 110 + responsive + "%",
  };

  const showAllDiv = useCallback(() => {
    for (const prop in divsInfo) {
      animate("#" + divsInfo[prop]["id"], { display: "block" });
    }
  }, [divsInfo]);

  const selectedUp = async (up) => {
    if (up) {
      divsInfo.overFlowDiv.func(
        returnHtml(DataTemp[selected - 3], divsInfo.overFlowDiv.id)
      );
      setSelected(selected - 1);
    } else {
      //const getValue = selected + 3;
      divsInfo.overFlowDiv.func(
        returnHtml(DataTemp[selected + 3], divsInfo.overFlowDiv.id)
      );
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
      if (!stopLeft.next) {
        animate("#" + getLeftFar.id, { left: movePrevious + "%" });
      }
    } else {
      animate("#" + getLeftFar.id, { left: overFlow.left });
      if (!stopRight.next) {
        animate("#" + getRightFar.id, { left: moveNext + "%" });
      }
      if (selected + 1 >= hideDiv.fromLeft - 1) {
        animate("#" + getLeftNext.id, { left: movePreviousFar + "%" });
      }
    }

    const move = MR ? moveNext + "%" : movePrevious + "%";
    animate("#" + getCenterDiv.id, {
      height: normalStory.height,
      width: normalStory.width,
      left: move,
      zIndex: 5,
    });

    const ID = MR ? getLeftNext.id : getRightNext.id;
    animate("#" + ID, {
      height: mainStory.height,
      width: mainStory.width,
      left: mainStoryPos + "%",
      zIndex: 10,
    });

    if ((!stopRight.far || MR === true) && (!stopLeft.far || MR === false)) {
      const moveFar = MR ? movePreviousFar + "%" : moveNextFar + "%";
      animate("#" + overFlowDiv.id, {
        display: "block",
        left: moveFar,
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
      setCenterHere(getLeftNext.id);
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
      setCenterHere(getRightNext.id);
      selectedUp(false);
      setDivsInfo(newObj);
    }
  };

  const returnHtml = useCallback(
    (index, id) => {
      const con = id === CenterHere;
      let stories = [
        {
          url: `https://picsum.photos/750/${1255 + index}`,
          duration: con ? 5000 : 1,
          header: {
            heading: name[index],
            subheading: "Posted 30m ago",
            profileImage: `https://picsum.photos/100/${100 + index}`,
          },
        },
        {
          url: `https://picsum.photos/750/${1255 + index + 1}`,
          duration: con ? 5000 : 1,
          header: {
            heading: name[index],
            subheading: "Posted 30m ago",
            profileImage: `https://picsum.photos/100/${100 + index}`,
          },
        },
      ];
      return (
        <div className={classes.story__img}>
          <Stories
            loop={con}
            stories={stories}
            width={"100%"}
            height={"100%"}
          />
        </div>
      );
    },
    [CenterHere, name]
  );

  const addElement = useCallback(() => {
    divsInfo.LeftFar.func(
      returnHtml(DataTemp[selected - 2], divsInfo.LeftFar.id)
    );
    divsInfo.LeftNext.func(
      returnHtml(DataTemp[selected - 1], divsInfo.LeftNext.id)
    );
    divsInfo.CenterDiv.func(
      returnHtml(DataTemp[selected], divsInfo.CenterDiv.id)
    );
    divsInfo.RightNext.func(
      returnHtml(DataTemp[selected + 1], divsInfo.RightNext.id)
    );
    divsInfo.RightFar.func(
      returnHtml(DataTemp[selected + 2], divsInfo.RightFar.id)
    );
  }, [selected, divsInfo, returnHtml]);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    showAllDiv();
    addElement();
    const handleResize = () => {
      let resp = 0;
      if (window.innerWidth <= 1130) {
        setResponsive(20);
        resp = 20;
      } else {
        setResponsive(0);
        resp = 0;
      }
      let mainSt = { height: 89+(-resp)+"%", width: 384+(-(resp*2.35)) };
      const normalSt = { height: 40+(-(resp-10))+"%", width: 154.15+(-resp) };
    
      animate("#" + divsInfo.CenterDiv.id, {
        height: mainSt.height,
        width: mainSt.width,
        zIndex: 10,
      });
      animate("#" + divsInfo.LeftNext.id, {
        height: normalSt.height,
        width: normalSt.width,
        //left: movePre,
        zIndex: 5,
      });
      animate("#" + divsInfo.RightNext.id, {
        height: normalSt.height,
        width: normalSt.width,
        //left: moveNe,
        zIndex: 5,
      });
      animate("#" + divsInfo.LeftFar.id, {
        height: normalSt.height,
        width: normalSt.width,
        //left: movePreviousF,
        zIndex: 5,
      });
      animate("#" + divsInfo.RightFar.id, {
        height: normalSt.height,
        width: normalSt.width,
        //left: moveNextF,
        zIndex: 5,
      });
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      document.body.style.overflowY = "scroll";
      window.removeEventListener("resize", handleResize);
    };
  }, [showAllDiv, divsInfo, addElement]);

  return (
    <div className={classes.modal}>
      <span className={classes.logo}>
        {instagram}
      </span>
      <span className={classes.close} onClick={()=>{setShowModal(false)}}>
        {closeModal}
      </span>
      <button
        className={`${classes.btn} ${classes.btnR}`}
        onClick={async () => {
          await moveRight(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          //fill="none"
          viewBox="0 0 24 24"
          id="left-arrow"
        >
          <path
            //fill="#000"
            fillRule="evenodd"
            d="M12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5ZM21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12Z"
            clipRule="evenodd"
          ></path>
          <path
            //fill="#000"
            fillRule="evenodd"
            d="M17.5 12C17.5 11.7239 17.2761 11.5 17 11.5H7.5C7.22386 11.5 7 11.7239 7 12C7 12.2761 7.22386 12.5 7.5 12.5H17C17.2761 12.5 17.5 12.2761 17.5 12Z"
            clipRule="evenodd"
          ></path>
          <path
            //fill="#000"
            fillRule="evenodd"
            d="M10.8536 8.14645C10.6583 7.95118 10.3417 7.95118 10.1464 8.14645L6.64645 11.6464C6.45118 11.8417 6.45118 12.1583 6.64645 12.3536L10.1464 15.8536C10.3417 16.0488 10.6583 16.0488 10.8536 15.8536C11.0488 15.6583 11.0488 15.3417 10.8536 15.1464L7.70711 12L10.8536 8.85355C11.0488 8.65829 11.0488 8.34171 10.8536 8.14645Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        className={`${classes.btn} ${classes.btnL}`}
        onClick={async () => {
          await moveRight(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          //fill="none"
          viewBox="0 0 24 24"
          id="left-arrow"
        >
          <path
            //fill="#000"
            fillRule="evenodd"
            d="M12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5ZM21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12Z"
            clipRule="evenodd"
          ></path>
          <path
            //fill="#000"
            fillRule="evenodd"
            d="M17.5 12C17.5 11.7239 17.2761 11.5 17 11.5H7.5C7.22386 11.5 7 11.7239 7 12C7 12.2761 7.22386 12.5 7.5 12.5H17C17.2761 12.5 17.5 12.2761 17.5 12Z"
            clipRule="evenodd"
          ></path>
          <path
            //fill="#000"
            fillRule="evenodd"
            d="M10.8536 8.14645C10.6583 7.95118 10.3417 7.95118 10.1464 8.14645L6.64645 11.6464C6.45118 11.8417 6.45118 12.1583 6.64645 12.3536L10.1464 15.8536C10.3417 16.0488 10.6583 16.0488 10.8536 15.8536C11.0488 15.6583 11.0488 15.3417 10.8536 15.1464L7.70711 12L10.8536 8.85355C11.0488 8.65829 11.0488 8.34171 10.8536 8.14645Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {story1 && (
        <div id="story1" className={`${classes.st} ${classes.story1}`}>
          {story1}
        </div>
      )}
      {story2 && (
        <div id="story2" className={`${classes.st} ${classes.story2}`}>
          {story2}
        </div>
      )}
      {story3 && (
        <div id="story3" className={`${classes.st} ${classes.story3}`}>
          {story3}
        </div>
      )}
      {story4 && (
        <div id="story4" className={`${classes.st} ${classes.story4}`}>
          {story4}
        </div>
      )}
      {story5 && (
        <div id="story5" className={`${classes.story5}`}>
          {story5}
        </div>
      )}
      {story6 && (
        <div id="story6" className={`${classes.story6}`}>
          {story6}
        </div>
      )}
    </div>
  );
}

export default ModalStories;
