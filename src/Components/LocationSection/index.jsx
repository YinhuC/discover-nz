/* Third Party */
import React, { useContext, useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { gsap } from "gsap";

/* Components */
import {
  MainContainer,
  ImageContainer,
  TopContainer,
  LocationText,
  HeroCredit,
  Details,
  Intro,
  HighlightsTitle,
  HighlightList,
  Highlight,
  HighlightTitle,
  HighlightText,
  NextLink,
  NextImage,
  NextLabel,
  NextName,
  PageLinks,
} from "./style";
import ArrowLink from "../ArrowLink";
import { CursorContext } from "../Cursor/Context/CursorContext";

/* Functions */

function LocationPage({ location, next, previous }) {
  const { setType } = useContext(CursorContext);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".location-panel", {
        duration: 1.1,
        xPercent: -100,
        ease: "power3.out",
      });
      gsap.from(".location-image", {
        delay: 0.2,
        duration: 1.1,
        y: -40,
        opacity: 0,
        ease: "power3.out",
      });
      gsap.from(".location-text", {
        delay: 0.6,
        duration: 0.9,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "power2",
      });
    }, heroRef);
    return () => ctx.revert();
  }, [location.slug]);

  return (
    <article aria-labelledby="location-title">
      <title>{`${location.name} · Promote Tourism NZ`}</title>
      <MainContainer ref={heroRef} className="flex-column flex-md-row">
        <ImageContainer
          className="location-image"
          role="img"
          aria-label={`Landscape in ${location.name}`}
          style={{ backgroundImage: `url(${location.image})` }}
        />
        <TopContainer
          className="location-panel"
          style={{ backgroundColor: location.colour }}
        >
          <LocationText id="location-title" className="location-text">
            {location.name}
          </LocationText>
          <HeroCredit className="location-text">
            Photo: {location.credit}
          </HeroCredit>
        </TopContainer>
      </MainContainer>

      <Details>
        <Intro>{location.intro}</Intro>
        <div>
          <HighlightsTitle>Highlights</HighlightsTitle>
          <HighlightList>
            {location.highlights.map((highlight) => (
              <Highlight key={highlight.title}>
                <HighlightTitle>{highlight.title}</HighlightTitle>
                <HighlightText>{highlight.text}</HighlightText>
              </Highlight>
            ))}
          </HighlightList>
        </div>
      </Details>

      <NextLink
        to={`/location/${next.slug}`}
        style={{ backgroundColor: next.colour }}
        onMouseEnter={() => setType("expand")}
        onMouseLeave={() => setType("default")}
      >
        <NextImage style={{ backgroundImage: `url(${next.image})` }} />
        <NextLabel>Next destination</NextLabel>
        <NextName>
          {next.name}
          <FiArrowRight aria-hidden="true" />
        </NextName>
      </NextLink>

      <PageLinks aria-label="More destinations">
        <ArrowLink to={`/location/${previous.slug}`}>
          Previous: {previous.name}
        </ArrowLink>
        <ArrowLink to="/#explore">All destinations</ArrowLink>
      </PageLinks>
    </article>
  );
}

export default LocationPage;
