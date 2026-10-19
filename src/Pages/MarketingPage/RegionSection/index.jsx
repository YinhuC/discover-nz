/* Third Party */
import React, { useContext, useEffect, useRef, useState } from "react";

/* Components */
import SectionBand from "../../../Components/SectionBand";
import ArrowLink from "../../../Components/ArrowLink";
import { CursorContext } from "../../../Components/Cursor/Context/CursorContext";
import { islands, licenseUrls } from "./constants";
import { dropWords, gsap, revealImage, ScrollTrigger } from "../../../Utils/motion";
import {
  RegionsContainer,
  Island,
  IslandHeader,
  IslandTitle,
  IslandCount,
  RegionGrid,
  Region,
  Figure,
  RegionImage,
  ImageCaption,
  PhotoCredit,
  RegionTitle,
  RegionText,
  ToggleButton,
} from "./style";

/* Functions */

const PREVIEW_COUNT = 6;

function Credit({ credit }) {
  const licenseUrl = licenseUrls[credit.license];
  if (licenseUrl === undefined) {
    throw new Error(`No licence URL for "${credit.license}"; add it to licenseUrls.`);
  }

  return (
    <PhotoCredit>
      Photo:{" "}
      <a href={credit.source} target="_blank" rel="noopener noreferrer">
        {credit.artist}
      </a>
      {" · "}
      {licenseUrl ? (
        <a href={licenseUrl} target="_blank" rel="noopener noreferrer">
          {credit.license}
        </a>
      ) : (
        credit.license
      )}
    </PhotoCredit>
  );
}

function RegionItem({ region }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealImage(".region-figure", ".region-image");
      gsap.from(".region-copy", {
        y: 28,
        opacity: 0,
        duration: 1,
        delay: 0.35,
        stagger: 0.06,
        ease: "expo.out",
        scrollTrigger: { trigger: itemRef.current, start: "top 90%", toggleActions: "play none none none" },
      });
    }, itemRef);
    return () => ctx.revert();
  }, []);

  return (
    <Region ref={itemRef}>
      <Figure className="region-figure">
        <RegionImage
          className="region-image"
          src={region.image}
          alt={`${region.caption}, ${region.name}`}
          loading="lazy"
          decoding="async"
        />
        <ImageCaption aria-hidden="true">{region.caption}</ImageCaption>
      </Figure>
      <Credit credit={region.credit} />
      <RegionTitle className="region-copy">{region.name}</RegionTitle>
      <RegionText className="region-copy">{region.info}</RegionText>
      <ArrowLink
        className="region-copy"
        href={`https://www.newzealand.com/nz/${region.link}/`}
      >
        Explore {region.name}
      </ArrowLink>
    </Region>
  );
}

function IslandRegions({ island }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setType } = useContext(CursorContext);
  const headerRef = useRef(null);
  const gridId = `regions-${island.name.toLowerCase().replace(/\s+/g, "-")}`;
  const visible = isExpanded
    ? island.regions
    : island.regions.slice(0, PREVIEW_COUNT);

  useEffect(() => {
    const ctx = gsap.context(() => {
      dropWords(".island-title", { trigger: headerRef.current });
      gsap.from(headerRef.current, {
        "--rule-scale": 0,
        duration: 1.4,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [isExpanded]);

  return (
    <Island aria-labelledby={`${gridId}-title`}>
      <IslandHeader ref={headerRef}>
        <IslandTitle id={`${gridId}-title`} className="island-title">
          {island.name}
        </IslandTitle>
        <IslandCount>{island.regions.length} regions</IslandCount>
      </IslandHeader>
      <RegionGrid id={gridId}>
        {visible.map((region) => (
          <RegionItem key={region.link} region={region} />
        ))}
      </RegionGrid>
      {island.regions.length > PREVIEW_COUNT && (
        <ToggleButton
          type="button"
          aria-expanded={isExpanded}
          aria-controls={gridId}
          onClick={() => setIsExpanded(!isExpanded)}
          onMouseEnter={() => setType("expand")}
          onMouseLeave={() => setType("default")}
        >
          {isExpanded
            ? `Show fewer ${island.name} regions`
            : `Show all ${island.regions.length} ${island.name} regions`}
        </ToggleButton>
      )}
    </Island>
  );
}

function RegionSection() {
  return (
    <section id="regions" aria-labelledby="regions-title">
      <SectionBand id="regions-title">
        Plan Your <em>Journey</em>
      </SectionBand>
      <RegionsContainer>
        {islands.map((island) => (
          <IslandRegions key={island.name} island={island} />
        ))}
      </RegionsContainer>
    </section>
  );
}

export default RegionSection;
