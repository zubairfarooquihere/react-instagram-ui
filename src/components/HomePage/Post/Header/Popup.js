import React from "react";
import { motion } from "framer-motion";
import classes from "./Popup.module.scss";

import Modal from "../../../../ui/Modal/Modal";
function Popup(props) {
  const { popupItems, showPopup } = props;

  let items = popupItems.map((item) => {
    let classz = item.warning ? classes.warning : null;
    let func = item.onClick ? item.onClick : null;
    return (
      <li onClick={func} className={classz}>
        {item.text}
      </li>
    );
  });

  return (
    <>
      <Modal onClose={showPopup} />
      <motion.div
        initial={{ scale: 1.15, x:'-50%', y: '-50%'  }}
        animate={{ scale: 1, x:'-50%', y: '-50%' }}
        exit={{ x:'-50%', y: '-50%'  }}
        transition={{ duration: 0.1 }}
        className={classes.Popup}
      >
        <ul>{items}</ul>
      </motion.div>
    </>
  );
}

export default Popup;
