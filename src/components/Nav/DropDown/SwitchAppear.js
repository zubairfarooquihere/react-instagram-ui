import React, { useState } from "react";

import classes from "./SwitchAppear.module.scss";
import { backbutton, themeicon } from "../../../ui/svg/NavDropDown";
import { webinfoActions } from "../../../redux/webinfo";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function SwitchAppear(props) {
  const { setAppearance } = props;
  const dispatch = useDispatch();
  const weninfo = useSelector((state) => state.weninfo);
  const [dMode, setDMode] = useState(weninfo.darkMode);

  const darkMode = () => {
    setDMode(!dMode)
    dispatch(webinfoActions.darkModeOn(!dMode));
  };

  return (
    <div className={classes.SwitchAppearDiv}>
      <header className={classes.header}>
        <span
          onClick={() => {
            setAppearance(false);
          }}
          className={classes.header__back}
        >
          {backbutton}
        </span>
        <h2 className={classes.header__heading}>Switch appearance</h2>
        <span className={classes.header__svg}>{themeicon}</span>
      </header>
      <div className={classes.linebreakLight} />
      <div className={classes.btndiv}>
        <button className={classes.btndiv__btn}>Dark mode</button>
        <label className={classes.switch}>
          <input checked={dMode} type="checkbox" />
          <span onClick={darkMode} className={classes.slider}></span>
        </label>
      </div>
    </div>
  );
}

export default SwitchAppear;
