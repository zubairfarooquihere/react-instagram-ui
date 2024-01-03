import React from "react";
import classes from "./Footer.module.scss";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__firstPart}>
        <a href="http:/">About</a>
        <span>.</span>
        <a href="http:/">Help</a>
        <span>.</span>
        <a href="http:/">Press</a>
        <span>.</span>
        <a href="http:/">API</a>
        <span>.</span>
        <a href="http:/">Jobs</a>
        <span>.</span>
        <a href="http:/">Privacy</a>
        <span>.</span>
        <a href="http:/">Terms</a>
        <span>.</span>
        <a href="http:/">Locations</a>
        <span>.</span>
        <a href="http:/">Language</a>
        <span>.</span>
        <a href="http:/">Meta Verified</a>
        <span>.</span>
      </div>
      <div className={classes.footer__secondPart}>
        <p>© 2024 Instagram from Meta</p>
      </div>
    </div>
  );
}

export default Footer;
