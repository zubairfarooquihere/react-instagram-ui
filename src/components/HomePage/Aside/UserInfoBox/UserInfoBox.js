import React, { useState } from "react";
import { useAnimate } from "framer-motion";
import classes from "./UserInfoBox.module.scss";

import Dialog from "./Dialog";
import Spinner from '../../../../ui/Spinner/Spinner';
function UserInfoBox(props) {
  const { infoMain, infoSub, button, img, admin } = props;
  const [scopePost, animate] = useAnimate();
  const [timer, setTimer] = useState(null);
  const [dialog, setDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [btnText, setBtnText] = useState(button);

  const handleHoverAction = () => {
    setDialog(true);
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      handleHoverAction();
    }, 1000);

    setTimer(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    setDialog(false);
  };

  const follow = () => {
    if(admin){
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setBtnText(btnText === 'Following' ? 'Follow' : 'Following');
      if(btnText === 'Follow') {
        animate(`.${classes["secondPart"]}`, {
          color: "#6e757a",
          fontWeight: 'bolder'
        }, {transition: .3});
      } else {
        animate(`.${classes["secondPart"]}`, {
          color: "#22a6ff",
          fontWeight: 'normal'
        }, {transition: .3});
      }
    }, 3000);
  };

  return (
    <>
      <div className={classes.userInfo} ref={scopePost}>
        <div className={classes.firstPart}>
          <span className={classes.userInfo__img}>
            <img src={`https://picsum.photos/400/${500 + img}`} alt="" />
          </span>
          <main
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={classes.userInfo__info}
          >
            <span className={classes["userInfo__info--main"]}>{infoMain}</span>
            <span className={classes["userInfo__info--sub"]}>{infoSub}</span>
            {dialog && admin !== true && (
              // <dialog open className={classes.dialog}>
                <Dialog infoMain={infoMain} img={img} following={btnText === 'Following' ? true : false} />
              // </dialog>
            )}
          </main>
        </div>
        <div className={classes.secondPart}>
          {loading && <Spinner color={'#22a6ff'} />}
          {!loading && <button onClick={follow} className={classes.secondPart__btn}>{btnText}</button>}
        </div>
      </div>
    </>
  );
}

export default UserInfoBox;
