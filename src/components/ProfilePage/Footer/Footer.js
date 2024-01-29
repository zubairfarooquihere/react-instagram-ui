import React from "react";
import classes from "./Footer.module.scss";

function Footer() {
  return (
    <div className={classes.Footer}>
      <ul className={classes.ul}>
        <li>Meta</li>
        <li>About</li>
        <li>Blog</li>
        <li>Jobs</li>
        <li>Help</li>
        <li>API</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Locations</li>
        <li>Instagram Lite</li>
        <li>Threads</li>
        <li>Contact Uploading & Non-Users</li>
        <li>Meta Verified</li>
      </ul>
    </div>
  );
}

export default Footer;
