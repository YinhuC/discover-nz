/* Third Party */
import React, { useEffect, useRef } from "react";

/* Components */
import { Band, BandTitle } from "./style";
import { dropWords, gsap, isReducedMotion } from "../../Utils/motion";

/* Functions */

/** Sky-blue band that introduces a homepage section with its heading. */
function SectionBand({ id, children }) {
  const bandRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isReducedMotion()) {
        gsap.fromTo(
          bandRef.current,
          { clipPath: "inset(0% 7% round 40px)" },
          {
            clipPath: "inset(0% 0% round 0px)",
            ease: "none",
            scrollTrigger: {
              trigger: bandRef.current,
              start: "top bottom",
              end: "top 25%",
              scrub: true,
            },
          }
        );
      }
      dropWords(titleRef.current, { trigger: bandRef.current, delay: 0.1 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Band ref={bandRef}>
      <BandTitle id={id} ref={titleRef}>
        {children}
      </BandTitle>
    </Band>
  );
}

export default SectionBand;
