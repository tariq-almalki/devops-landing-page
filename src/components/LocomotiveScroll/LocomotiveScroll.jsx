/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import "./LocomotiveScroll.css";
import { useSmoothScroll } from "../Hooks/useSmoothScroll";
import { useTransition } from "../Hooks/useTransition";

export const LocomotiveScroll = ({ children }) => {
  let comp = useRef();
  useSmoothScroll(comp);
  useTransition();
  return (
    <div ref={comp} className='parent'>
      {children}
    </div>
  );
};
