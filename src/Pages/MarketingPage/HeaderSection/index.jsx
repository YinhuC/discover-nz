/* Third Party */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/* Components */
import {
  Hero,
  BackgroundVideo,
  Scrim,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from "./style";
import video from "../../../Videos/dark.mp4";
import { DownArrow } from "../../../Components/Icons/DownArrow";

/* Functions */

function HeaderSection() {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        delay: 0.8,
        duration: 1,
        y: 20,
        opacity: 0,
        stagger: 0.12,
        ease: "power2",
      });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <Hero aria-labelledby="hero-title">
      <BackgroundVideo autoPlay playsInline muted loop aria-hidden="true">
        <source src={video} type="video/mp4" />
      </BackgroundVideo>
      <Scrim />
      <HeroContent ref={contentRef}>
        <div>
          <HeroTitle id="hero-title" className="hero-reveal">
            Discover <em>New Zealand</em>
          </HeroTitle>
          <HeroSubtitle className="hero-reveal">Begin Your Journey</HeroSubtitle>
        </div>
        <div className="hero-reveal">
          <DownArrow targetId="before-you-go" />
        </div>
      </HeroContent>
    </Hero>
  );
}

export default HeaderSection;
