/* Third Party */
import React, { useEffect, useRef } from "react";

/* Components */
import "./style.scss";

/* Functions */

// Cursor taken from https://github.com/nicubarbaros/custom-mouse-change

const isTouch = window.matchMedia("(pointer: coarse)").matches;
const EASING = 0.1;

/** Pointer-following cursor whose ring eases after the dot; animates only while the ring is catching up. */
export const Cursor = ({ type }) => {
  const wrapperRef = useRef(null);
  const secondaryCursor = useRef(null);
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    hasMoved: false,
    frame: null,
  });

  useEffect(() => {
    if (isTouch) {
      return undefined;
    }
    const position = positionRef.current;

    const followMouse = () => {
      const distanceX = position.mouseX - position.destinationX;
      const distanceY = position.mouseY - position.destinationY;
      if (Math.abs(distanceX) + Math.abs(distanceY) < 1) {
        position.destinationX = position.mouseX;
        position.destinationY = position.mouseY;
        position.frame = null;
      } else {
        position.destinationX += distanceX * EASING;
        position.destinationY += distanceY * EASING;
        position.frame = requestAnimationFrame(followMouse);
      }
      if (secondaryCursor.current !== null) {
        secondaryCursor.current.style.transform = `translate3d(${position.destinationX}px, ${position.destinationY}px, 0)`;
      }
    };

    const mouseEvent = (event) => {
      const { clientX, clientY } = event;
      if (secondaryCursor.current === null || mainCursor.current === null) {
        return;
      }
      position.mouseX = clientX - secondaryCursor.current.clientWidth / 2;
      position.mouseY = clientY - secondaryCursor.current.clientHeight / 2;
      wrapperRef.current.classList.add("is-active");
      if (!position.hasMoved) {
        position.hasMoved = true;
        position.destinationX = position.mouseX;
        position.destinationY = position.mouseY;
      }
      mainCursor.current.style.transform = `translate3d(${
        clientX - mainCursor.current.clientWidth / 2
      }px, ${clientY - mainCursor.current.clientHeight / 2}px, 0)`;
      if (position.frame === null) {
        position.frame = requestAnimationFrame(followMouse);
      }
    };

    document.addEventListener("mousemove", mouseEvent);
    return () => {
      document.removeEventListener("mousemove", mouseEvent);
      cancelAnimationFrame(position.frame);
    };
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
