import React, { useRef } from "react";
import { motion } from "framer-motion";

import classes from "./SearchSlider.module.scss";

function SearchSlider(props) {
  //const { setOpenNotification } = props;
  const newRef = useRef(null);

  //   useEffect(() => {
  //     document.addEventListener("mousedown", handleOutsideNotification);
  //     return () => {
  //       document.removeEventListener("mousedown", handleOutsideNotification);
  //     };
  //   });

  //   const handleOutsideNotification = (e) => {
  //     if (newRef.current && !newRef.current.contains(e.target)) {
  //       setOpenNotification(false);
  //     }
  //   };

  return (
    <motion.div
      className={classes.searchSlider}
      style={{ height: "100px", width: "100px" }}
      initial={{left: 0, width: 0, height: '100%'}}
      animate={{left: 7, width: 405, height: '100%'}}
      exit={{ opacity: 0, width: 0 }}
      transition={{ duration: 0.23 }}
      ref={newRef}
    ></motion.div>
  );
}

export default SearchSlider;
