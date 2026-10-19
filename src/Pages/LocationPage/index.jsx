/* Third Party */
import { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

/* Components */
import {
  MainContainer,
  ImageFrame,
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
import ArrowLink from "../../Components/ArrowLink";
import { useCursorHover } from "../../Components/Cursor/Context/CursorContext";
import { locationPath } from "./constants";
import {
  dropChars,
  gsap,
  isReducedMotion,
  revealImage,
  riseLines,
  wipeRows,
} from "../../Utils/motion";

/* Functions */

function LocationPage({ location, next, previous }) {
  const cursorProps = useCursorHover();
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = isReducedMotion();

      if (!reduced) {
        gsap.from(".location-panel", {
          xPercent: 100,
          duration: 1.2,
          ease: "expo.inOut",
        });
      }
      revealImage(".location-image-frame", ".location-image", {
        from: "top",
        delay: 0.15,
        trigger: null,
      });
      dropChars(".location-title", { delay: 0.75, stagger: 0.04 });
      gsap.from(".location-credit", {
        opacity: 0,
        y: reduced ? 0 : 16,
        duration: 0.9,
        delay: 1.3,
        ease: "expo.out",
      });

      riseLines(".location-intro");
      wipeRows(gsap.utils.toArray(".location-highlight"), {
        trigger: ".location-highlights",
      });

      if (!reduced) {
        gsap.fromTo(
          ".next-image",
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: ".next-link",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
      dropChars(".next-name-text", { trigger: ".next-link", stagger: 0.035 });
    }, pageRef);
    return () => ctx.revert();
  }, [location.slug]);

  return (
    <article ref={pageRef} aria-labelledby="location-title">
      <title>{`${location.name} · Discover New Zealand`}</title>
      <MainContainer>
        <ImageFrame className="location-image-frame">
          <ImageContainer
            className="location-image"
            role="img"
            aria-label={`Landscape in ${location.name}`}
            style={{ backgroundImage: `url(${location.image})` }}
          />
        </ImageFrame>
        <TopContainer
          className="location-panel"
          style={{ backgroundColor: location.colour }}
        >
          <LocationText id="location-title" className="location-title">
            {location.name}
          </LocationText>
          <HeroCredit className="location-credit">
            Photo: {location.credit}
          </HeroCredit>
        </TopContainer>
      </MainContainer>

      <Details>
        <Intro className="location-intro">{location.intro}</Intro>
        <div>
          <HighlightsTitle>Highlights</HighlightsTitle>
          <HighlightList className="location-highlights">
            {location.highlights.map((highlight) => (
              <Highlight key={highlight.title} className="location-highlight">
                <HighlightTitle>{highlight.title}</HighlightTitle>
                <HighlightText>{highlight.text}</HighlightText>
              </Highlight>
            ))}
          </HighlightList>
        </div>
      </Details>

      <NextLink
        className="next-link"
        to={locationPath(next.slug)}
        style={{ backgroundColor: next.colour }}
        {...cursorProps}
      >
        <NextImage
          className="next-image"
          style={{ backgroundImage: `url(${next.image})` }}
        />
        <NextLabel>Next destination</NextLabel>
        <NextName>
          <span className="next-name-text">{next.name}</span>
          <FiArrowRight aria-hidden="true" />
        </NextName>
      </NextLink>

      <PageLinks aria-label="More destinations">
        <ArrowLink to={locationPath(previous.slug)}>
          Previous: {previous.name}
        </ArrowLink>
        <ArrowLink to="/#explore">All destinations</ArrowLink>
      </PageLinks>
    </article>
  );
}

export default LocationPage;
