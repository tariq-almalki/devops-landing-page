import classes from "./Loading.module.css";
import { useEffect } from "react";

import { useLoadingAnimation } from "../Hooks/useLoadingAnimation";

export const Loading = (props) => {
  // useEffect(() => {
  //   useLoadingAnimation();
  // });
  return (
    <div className='cc1'>
      <div className={classes["block-1"]}>
        <svg
          id='inf'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          style={{
            margin: "0",
            background: "#0f0f0f",
            display: "block",
          }}
          width='400px'
          height='400px'
          viewBox='0 0 100 100'
          preserveAspectRatio='xMidYMid'
        >
          <path
            id='path'
            fill='none'
            stroke='white'
            stroke-width='8'
            stroke-dasharray='42.76482137044271 42.76482137044271'
            d='M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z'
            stroke-linecap='round'
            style={{
              transform: "scale(0.9)",
              "transform-origin": "50px 50px",
            }}
          >
            <animate
              attributeName='stroke-dashoffset'
              repeatCount='indefinite'
              dur='2.5s'
              keyTimes='0;1'
              values='0;256.58892822265625'
            >
              devops
            </animate>
          </path>
        </svg>
      </div>
    </div>
  );
};
