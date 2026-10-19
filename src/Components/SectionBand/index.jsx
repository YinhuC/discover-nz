/* Third Party */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Components */
import { Band, BandTitle } from "./style";

/* Functions */

gsap.registerPlugin(ScrollTrigger);

/** Sky-blue band that introduces a homepage section with its heading. */
function SectionBand({ id, children }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        delay: 0.2,
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power2",
        scrollTrigger: { trigger: titleRef.current, start: "top 90%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Band>
      <BandTitle id={id} ref={titleRef}>
        {children}
      </BandTitle>
    </Band>
  );
}

export default SectionBand;
