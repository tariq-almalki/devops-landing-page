/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from "react";
import "./LocomotiveScroll.css";
import { useSmoothScroll } from "../Hooks/useSmoothScroll";
import { useTransition } from "../Hooks/useTransition";

export const LocomotiveScroll = ({ children }) => {
  useSmoothScroll();
  useTransition();
  return <div className='parent'>{children}</div>;
};
