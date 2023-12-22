import React from "react";

import classes from "./SwitchAppear.module.scss";
import { backbutton, themeicon } from "../../../ui/svg/NavDropDown";

function SwitchAppear(props) {
  const { setAppearance } = props;
  return (
    <div className={classes.SwitchAppearDiv}>
      <header className={classes.header}>
        <span onClick={()=>{setAppearance(false)}} className={classes.header__back}>{backbutton}</span>
        <h2 className={classes.header__heading}>Switch appearance</h2>
        <span className={classes.header__svg}>{themeicon}</span>
      </header>
      <div className={classes.linebreakLight} />
      <div className={classes.btndiv}>
        <button className={classes.btndiv__btn}>Dark mode</button>
        <label className={classes.switch}>
          <input type="checkbox" />
          <span className={classes.slider}></span>
        </label>
      </div>
    </div>
  );
}

export default SwitchAppear;
