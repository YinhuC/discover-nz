/* Third Party */
import React, { useContext, useEffect, useRef } from "react";

/* Components */
import { CursorContext } from "./Context/CursorContext";
import "./style.scss";

/* Functions */

// Cursor taken from https://github.com/nicubarbaros/custom-mouse-change

const isTouch = window.matchMedia("(pointer: coarse)").matches;

export const Cursor = () => {
  const { type } = useContext(CursorContext);

  const wrapperRef = useRef(null);
  const secondaryCursor = useRef(null);
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const mouseEvent = (event) => {
      const { clientX, clientY } = event;
      if (secondaryCursor.current === null || mainCursor.current === null) {
        return;
      }
      wrapperRef.current?.classList.add("is-active");
      positionRef.current.mouseX =
        clientX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        clientY - secondaryCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${
        clientX - mainCursor.current.clientWidth / 2
      }px, ${clientY - mainCursor.current.clientHeight / 2}px, 0)`;
    };

    document.addEventListener("mousemove", mouseEvent);
    return () => document.removeEventListener("mousemove", mouseEvent);
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (secondaryCursor.current !== null) {
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };
    followMouse();

    return () => cancelAnimationFrame(positionRef.current.key);
  }, []);

  if (isTouch) {
    return null;
  }

  return (
    <div
      ref={wrapperRef}
      className={`cursor-wrapper ${type}`}
      aria-hidden="true"
    >
      <div className="main-cursor" ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"></div>
      </div>
    </div>
  );
};
