import React from "react";
import { motion } from "framer-motion";
import classes from './HeartAnimation.module.scss'
function HeartAnimation() {
  const gradientId = "heartGradient";
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      className="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      {/* Defining the linear gradient */}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d616c9" />
          <stop offset="90%" stopColor="#ffc806" />
        </linearGradient>
      </defs>

      {/* Using the linear gradient as the fill for the path */}
      <path
        fill={`url(#${gradientId})`} // Using the gradient as the fill
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
      />
    </svg>
  );
  return (
    <motion.span
      initial={{ rotate: -30, scale: 0.7, x: "-50%", y: "-50%" }}
      animate={{ rotate: 0, scale: 1, x: "-50%", y: "-50%" }}
      exit={{ x: "-50%", y: "-320%" }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
      className={classes.svg}
    >
      {svg}
    </motion.span>
  );
}

export default HeartAnimation;
