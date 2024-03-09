import React from "react";
import styles from "./animate.module.scss";

const IconLoading = () => {
  return (
    <div className={styles.animate}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="loading-white-16" clipPath="url(#clip0_1_1598)">
          <circle
            id="Ellipse 9"
            cx="8"
            cy="8"
            r="7"
            stroke="url(#paint0_angular_1_1598)"
            strokeWidth="2"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_angular_1_1598"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8 6) rotate(360) scale(10)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <clipPath id="clip0_1_1598">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default IconLoading;
