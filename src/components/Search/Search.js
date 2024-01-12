import React, { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

import classes from "./Search.module.scss";

function Search() {
  const newRef = useRef(null);

  const handleOutsideSearch = useCallback((e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      //setOpenNotification(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideSearch);
    return () => {
      document.removeEventListener("mousedown", handleOutsideSearch);
    };
  }, [handleOutsideSearch]);

  return (
    <motion.div
      className={classes.searchSlider}
      initial={{ left: 0, width: 0, height: "100%" }}
      animate={{ left: 70, width: 405, height: "100%" }}
      exit={{ opacity: 0, width: 0 }}
      transition={{ duration: 0.23 }}
      ref={newRef}
    >
      <div className={classes.search}>
        <h1 className={classes.search__h1}>Search</h1>
        <div className={classes.topnav}>
          <input type="text" placeholder={"Search"} />
        </div>
        <div className={classes.search__linebreakLight} />
        <h1 className={classes.search__h3}>Recent</h1>
        <div className={classes.search__list}>
          <div className={classes['search__list--NoItem']}>No recent searches.</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Search;
