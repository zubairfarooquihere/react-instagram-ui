import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

import classes from "./NotificationSlider.module.scss";

import Post from "./Post";

function generateRandomNames(number) {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Isabella",
    "Jack",
    "Katherine",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Sophia",
    "Thomas",
    "Uma",
    "Victor",
    "Willow",
    "Xavier",
    "Yasmine",
    "Zachary",
  ];

  const randomNames = [];
  const usedIndexes = new Set();

  while (randomNames.length < number) {
    const randomIndex = Math.floor(Math.random() * names.length);

    if (!usedIndexes.has(randomIndex)) {
      randomNames.push(names[randomIndex]);
      usedIndexes.add(randomIndex);
    }
  }

  return randomNames;
}

function NotificationSlider(props) {
  //const { } = props;
  const newRef = useRef(null);
  const [weekData, setWeekData] = useState([]);
  const [monthData, setMonthData] = useState([]);
  const [earlierData, setEarlierData] = useState([]);

  const handleOutsideNotification = useCallback((e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      //console.log('handleOutsideNotification');
      //setOpenNotification(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideNotification);
    setWeekData(generateRandomNames(2));
    setMonthData(generateRandomNames(3));
    setEarlierData(generateRandomNames(6));
    return () => {
      document.removeEventListener("mousedown", handleOutsideNotification);
    };
  }, [handleOutsideNotification]);

  return (
    <motion.div
      className={classes.notificationSlider}
      initial={{ left: 0, width: 0, height: "100%" }}
      animate={{ left: 70, width: 405, height: "100%" }}
      exit={{ opacity: 0, width: 0 }}
      transition={{ duration: 0.23 }}
      ref={newRef}
    >
      <div className={classes.notification}>
        <h1 className={classes.notification__h1}>Notifications</h1>
        <h1 className={classes.notification__h3}>This week</h1>

        {weekData.map((name, index) => {
          return <Post key={index + 1} name={name} img={index + 1} />;
        })}

        <div className={classes.notification__linebreakLight} />

        <h1 className={classes.notification__h3}>This month</h1>

        {monthData.map((name, index) => {
          return <Post key={index + 3} name={name} img={index + 3} />;
        })}

        <div className={classes.notification__linebreakLight} />
        <h1 className={classes.notification__h3}>Earlier</h1>

        {earlierData.map((name, index) => {
          return <Post key={index + 7} name={name} img={index + 7} />;
        })}
      </div>
    </motion.div>
  );
}

export default NotificationSlider;
