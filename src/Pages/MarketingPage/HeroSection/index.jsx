/* Third Party */
import React, { useEffect, useRef } from "react";

/* Components */
import {
  Hero,
  BackgroundVideo,
  Scrim,
  Shade,
  HeroContent,
  HeroTitle,
  HeroLead,
  HeroName,
  HeroFooter,
  HeroSubtitle,
} from "./style";
import video from "../../../Videos/dark.mp4";
import { DownArrow } from "../../../Components/Icons/DownArrow";
import { dropChars, gsap, isReducedMotion, ScrollTrigger } from "../../../Utils/motion";

/* Functions */

const ENTRANCE_DELAY = 0.35;

function HeroSection() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = isReducedMotion();

      if (!reduced) {
        gsap.from(".hero-video", {
          scale: 1.25,
          duration: 2.2,
          delay: ENTRANCE_DELAY - 0.2,
          ease: "expo.out",
        });
      }
      dropChars(nameRef.current, { delay: ENTRANCE_DELAY + 0.25 });
      gsap.from(".hero-lead, .hero-footer", {
        y: reduced ? 0 : 24,
        opacity: 0,
        duration: 1,
        delay: ENTRANCE_DELAY + 0.9,
        stagger: 0.15,
        ease: "expo.out",
      });

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        snap: {
          snapTo: [0, 1],
          directional: true,
          delay: 0.08,
          duration: { min: 0.4, max: 0.9 },
          ease: "power3.inOut",
        },
      });

      if (!reduced) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          })
          .to(".hero-video", { yPercent: 12, ease: "none" }, 0)
          .to(".hero-shade", { opacity: 0.7, ease: "none" }, 0)
          .to(".hero-content", { yPercent: -18, opacity: 0, ease: "none" }, 0);
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <Hero ref={heroRef} aria-labelledby="hero-title">
      <BackgroundVideo
        className="hero-video"
        autoPlay
        playsInline
        muted
        loop
        aria-hidden="true"
      >
        <source src={video} type="video/mp4" />
      </BackgroundVideo>
      <Scrim />
      <Shade className="hero-shade" />
      <HeroContent className="hero-content">
        <HeroTitle id="hero-title">
          <HeroLead className="hero-lead">Discover</HeroLead>
          <HeroName ref={nameRef}>New Zealand</HeroName>
        </HeroTitle>
        <HeroFooter className="hero-footer">
          <HeroSubtitle>Begin Your Journey</HeroSubtitle>
          <DownArrow targetId="before-you-go" />
        </HeroFooter>
      </HeroContent>
    </Hero>
  );
}

export default HeroSection;
