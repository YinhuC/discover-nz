/* Third Party */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/* Components */
import {
  MainContainer,
  ImageContainer,
  TopContainer,
  LocationText,
} from "./style";

/* Functions */

function LocationPage({ image, locationName, colour }) {
  const locationContainerRef = useRef(null);
  const locationTextRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(locationTextRef.current, {
        delay: 1.5,
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power2",
        stagger: 1,
      });

      gsap.from(imageRef.current, {
        delay: 0.5,
        duration: 1.5,
        y: "-100vh",
        opacity: 0,
        ease: "power2",
      });

      gsap.from(locationContainerRef.current, {
        duration: 1.5,
        x: "-200vh",
        ease: "power2",
      });
    });
    return () => ctx.revert();
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainContainer className="flex-column flex-md-row">
      <ImageContainer
        ref={imageRef}
        style={{ backgroundImage: `url(${image})` }}
      ></ImageContainer>
      <TopContainer
        ref={locationContainerRef}
        style={{ backgroundColor: colour }}
      >
        <LocationText ref={locationTextRef}>{locationName}</LocationText>
      </TopContainer>
    </MainContainer>
  );
}

export default LocationPage;
