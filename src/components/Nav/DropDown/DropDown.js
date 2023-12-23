import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import classes from "./DropDown.module.scss";

import FirstAppearance from "./FirstAppearance";
import SwitchAppear from "./SwitchAppear";

function DropDown(props) {
  let { setDropdown, animateRemoveHoldLi } = props;
  const [appearance, setAppearance] = useState(false);
  const newRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      //console.log("Outside");
      setDropdown(false);
      animateRemoveHoldLi();
    }
  };

  return (
    <motion.div
      className={classes.dropdown}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.23 }}
      ref={newRef}
    >
      <AnimatePresence mode="popLayout">
        {!appearance && (
          <motion.div
            initial={{ x: -500, height: 120 }}
            animate={{ x: 0, height: 410 }}
            exit={{ x: -500 }}
            transition={{ duration: 0.3 }}
            className={classes.dropdown__firstAppearance}
          >
            <FirstAppearance setAppearance={setAppearance} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="popLayout">
        {appearance && (
          <motion.div
            initial={{ x: 500, height: 410 }}
            animate={{ x: 0, height: 120 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.3 }}
          >
            <SwitchAppear setAppearance={setAppearance} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default DropDown;
