/* Third Party */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/* Components */
import { TransitionContianer } from "./style";

/* Functions */

function Transition({ colour }) {
  const transitionRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(transitionRef.current, {
        duration: 3,
        x: "100vw",
        ease: "power4",
      });
    });
    return () => ctx.revert();
  });

  return (
    <div>
      <TransitionContianer
        style={{ backgroundColor: colour }}
        ref={transitionRef}
      ></TransitionContianer>
    </div>
  );
}

export default Transition;
