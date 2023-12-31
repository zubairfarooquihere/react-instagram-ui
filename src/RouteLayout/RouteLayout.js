import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "../components/Nav/Nav";

import classes from './RouteLayout.module.scss'

function RouteLayout() {
  //git push -u origin main
  return (
    <>
      <div className={classes.RouteLayout}>
        <Nav />
        <Outlet />
      </div>
    </>
  );
}

export default RouteLayout;
